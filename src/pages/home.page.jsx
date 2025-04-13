import React from "react";
import {
  Start,
  Slider,
  Location,
  Services,
  ProcessDiagramScreen,
  Solution,
  Advantages,
  Team,
  Form,
} from "../screens";
import { Navigation } from "../components";

export const HomePage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navigation />
        <Start />
        <Slider />
        <Location />
        <Services />
        <ProcessDiagramScreen />
      </div>
      <Solution />
      <div className="overflow-hidden">
        <Advantages />
        <Team />
        <Form />
      </div>
    </>
  );
};
