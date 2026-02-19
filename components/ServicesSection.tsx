"use client";

import React from "react";
import Image from "next/image";

const ServicesSection = () => {
    return (
        <section className="w-full bg-white md:min-h-screen flex items-center justify-center overflow-hidden relative py-8 md:py-0">
            <div className="relative w-full flex items-center justify-center h-[300px]">
                {/* Scrolling Text Background (Now behind) */}
                <div className="relative z-10 w-full flex overflow-hidden">
                    <div className="flex whitespace-nowrap animate-scroll">
                        {[...Array(10)].map((_, i) => (
                            <span
                                key={i}
                                className="text-[#363636] px-8 whitespace-nowrap"
                                style={{
                                    fontFamily: '"Myriad Pro", sans-serif',
                                    fontSize: '35px',
                                    lineHeight: '60px',
                                    fontWeight: 600,
                                    letterSpacing: '0px'
                                }}
                            >
                                Our Services
                            </span>
                        ))}
                    </div>
                    <div className="flex whitespace-nowrap animate-scroll" aria-hidden="true">
                        {[...Array(10)].map((_, i) => (
                            <span
                                key={i}
                                className="text-[#363636] px-8 whitespace-nowrap"
                                style={{
                                    fontFamily: '"Myriad Pro", sans-serif',
                                    fontSize: '35px',
                                    lineHeight: '60px',
                                    fontWeight: 600,
                                    letterSpacing: '0px'
                                }}
                            >
                                Our Services
                            </span>
                        ))}
                    </div>
                </div>

                {/* Central Image Overlay (Now on top) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-[280px] h-[172px] md:w-[412px] md:h-[254px]">
                    <div className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl relative">
                        <Image
                            src="/assests/image2.png"
                            alt="Services"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default ServicesSection;
