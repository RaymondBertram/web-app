import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { CheckoutForm } from "../components/stripe/checkoutForm/checkoutForm.component";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

export const PaymentPage = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const location = useLocation();
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(location.state?.clientSecret || null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/config`);
        const { publishableKey } = response.data;

        setStripePromise(publishableKey);
      } catch (error) {
        console.error("Error fetching Stripe config:", error);
      }
    };

    fetchConfig();
  }, []);

  return (
    <div>
      <h1>Payment</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={loadStripe(stripePromise)} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
      {!clientSecret && <p>Loading...</p>}
    </div>
  );
};
