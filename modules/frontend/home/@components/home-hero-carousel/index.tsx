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
      <section className="py-[80px] bg-[url('/hero-image-blurr.jpg')] min-h-screen bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto pt-[150px]">
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
                      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] px-3 gap-10 items-center text-white">
                        <div className="order-2 lg:order-1">
                          <h1 className="mb-5 text-[50px] leading-[1.2] font-bold text-white">
                            {item?.headig}
                          </h1>
                          <p className="mb-6">{item?.excerpt}</p>
                          <Button variant="destructive">
                            <Link href="#">Donate</Link>
                          </Button>
                        </div>
                        <div className="order-1 lg:order-2">
                          <Image
                            src={item?.imageSrc}
                            width={1536}
                            height={880}
                            alt={item?.headig}
                            className="rounded-[40px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)]"
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
