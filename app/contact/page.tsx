import React from "react";
import Image from "next/image";
import media1 from "@/public/images/real/StockCake-Electric Vehicle Charging_1720800873.jpg";

const ContactPage = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center bg-gray-50 pt-10">
        <div className="w-full lg:w-[40%] mb-5 lg:mb-0">
          <Image src={media1} alt="About Lithiam-ion" className="w-full h-auto" />
        </div>

        <div className="w-full lg:w-[30%] lg:ml-[5%]">
          <h1 className="text-3xl lg:text-5xl font-bold text-green-900 mt-10 text-center lg:text-left">Contact Us :)</h1>
          <p className="text-lg lg:text-xl mt-5 text-gray-700 text-center lg:text-left">Fill up the given form</p>
        </div>
      </div>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally independent from
                manufacturer and other group control gives you confidence that we will only recommend
                what is right for you.
              </p>

              <div className="mt-8">
                <div className="text-2xl font-bold text-green-600">+91 6392161153</div>
                <div className="text-2xl font-bold text-green-600">+91 9335172143</div>
                <address className="mt-2 not-italic">Company Address : Sector 21 , Dwarka , New Delhi , Delhi , 110075</address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-2xl lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                    placeholder="Message"
                    rows={8}
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
