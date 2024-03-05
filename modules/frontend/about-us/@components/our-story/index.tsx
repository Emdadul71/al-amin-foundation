import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <section className="lg:pt-[80px] relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_810px] gap-[30px]">
          <h2 className="mt-8 heading-one text-secondary">
            <span className="text-2xl block">About Us</span>
            <span className="block">Our Story</span>
          </h2>
          <div className="mb-5 ">
            <p>
              Our charity organization, born from a profound desire to alleviate
              suffering and ignite hope, has evolved into a beacon of compassion
              in our community. From our modest beginnings, we've steadfastly
              pursued our mission, driven by an unwavering commitment to serve
              those in need. Through the dedication of volunteers, the
              generosity of donors, and the resilience of those we've helped,
              we've woven a tapestry of hope that stretches across countless
              lives. Each initiative, whether it's providing essential resources
              to struggling families or empowering individuals through education
              and skills training, reflects our belief in the inherent dignity
              and potential of every person we touch.
            </p>

            <p>
              As we chart our course into the future, we do so with a deep sense
              of purpose and gratitude. Despite the challenges that lie ahead,
              we remain resolute in our determination to be agents of positive
              change. Our story is far from over; it's a living testament to the
              transformative power of compassion and collective action. With
              every step forward, we renew our commitment to spreading rays of
              hope, illuminating the path towards a brighter, more equitable
              world for all.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-[279px_477px_366px] gap-6 items-center ">
          <div className="bg-[url('/misc/mission-bg.png')] bg-no-repeat absolute top-[300px] lg:left-[200px] w-[600px] h-[600px] -z-[100] hidden lg:block"></div>
          <div className="w-full h-[420px]">
            <Image
              src="/misc/our-story.webp"
              width={279}
              height={420}
              alt="story image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[628px]">
            <Image
              src="/misc/our-story-center.webp"
              width={477}
              height={628}
              alt="story image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <Image
              src="/misc/our-story-right-top.webp"
              width={205}
              height={125}
              alt="story image"
              className="w-full h-full object-cover"
            />
            <Image
              src="/misc/our-story-right.webp"
              width={366}
              height={296}
              alt="story image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
