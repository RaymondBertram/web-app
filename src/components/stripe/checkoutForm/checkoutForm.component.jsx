import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/paymentSuccess`,
      },
    });

    if (error) {
      setMessage("❌ Zahlung fehlgeschlagen: " + error.message);

      return;
    }

    setIsProcessing(false);
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4"
    >
      <PaymentElement />
      <button
        type="submit"
        className="mt-4 bg-black text-white py-2 px-6 rounded-full"
        id="submit"
      >
        {isProcessing ? "Processing..." : "Jetzt bezahlen"}
      </button>
      {message && <div className="text-red-600">{message}</div>}
    </form>
  );
};
