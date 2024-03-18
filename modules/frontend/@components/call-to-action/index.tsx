import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[1070px] mx-auto">
          <div className="grid lg:grid-cols-[554px_auto] items-center justify-between p-5 lg:p-12 bg-secondary lg:mb-[-140px] z-50 relative rounded-md">
            <div>
              <h3 className="text-[28px] text-white mb-[10px]">
                Contact us now to kickstart your journey!
              </h3>
              <p className="text-lg text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
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
