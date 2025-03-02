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
  return (
    <>
      <Navigation />
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
    </>
  );
}

export default App;
