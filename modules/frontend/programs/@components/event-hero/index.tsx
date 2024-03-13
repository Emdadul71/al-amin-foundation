import Link from "next/link";
import React from "react";

const EventHero = () => {
  return (
    <section className="pt-5 lg:py-[150px] bg-grey lg:mb-[80px] mb-5">
      <div className="container">
        <div>
          <h1 className="mb-3 text-secondary text-center">Food Bank</h1>
          <div className="flex justify-center gap-2 text-center ">
            <Link href="/" className=" hover:text-secondary">
              Home
            </Link>{" "}
            / <span>Programs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
