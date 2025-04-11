import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlowProvider } from "./context/glow/glowContext";
import { Navigation } from "./components/navigation/top-bar/top-bar.component";
import { Footer } from "./screens";
import { HomePage } from "./pages/home.page";
import { DataProtectionPage } from "./pages/dataprotection.page";
import { Impress } from "./pages/impress.page";
import { AGB } from "./pages/agb.page";

import "./App.css";

function App() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const nav = document.getElementById("navigation");
    if (nav) {
      setNavHeight(nav.offsetHeight);
    }
  }, []);

  return (
    <Router>
      <GlowProvider>
        <div className="xl:container xl:mx-auto">
          <Navigation />
          <div className="relative" style={{ marginTop: `${navHeight}px` }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/agb" element={<AGB />} />
              <Route path="/impressum" element={<Impress />} />
              <Route path="/datenschutz" element={<DataProtectionPage />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </GlowProvider>
    </Router>
  );
}

export default App;
