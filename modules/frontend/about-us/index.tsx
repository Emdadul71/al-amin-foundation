import React from "react";
import OurMission from "./@components/our-mission";
import OurStory from "./@components/our-story";
import CoreValues from "./@components/core-values";

const AboutUs = () => {
  return (
    <>
      <section className="pt-8 lg:pt-[80px]">
        <div className="container">
          <div className="max-w-[870px] mx-auto w-full">
            <div className="flex flex-col justify-center ">
              <h1 className="lg:text-headerLg text-center text-secondary mb-2">
                About Us
              </h1>
              <p className="text-center text-lg">
                We are a charitable organization guided by Islamic principles,
                aiming to address social issues and support communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <OurStory />
      <OurMission />
      <CoreValues />
    </>
  );
};

export default AboutUs;