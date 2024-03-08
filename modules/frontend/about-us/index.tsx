import React from "react";
import OurMission from "./@components/our-mission";
import OurStory from "./@components/our-story";
import CoreValues from "./@components/core-values";
import Testimonials from "../@components/testimonials";
import BlogSection from "../@components/blog_section";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <section className="pt-8 lg:pt-[80px] bg-grey">
        <div className="container">
          <div className="max-w-[870px] mx-auto w-full">
            <div className="flex flex-col justify-center ">
              <h1 className="lg:text-headerLg text-center text-secondary mb-2">
                About Us
              </h1>
              <ul className="flex justify-center items-center gap-3 mb-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <div className="w-[6px] h-[6px] rounded-full bg-primary mt-1"></div>
                </li>
                <li>
                  <p className="mb-0">Contact Us</p>
                </li>
              </ul>
              <p className="text-center text-lg">
                We are a charitable organization guided by Islamic principles,
                aiming to address social issues and support communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <OurStory />
      {/* <OurMission /> */}
      <CoreValues />
      <Testimonials />
      <BlogSection />
    </>
  );
};

export default AboutUs;
