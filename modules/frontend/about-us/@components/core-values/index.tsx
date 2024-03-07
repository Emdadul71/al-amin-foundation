import Image from "next/image";
import React from "react";

const CoreValues = () => {
  return (
    <section className="relative">
      <div className="container">
        <div className="grid  md:grid-cols-[auto_1fr] gap-4 lg:gap-0">
          <div className="rounded-tr-[50px] rounded-bl-[50px] shadow-[0_0px_5px_0px_rgba(0,0,0,0.2)] lg:mr-10">
            <Image
              src="/misc/vision-1.jpg"
              width={410}
              height={310}
              alt="Our Mission"
              className="rounded-tr-[50px] rounded-bl-[50px]"
            />
          </div>
          <div className="my-4 lg:mt-0">
            <p className="text-secondary font-semibold mb-2">
              MISSION & VISION.
            </p>
            <h2>We Help Nonprofits Become More Effective</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 lg:gap-10  items-center lg:ml-[150px] lg:-mt-[80px]">
          <div className="rounded-tl-[50px] rounded-br-[50px] shadow-[0_0px_5px_0px_rgba(0,0,0,0.2)] lg:mr-10">
            <Image
              src="/misc/vision-2.jpg"
              width={520}
              height={360}
              alt="Our Mission"
              className="rounded-tl-[50px] rounded-br-[50px]"
            />
          </div>
          <div>
            <h5 className="mb-2">Mission</h5>
            <p>
              Our mission is to ensure no great cause goes unfunded. We are
              enormously proud to have helped people in 164 countries raise over
              $4.5 billion for good causes since we were founded in 2000.
            </p>
            <h5 className="mb-2">Vission</h5>
            <p>
              Our mission is to ensure no great cause goes unfunded. We are
              enormously proud to have helped people in 164 countries raise over
              $4.5 billion for good causes since we were founded in 2000.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('/misc/mission-bg.png')] bg-no-repeat absolute -top-[100px] lg:left-[150px] w-[600px] h-[600px] -z-[100] hidden lg:block"></div>
    </section>
  );
};

export default CoreValues;
