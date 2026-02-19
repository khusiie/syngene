"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const InfoImageSections = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    const sections = [
        {
            title: "Research Services",
            description: "Scientific rigor and cross-functional collaboration propelled the advancement of discovery programs across multiple therapeutic areas.",
            image: "/assests/imageplace-holder.png"
        },
        {
            title: "Dedicated R&D Centres",
            description: "Our long-standing collaborations with pharmaceutical leaders exemplify our commitment to scientific rigor, operational excellence, and shared success.",
            image: "/assests/imageplace-holder.png"
        },
        {
            title: "Manufacturing Services",
            description: "State-of-the-art facilities and a commitment to quality ensure seamless transition from development to commercial-scale manufacturing.",
            image: "/assests/imageplace-holder.png"
        },
        {
            title: "Development Services",
            description: "Comprehensive development solutions tailored to accelerate your path to clinic, ensuring efficiency and scientific excellence.",
            image: "/assests/imageplace-holder.png"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const totalHeight = rect.height;
            const windowHeight = window.innerHeight;

            // Calculate how much of the container has passed the top of the viewport
            // We want the progress to be 0 when the top of the container is at the bottom of the viewport
            // and 100 when the bottom of the container is at the bottom of the viewport
            const scrolled = windowHeight - rect.top;
            const scrollRange = totalHeight;

            let currentProgress = (scrolled / scrollRange) * 100;
            currentProgress = Math.max(0, Math.min(100, currentProgress));

            setProgress(currentProgress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="w-full relative">
            {sections.map((section, index) => (
                <section
                    key={index}
                    className="relative w-full h-[600px] md:h-screen overflow-hidden group"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0 bg-[#1a1a1a]">
                        <Image
                            src={section.image}
                            alt={section.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 h-full container mx-auto px-6 md:pl-[128px] md:pr-20 flex flex-col justify-center">
                        <div className="max-w-[550px] space-y-6">
                            <h2
                                className="text-white text-[28px] md:text-[35px] font-semibold md:leading-[60px] leading-tight animate-reveal-up"
                                style={{
                                    fontFamily: '"Myriad Pro", sans-serif',
                                    letterSpacing: '0px'
                                }}
                            >
                                {section.title}
                            </h2>
                            <p
                                className="text-white text-[16px] leading-[20px] opacity-100 animate-reveal-up delay-100 w-full md:w-[400px]"
                                style={{
                                    fontFamily: '"Myriad Pro", sans-serif',
                                    textAlign: 'left',
                                    letterSpacing: '0px'
                                }}
                            >
                                {section.description}
                            </p>

                            <div className="flex items-center gap-3 pt-4 group/link cursor-pointer w-fit animate-reveal-up delay-200">
                                <div className="w-[3px] h-8 bg-[#FBAE17]" />
                                <span
                                    className="text-white group-hover/link:underline decoration-2 underline-offset-4"
                                    style={{
                                        font: 'normal normal 600 16px/20px "Myriad Pro", sans-serif',
                                        letterSpacing: '0px',
                                        width: '74px',
                                        height: '16px',
                                        display: 'inline-block',
                                        opacity: 1
                                    }}
                                >
                                    Read More
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Unified Progress Bar Line at Bottom */}
                    <div className="absolute bottom-10 left-6 md:left-20 right-6 md:right-20 h-[1.5px] z-20">
                        <div className="relative w-full h-full bg-white/20">
                            {/* Active portion of progress bar synced with scroll */}
                            <div
                                className="absolute top-0 left-0 h-full bg-white transition-all duration-150 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default InfoImageSections;
