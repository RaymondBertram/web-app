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
      <Navigation />
      <Start />
      <Slider />
      <Location />
      <Services />
      <ProcessDiagramScreen />
      <Solution />
      <Advantages />
      <Team />
      <Form />
    </>
  );
};
