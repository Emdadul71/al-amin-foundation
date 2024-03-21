import React from "react";
import EventHero from "../@components/event-hero";
import EventSection from "../@components/event-section";
import ReadyToBegin from "../../@components/ready-to-begin";
import CallToAction from "../../@components/call-to-action";
import Register from "../../@components/register";

const ProgramsList = () => {
  return (
    <>
      <EventHero />
      <ReadyToBegin />
      <EventSection title="Successful Events" />
      {/* <CallToAction /> */}
      <Register />
    </>
  );
};

export default ProgramsList;
