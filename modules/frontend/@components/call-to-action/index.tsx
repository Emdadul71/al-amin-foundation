import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[1070px] mx-auto lg:mb-[-150px] z-10 relative">
          <div className="grid lg:grid-cols-[554px_auto] items-center justify-between p-5 lg:p-12 bg-secondary rounded-md ">
            <div>
              <h3 className="text-[28px] text-white mb-[10px]">
                Contact us now to kickstart your journey!
              </h3>
              <p className="text-lg text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </p>
            </div>
            <div>
              <Link
                href=""
                className="btn bg-primary bg-white text-secondary font-semibold rounded-md"
              >
                Keep Reading
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
