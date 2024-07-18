import React from "react";
import Image from "next/image";
import collab1 from "@/public/images/real/collab.jpeg";
import collab2 from "@/public/images/real/collab2.jpg";

const blogPage = () => {
  return (
    <div>
      <section className="pb-10 lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Our Blogs
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  Our Recent News
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <Image
                    src={collab1}
                    alt="First collab image"
                    // width={400}
                    className="w-full"
                  />
                </div>
                <div>
                  <span
                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                  >
                    Dec 22, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                    >
                      The Partnership with Capeasy
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Capeasy, renowned for its investment in innovative and
                    forward-thinking startups, sees immense potential in Black
                    Mass Energies’ vision. By providing the necessary capital,
                    Capeasy aims to support the company’s growth, enabling it to
                    expand operations, enhance technological capabilities, and
                    increase its recycling capacity. This partnership is
                    expected to drive significant advancements in sustainable
                    energy solutions, contributing to a greener and more
                    efficient energy landscape in India.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <Image
                    src={collab2}
                    alt="First collab image"
                    // width={400}
                    className="w-full"
                  />
                </div>
                <div>
                  <span
                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                  >
                    Mar 15, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                    >
                      Synergy with Charge Karo
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Charge Karo, founded by visionary entrepreneur Raj Mohan
                    Srivastava, provides comprehensive EV charging solutions
                    across India. With a mission to facilitate the widespread
                    adoption of electric vehicles, Charge Karo’s extensive
                    network of charging stations is crucial for addressing the
                    current gaps in EV infrastructure.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <span
                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                  >
                    Jan 05, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-2
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                    >
                      A Vision for India
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Black Mass Energies’ vision aligns with India’s broader
                    goals of achieving energy security and sustainability. By
                    ensuring a steady supply of recycled lithium-ion batteries,
                    the company is helping to reduce the country’s dependence on
                    imported raw materials, thereby strengthening its position
                    in the global EV market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default blogPage;
