"use client";

import React from "react";

const DownloadCenter = () => {
    const downloadItems = [
        { title: "Board Report", link: "#" },
        { title: "Standalone Financial Statements", link: "#" },
        { title: "Corporate Governance Report", link: "#" },
        { title: "Consolidated Financial Statements", link: "#" },
        { title: "Business Responsibility and Sustainability Report", link: "#" },
        { title: "Glossary", link: "#" },
        { title: "Management Discussion and Analysis", link: "#" },
        { title: "AGM Notice", link: "#" },
        { title: "Annual Report 2024", link: "#" }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    /* Reusable item card */
    const DownloadItem = ({ item }: { item: { title: string; link: string } }) => (
        <div className="group flex items-start gap-3 cursor-pointer h-full">
            {/* Vertical accent bar */}
            <div className="w-[3px] self-stretch bg-[#004172] shrink-0 rounded-full" />

            <div className="flex flex-col justify-between h-full gap-2">
                {/* Title — exact layout: 183×36, 16px/20px Myriad Pro, #707070 */}
                <h3
                    className="text-[#707070] group-hover:text-[#F08900] transition-colors duration-200"
                    style={{
                        width: "183px",
                        height: "36px",
                        textAlign: "left",
                        font: 'normal normal normal 16px/20px "Myriad Pro", sans-serif',
                        letterSpacing: "0px",
                        opacity: 1,
                    }}
                >
                    {item.title}
                </h3>

                {/* Download link — always at the bottom */}
                <a
                    href={item.link}
                    className="flex items-center gap-[6px] text-[#004172] font-semibold text-[13px] md:text-[14px] group-hover:translate-x-1 transition-transform duration-200 w-fit"
                    style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                >
                    Download
                    <span className="text-[#FBAE17] text-[16px]">→</span>
                </a>
            </div>
        </div>
    );

    return (
        <section className="w-full py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-20">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <h2
                        className="font-bold"
                        style={{
                            fontFamily: '"Myriad Pro", sans-serif',
                            fontSize: '35px',
                            color: '#084B7D',
                            letterSpacing: '0px'
                        }}
                    >
                        Download Center
                    </h2>
                </div>

                {/* Main Content Box — exact spec: bg #E8F3FB, shadow 0px 3px 6px #00000029 */}
                <div
                    className="w-full rounded-[12px] relative"
                    style={{
                        background: '#E8F3FB',
                        boxShadow: '0px 3px 6px #00000029',
                        padding: '40px 60px',
                    }}
                >
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-10 pb-8">
                        {downloadItems.slice(0, 3).map((item, i) => (
                            <DownloadItem key={i} item={item} />
                        ))}
                    </div>

                    {/* Divider 1 */}
                    <hr style={{ borderColor: 'rgba(160,195,225,0.7)', borderTopWidth: '1px', margin: '0 0 1.75rem 0' }} />

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-10 pb-8">
                        {downloadItems.slice(3, 6).map((item, i) => (
                            <DownloadItem key={i} item={item} />
                        ))}
                    </div>

                    {/* Divider 2 */}
                    <hr style={{ borderColor: 'rgba(160,195,225,0.7)', borderTopWidth: '1px', margin: '0 0 1.75rem 0' }} />

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-10">
                        {downloadItems.slice(6, 9).map((item, i) => (
                            <DownloadItem key={i} item={item} />
                        ))}
                    </div>
                </div>

                {/* Back to Top */}
                <div className="flex justify-end mt-8">
                    <button
                        onClick={scrollToTop}
                        className="text-[#004172] font-bold text-[18px] md:text-[20px] flex items-center gap-2 hover:opacity-70 transition-opacity"
                        style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                    >
                        Back to Top
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DownloadCenter;
