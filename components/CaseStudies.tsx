"use client";

import React, { useState, useRef, useEffect } from "react";
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
        },
        {
            id: 5,
            title: "Strategic Collaboration in Biologics Manufacturing",
            image: "/assests/imageplace-holder.png",
            link: "#"
        }
    ];

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth;
            const scrollTo = direction === "left"
                ? scrollLeft - scrollAmount
                : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });

            // Manually update slide number since we disabled auto-scroll tracking
            if (direction === "right" && currentSlide < totalSlides) {
                setCurrentSlide(prev => prev + 1);
            } else if (direction === "left" && currentSlide > 1) {
                setCurrentSlide(prev => prev - 1);
            }
        }
    };

    return (
        <section className="w-full pt-10 pb-24 md:py-10 bg-white overflow-hidden">
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
                        className="absolute left-[28%] md:left-[-35px] bottom-[-60px] md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-30 flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 group w-[45px] h-[45px] md:w-[60px] md:h-[60px]"
                        style={{
                            background: 'white',
                            padding: '0.5px',
                            backgroundImage: 'linear-gradient(white, white), linear-gradient(93deg, #F78D2F 0%, #A0609E 52%, #004172 100%)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'content-box, border-box',
                            border: '1px solid transparent',
                            opacity: 1,
                        }}
                        aria-label="Previous slide"
                    >
                        <div
                            className="flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)] w-[35px] h-[35px] md:w-[48px] md:h-[48px]"
                            style={{
                                background: '#E5E7EB',
                                border: '1px solid #FFFFFF',
                                opacity: 1,
                                backdropFilter: 'blur(4px)',
                                WebkitBackdropFilter: 'blur(4px)',
                            }}
                        >
                            <svg width="10" height="18" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[12px] md:h-[21px]">
                                <defs>
                                    <linearGradient id="arrowGradient95" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(95)">
                                        <stop offset="0%" stopColor="#F78D2F" />
                                        <stop offset="52%" stopColor="#A0609E" />
                                        <stop offset="100%" stopColor="#004172" />
                                    </linearGradient>
                                </defs>
                                <path d="M10.5 19L2 10.5L10.5 2" stroke="url(#arrowGradient95)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-[28%] md:right-[-35px] bottom-[-60px] md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-30 flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 group w-[45px] h-[45px] md:w-[60px] md:h-[60px]"
                        style={{
                            background: 'white',
                            padding: '0.5px',
                            backgroundImage: 'linear-gradient(white, white), linear-gradient(93deg, #F78D2F 0%, #A0609E 52%, #004172 100%)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'content-box, border-box',
                            border: '1px solid transparent',
                            opacity: 1,
                        }}
                        aria-label="Next slide"
                    >
                        <div
                            className="flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)] w-[35px] h-[35px] md:w-[48px] md:h-[48px]"
                            style={{
                                background: '#E5E7EB',
                                border: '1px solid #FFFFFF',
                                opacity: 1,
                                backdropFilter: 'blur(4px)',
                                WebkitBackdropFilter: 'blur(4px)',
                            }}
                        >
                            <svg width="10" height="18" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[12px] md:h-[21px]">
                                <path d="M1.5 2L10 10.5L1.5 19" stroke="url(#arrowGradient95)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex flex-nowrap gap-6 overflow-x-hidden no-scrollbar pb-8 pt-4 px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {cases.map((item) => (
                            <div
                                key={item.id}
                                className="flex-shrink-0 snap-center px-2 w-[300px] md:w-[350px]"
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
                <div className="hidden md:block text-center mt-12 text-[#363636] text-[20px] md:text-[24px] font-medium">
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
