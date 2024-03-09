"use client";
import { htmlParse, readingTime } from "@/helpers/utils";
import { Select } from "antd";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import moment from "moment";
import LatestBlog from "@/modules/frontend/islamic-wall/@comments/latest-blog";
import SocialShare from "@/modules/frontend/@components/social_share";

const BlogDetailsPage = ({ data }: any) => {
  const catName = data?.categories[0];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <section className="pt-[80px]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_30px] max-w-[1130px] gap-[30px] mb-[40px]">
            <div className="flex flex-col gap-[26px] p-4 lg:px-[20px] lg:py-[30px] border border-dashed self-start lg:sticky top-[130px] bg-grey">
              Apply For Donation Form
            </div>

            <div>
              <h1 className="h2 mb-6">
                Virtues of Shaban: How to Prepare for Ramadan Spiritually{" "}
              </h1>
              <ul className="flex justify-between items-end gap-4 mb-3">
                <li>
                  <div>
                    By <span className="font-medium">Admin</span>
                  </div>
                  <div>
                    {/* <span> {moment(data?.publishedAt).format("LL")}</span> */}
                    <span>
                      Last Updated:{" "}
                      {moment(data?.publishedAt).format("YYYY/MM/DD")}{" "}
                    </span>
                    {/* <span>{moment(data?.publishedAt).format("LT")}</span> */}
                  </div>
                </li>

                <li>
                  {/* {data?.content && (
                    <div>{readingTime(data?.content)} Min Read</div>
                  )} */}

                  <div>7 Min Read</div>
                </li>
              </ul>
              <div>
                <div className="mb-7">
                  <Image
                    src="/misc/islamic-blog-details.jpg"
                    width={740}
                    height={416}
                    alt="Testimonial"
                  />
                </div>
                <ul className="flex gap-4 mb-3">
                  <li>
                    <div className="px-2 py-1 bg-[#f860111a] rounded-full text-xs text-secondary">
                      {/* {catName?.title} */}
                      Shaban
                    </div>
                  </li>
                </ul>
                <div className="from_texteditor_wrapper">
                  {/* {data?.content && <div>{htmlParse(data?.content)}</div>} */}
                  <p>
                    Shaban is a month that is often neglected as people look
                    forward to the excitement of Ramadan and its long nights of
                    worship. But the month of Shaban is a month of incredible
                    virtue, expressly highlighted by our beloved Prophet ﷺ. It
                    has great historical significance as it is the month in
                    which fasting Ramadan was legislated through revelation and
                    it is the month in which the qibla changed from Jerusalem to
                    Mecca. Beyond its historical significance, Shaban is a month
                    of fasting and increased focus on the Qur’an, giving it
                    great spiritual significance.
                  </p>
                  <h3>What is Shaban? A Month of Fasting</h3>
                  <p>
                    The first virtue of Shaban is that it is a month of fasting.
                    Typically, many of us forget about fasting in this month
                    because we’re looking forward to Ramadan. ʿĀisha (rA) said
                    as part of a larger hadith, “I never saw Allah’s Messenger ﷺ
                    fast for an entire month except for Ramadan, and did not see
                    him fasting in any month more than in Shaban.”{" "}
                  </p>
                  <p>
                    ʿĀisha (rA) also said in an authentic narration, “The most
                    beloved of months or the month in which Allah’s Messenger ﷺ
                    loved to fast more than anything else was Shaban. Indeed, he
                    used to join it to Ramadan”; i.e., he would not take a break
                    from fasting between Shaban and Ramadan.
                  </p>
                  <p>
                    From these two hadiths, we can see that the Prophet ﷺ never
                    fasted an entire month outside of Ramadan, but the month
                    that he fasted most after Ramadan was Shaban, to the point
                    that it was as if he had connected the fasting of Shaban to
                    the month of Ramadan.
                  </p>
                  <h3>When is Shaban?</h3>
                  <p>
                    Shaban is the eighth month of the Islamic lunar calendar; it
                    immediately precedes the month of Ramadan. Jurist and
                    spiritual author, Ibn al-Qayyim al-Jawziyya (d. 751/1350),
                    beautifully mentions that the Prophet ﷺ fasted almost all of
                    Shaban as a means of glorifying Ramadan, the same way that
                    the most beloved of sunnahs is the sunnah before Fajr
                    because it glorifies the most beloved of prayers, Fajr. And
                    just like you use the sunnah as preparation for the
                    obligatory prayer, so too is Shaban a preparation for and
                    glorification of Ramadan.
                  </p>
                  <p>
                    Ibn Al-Qayyim also mentions that the Prophet ﷺ was known to
                    voluntarily fast three days of every month, but sometimes he
                    was not able to do so. When that happened, he would fast in
                    Shaban to make up those days before the obligatory fast of
                    Ramadan. This was the Prophet’s habit across a range of
                    optional acts of worship that he used to do regularly but
                    sometimes missed, including the night prayer and optional
                    fasting.
                  </p>
                  <h3>A Month of Qur’an</h3>
                  <p>
                    Just as fasting in Shaban is neglected by many, so too is
                    reading the Qur’an in this month. Whereas we all intend to
                    increase the amount of Qur’an we read in Ramadan, Shaban is
                    the time that the reciters prepare themselves for the
                    recitation of Ramadan. Shaban was known by some of the pious
                    predecessors as the month of the reciters because of how
                    much of the Qur’an people would read during it.
                  </p>
                  <p>
                    Salama b. Kuhayl al-Kūfī (d. 121/739), one of the early
                    generation of believers, known as ‘the Followers’ (tābiʿīn),
                    narrates that when the month of Shaban approached, his
                    people freed their time to recite the Qur’an. He said, “The
                    month of Shaban [is] the month of reciters.” Another
                    narration states that “When Shaban would begin, Amr ibn Qais
                    would close his store, and devote himself to the recitation
                    of the Qur’an.”
                  </p>
                  <h3>15th of Shaban: A Night of Forgiveness</h3>
                  <p>
                    In an authentic narration, the Prophet ﷺ said “Allah looks
                    on the night of the half of Shaban (i.e., the 15th), so He
                    forgives the entirety of His creation except for a
                    polytheist or a person with enmity.” A narration from
                    ʿIkrima al-Barbarī (d. 105/723), the bondsman (mawlā) of
                    ʿAbd Allāh Ibn ʿAbbās (d. 68/687), is frequently quoted in
                    which he calls the 15th of Shaban the ‘Night of Exemption’
                    (laylat al-barāʾa), the day that we are freed from the
                    Hellfire.
                  </p>
                  <p>
                    The Prophet ﷺ said that Shaban is the month in which deeds
                    are presented to Allah and the 15th is the particular night
                    that Allah looks at those deeds and forgives all of them.
                    Taking advantage of this night will allow us to enter
                    Ramadan with amnesty, free from the burden of our sins with
                    only the longing for our Creator remaining.
                  </p>
                  <p>
                    Many great scholars have written about observing the 15th of
                    Shaban and whilst we should fill the night with worship,
                    there are no specific acts that have been mentioned by the
                    Prophet ﷺ to be singled out on this night.
                  </p>
                </div>
              </div>
            </div>

            <div className="sticky top-[340px] left-0 self-start">
              <SocialShare sharedUrl="#" />
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[300px_850px] max-w-[1150px] ">
            <div></div>
            <LatestBlog />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
