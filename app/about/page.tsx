"use client"
import React, { useEffect } from 'react';
// import React from "react";
import Image from "next/image";
import media1 from "@/public/images/real/StockCake-Tesla Charging Station_1720800891.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing function
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

                <div className="m-auto w-[80%] mt-16">
                    <div className="mb-8">
                        <h1 className="text-6xl font-semiboldbold ">We Are BlackMass Energies</h1>
                    </div>
                    <div>
                        <p className="text-xl font-extralight leading-9 mb-3">
                            At Black Mass Energies, we are at the forefront of India’s sustainable energy revolution. Our core expertise lies in the recycling of lithium-ion EV batteries, where we meticulously extract crucial materials such as black mass, lithium, and cobalt. We are driven by a singular mission: to ensure that lithium, once in the country, never exits, thereby fostering a closed-loop economy that supports our nation’s growing electric vehicle (EV) demands.
                        </p>

                        <p className="text-xl font-extralight leading-9 mb-3">
                            Our commitment extends beyond recycling; we are dedicated to promoting sustainable and green environments. By transforming end-of-life batteries into valuable resources, we contribute significantly to reducing waste and preserving our planet. As India embraces the shift to electric mobility, Black Mass Energies stands as a key player in powering this transition with recycled, high-quality lithium and other essential metals.
                        </p>

                        <p className="text-xl font-extralight leading-9">
                            Join us in our journey towards a sustainable future, where we not only meet the energy needs of today but also pave the way for a greener, more resilient tomorrow.
                        </p>
                    </div>

                </div>
            </div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-4xl font-bold text-gray-900 sm:text-3xl">Founders</h2>
                        <p className="mt-4 max-w-md text-gray-500">
                            Meet the founders of Black Mass Energies, the pioneers of India's sustainable energy revolution.
                        </p>
                    </header>

                    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        <li data-aos="fade-left" className="flex flex-col items-center">
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
                                    <h3 className="font-bold  text-xl text-gray-950 group-hover:underline group-hover:underline-offset-4">
                                        Founder & CEO
                                    </h3>
                                    <p className="mt-2">
                                        <span className="tracking-wider text-gray-900">With 2 years of corporate sales expertise and 3 years of experience in startup building and fundraising, Bringing a strategic and innovative approach to driving business growth and securing capital.</span>
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li data-aos="fade-left" className="flex flex-col items-center">
                            <a href="#" className="group block overflow-hidden">
                                <img
                                    src="/images/founder2.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                                <div className="relative bg-white pt-3 text-center">
                                    <h3 className="text-xl font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                        Shashank
                                    </h3>
                                    <h3 className=" font-bold  text-xl text-gray-950 group-hover:underline group-hover:underline-offset-4">
                                        Co Founder
                                    </h3>
                                    <p className="mt-2">
                                        <span className="tracking-wider text-gray-900">Having 3 years of Experience in Startup fund raising</span>
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li data-aos="fade-left" className="flex flex-col items-center">
                            <a href="#" className="group block overflow-hidden">
                                <img
                                    src="/images/founder3.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                                <div className="relative bg-white pt-3 text-center">
                                    <h3 className="font-bold  text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                        Raj Mohan
                                    </h3>
                                    <h3 className="font-bold  text-xl text-gray-950 group-hover:underline group-hover:underline-offset-4">
                                        Board Member & Advisor
                                    </h3>
                                    <p className="mt-2">
                                        <span className="tracking-wider text-gray-900">Raj Mohan Srivastava is the founder and CEO of Charge Karo India, an internet platform providing EV charging solutions. He also serves as the CEO of mdacart.com, a luxury interior company in India. Raj is a visionary entrepreneur dedicated to advancing sustainable energy and high-end living spaces.</span>
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
