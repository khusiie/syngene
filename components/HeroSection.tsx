"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="relative min-h-[calc(100vh-64px)] w-full overflow-hidden bg-white px-6 md:px-20 pt-0 pb-2 flex flex-col justify-center">
            {/* Hero Content */}
            <div className="relative z-10 w-full h-full">
                {/* Left Section: Text Content */}
                <div className="hidden md:block">
                    {/* INNOVATING */}
                    <h2
                        className="absolute uppercase"
                        style={{
                            top: '111px',
                            left: '34px',
                            color: '#F08900',
                            fontSize: '40px',
                            lineHeight: '60px',
                            fontWeight: 'bold',
                            width: '229px',
                            height: '50px',
                            textAlign: 'left',
                            fontFamily: '"Myriad Pro", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                            letterSpacing: '0px',
                            opacity: 1
                        } as React.CSSProperties}
                    >
                        INNOVATING
                    </h2>

                    {/* REACH */}
                    <h1
                        className="absolute text-[#004772] uppercase"
                        style={{
                            top: '160px',
                            left: '34px',
                            fontSize: '81px',
                            lineHeight: '60px',
                            fontWeight: 'normal',
                            width: '232px',
                            height: '81px',
                            textAlign: 'left',
                            fontFamily: '"Myriad Pro", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                        } as React.CSSProperties}
                    >
                        REACH
                    </h1>

                    {/* Researching New Paths Line */}
                    <p
                        style={{
                            top: '231px',
                            left: '90px',
                            width: '260px',
                            height: 'auto',
                            textAlign: 'center',
                            font: 'normal normal normal 16px/20px "Myriad Pro", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                            letterSpacing: '0px',
                            color: '#363636',
                            opacity: 1,
                            position: 'absolute',
                            whiteSpace: 'nowrap'
                        } as React.CSSProperties}
                    >
                        Researching New Paths.<br />
                        Delivering Breakthroughs.
                    </p>

                    {/* Action Links */}
                    <div className="absolute flex items-center gap-8" style={{ top: '290px', left: '34px' }}>
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-[3px] h-8 bg-[#FBAE17]" />
                            <span className="text-[#004772] font-semibold text-lg hover:underline decoration-2 underline-offset-4">Read More</span>
                        </div>
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-[3px] h-8 bg-[#FBAE17]" />
                            <span className="text-[#004772] font-semibold text-lg hover:underline decoration-2 underline-offset-4">Watch the Video</span>
                        </div>
                    </div>
                </div>

                <div className="flex md:hidden flex-col space-y-4 pt-10">
                    <h2 className="text-[#F08900] text-4xl font-bold uppercase">INNOVATING</h2>
                    <h1 className="text-[#004772] text-7xl font-normal leading-none">REACH</h1>
                    <p className="text-[#363636] text-lg">Researching New Paths.<br />Delivering Breakthroughs.</p>
                </div>

                {/* Right Side Hero Motif Overlay - Aligned to Mockup 1155 */}
                <div
                    className="hidden md:block absolute z-0 pointer-events-none"
                    style={{
                        top: '60px',
                        left: '500px',
                        width: '650px',
                        height: '475px',
                        background: "transparent url('/assests/HeroSection.png') center center no-repeat",
                        backgroundSize: 'contain',
                        opacity: 1
                    }}
                />

                <div className="relative flex justify-center items-center h-[500px] md:h-[600px] animate-fade-in">
                </div>
            </div>


            <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 animate-bounce"
            >
                <div
                    className="flex items-center justify-center rounded-full transition-transform hover:scale-110 shadow-xl overflow-hidden"
                    style={{
                        width: '35px',
                        height: '35px',
                        padding: '1.5px',
                        background: 'linear-gradient(93deg, #F78D2F 0%, #A0609E 52%, #004172 100%)'
                    }}
                >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="heroArrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#F78D2F" />
                                    <stop offset="52%" stopColor="#A0609E" />
                                    <stop offset="100%" stopColor="#004172" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M7 13L12 18L17 13"
                                stroke="url(#heroArrowGradient)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7 6L12 11L17 6"
                                stroke="url(#heroArrowGradient)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sky-50/30 to-transparent -z-10" />
        </div>
    );
};

export default HeroSection;
