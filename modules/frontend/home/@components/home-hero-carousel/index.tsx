import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    headig: "This Ramadan Nourish Lives, Foster Hope",
    imageSrc: "/hero-carosel/Noor-Feeding-Center-or-Food-Bank-1-1-1536x880.jpg",
    excerpt:
      "Join us in our mission to uplift families this Ramadan. Through your support, we can provide essential resources and guidance, ensuring every family receives the care and opportunity to thrive.",
  },
  {
    id: 2,
    headig: "Support Our Causes to Save Lives",
    imageSrc: "/hero-carosel/2024-Main-Image-768x512.jpg",
    excerpt:
      "For some, children are left to fend for themselves in order to find food and shelter out of necessity.",
  },
  {
    id: 3,
    headig: "Lay the foundation to self-sustainability",
    imageSrc: "/hero-carosel/BAY08159-768x512.jpg",
    excerpt:
      "Help those living in poverty feel human again by supporting them with aid, shelter, education and mentorship.",
  },
  {
    id: 4,
    headig: "Connect Your Generosity With Their Survival",
    imageSrc: "/hero-carosel/IMG_0787-768x512.jpg",
    excerpt:
      "Help those living in poverty feel human again by supporting them with aid, shelter, education and mentorship",
  },
];

const HomeHeroCarousel = () => {
  return (
    <>
      <section className="py-[80px] bg-[url('/hero-image-blurr.jpg')] min-h-screen bg-no-repeat bg-center bg-cover mb-5 lg:mb-[80px]">
        <div className="container mx-auto pt-[50px] lg:pt-[170px]">
          <div>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3500,
                }),
              ]}
            >
              <CarouselContent>
                {data?.map((item) => {
                  return (
                    <CarouselItem key={item?.id}>
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr]  gap-5 lg:gap-5 items-center text-white">
                        <div className="order-2 md:order-1 px-3">
                          <h1 className="mb-5 heading-one  font-bold text-white text-center md:text-start">
                            {item?.headig}
                          </h1>
                          <p className="mb-6 text-center md:text-start">
                            {item?.excerpt}
                          </p>
                          <div className="flex justify-center lg:justify-start w-full">
                            <Button
                              variant="destructive"
                              className="bg-secondary"
                            >
                              <Link href="#" className="hover:text-white">
                                Donate
                              </Link>
                            </Button>
                          </div>
                        </div>
                        <div className="order-1 md:order-2 !rounded-[20px] !lg:rounded-[40px]">
                          <Image
                            src={item?.imageSrc}
                            width={1536}
                            height={880}
                            alt={item?.headig}
                            className="rounded-[16px] lg:rounded-[40px] md:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)]"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeroCarousel;
