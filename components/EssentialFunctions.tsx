"use client";

import React, { useState } from "react";
import Image from "next/image";

const tabs = [
    {
        num: "05",
        label: "Strategic sourcing",
        category: "Essential functions",
        title: "Strategic Sourcing",
        description:
            "Our strategic sourcing capabilities enable us to identify, evaluate, and partner with suppliers who share our commitment to quality, safety, and sustainability – providing a competitive edge in the global marketplace.",
        image: "/assests/slider/img5.png",
        contentBg: "#004172",
    },
    {
        num: "04",
        label: "Information technology",
        category: "Essential functions",
        title: "Information Technology",
        description:
            "In FY25, Syngene focused on enhancing its digital and IT capabilities through strategic initiatives aimed at driving innovation and operational excellence. The IT strategy is closely aligned with organizational priorities, emphasizing investments in automation and digitization to improve scientific and enterprise functions.",
        image: "/assests/slider/img4.png",
        contentBg: "#F08900",
    },
    {
        num: "03",
        label: "Quality management",
        category: "Essential functions",
        title: "Quality Management",
        description:
            "At Syngene, quality drives efficiency, innovation and competitive advantage. Our proactive approach combines robust systems, advanced technology, and a culture of excellence to ensure precision in every process.",
        image: "/assests/slider/img3.png",
        contentBg: "#004172",
    },
    {
        num: "02",
        label: "Environment, Health, Safety and Sustainability",
        category: "Essential functions",
        title: "Environment, Health, Safety and Sustainability",
        description:
            "We take our responsibility to people and the planet seriously. By using resources wisely and raising operational standards, we're building a safer, more sustainable, and efficient future for all.",
        image: "/assests/slider/img2.png",
        contentBg: "#F08900",
    },
    {
        num: "01",
        label: "Execution Excellence",
        category: "Essential functions",
        title: "Execution Excellence",
        description:
            "At Syngene, excellence is a core value that guides everything we do. Driven by a commitment to continuous improvement, we aim to consistently deliver value and delight our customers through strong project management, service delivery, and operational excellence.",
        image: "/assests/slider/img1.png",
        contentBg: "#004172",
    },
];

const STRIP_W = 68;

const EssentialFunctions = () => {
    // Desktop starts with 01 expanded (index 4)
    const [active, setActive] = useState(4);
    const [prevActive, setPrevActive] = useState<number | null>(null);
    const [contentKey, setContentKey] = useState(0);
    const [readMoreHover, setReadMoreHover] = useState<number | null>(null);

    const handleTabClick = (i: number) => {
        if (i === active) return;
        setPrevActive(active);
        setActive(i);
        setContentKey((k) => k + 1);
        setTimeout(() => setPrevActive(null), 700);
    };

    const reverseTabs = [...tabs].reverse();

    return (
        <section className="w-full bg-white font-sans overflow-hidden">
            {/* Desktop View - Horizontal Accordion (Original Order: 05 to 01) */}
            <div className="hidden md:block w-full" style={{ height: "560px" }}>
                <div className="flex h-full w-full">
                    {tabs.map((tab, i) => {
                        // Desktop should always have one open; fallback to 01 if mobile closed all
                        const effectiveActive = active === -1 ? 4 : active;
                        const isActive = i === effectiveActive;
                        const stripBg = tab.contentBg;
                        const isOrangeBg = tab.contentBg === "#F08900";
                        const fillColor = isOrangeBg ? "#004172" : "#FBAE17";
                        const barColor = isOrangeBg ? "#004172" : "#FBAE17";
                        const hoverTextColor = "#ffffff";
                        const isRMHovered = readMoreHover === i;
                        return (
                            <div
                                key={tab.num}
                                onClick={!isActive ? () => handleTabClick(i) : undefined}
                                className="relative overflow-hidden h-full"
                                style={{
                                    flexGrow: isActive ? 1 : 0,
                                    flexShrink: 0,
                                    flexBasis: isActive ? 0 : `${STRIP_W}px`,
                                    transition:
                                        "flex-grow 0.65s cubic-bezier(0.4,0,0.2,1), flex-basis 0.65s cubic-bezier(0.4,0,0.2,1)",
                                    cursor: isActive ? "default" : "pointer",
                                    display: "flex",
                                }}
                            >
                                {isActive ? (
                                    <div key={contentKey} className="flex h-full w-full">
                                        <div
                                            className="flex flex-col justify-between h-full"
                                            style={{
                                                background: tab.contentBg,
                                                width: "402px",
                                                minWidth: "402px",
                                                flexShrink: 0,
                                                padding: "40px 44px",
                                                overflow: "hidden",
                                                animation: "contentEnter 0.42s cubic-bezier(0.2,0,0.2,1) both",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgba(255,255,255,0.85)",
                                                    fontFamily: '"Myriad Pro", sans-serif',
                                                    fontSize: "18px",
                                                    fontWeight: 700,
                                                    display: "block",
                                                }}
                                            >
                                                {tab.num}
                                            </span>
                                            <div className="flex flex-col justify-center flex-1 py-6">
                                                <p
                                                    style={{
                                                        color: "rgba(255,255,255,0.72)",
                                                        fontFamily: '"Myriad Pro", sans-serif',
                                                        fontSize: "13px",
                                                        marginBottom: "8px",
                                                        letterSpacing: "0.02em",
                                                    }}
                                                >
                                                    {tab.category}
                                                </p>
                                                <h2
                                                    style={{
                                                        color: "#ffffff",
                                                        fontFamily: '"Myriad Pro", sans-serif',
                                                        fontSize: "24px",
                                                        fontWeight: 700,
                                                        lineHeight: "1.25",
                                                        marginBottom: "18px",
                                                        animation: "headingEnter 0.35s cubic-bezier(0.2,0,0.2,1) 0.06s both",
                                                    }}
                                                >
                                                    {tab.title}
                                                </h2>
                                                <p
                                                    style={{
                                                        width: "314px",
                                                        textAlign: "left",
                                                        font: 'normal normal normal 16px/20px "Myriad Pro", sans-serif',
                                                        letterSpacing: "0px",
                                                        color: "#FFFFFF",
                                                        opacity: 1,
                                                    }}
                                                >
                                                    {tab.description}
                                                </p>
                                                <div
                                                    className="relative inline-flex w-fit items-center gap-3 cursor-pointer overflow-hidden"
                                                    style={{ marginTop: "20px" }}
                                                    onMouseEnter={() => setReadMoreHover(i)}
                                                    onMouseLeave={() => setReadMoreHover(null)}
                                                >
                                                    <div
                                                        style={{
                                                            position: "absolute",
                                                            inset: 0,
                                                            background: fillColor,
                                                            transform: isRMHovered ? "translateX(0)" : "translateX(-100%)",
                                                            transition: "transform 0.3s ease-out",
                                                        }}
                                                    />
                                                    <div
                                                        className="relative z-10 shrink-0"
                                                        style={{
                                                            width: "3px",
                                                            height: "32px",
                                                            background: barColor,
                                                        }}
                                                    />
                                                    <span
                                                        className="relative z-10 pr-3"
                                                        style={{
                                                            color: isRMHovered ? hoverTextColor : "#ffffff",
                                                            transition: "color 0.2s ease",
                                                            fontFamily: '"Myriad Pro", sans-serif',
                                                            fontWeight: 600,
                                                            fontSize: "15px",
                                                        }}
                                                    >
                                                        Read More
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 relative overflow-hidden">
                                            <Image
                                                src={tab.image}
                                                alt={tab.title}
                                                fill
                                                className="object-cover"
                                                priority={isActive}
                                            />
                                        </div>
                                    </div>
                                ) : i === prevActive ? (
                                    <div
                                        className="flex items-center justify-center h-full w-full"
                                        style={{ background: tab.contentBg, overflow: "hidden" }}
                                    >
                                        <h2
                                            style={{
                                                color: "#ffffff",
                                                fontFamily: '"Myriad Pro", sans-serif',
                                                fontSize: "20px",
                                                fontWeight: 700,
                                                whiteSpace: "nowrap",
                                                transformOrigin: "center center",
                                                animation: "headingExit 0.55s cubic-bezier(0.4,0,1,1) forwards",
                                            }}
                                        >
                                            {tab.title}
                                        </h2>
                                    </div>
                                ) : (
                                    <div
                                        className="flex flex-col items-center h-full w-full select-none"
                                        style={{ background: stripBg }}
                                    >
                                        <span
                                            style={{
                                                width: "26px",
                                                height: "24px",
                                                textAlign: "left",
                                                letterSpacing: "0px",
                                                color: "#FFFFFF",
                                                opacity: 1,
                                                fontFamily: '"Myriad Pro", sans-serif',
                                                fontWeight: 700,
                                                fontSize: "15px",
                                                padding: "18px 0 0",
                                                flexShrink: 0,
                                                display: "block",
                                            }}
                                        >
                                            {tab.num}
                                        </span>
                                        <div className="flex-1 flex items-center justify-center overflow-hidden">
                                            <span
                                                style={{
                                                    color: "#ffffff",
                                                    fontFamily: '"Myriad Pro", sans-serif',
                                                    fontSize: "13px",
                                                    fontWeight: 500,
                                                    writingMode: "vertical-rl",
                                                    transform: "rotate(180deg)",
                                                    whiteSpace: "nowrap",
                                                    letterSpacing: "0.04em",
                                                    maxHeight: "220px",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                }}
                                            >
                                                {tab.label}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Mobile View - Vertical Accordion UI (Reversed Order: 01 to 05) */}
            <div className="md:hidden flex flex-col w-full bg-white">
                {reverseTabs.map((tab) => {
                    // Find actual index in original tabs array to maintain state sync
                    const originalIndex = tabs.findIndex(t => t.num === tab.num);
                    const isActive = originalIndex === active;
                    return (
                        <div key={tab.num} className="w-full flex flex-col border-b border-white/10 last:border-b-0 overflow-hidden">
                            {/* Header Strip */}
                            <div
                                onClick={() => setActive(isActive ? -1 : originalIndex)}
                                className="flex items-center justify-between px-6 py-5 cursor-pointer transition-colors duration-300"
                                style={{ backgroundColor: tab.contentBg }}
                            >
                                <div className="flex items-center gap-6">
                                    <span
                                        className="text-white font-bold text-[22px] opacity-80"
                                        style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                                    >
                                        {tab.num}
                                    </span>
                                    <span
                                        className="text-white font-semibold text-[15px] uppercase tracking-[0.1em]"
                                        style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                                    >
                                        {tab.label}
                                    </span>
                                </div>
                                <div className={`text-white transition-transform duration-500 ease-in-out ${isActive ? 'rotate-180' : ''}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>

                            {/* Expanded Content Section */}
                            <div
                                className={`transition-all duration-700 ease-in-out ${isActive ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                                style={{ backgroundColor: tab.contentBg }}
                            >
                                <div className="px-6 pt-6 pb-10 flex flex-col gap-6">
                                    {/* Small Image */}
                                    <div className="relative w-full h-[220px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                                        <Image
                                            src={tab.image}
                                            alt={tab.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/5"></div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-col gap-4">
                                        <span
                                            className="text-white/60 text-[12px] font-bold uppercase tracking-[0.2em]"
                                            style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                                        >
                                            {tab.category}
                                        </span>
                                        <h3
                                            className="text-white font-bold text-[26px] leading-[1.2]"
                                            style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                                        >
                                            {tab.title}
                                        </h3>
                                        <p
                                            className="text-white/90 text-[16px] leading-[22px]"
                                            style={{ fontFamily: '"Myriad Pro", sans-serif', fontWeight: 400 }}
                                        >
                                            {tab.description}
                                        </p>

                                        <div className="flex items-center gap-3 pt-4 w-fit cursor-pointer">
                                            <div className="w-[3px] h-8 bg-[#FBAE17]" />
                                            <span
                                                className="text-white font-semibold text-[16px] tracking-wide"
                                                style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                                            >
                                                Read More
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <style jsx>{`
                @keyframes contentEnter {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes headingEnter {
                    from { opacity: 0; transform: translateX(10px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes headingExit {
                    from { opacity: 1; transform: rotate(0) scale(1); }
                    to { opacity: 0; transform: rotate(-90deg) scale(0.8); }
                }
            `}</style>
        </section>
    );
};

export default EssentialFunctions;
