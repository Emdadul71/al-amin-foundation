"use client";
import React, { useEffect, useState } from "react";
import EventCard from "@/modules/frontend/@components/event_card";

interface propTypes {
  classes?: object | any;
  showItem?: number;
  isRecent?: boolean;
}

const programsData = [
  {
    title: "Food Distribution to Orphan",
    date: "01/01/2024",
    duration: "1 Months",
    location: "Bangladesh",
    featureImage: "/misc/orphan.jpg",
  },
  {
    title: "Food Distribution to Orphan",
    date: "01/01/2024",
    duration: "1 Months",
    location: "Bangladesh",
    featureImage: "/misc/orphan.jpg",
  },
  {
    title: "Food Distribution to Orphan",
    date: "01/01/2024",
    duration: "1 Months",
    location: "Bangladesh",
    featureImage: "/misc/orphan.jpg",
  },
  {
    title: "Food Distribution to Orphan",
    date: "01/01/2024",
    duration: "1 Months",
    location: "Bangladesh",
    featureImage: "/misc/orphan.jpg",
  },
];

const EventSection = ({ classes }: propTypes) => {
  const limit = 6;
  const [page, setPage] = useState(1);
  const [moreData, setMoreData] = useState<any>([]);
  // const { data: eventList, isLoading } = useGetEventsQuery<any>({
  //   page: page,
  //   limit: limit,
  // });

  const count = programsData && programsData?.length;

  // const dataArray = eventList?.data;
  // const handleLoadMore = () => {
  //   setPage((prev) => prev + 1);
  // };

  // useEffect(() => {
  //   if (moreData && moreData.length > 0) {
  //     setMoreData((prev: any) => [...prev, ...dataArray]);
  //   } else {
  //     setMoreData(dataArray);
  //   }
  // }, [dataArray]);
  return (
    <section
      className={`pt-8 mb-8 lg:pt-[80px] lg:mb-[80px]  ${
        classes?.root ? classes?.root : ""
      }`}
    >
      <div className={`max-w-[1170px] w-full mx-auto`}>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]`}
        >
          {programsData?.map((item: any, i: number) => {
            return <EventCard item={item} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
