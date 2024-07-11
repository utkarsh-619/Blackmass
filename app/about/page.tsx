import React from "react";
import Image from "next/image";
import media1 from "@/public/images/media1.jpeg";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[80%] ">
          <Image src={media1} alt="About Lithiam-ion" />
        </div>
      </div>

      <div className="m-auto w-[80%] mt-16">
        <div className="mb-8">
          <h1 className="text-6xl font-semiboldbold ">We Are BatX</h1>
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
  );
};

export default HomePage;
