import React, { useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { AddressAutofill, useConfirmAddress } from "@mapbox/search-js-react";

const ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_API_TOKEN;

export const Location = () => {
  const { formRef } = useConfirmAddress({
    accessToken: ACCESS_TOKEN,
  });

  const handleFormSubmit = useCallback(async (e) => {
    e.preventDefault();
  }, []);

  return (
    <section
      id="location"
      className="flex flex-col justify-center px-2 py-2 h-[50vh] mb-20 md:px-18 md:my-10"
    >
      <div className="flex flex-col md:flex-row justify-center items-center my-8 py-4">
        <h2 className="mr-2 text-black">Entdecken Sie</h2>
        <h2 className="relative text-black">
          Ihren Standort
          <span>
            <svg
              className="absolute left-0 bottom-[-10px] w-45 w-full h-[16px]"
              viewBox="0 0 100 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M5 4C20 6 40 7 60 5C80 3 95 2 100 2"
                stroke="#8247FF"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>

              <path
                d="M0 14C15 12 35 13 55 12C75 10 90 9 100 9"
                stroke="#8247FF"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>
        </h2>
      </div>

      <form
        className="flex items-center justify-center
         w-full"
        ref={formRef}
        onSubmit={handleFormSubmit}
        x
      >
        <AddressAutofill accessToken={ACCESS_TOKEN}>
          <div className="relative min-w-[50vw] max-w-[600px]">
            <input
              type="text"
              className="w-full p-[12px_50px_12px_20px] text-[16px] border border-gray-300 rounded-full outline-none transition duration-300 ease-in-out focus:border-gray-500 shadow-md"
              autoComplete="address-line1"
              name="address-line1"
              placeholder="Adresse eingeben..."
            />
            <button className="absolute right-[10px] top-1/2 -translate-y-1/2 bg-transparent border-none text-[#8247ff] cursor-pointer p-[5px] flex items-center justify-center">
              <FaSearch size={16} />
            </button>
          </div>
        </AddressAutofill>
      </form>
    </section>
  );
};
