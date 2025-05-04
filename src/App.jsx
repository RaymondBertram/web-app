import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { GlowProvider } from "./context/glow/glowContext";
import { Footer } from "./screens";
import { HomePage } from "./pages/home.page";
import { DataProtectionPage } from "./pages/dataprotection.page";
import { PaymentRedirect } from "./pages/payment-redirect.page";
import { Impress } from "./pages/impress.page";
import { AGB } from "./pages/agb.page";
import { PaymentPage } from "./pages/payment.page";

import "./App.css";

function App() {
  const [navHeight, setNavHeight] = useState(0);
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

  useEffect(() => {
    const nav = document.getElementById("navigation");
    if (nav) {
      setNavHeight(nav.offsetHeight);
    }
  }, []);

  return (
    <Elements stripe={stripePromise}>
      <Router>
        <GlowProvider>
          <div className="xl:container xl:mx-auto flex flex-col min-h-screen">
            <div
              className="relative flex-grow"
              style={{ marginTop: `${navHeight}px` }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/agb" element={<AGB />} />
                <Route path="/impressum" element={<Impress />} />
                <Route path="/datenschutz" element={<DataProtectionPage />} />
                <Route path="/paymentSuccess" element={<PaymentRedirect />} />
                <Route path="/payment" element={<PaymentPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </GlowProvider>
      </Router>
    </Elements>
  );
}

export default App;
