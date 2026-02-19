"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
const CaseStudies = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 3;

    const cases = [
        {
            id: 1,
            title: "Syngene partners with a client for Global Economy Decarbonization",
            image: "/assests/imageplace-holder.png",
            link: "#"
        },
        {
            id: 2,
            title: "Enhancing Patient Compliance: Developing an Extended-Release Anti-Epileptic Drug",
            image: "/assests/imageplace-holder.png",
            link: "#"
        },
        {
            id: 3,
            title: "Syngene Enhances Bispecific Antibody Production",
            image: "/assests/imageplace-holder.png",
            link: "#"
        },
        {
            id: 4,
            title: "Pharmaceutical Breakthrough: Broad-Spectrum Solution for Multidrug Resistance",
            image: "/assests/imageplace-holder.png",
            link: "#"
        }
    ];

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left"
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });

            // Basic slide calculation logic
            if (direction === "right" && currentSlide < totalSlides) {
                setCurrentSlide(prev => prev + 1);
            } else if (direction === "left" && currentSlide > 1) {
                setCurrentSlide(prev => prev - 1);
            }
        }
    };

    return (
        <section className="w-full py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-20">
                {/* Section Header */}
                <div className="flex justify-center mb-16">
                    <h2
                        className="font-bold"
                        style={{
                            fontFamily: '"Myriad Pro", sans-serif',
                            fontSize: '35px',
                            lineHeight: '35px',
                            color: '#084B7D',
                            letterSpacing: '0px'
                        }}
                    >
                        Case Studies
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative group">
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-[-20px] md:left-[-30px] top-1/2 -translate-y-1/2 z-30 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                        style={{
                            width: '60px',
                            height: '60px',
                            background: 'transparent',
                            border: '1px solid #E5E7EB', // Using light gray for visibility on white bg
                            backdropFilter: 'blur(1px)',
                            WebkitBackdropFilter: 'blur(1px)'
                        }}
                        aria-label="Previous slide"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#004172" />
                                    <stop offset="100%" stopColor="#A0609E" />
                                </linearGradient>
                            </defs>
                            <path d="m15 18-6-6 6-6" stroke="url(#arrowGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-[-20px] md:right-[-30px] top-1/2 -translate-y-1/2 z-30 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                        style={{
                            width: '60px',
                            height: '60px',
                            background: 'transparent',
                            border: '1px solid #E5E7EB', // Using light gray for visibility on white bg
                            backdropFilter: 'blur(1px)',
                            WebkitBackdropFilter: 'blur(1px)'
                        }}
                        aria-label="Next slide"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m9 18 6-6-6-6" stroke="url(#arrowGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 pt-4 px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {cases.map((item) => (
                            <div
                                key={item.id}
                                className="flex-shrink-0 snap-center px-2"
                                style={{ width: '350px' }}
                            >
                                <div
                                    className="bg-white flex flex-col h-[386px] overflow-hidden transition-all duration-500 hover:shadow-lg"
                                    style={{
                                        boxShadow: '0px 0px 6px #00000029',
                                        borderRadius: '20px',
                                        padding: '13px'
                                    }}
                                >
                                    {/* Card Image - Specific Dimensions (324x223px) */}
                                    <div className="flex justify-center mb-4">
                                        <div className="relative w-[324px] h-[223px] rounded-[20px] overflow-hidden bg-gray-50 shadow-sm">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="flex flex-col flex-grow px-2">
                                        <h3
                                            className="text-[#363636] text-[15px] font-bold leading-tight mb-4 line-clamp-3"
                                            style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                                        >
                                            {item.title}
                                        </h3>

                                        <div className="mt-auto flex items-center gap-2 group/link cursor-pointer w-fit pb-2">
                                            <div className="w-[2px] h-4 bg-[#FBAE17] opacity-80" />
                                            <span
                                                className="text-[#004172] font-semibold text-[14px] group-hover/link:underline"
                                                style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                                            >
                                                Read More
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Indicator */}
                <div className="text-center mt-12 text-[#363636] text-[20px] md:text-[24px] font-medium">
                    <span className="text-[28px] md:text-[32px]">{String(currentSlide).padStart(2, '0')}</span>
                    <span className="mx-1 opacity-50 text-[18px]">/0{totalSlides}</span>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default CaseStudies;
