import Image from "next/image";
import Link from "next/link";
import HomeHero from "./@components/home-hero-two";
import BlogSection from "../@components/blog_section";
import Testimonials from "../@components/testimonials";
import HomeHeroCarousel from "./@components/home-hero-carousel";

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
const Home = () => {
  return (
    <>
      {/* <HomeHero /> */}
      {/* <HomeHeroCarousel /> */}
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
                      {/* {item?.iconSrc && (
                  <ReactSVG
                    src={item?.iconSrc}
                    className={`industry_card_icon industry_card_icon `}
                  />
                )} */}

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
      <Testimonials />
      <BlogSection classes={{ root: "pt-5 lg:pt-[80px]" }} />
    </>
  );
};

export default Home;
