import React, { useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { AddressAutofill, useConfirmAddress } from "@mapbox/search-js-react";
import { useGlowContext } from "../../context/glow/glowContext";
import { UnderlineSVG } from "../../components";

const ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_API_TOKEN;

export const Location = () => {
  const { glow } = useGlowContext();
  const { formRef } = useConfirmAddress({
    accessToken: ACCESS_TOKEN,
  });

  const handleFormSubmit = useCallback(async (e) => {
    e.preventDefault();
  }, []);

  const handleOnClick = () => {
    console.log("handleClick");
  };

  return (
    <section
      id="location"
      className="flex flex-col justify-center px-4 py-2 h-[30vh] mb-20 md:px-18 md:mb-20"
    >
      <div className="flex flex-col md:flex-row justify-center items-center my-8 py-4">
        <h2 className="text-black font-medium">Entdecken Sie&nbsp;</h2>
        <h2 className="relative text-black font-medium inline-flex">
          Ihren Standort
          <span>
            <UnderlineSVG />
          </span>
        </h2>
      </div>

      <form
        className="md:flex md:items-center md:justify-center w-full px-4 md:px-0"
        ref={formRef}
        onSubmit={handleFormSubmit}
        x
      >
        <AddressAutofill accessToken={ACCESS_TOKEN}>
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
            />
            <button
              className="absolute right-[10px] top-1/2 -translate-y-1/2 bg-transparent border-none text-[#8247ff] cursor-pointer p-[5px] flex items-center justify-center"
              onClick={handleOnClick}
            >
              <FaSearch size={16} />
            </button>
          </div>
        </AddressAutofill>
      </form>
    </section>
  );
};
