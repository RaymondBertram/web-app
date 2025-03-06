import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation/top-bar/top-bar.component";
import {
  Home,
  Location,
  Slider,
  Services,
  ProcessDiagramScreen,
  Solution,
  Advantages,
  Team,
  Form,
  Footer,
} from "./screens";

import "./App.css";
import { nav } from "framer-motion/client";

function App() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const nav = document.getElementById("navigation");
    if (nav) {
      setNavHeight(nav.offsetHeight);
    }
  }, []);

  console.log("test", navHeight);
  return (
    <>
      <Navigation />
      <div className="relative" style={{ marginTop: `${navHeight}px` }}>
        <Home />
        <Location />
        <Slider />
        <Services />
        <ProcessDiagramScreen />
        <Solution />
        <Advantages />
        <Team />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default App;
