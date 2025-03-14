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

function App() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const nav = document.getElementById("navigation");
    if (nav) {
      setNavHeight(nav.offsetHeight);
    }
  }, []);

  return (
    <div className="">
      <Navigation />
      <div className="relative" style={{ marginTop: `${navHeight}px` }}>
        <Home />
        <Slider />
        <Location />
        <Services />
        <ProcessDiagramScreen />
        <Solution />
        <Advantages />
        <Team />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
