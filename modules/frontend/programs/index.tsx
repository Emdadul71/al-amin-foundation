import React from "react";
import EventHero from "./@components/event-hero";
import EventSection from "./@components/event-section";
import Image from "next/image";
import Link from "next/link";

const programsData = [
  { ImgSrc: "/misc/foodbank.jpeg", title: "Food Bank", slug: "#" },
  {
    ImgSrc: "/misc/orphans.jpg",
    title: "Providing for Orphans in Need ",
    slug: "",
  },
  {
    ImgSrc: "/misc/maternity.jpg",
    title: "Maternity Assistance Project",
    slug: "",
  },
  {
    ImgSrc: "/misc/homeless.jpg",
    title: "Homeless Assistance Project",
    slug: "",
  },
  {
    ImgSrc: "/misc/teaching-quran.jpg",
    title: "Teaching Quran",
    slug: "",
  },
];
const ProgramsLanding = () => {
  return (
    <>
      <section className="pt-5 lg:py-[150px] bg-grey mb-[80px]">
        <div className="container">
          <div>
            <h1 className="mb-3 text-secondary text-center">Our Programs</h1>
            <div className="flex justify-center gap-2 text-center ">
              <Link href="/" className=" hover:text-secondary">
                Home
              </Link>{" "}
              / <span>Programs</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="max-w-[730px] mx-auto">
            <h2 className="text-center mb-8">
              What Are We Doing to Assist These Communities?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {programsData?.map((item: any, i: any) => {
              return (
                <Link
                  href="/programs/program-name"
                  className="industry_link"
                  key={i}
                >
                  <div className="industry_card">
                    <div className="overlay"></div>

                    <div className="industry_card_content">
                      <div className={`industry_card_text  industry_card_text`}>
                        {item?.title}
                      </div>
                    </div>

                    <div className="industry_card_img !h-[340px]">
                      <Image
                        src={`${item?.ImgSrc}`}
                        alt="Programs"
                        width={275}
                        height={340}
                        className="object-cover h-full"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsLanding;
