import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propTypes {
  classes?: {
    root?: string;
  };
  data?: any;
}

const DetailsHero = ({ classes }: any) => {
  return (
    <>
      <section
        className={`py-10 lg:pt-[80px] pb-[140px] lg:pb-[280px] bg-grey mb-10 lg:mb-[80px] ${
          classes?.root ? classes.root : ""
        }`}
      >
        <div className="container">
          <div className="max-w-[1030px] mx-auto">
            <h1 className="text-center mb-3 heading-two">
              {/* {data?.title} */}
              Test
            </h1>

            <ul className="flex justify-center items-center gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <div className="w-[8px] h-[2px] bg-black mt-[2px]"></div>
              </li>
              <li>
                <Link href="/programs/name">Programs</Link>
              </li>

              <li>
                <div className="w-[8px] h-[2px] bg-black mt-[2px]"></div>
              </li>
              {/* {data?.shortTitle && <li>{data?.shortTitle}</li>} */}
              {<li>Test</li>}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container relative">
          <div className="max-w-[850px] mx-auto relative mt-[-150px] lg:mt-[-320px] block">
            <div className="absolute w-full h-full top-0 left-0 service_hero_overley rounded-[10px]"></div>
            <div className="w-full lg:h-[478px]">
              <Image
                src={"/misc/orphan.jpg"}
                width={850}
                height={478}
                alt=""
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsHero;
