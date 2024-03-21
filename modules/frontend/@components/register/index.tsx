import Image from "next/image";
import { useRouter } from "next/router";

export const Register = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(0deg, #FAF2F5 50%, #fff 50%)",
      }}
    >
      <div className="container lg:mb-[-80px] z-10 relative">
        <div className="text-white bg-secondary px-8 lg:px-[200px] py-8 lg:py-12 rounded-lg relative">
          {/* <div className="text-white bg-gradient-to-r from-[#AC224D] to-[#2A1621] px-8 lg:px-[200px] py-8 lg:py-12 rounded-lg relative"> */}
          <Image
            src="/misc/stars-left-register.webp"
            alt="logo"
            width={115}
            height={164}
            className="absolute left-[40px] top-[20px]"
          />
          <Image
            src="/misc/stars-right-register.webp"
            alt="logo"
            width={92}
            height={164}
            className="absolute right-[40px] top-[20px]"
          />
          <div className="grid md:grid-cols-[1fr_max-content] items-center gap-8 ">
            <div className="lg:max-w-[500px]">
              <h3 className="text-white mb-3">Ready to get started?</h3>
              <p>
                As an award-winning agency, we are consistently and challenging
                ourseleves for the betterment. We are your authentic brand.
              </p>
            </div>
            <button className="btn btn-white hover:bg-primary hover:text-white hover:border-primary">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
