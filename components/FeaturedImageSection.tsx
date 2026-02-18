"use client";

import React from "react";
import Image from "next/image";

const FeaturedImageSection = () => {
    return (
        <section className="relative w-full overflow-hidden animate-reveal-up">
            <Image
                src="/assests/img1.png"
                alt="Featured Innovation"
                width={1920}
                height={800}
                layout="responsive"
                className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6 md:translate-y-12">
                <div
                    className="bg-white/70 backdrop-blur-[4px] p-6 md:p-16 w-full max-w-[825px] md:min-h-[425px] shadow-2xl border border-white flex flex-col justify-center animate-slide-up-fade animation-delay-500"
                >
                    <span className="text-gray-500 text-sm md:text-lg mb-2 block font-medium">About Syngene</span>
                    <h2
                        className="text-[#363636] font-semibold mb-6 leading-[40px] text-left"
                        style={{
                            fontSize: '35px',
                            fontFamily: '"Myriad Pro", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                            letterSpacing: '0px',
                            width: 'auto',
                            maxWidth: '548px'
                        }}
                    >
                        Driving Scientific Innovation with Service, Quality and Excellence
                    </h2>
                    <p
                        className="text-[#004172] text-[18px] leading-[20px] mb-8 text-left"
                        style={{
                            fontFamily: '"Myriad Pro", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                            maxWidth: '609px'
                        }}
                    >
                        We combine cutting-edge science with a deep understanding of customer needs
                        to drive innovation. Our commitment to service, quality and excellence is
                        embedded in every aspect of our operations, fostering trust, confidentiality, and
                        seamless collaboration.
                    </p>
                    <div className="flex items-center gap-3 group cursor-pointer w-fit">
                        <div className="w-[3px] h-8 bg-[#FBAE17]" />
                        <span
                            className="text-[#004172] font-semibold hover:underline decoration-2 underline-offset-4"
                            style={{
                                fontSize: '18px',
                                fontFamily: '"Myriad Pro", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                                width: 'auto',
                                height: '27px',
                                display: 'inline-block',
                                lineHeight: '27px',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Read More
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedImageSection;
