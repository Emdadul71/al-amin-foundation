import React from "react";
import EventHero from "../@components/event-hero";
import EventSection from "../@components/event-section";
import ReadyToBegin from "../../@components/ready-to-begin";

const ProgramsList = () => {
  return (
    <>
      <EventHero />
      <ReadyToBegin />
      <EventSection />
    </>
  );
};

export default ProgramsList;
