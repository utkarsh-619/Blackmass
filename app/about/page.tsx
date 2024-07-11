import React from "react";
import Image from "next/image";
import media1 from "@/public/images/media1.jpeg";

const HomePage = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="w-[80%] ">
            <Image src={media1} alt="About Lithiam-ion" />
          </div>
        </div>

        <div className="m-auto w-[80%] mt-16">
          <div className="mb-8">
            <h1 className="text-6xl font-semiboldbold ">We Are BlackMass</h1>
          </div>
          <div>
            <p className="text-xl font-extralight leading-9 mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              dicta id deleniti impedit inventore, quis natus aperiam et
              voluptatibus cumque necessitatibus dignissimos ullam, voluptatem ut
              minima reiciendis error a tempore.{" "}
              <span className="text-green-700 font-semibold">
                Lorem sit amet consectetur
              </span>{" "}
              adipisicing elit. Natus fuga, dolorum tempore animi vero expedita
              numquam harum ex beatae cum libero tenetur excepturi ipsa error
              corrupti dolor vitae voluptates! Dolorem?
            </p>

            <p className="text-xl font-extralight leading-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quidem molestiae maiores, voluptates perferendis modi ad dignissimos
              ea facere porro! Ad molestias veritatis consectetur quidem.{" "}
              <span className="text-green-700 font-semibold">
                Lorem sit amet consectetur
              </span>{" "}
              praesentium doloribus modi quaerat eos! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Natus consectetur tenetur voluptatum
              molestiae est repudiandae modi autem quod illum doloribus aliquam,
              assumenda laborum. Ex doloremque, voluptatem eligendi dolorum amet
              voluptate?
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Founders</h2>

            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
              dicta incidunt est ipsam, officia dolor fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="/images/founder1.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Shivam Kumar Gupta
                  </h3>
                  <h3 className="text-xl text-gray-950 group-hover:underline group-hover:underline-offset-4">
                    Founder & CEO

                  </h3>
                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">With 2 years of corporate sales expertise and 3 years of experience in startup building and fundraising, Bringing a strategic and innovative approach to driving business growth and securing capital. </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="/images/founder2.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Shashank
                  </h3>
                  <h3 className="text-xl text-gray-950 group-hover:underline group-hover:underline-offset-4">
                    Co Founder
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">With 2 years of corporate sales expertise and 3 years of experience in startup building and fundraising, Bringing a strategic and innovative approach to driving business growth and securing capital. </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="/images/founder3.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Raj Mohan
                  </h3>
                  <h3 className="text-xl text-gray-950 group-hover:underline group-hover:underline-offset-4">
                    Board Member & Advisor
                  </h3>
                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">Raj Mohan Srivastava is the founder and CEO of Charge Karo India, an internet platform providing EV charging solutions. He also serves as the CEO of mdacart.com, a luxury interior company in India. Raj is a visionary entrepreneur dedicated to advancing sustainable energy and high-end living spaces. </span>
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
