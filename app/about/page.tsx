"use client";
import React, { useEffect } from "react";
// import React from "react";
import Image from "next/image";
import media1 from "@/public/images/real/StockCake-Tesla Charging Station_1720800891.jpg";
import media2 from "@/public/images/real/StockCake-Electric Charging Station_1720801100.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
    });
  }, []);
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="w-[80%] ">
            <Image data-aos="fade-up" src={media1} alt="About Lithiam-ion" />
          </div>
        </div>

        <div data-aos="fade-up" className="m-auto w-[80%] mt-16">
          <div  className="mb-8">
            <h1 className="text-6xl font-semiboldbold ">
              We Are BlackMass Energies
            </h1>
          </div>
          <div>
            <p className="text-xl font-extralight leading-9 mb-3">
              At Black Mass Energies, we are at the forefront of India’s
              sustainable energy revolution. Our core expertise lies in the
              recycling of lithium-ion EV batteries, where we meticulously
              extract crucial materials such as black mass, lithium, and cobalt.
              We are driven by a singular mission: to ensure that lithium, once
              in the country, never exits, thereby fostering a closed-loop
              economy that supports our nation’s growing electric vehicle (EV)
              demands.
            </p>

            <p className="text-xl font-extralight leading-9 mb-3">
              Our commitment extends beyond recycling; we are dedicated to
              promoting sustainable and green environments. By transforming
              end-of-life batteries into valuable resources, we contribute
              significantly to reducing waste and preserving our planet. As
              India embraces the shift to electric mobility, Black Mass Energies
              stands as a key player in powering this transition with recycled,
              high-quality lithium and other essential metals.
            </p>

            <p className="text-xl font-extralight leading-9">
              Join us in our journey towards a sustainable future, where we not
              only meet the energy needs of today but also pave the way for a
              greener, more resilient tomorrow.
            </p>
          </div>
        </div>

      </div>

      <div>
        {/* <div className="flex justify-center">
          <div className="w-[80%] ">
            <Image data-aos="fade-up" src={media2} alt="About Lithiam-ion" />
          </div>
        </div> */}

        <div data-aos="fade-up" className="m-auto w-[80%] mt-16">
          <div  className="mb-8">
            <h1 className="text-4xl font-semiboldbold ">
              Why EV is important :-

            </h1>
          </div>
          <div>
            <p className="text-xl font-extralight leading-9 mb-3">
              Electric vehicles (EVs) are crucial for our environment because they significantly reduce greenhouse gas emissions and air pollutants, helping to mitigate climate change and improve air quality. EVs also decrease dependence on fossil fuels, contributing to energy sustainability.


            </p>

            <p className="text-xl font-extralight leading-9 mb-3">

              EVs can be more cost-effective than petrol and diesel vehicles due to several factors:
            </p>

            <article className="space-y-4 text-gray-600">
              <div className="mt-4">
                <ul className="list-disc list-inside">
                  <li className="mb-2">
                    <span className="font-bold">Lower Fuel Costs:</span>
                    Electricity is generally cheaper than gasoline or diesel, leading to substantial savings over time.

                  </li>
                  <li className="mb-2">
                    <span className="font-bold"> Reduced Maintenance:</span>
                    EVs have fewer moving parts and don’t require oil changes, leading to lower maintenance costs.

                  </li>
                  <li className="mb-2">
                    <span className="font-bold">Incentives and Subsidies:</span>
                    Many governments offer incentives, such as tax credits and rebates, to encourage EV adoption, further reducing the overall.
                  </li>
                </ul>
              </div>
            </article>


          </div>
        </div>

      </div>


      <div>
        {/* <div className="flex justify-center">
          <div className="w-[80%] ">
            <Image data-aos="fade-up" src={media2} alt="About Lithiam-ion" />
          </div>
        </div> */}

        <div data-aos="fade-up" className="m-auto w-[80%] mt-16">
          <div  className="mb-8">
            <h1 className="text-4xl font-semiboldbold ">
              Black Mass Energies is also Contributing in Waste Management:-

            </h1>
          </div>
          <div>
            <p className="text-xl font-extralight leading-9 mb-3">
              Recycling EV batteries helps manage waste in nature in several key ways:



            </p>


            <article className="space-y-4 text-gray-600">
              <div className="mt-4">
                <ul className="list-disc list-inside">
                  <li className="mb-2">
                    <span className="font-bold">Reduces Toxic Waste:</span>
                    Proper recycling prevents hazardous materials like lithium, cobalt, and nickel from ending up in landfills, where they could potentially leach into the soil and water, causing environmental contamination.

                  </li>
                  <li className="mb-2">
                    <span className="font-bold">Conserves Resources:</span>
                    Recycling allows for the recovery of valuable materials, reducing the need to mine and process new raw materials. This conservation effort minimizes the ecological footprint associated with mining activities.


                  </li>
                  <li className="mb-2">
                    <span className="font-bold">Promotes Circular Economy:</span>
                    By reusing materials from old batteries, we create a more sustainable, circular economy that minimizes waste and makes better use of existing resources.

                  </li>
                  <li className="mb-2">
                    <span className="font-bold">Reduces Energy Consumption:</span>
                    Recycling requires less energy compared to producing new batteries from raw materials, thereby lowering the overall energy demand and associated emissions.
                  </li>
                </ul>
              </div>
            </article>


          </div>
        </div>

      </div>



      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 data-aos="fade-right" className="text-4xl font-bold text-gray-900 sm:text-3xl">
              Founders
            </h2>
            <p className="mt-4 max-w-md text-gray-500">
              Meet the founders of Black Mass Energies, the pioneers of India's
              sustainable energy revolution.
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <li data-aos="fade-left" className="flex flex-col items-center p-5">
              <a href="#" className="group block overflow-hidden">
                <img
                  src="/images/founder1.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative bg-white pt-3 text-center">
                  <h3 className="font-bold  text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Shivam Kumar Gupta
                  </h3>
                  <h3 className="font-bold  text-xl text-gray-950 group-hover:underline group-hover:underline-offset-4 mb-5">
                    Founder & CEO
                  </h3>
                  <p className="text-justify text-gray-900 tracking-wider mt-2">
                    With 2 years of corporate sales expertise and 3 years of
                    experience in startup building and fundraising, Bringing a
                    strategic and innovative approach to driving business growth
                    and securing capital.
                  </p>
                </div>
              </a>
            </li>

            <li data-aos="fade-left" className="flex flex-col items-center p-5">
              <a href="#" className="group block overflow-hidden">
                <img
                  src="/images/founder2.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative bg-white pt-3 text-center">
                  <h3 className="text-xl font-bold text-gray-950 group-hover:underline group-hover:underline-offset-4">
                    Shashank
                  </h3>
                  <h3 className=" font-bold  text-xl text-gray-950 group-hover:underline group-hover:underline-offset-4 mb-5">
                    Co Founder
                  </h3>
                  <p className="text-justify text-gray-900 tracking-wider">
                    Having 3 years of Experience in Startup fund raising.
                    Shashank have a degree in civil engineering, has garnered
                    2 years of experience in startup building. He brings a
                    unique blend of technical expertise and entrepreneurial
                    skills to their endeavors.
                  </p>
                </div>
              </a>
            </li>

            <li data-aos="fade-left" className="flex flex-col items-center p-5">
              <a href="#" className="group block overflow-hidden">
                <img
                  src="/images/founder3.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative bg-white pt-3 text-center">
                  <h3 className="font-bold  text-xl text-gray-950 group-hover:underline group-hover:underline-offset-4">
                    Raj Mohan
                  </h3>
                  <h3 className="font-bold  text-xl text-gray-950 group-hover:underline group-hover:underline-offset-4 mb-5">
                    Board Member & Advisor
                  </h3>
                  <p className="text-justify text-gray-900 tracking-wider">
                    Raj Mohan Srivastava is the founder and CEO of Charge Karo
                    India, an internet platform providing EV charging
                    solutions. He also serves as the CEO of mdacart.com, a
                    luxury interior company in India. Raj is a visionary
                    entrepreneur dedicated to advancing sustainable energy and
                    high-end living spaces.
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
