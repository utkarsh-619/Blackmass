"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import media1 from '@/public/images/recycle.jpeg';
import media2 from '@/public/images/recylcle1.webp';
import media3 from '@/public/images/recycle2.jpg';
import media4 from '@/public/images/recycle3.jpg';

const Page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing function
        });
    }, []);

    return (
        <div>
            <div className="flex justify-center">
                <div className="w-[80%]">
                    <Image data-aos="fade-up" src={media1} alt="recycle" />
                </div>
            </div>
            <div className="m-auto w-[80%] mt-16">
                <div className="mb-8">
                    <h1 className="text-6xl font-semibold">Recycling</h1>
                </div>
                <div>
                    <p className="text-xl leading-9 mb-3 font-mono font-thin">
                        Our core strength lies in our innovation and technological prowess <span className="text-green-700 font-bold">that gives an unprecedented edge to our recycling operations.</span> Our recycling technology aims <span className="text-green-700 font-bold">to take today’s waste and turn it into conflict-free, sustainable resources for tomorrow.</span> End of life electronics is recycled <span className="text-green-00">at our state-of-the-art recycling plant, using disruptive technology, to extract reusable materials.</span> Developed in house, at our R&D facility, our recycling technology ensures <span className="text-green-700 font-bold">that e-Waste is processed in an environmentally friendly manner, with high efficiency and lowered carbon footprint.</span>
                    </p>

                    <p className="text-xl font-extralight leading-9 mb-3">
                        <span className="text-green-700 font-bold">With the right technology, recycling can offer a potent resource for our planet,</span> transforming millions of tons of e-Waste <span className="text-green-700 font-bold">into reusable material.</span> Our high-tech recycling <span className="text-green-800">with rare earth elements and other reusable materials and minerals,</span> from electronic waste, efficiently <span className="text-green-700 font-bold">in a sustainable and environmentally responsible manner.</span>
                    </p>

                    <p className="text-xl font-extralight leading-9">
                        Taking into consideration <span className="text-green-700 font-bold">our depleting natural resources,</span> this urban mining approach offers quite <span className="text-green-0">a few benefits - it provides a substantial secondary resource,</span> which is highly suitable for direct use, while also <span className="text-green-700 font-bold">ensuring that the environment is kept free from harmful toxins in e-Waste.</span> This results <span className="text-green-700 font-bold">in increased energy efficiency and lowers the demand for mining of new materials.</span>
                    </p>

                    <p className="text-xl font-extralight leading-9">
                        Powered with this sustainable recycling technology, <span className="text-green-700 font-bold">we offer an easy and hassle-free solution for organizations</span> to manage their electronic assets <span className="text-green-00">and e-waste more efficiently and effectively,</span> while also <span className="text-green-700 font-bold">safeguarding them from legal and environmental risks associated with e-waste disposal.</span>
                    </p>
                </div>
            </div>

            <div>
                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <Image
                                    data-aos="fade-up"
                                    alt=""
                                    src={media2}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                            <div className="lg:py-16">
                                <h2 className="text-green-800 text-3xl font-bold sm:text-4xl">
                                    Mobile Phone Recycling
                                </h2>
                                <article className="space-y-4 text-gray-600">
                                    <div className="mt-4">
                                        <ul className="list-disc list-inside">
                                            <li className="mb-2">
                                                Mobile phone recycling begins with the unloading of the units at our recycling facility, where they are scanned and updated in the system.
                                            </li>
                                            <li className="mb-2">
                                                Once unloaded, the units are separated for recycling and refurbishing. Units for refurbishing go to our refurbishing operations section, while others are sent to recycling.
                                            </li>
                                            <li className="mb-2">
                                                Devices sent for refurbishing undergo further testing. Those with heavy wear and tear are redirected to the recycling section.
                                            </li>
                                            <li className="mb-2">
                                                Mobiles designated for recycling undergo manual dismantling to separate components such as the lithium-ion battery, flat panel/LCD, PCBs, and plastic.
                                            </li>
                                            <li className="mb-2">
                                                After processing, the recovered materials can be used again in a number of different industries, such as electronics, plating, jewelry, automotive, and art foundries.
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-green-800 text-3xl font-bold sm:text-4xl">
                                Display Unit Recycling
                            </h2>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full lg:order-last">
                                <Image
                                    data-aos="fade-up"
                                    alt=""
                                    src={media3}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>

                            <div className="lg:py-16 lg:order-first">
                                <article className="space-y-4 text-gray-600">
                                    <div className="mt-4">
                                        <ul className="list-disc list-inside">
                                            <li className="mb-2">
                                                Cathode Ray Tubes (CRT) contain significant amounts of lead and glass which can be recovered and reused.
                                            </li>
                                            <li className="mb-2">
                                                As a first step, CRT display units are unloaded at our recycling facility and scanned by barcode reader.
                                            </li>
                                            <li className="mb-2">
                                                The scan details are then uploaded on the system. Next the CRT cutter system separates the glass panel and glass and fluorescent powder (lead & phosphor) is collected.
                                            </li>
                                            <li className="mb-2">
                                                The process involves glass cutting, and heating through metal band & air blow.
                                            </li>
                                            <li className="mb-2">
                                                Next, they are sent to the vacuum chamber, following which the lead and phosphor are collected in bags, while the glass is collected in folders.
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <Image
                                    data-aos="fade-up"
                                    alt=""
                                    src={media4}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                            <div className="lg:py-16">
                                <h2 className="text-green-800 text-3xl font-bold sm:text-4xl">
                                    IT Goods Recycling
                                </h2>
                                <article className="space-y-4 text-gray-600">
                                    <div className="mt-4">
                                        <ul className="list-disc list-inside">
                                            <li className="mb-2">
                                                I.T. goods include various electronics ranging from desktops, laptops, and servers to printers, scanners, and copiers.
                                            </li>
                                            <li className="mb-2">
                                                Once these electronics items are received at our processing plant they are checked to determine whether they should be recycled or refurbished.
                                            </li>
                                            <li className="mb-2">
                                                After segregating the units suitable for refurbishing they are forwarded to our refurbishing section, while the remaining units are sent for recycling.
                                            </li>
                                            <li className="mb-2">
                                                The electronics sent for recycling are first segregated and then dismantled. During dismantling, the wire and cable components in the devices are taken out and sent for recycling.
                                            </li>
                                            <li className="mb-2">
                                                Next, the components like LCD, PCB, RAM, SMPS and plastic parts are segregated and recycled separately. The remaining components are sent for processing to the mechanical shredder, following which they are sent to the magnetic separator.
                                            </li>
                                            <li className="mb-2">
                                                The magnetic separator separates the ferrous components from which iron is extracted. The remainder is then passed through the Eddy Current separator, which separates non-ferrous metals like copper and aluminum.
                                            </li>
                                            <li className="mb-2">
                                                These metals are then smelted and purified. The plastic components are forwarded for plastic recycling at Attero’s plant.
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Page;
