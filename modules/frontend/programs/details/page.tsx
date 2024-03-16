import React from "react";
import DetailsHero from "./@components/details-hero/page";
import Image from "next/image";
import EventSection from "../@components/event-section";

const data = [
  {
    imageUrl: "/images/test.jpg",
    caption:
      "Lorem Ipsum is simply dummy text of the prndustry's standard dummy text ever since the 1500s",
  },
  {
    imageUrl: "/images/test.jpg",
    caption:
      "Lorem Ipsum is simply dummy text of the prndustry's standard dummy text ever since the 1500s",
  },
  {
    imageUrl: "/images/test.jpg",
    caption:
      "Lorem Ipsum is simply dummy text of the prndustry's standard dummy text ever since the 1500s",
  },
  {
    imageUrl: "/images/test.jpg",
    caption:
      "Lorem Ipsum is simply dummy text of the prndustry's standard dummy text ever since the 1500s",
  },
];
const ProgramsDetails = () => {
  return (
    <>
      <DetailsHero />
      <section>
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_300px] max-w-[1210px] mx-auto w-full gap-[30px]">
            <div>
              <div className="mb-12">
                <div className="border-l border-l-[4px] border-secondary pl-[14px]">
                  <p className="text-xl font-medium">Food Bank</p>
                </div>

                <h3 className=" mb-0">Programs Title</h3>
                <div>
                  A top-line goal for us is to help allocate quality food to
                  those who would otherwise not have access to it through the
                  distribution of ration packets. A top-line goal for us is to
                  help allocate quality food to those who would otherwise not
                  have access to it through the distribution of ration packets.
                </div>
              </div>

              <div className="max-w-[616px]  m-auto pb-[26px] mb-[26px] ">
                {/* <div className=" text-lg leading-[32px] text-gray-800">
                  {htmlParse(data?.description)}
                </div> */}
                {data?.map((item: any, i: any) => {
                  const islast = data?.length > i + 1;
                  return (
                    <div key={i}>
                      <span className=" text-xl font-semibold text-gray-500 border px-3 py-1 border-gray-200 rounded-2xl ">
                        {`${i + 1}/${data?.length}`}
                      </span>
                      <div>
                        <Image
                          height={446}
                          width={673}
                          src={item?.imageUrl}
                          alt={item?.caption}
                          className=" mt-4"
                        />
                      </div>
                      <figcaption
                        className={`text-base mt-4 ${
                          islast && "block border-b mb-[26px] pb-[26px]"
                        } `}
                      >
                        {item?.caption}
                        <span className=" text-primary"> |</span>
                        <span>Image {item?.photoCredit}</span>
                      </figcaption>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full h-[300px] bg-black text-white self-start sticky top-[100px]">
              Donation Form will be Here
            </div>
          </div>
        </div>
      </section>
      <EventSection title={"Related Successful Events"} />
    </>
  );
};

export default ProgramsDetails;
