"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const WorkforceCSR = () => {
    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    useEffect(() => {
        const observerOptions = { threshold: 0.2 };

        const observer1 = new IntersectionObserver(([entry]) => {
            setIsVisible1(entry.isIntersecting);
        }, observerOptions);

        const observer2 = new IntersectionObserver(([entry]) => {
            setIsVisible2(entry.isIntersecting);
        }, observerOptions);

        if (section1Ref.current) observer1.observe(section1Ref.current);
        if (section2Ref.current) observer2.observe(section2Ref.current);

        return () => {
            if (section1Ref.current) observer1.disconnect();
            if (section2Ref.current) observer2.disconnect();
        };
    }, []);

    return (
        <div className="w-full bg-white overflow-hidden font-sans">
            {/* Section 1: Our Workforce */}
            <section ref={section1Ref} className="relative w-full py-12 md:py-0 overflow-hidden h-auto">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-0 relative z-10">
                    {/* Left: Image with Giant Curve Mask - Flush Left */}
                    <div
                        className={`relative h-[480px] md:h-[720px] w-full order-1 md:order-1 transition-all duration-1000 ${isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
                    >
                        <div className="absolute inset-0 z-10 overflow-hidden md:rounded-r-[400px] rounded-r-[150px]">
                            <Image
                                src="/assests/newImg1.png"
                                alt="Our Workforce"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Wavy Overlays */}
                        <div className="absolute bottom-0 left-0 w-full h-[250px] z-20 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                                <path
                                    d="M0 200 C150 180 350 220 500 160 L500 200 L0 200 Z"
                                    fill="#4DD0E1"
                                    fillOpacity="0.6"
                                />
                                <path
                                    d="M0 200 C100 120 400 250 500 140 L500 200 L0 200 Z"
                                    fill="#A0609E"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Right: Text Content - With Padding */}
                    <div
                        className={`flex flex-col gap-4 px-6 md:px-20 lg:pl-28 z-30 order-2 md:order-2 items-start text-left mt-8 md:mt-0 transition-all duration-1000 delay-300 ${isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                    >
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
            <section ref={section2Ref} className="relative w-full py-12 md:py-0 bg-white overflow-hidden h-auto">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-0 relative z-10">
                    {/* Text Content - With Padding */}
                    <div
                        className={`flex flex-col gap-4 px-6 md:px-20 lg:pr-28 order-2 md:order-1 items-start text-left mt-8 md:mt-0 transition-all duration-1000 delay-300 ${isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
                    >
                        <h2
                            className="text-[28px] leading-[34px] md:text-[35px] md:leading-[60px] max-w-[400px] md:max-w-[450px]"
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

                    {/* Image Container - Flush Right */}
                    <div
                        className={`relative h-[450px] md:h-[600px] order-1 md:order-2 transition-all duration-1000 ${isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                    >
                        <div className="absolute inset-0 z-10 overflow-hidden md:rounded-l-[300px] rounded-l-[150px]">
                            <Image
                                src="/assests/image2.png"
                                alt="CSR Initiatives"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WorkforceCSR;
