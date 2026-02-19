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
    const [active, setActive] = useState(4);
    const [prevActive, setPrevActive] = useState<number | null>(null);
    const [contentKey, setContentKey] = useState(0);
    const [readMoreHover, setReadMoreHover] = useState<number | null>(null);

    const handleTabClick = (i: number) => {
        if (i === active) return;
        setPrevActive(active);          // remember old tab for exit animation
        setActive(i);                   // expand new tab immediately (flex starts)
        setContentKey((k) => k + 1);   // force content remount → enter animation
        // Once flex collapse is done, clear prevActive so normal strip renders
        setTimeout(() => setPrevActive(null), 700);
    };

    return (
        <section className="w-full overflow-hidden" style={{ height: "560px" }}>
            <div className="flex h-full w-full">
                {tabs.map((tab, i) => {
                    const isActive = i === active;
                    const stripBg = tab.contentBg;
                    const isOrangeBg = tab.contentBg === "#F08900";
                    // Orange bg → navy fill + navy bar + white text; Navy bg → yellow fill + yellow bar + navy text
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
                                /* ── ACTIVE PANEL — content keyed so enter animation replays ── */
                                <div key={contentKey} className="flex h-full w-full">
                                    {/* Content side — enter animation */}
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
                                        {/* Number — top */}
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

                                        {/* Centre block — category + title + description */}
                                        <div className="flex flex-col justify-center flex-1 py-6">
                                            {/* Category */}
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

                                            {/* Title — wipes in left→right on tab switch */}
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

                                            {/* Description */}
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

                                            {/* Read More — close to description */}
                                            <div
                                                className="relative inline-flex w-fit items-center gap-3 cursor-pointer overflow-hidden"
                                                style={{ marginTop: "20px" }}
                                                onMouseEnter={() => setReadMoreHover(i)}
                                                onMouseLeave={() => setReadMoreHover(null)}
                                            >
                                                {/* Sliding fill — color adapts to bg */}
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        inset: 0,
                                                        background: fillColor,
                                                        transform: isRMHovered ? "translateX(0)" : "translateX(-100%)",
                                                        transition: "transform 0.3s ease-out",
                                                    }}
                                                />
                                                {/* Bar */}
                                                <div
                                                    className="relative z-10 shrink-0"
                                                    style={{
                                                        width: "3px",
                                                        height: "32px",
                                                        background: barColor,
                                                    }}
                                                />
                                                {/* Text */}
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

                                    {/* Image side */}
                                    <div className="flex-1 relative overflow-hidden">
                                        <Image
                                            src={tab.image}
                                            alt={tab.title}
                                            fill
                                            className="object-cover"
                                            priority={i === active}
                                        />
                                    </div>
                                </div>
                            ) : i === prevActive ? (
                                /* ── EXITING PANEL — heading rotates into strip slot ── */
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
                                /* ── COLLAPSED STRIP ── */
                                <div
                                    className="flex flex-col items-center h-full w-full select-none"
                                    style={{ background: stripBg }}
                                >
                                    {/* Number on top */}
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

                                    {/* Rotated label */}
                                    <div className="flex-1 flex items-center justify-center overflow-hidden">
                                        <span
                                            style={{
                                                color: "#ffffff",
                                                fontFamily:
                                                    '"Myriad Pro", sans-serif',
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
        </section>
    );
};

export default EssentialFunctions;
