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

    return (
        <section className="w-full py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-20">
                {/* Section Header */}
                <div className="text-center mb-16">
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

                {/* Main Content Box */}
                <div
                    className="w-full rounded-[20px] p-8 md:p-16 relative shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)]"
                    style={{ background: '#F0F7FD' }} // Light blue/white background from image
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                        {downloadItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-start gap-4 group/item ${index < 6 ? 'md:pb-12 md:border-b border-gray-200/50' : ''
                                    }`}
                            // Horizontal lines logic: items 0-5 have border bottom on md+ screens
                            // This creates the 2 divider lines for the 3 rows
                            >
                                {/* Vertical Accent Bar */}
                                <div className="w-[3px] h-12 bg-[#004172] shrink-0 mt-1" />

                                <div className="flex flex-col gap-2">
                                    <h3
                                        className="text-[#626262] text-[16px] md:text-[18px] font-medium leading-tight"
                                        style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                                    >
                                        {item.title}
                                    </h3>

                                    <a
                                        href={item.link}
                                        className="flex items-center gap-2 text-[#004172] font-semibold text-[14px] md:text-[16px] hover:translate-x-1 transition-transform duration-300 w-fit"
                                    >
                                        Download
                                        <span className="text-[#FBAE17] text-[18px]">→</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile override for borders to ensure clean grid look */}
                    <style jsx>{`
                        @media (max-width: 768px) {
                            .grid > div {
                                border-bottom: 1px solid rgba(229, 231, 235, 0.5);
                                padding-bottom: 2rem;
                            }
                            .grid > div:last-child {
                                border-bottom: none;
                                padding-bottom: 0;
                            }
                        }
                    `}</style>
                </div>

                {/* Back to Top */}
                <div className="flex justify-end mt-12">
                    <button
                        onClick={scrollToTop}
                        className="text-[#004172] font-bold text-[20px] md:text-[24px] flex items-center gap-2 hover:opacity-80 transition-opacity"
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
