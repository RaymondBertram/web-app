import React, { useRef, useState, useCallback, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import dropin from "braintree-web-drop-in";
import { AddressAutofill, useConfirmAddress } from "@mapbox/search-js-react";
import { useGlowContext } from "../../context/glow/glowContext";
import { UnderlineSVG } from "../../components";

const ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_API_TOKEN;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const PAY_PAL_AMOUNT = import.meta.env.VITE_AMOUNT_PAY_PAL;
const PAY_PAL_CURRENCY = import.meta.env.VITE_CURRENCY_PAY_PAL;
const PAY_PAL_FLOW = import.meta.env.VITE_FLOW_PAY_PAL;

export const Location = () => {
  const { glow } = useGlowContext();
  const { formRef } = useConfirmAddress({ accessToken: ACCESS_TOKEN });

  const dropinContainer = useRef(null);
  const dropinInstance = useRef(null);

  const [showDropIn, setShowDropIn] = useState(false);
  const [clientToken, setClientToken] = useState(null);
  const [paymentSuccessMessage, setPaymentSuccessMessage] = useState("");

  const [addressData, setAddressData] = useState({
    addressLine1: "",
    city: "",
    country: "",
  });

  const handleFormSubmit = useCallback(async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/getToken`);
      setClientToken(data.clientToken);
      setShowDropIn(true);
      setPaymentSuccessMessage(""); // Clear old messages
    } catch (err) {
      console.error("Fehler beim Laden des Client Tokens", err);
    }
  }, []);

  useEffect(() => {
    if (clientToken && dropinContainer.current) {
      dropin.create(
        {
          authorization: clientToken,
          container: dropinContainer.current,
          paypal: {
            flow: PAY_PAL_FLOW,
            amount: PAY_PAL_AMOUNT,
            currency: PAY_PAL_CURRENCY,
          },
        },
        (err, instance) => {
          if (err) return console.error("Drop-in Fehler:", err);
          dropinInstance.current = instance;
        }
      );
    }
  }, [clientToken, showDropIn]);

  const handlePayment = async () => {
    if (!dropinInstance.current) return;

    try {
      const { nonce, details } =
        await dropinInstance.current.requestPaymentMethod();
      const { addressLine1, city, country } = addressData;
      const address = {
        street: addressLine1,
        city: city,
        country: country,
      };

      const customer = {
        email: details.email,
        firstName:
          details.firstName ||
          (details.payerInfo && details.payerInfo.firstName),
        lastName:
          details.lastName || (details.payerInfo && details.payerInfo.lastName),
      };

      const { data } = await axios.post(`${BACKEND_URL}/api/checkout`, {
        paymentMethodNonce: nonce,
        amount: PAY_PAL_AMOUNT,
        address: address,
        customer: customer,
      });

      if (data.success) {
        setShowDropIn(false);
        setPaymentSuccessMessage("✅ Zahlung erfolgreich! Vielen Dank.");
      } else {
        setPaymentSuccessMessage(
          "❌ Zahlung fehlgeschlagen. Bitte erneut versuchen."
        );
      }
    } catch (err) {
      console.error("Zahlungsfehler:", err);
      setPaymentSuccessMessage(
        "❌ Ein Fehler ist aufgetreten. Bitte erneut versuchen."
      );
    }
  };

  const handleAddressRetrieve = (result) => {
    console.log("Ausgewählte Adresse:", result);
  };

  return (
    <section
      id="location"
      className="flex flex-col justify-center px-4 pt-10 lg:pt-20 pb-10 h-[auto] mb-25 md:px-18"
    >
      <div className="flex flex-col md:flex-row justify-center items-center mb-8 py-4">
        <h2 className="text-black text-center font-medium leading-15">
          Fordern Sie eine{" "}
          <span className="relative inline-block header-2">
            Standortanalyse
            <UnderlineSVG duration={2} />
          </span>{" "}
          für jeden Ort Ihrer Wahl an
        </h2>
      </div>

      <form
        className="md:flex md:items-center md:justify-center w-full px-4 md:px-0"
        ref={formRef}
        onSubmit={handleFormSubmit}
      >
        <AddressAutofill
          accessToken={ACCESS_TOKEN}
          onRetrieve={handleAddressRetrieve}
        >
          <div className="relative min-w-[50vw] max-w-[600px]">
            <input
              type="text"
              className={`w-full p-[12px_50px_12px_20px] text-[16px] border border-gray-300 rounded-full outline-none transition duration-300 ease-in-out focus:border-gray-500 shadow-md ${
                glow
                  ? "border-purple-500 shadow-[0_0_10px_2px_rgba(130,71,255,0.5)]"
                  : ""
              }`}
              autoComplete="address-line1"
              name="address-line1"
              placeholder="Adresse eingeben..."
              value={addressData.addressLine1}
              onChange={(e) =>
                setAddressData({ ...addressData, addressLine1: e.target.value })
              }
            />

            <input
              type="text"
              name="city"
              autoComplete="address-level2"
              placeholder="Stadt"
              value={addressData.city}
              onChange={(e) =>
                setAddressData({ ...addressData, city: e.target.value })
              }
              className="w-full p-4 border rounded sr-only" // sr-only blendet visuell aus, lässt das Feld aber aktiv
            />

            <input
              type="text"
              name="country"
              autoComplete="country"
              placeholder="Land"
              value={addressData.country}
              onChange={(e) =>
                setAddressData({ ...addressData, country: e.target.value })
              }
              className="w-full p-4 border rounded sr-only" // sr-only blendet visuell aus, lässt das Feld aber aktiv
            />
            <button
              type="submit"
              className="absolute right-[10px] top-1/2 -translate-y-1/2 bg-transparent border-none text-[#8247ff] cursor-pointer p-[5px] flex items-center justify-center"
            >
              <FaSearch size={16} />
            </button>
          </div>
        </AddressAutofill>
      </form>

      {showDropIn && (
        <div className="flex flex-col items-center mt-8">
          <div ref={dropinContainer} className="w-full max-w-[600px]"></div>
          <button
            onClick={handlePayment}
            className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-full"
          >
            Jetzt bezahlen
          </button>
        </div>
      )}

      {paymentSuccessMessage && (
        <div className="mt-4 text-center font-semibold text-green-700">
          {paymentSuccessMessage}
        </div>
      )}
    </section>
  );
};
