import React, { useRef, useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import { AddressAutofill, useConfirmAddress } from "@mapbox/search-js-react";

import { useGlowContext } from "../../context/glow/glowContext";
import { UnderlineSVG } from "../../components";
import { CheckoutForm } from "../../components/stripe/checkoutForm/checkoutForm.component";

const ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_API_TOKEN;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const PAY_PAL_AMOUNT = import.meta.env.VITE_AMOUNT_PAY_PAL;
const PAY_PAL_CURRENCY = import.meta.env.VITE_CURRENCY_PAY_PAL;

export const Location = () => {
  const { glow } = useGlowContext();
  const { formRef } = useConfirmAddress({ accessToken: ACCESS_TOKEN });

  const [paymentSuccessMessage, setPaymentSuccessMessage] = useState("");

  const [addressData, setAddressData] = useState({
    addressLine1: "",
    city: "",
    country: "",
  });
  const [clientSecret, setClientSecret] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const { data } = await axios.post(
          `${BACKEND_URL}/api/create-payment-intent`,
          {
            amount: PAY_PAL_AMOUNT,
            addressData,
          }
        );

        setPaymentSuccessMessage(""); // Clear old messages
        setClientSecret(data.clientSecret);
        navigate("/payment", {
          state: { clientSecret: data.clientSecret, addressData },
        });
      } catch (err) {
        console.error("Fehler beim Erstellen des Payment Intents", err);
      }
    },
    [addressData]
  );

  return (
    <section
      id="location"
      className="flex flex-col h-[50vh] justify-center px-4 lg:pt-20 py-5 md:py-10 md:h-[auto] md:px-18"
    >
      <div className="flex flex-col md:flex-row justify-center items-center mb-8 py-4">
        <h2 className="text-black text-center font-medium leading-15">
          Fordern Sie eine{" "}
          <span className="relative inline-block header-2">
            Standortanalyse
            <UnderlineSVG duration={2} color="#b9278b" />
          </span>{" "}
          für jeden Ort Ihrer Wahl an
        </h2>
      </div>

      <form
        className="md:flex md:items-center md:justify-center w-full px-4 md:px-0"
        ref={formRef}
        onSubmit={handleFormSubmit}
      >
        <AddressAutofill accessToken={ACCESS_TOKEN}>
          <div className="relative min-w-[50vw] max-w-[600px]">
            <input
              type="text"
              className={`w-full p-[12px_50px_12px_20px] text-[16px] border border-gray-300 rounded-full outline-none transition duration-300 ease-in-out focus:border-gray-500 shadow-md ${
                glow
                  ? "border-red-700 shadow-[0_0_10px_2px_rgba(130,71,255,0.5)]"
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

      {clientSecret && (
        <div className="flex flex-col items-center mt-8">
          <p className="mb-2 text-sm text-gray-600">
            🔥{" "}
            <strong>
              {PAY_PAL_AMOUNT} {PAY_PAL_CURRENCY}
            </strong>{" "}
            – Sonderpreis für Ihre Standortanalyse!
          </p>
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
