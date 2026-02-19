"use client";

import React from "react";
import Image from "next/image";

const WorkforceCSR = () => {
    return (
        <div className="w-full bg-white overflow-hidden font-sans">
            {/* Section 1: Our Workforce */}
            <section className="relative w-full py-0 overflow-hidden min-h-[600px] md:min-h-[800px] flex items-center">
                <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">
                    {/* Left: Image with Giant Curve Mask & Bottom Waves (Order 1 on mobile) */}
                    <div className="relative h-[480px] md:h-[720px] w-full order-1 md:order-1">
                        <div className="absolute inset-0 z-10 overflow-hidden md:rounded-r-[400px] rounded-r-[150px]">
                            <Image
                                src="/assests/newImg1.png"
                                alt="Our Workforce"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Wavy Overlays at the bottom of the image container */}
                        <div className="absolute bottom-0 left-0 w-full h-[250px] z-20 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                                {/* Teal background wave */}
                                <path
                                    d="M0 200 C150 180 350 220 500 160 L500 200 L0 200 Z"
                                    fill="#4DD0E1"
                                    fillOpacity="0.6"
                                />
                                {/* Purple foreground wave */}
                                <path
                                    d="M0 200 C100 120 400 250 500 140 L500 200 L0 200 Z"
                                    fill="#A0609E"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Right: Text Content (Order 2 on mobile) */}
                    <div className="flex flex-col gap-4 md:pl-20 z-30 order-2 md:order-2 items-start text-left">
                        <h2
                            className="text-[28px] leading-[34px] md:text-[35px] md:leading-[60px]"
                            style={{
                                fontWeight: 600,
                                color: '#363636',
                                letterSpacing: '0px',
                                fontFamily: '"Myriad Pro", sans-serif'
                            }}
                        >
                            Our Workforce
                        </h2>
                        <p
                            className="max-w-xl font-normal"
                            style={{
                                font: 'normal normal normal 16px/20px "Myriad Pro", sans-serif',
                                color: '#004172',
                                letterSpacing: '0px'
                            }}
                        >
                            At Syngene, we believe that investing in our people is fundamental to achieving scientific excellence.
                            Through comprehensive learning and development programs, we provide opportunities for skill-building,
                            career growth, and leadership development, ensuring our employees are equipped to deliver their best work.
                        </p>
                        <div className="flex items-center gap-4 group cursor-pointer w-fit mt-4">
                            <div className="w-[3.5px] h-8 bg-[#FBAE17]" />
                            <span
                                className="text-[#004172] transition-all underline-offset-8 decoration-2 group-hover:underline"
                                style={{
                                    font: 'normal normal 600 16px/20px "Myriad Pro", sans-serif',
                                    letterSpacing: '0px',
                                    opacity: 1
                                }}
                            >
                                Read More
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: CSR */}
            <section className="relative w-full py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
                    {/* Image Container (Order 1 on mobile) */}
                    <div className="relative h-[450px] md:h-[600px] order-1 md:order-2">
                        <div className="absolute inset-0 z-10 overflow-hidden md:rounded-l-[300px] rounded-l-[150px]">
                            <Image
                                src="/assests/image2.png"
                                alt="CSR Initiatives"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content (Order 2 on mobile) */}
                    <div className="flex flex-col gap-4 md:pr-20 order-2 md:order-1 items-start text-left">
                        <h2
                            className="text-[28px] leading-[34px] md:text-[35px] md:leading-[60px] md:whitespace-nowrap md:w-max"
                            style={{
                                fontWeight: 600,
                                color: '#363636',
                                letterSpacing: '0px',
                                fontFamily: '"Myriad Pro", sans-serif',
                                opacity: 1
                            }}
                        >
                            Corporate Social Responsibility
                        </h2>
                        <p
                            className="max-w-xl font-normal"
                            style={{
                                font: 'normal normal normal 16px/20px "Myriad Pro", sans-serif',
                                color: '#004172',
                                letterSpacing: '0px'
                            }}
                        >
                            At Syngene, we drive meaningful change through CSR initiatives in Healthcare, Science Education,
                            Research and Scholarships, and Environmental Sustainability, thus empowering underserved
                            communities in partnership with the Biocon Foundation and the Biocon Academy.
                        </p>
                        <div className="flex items-center gap-4 group cursor-pointer w-fit">
                            <div className="w-[3px] h-8 bg-[#FBAE17]" />
                            <span
                                className="text-[#004172] transition-all underline-offset-4 decoration-2 group-hover:underline"
                                style={{
                                    font: 'normal normal 600 16px/20px "Myriad Pro", sans-serif',
                                    letterSpacing: '0px',
                                    opacity: 1
                                }}
                            >
                                Read More
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WorkforceCSR;
