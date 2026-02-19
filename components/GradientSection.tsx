"use client";

import React from "react";

const GradientSection = () => {
    return (
        <section
            className="w-full relative overflow-hidden animate-reveal-up py-32"
            style={{
                minHeight: '662px',
                background: 'transparent linear-gradient(91deg, #F78D2F 0%, #A0609E 52%, #004172 100%) 0% 0% no-repeat padding-box',
                opacity: 1
            }}
        >
            <div className="container mx-auto px-6 md:px-20">
                <div className="flex flex-col gap-12 max-w-4xl">
                    {/* Top Section */}
                    <div className="flex flex-col items-start gap-4 group cursor-pointer transition-all duration-500">
                        <div className="bg-white px-4 py-2">
                            <span className="text-[#363636] text-[18px] font-medium uppercase tracking-wider" style={{ fontFamily: '"Myriad Pro", sans-serif' }}>
                                Strategic Priorities
                            </span>
                        </div>
                        <h2 className="text-white text-3xl md:text-[60px] font-semibold leading-tight group-hover:translate-y-[-5px] transition-transform duration-500" style={{ fontFamily: '"Myriad Pro", sans-serif' }}>
                            Research Services
                        </h2>

                        {/* Hover Description Wrapper (Collapses space on desktop, visible on mobile) */}
                        <div className="grid grid-rows-1 md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] md:transition-[grid-template-rows] md:duration-500 md:ease-in-out w-full">
                            <div className="overflow-hidden">
                                <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-700 md:ease-in-out flex flex-col gap-6 pt-6">
                                    <p
                                        className="text-white max-w-[800px]"
                                        style={{
                                            font: '500 16px/20px "Myriad Pro", sans-serif',
                                            letterSpacing: '0px'
                                        }}
                                    >
                                        Provide an integrated end-to-end therapeutic discovery services encompassing drug discovery, pre-clinical and clinical development capabilities across technologies, platforms, disciplines, disease areas and therapeutic modalities.
                                    </p>

                                    <div className="flex items-center gap-3 transition-transform duration-500 hover:translate-x-2 pb-2">
                                        <div className="w-[2px] h-6 bg-[#004172] opacity-80" />
                                        <span className="text-white font-semibold text-[18px]">
                                            Read More
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="w-full h-[1px] bg-white opacity-40 my-4" />

                    {/* Bottom Section */}
                    <div className="flex flex-col items-start gap-4 group cursor-pointer transition-all duration-500">
                        <div className="bg-white px-4 py-2">
                            <span className="text-[#363636] text-[18px] font-medium uppercase tracking-wider" style={{ fontFamily: '"Myriad Pro", sans-serif' }}>
                                Our Value Creation Model
                            </span>
                        </div>
                        <h2 className="text-white text-3xl md:text-[60px] font-semibold leading-tight group-hover:translate-y-[-5px] transition-transform duration-500" style={{ fontFamily: '"Myriad Pro", sans-serif' }}>
                            Our Business
                        </h2>

                        {/* Hover Description Wrapper (Collapses space on desktop, visible on mobile) */}
                        <div className="grid grid-rows-1 md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] md:transition-[grid-template-rows] md:duration-500 md:ease-in-out w-full">
                            <div className="overflow-hidden">
                                <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-700 md:ease-in-out flex flex-col gap-6 pt-6">
                                    <p
                                        className="text-white max-w-[800px]"
                                        style={{
                                            font: '500 16px/20px "Myriad Pro", sans-serif',
                                            letterSpacing: '0px'
                                        }}
                                    >
                                        We are an integrated research, development and manufacturing organization providing scientific services from early discovery to commercial supply. We serve a wide range of industrial sectors including pharmaceutical, biotechnology, nutrition, animal health, consumer goods and specialty chemical companies.
                                    </p>

                                    <div className="flex items-center gap-3 transition-transform duration-500 hover:translate-x-2 pb-2">
                                        <div className="w-[2px] h-6 bg-[#004172] opacity-80" />
                                        <span className="text-white font-semibold text-[18px]">
                                            Read More
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GradientSection;
