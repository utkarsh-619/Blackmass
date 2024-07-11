import React from "react";
import Image from "next/image";
import media1 from "@/public/images/media1.jpeg";

const contactPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[40%] ">
          <Image src={media1} alt="About Lithiam-ion" />
        </div>

        <div className="w-[30%] ml-[5%]">
            <h1 className="text-5xl font-bold text-green-900 mt-10 ">Contact Us {":)"}</h1>
            <p className="text-xl mt-5 text-gray-700">Fill up the given form</p>
        </div>

      </div>

      
    </div>
  );
};

export default contactPage;
