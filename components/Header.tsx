"use client";

import React from "react";

const Header = () => {
    return (
        <header
            className="relative mx-6 md:ml-[97px] md:mr-20 h-[64px] bg-[#004772] flex items-center justify-between px-6 md:px-10 text-white z-50 shadow-2xl transition-all duration-300"
        >
            {/* Logo Section */}
            <div className="flex items-center">
                <span className="text-2xl font-bold italic tracking-tight font-serif select-none cursor-pointer hover:opacity-90 transition-opacity">
                    Syngene
                </span>
            </div>

            {/* Center Title Section */}
            <div className="flex-1 flex justify-center">
                <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-sky-100/90 hidden md:block">
                    ANNUAL REPORT 2025
                </span>
            </div>

            {/* Right Controls Section */}
            <div className="flex items-center">
                {/* Download Icon */}
                <button
                    className="p-2 hover:bg-white/10 rounded-full transition-colors group"
                    aria-label="Download Report"
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:translate-y-0.5 transition-transform"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                </button>

                {/* Vertical Divider */}
                <div className="h-10 w-[1.5px] bg-white/20 mx-6" />

                {/* Menu Button */}
                <button
                    className="flex flex-col items-center justify-center space-y-[-2px] hover:text-sky-200 transition-colors group"
                    aria-label="Menu"
                >
                    <span className="text-[12px] font-bold tracking-widest leading-none">ME</span>
                    <span className="text-[12px] font-bold tracking-widest leading-none">NU</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
