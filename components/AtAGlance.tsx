"use client";

import React from "react";

const AtAGlance = () => {
    const stats = [
        {
            value: "30+",
            valueSuffix: "Years",
            valueColor: "gradient",
            suffixColor: "text-[#4F5B93]",
            description: "of scientific expertise",
        },
        {
            value: "400+",
            valueColor: "gradient",
            description: "Patents held by customers",
        },
        {
            value: "4",
            valueColor: "gradient",
            description: "Campuses",
        },
        {
            value: "~400",
            valueColor: "gradient",
            description: "Active customers",
        },
        {
            label: "Rs",
            value: "3,642",
            valueSuffix: "Cr",
            valueColor: "gradient",
            suffixColor: "text-[#004772]",
            description: "(430 Mn USD) Revenue from operations in FY25",
        },
        {
            label: "Rs",
            value: "475",
            valueSuffix: "Cr",
            valueColor: "gradient",
            suffixColor: "text-[#004772]",
            description: "Profit After Tax in FY25#",
        },
        {
            value: "2.5+",
            valueSuffix: "Mn sq. ft.",
            valueColor: "gradient",
            suffixColor: "text-[#4F5B93]",
            description: "of world-class R&D and manufacturing",
        },
        {
            value: "5,641",
            valueColor: "gradient",
            description: "Scientists",
        },
        {
            value: "8,235",
            valueColor: "gradient",
            description: "Total workforce (as of March 31, 2025)",
        },
        {
            value: "95%",
            valueColor: "gradient",
            description: "Total hazardous and non-hazardous waste recycled",
        },
        {
            value: "92%",
            valueColor: "gradient",
            description: "Power sourced from renewable energy",
        },
    ];

    return (
        <section id="at-a-glance" className="bg-white pt-10 pb-10 md:pb-24 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                <h2
                    style={{
                        width: '100%',
                        height: 'auto',
                        textAlign: 'center',
                        font: 'normal normal 600 35px/60px "Myriad Pro", sans-serif',
                        letterSpacing: '0px',
                        color: '#363636',
                        opacity: 1,
                        marginBottom: '60px'
                    } as React.CSSProperties}
                >
                    Syngene at a Glance
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 relative gap-6 md:gap-0">
                    {/* Dotted dividers using absolute lines for consistency (Desktop only) */}
                    <div className="hidden md:block absolute inset-0 pointer-events-none">
                        <div className="absolute left-1/4 top-0 bottom-0 border-r border-[#D1D1D1] border-dashed" />
                        <div className="absolute left-2/4 top-0 bottom-0 border-r border-[#D1D1D1] border-dashed" />
                        <div className="absolute left-3/4 top-0 bottom-0 border-r border-[#D1D1D1] border-dashed" />
                        <div className="absolute top-[29.1%] left-0 right-0 border-b border-[#D1D1D1] border-dashed" />
                        <div className="absolute top-[70.9%] left-0 right-0 border-b border-[#D1D1D1] border-dashed" />
                    </div>

                    {stats.map((stat, index) => {
                        const isCenterRow = index >= 4 && index < 8;
                        return (
                            <div
                                key={index}
                                className={`px-6 py-8 md:py-0 rounded-xl md:rounded-none bg-gray-50/50 md:bg-transparent border border-gray-100 md:border-none shadow-sm md:shadow-none flex flex-col items-center md:items-start text-center md:text-left justify-center relative transition-all duration-300 hover:bg-white md:hover:bg-gray-50/30 group ${isCenterRow ? 'md:py-4 md:min-h-[130px]' : 'md:py-2 md:min-h-[90px]'}`}
                            >
                                {stat.label && (
                                    <span
                                        className="text-[#9E9E9E] text-[12px] font-normal mb-0.5"
                                        style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                                    >{stat.label}</span>
                                )}
                                <div className={`flex items-baseline gap-1 ${isCenterRow ? 'mb-2' : 'mb-1'} whitespace-nowrap`}>
                                    <span
                                        className={`text-[36px] font-medium leading-tight tracking-tight ${stat.valueColor === "gradient" ? "" : stat.valueColor}`}
                                        style={stat.valueColor === "gradient" ? {
                                            background: 'linear-gradient(135deg, #F78D2F 0%, #A0609E 45%, #004172 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            display: 'inline-block',
                                            fontFamily: '"Myriad Pro", sans-serif'
                                        } : {
                                            fontFamily: '"Myriad Pro", sans-serif'
                                        }}
                                    >
                                        {stat.value}
                                    </span>
                                    {stat.valueSuffix && (
                                        <span
                                            className={`text-[20px] font-normal ml-1 ${stat.suffixColor || "text-[#4F5B93]"}`}
                                            style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                                        >
                                            {stat.valueSuffix}
                                        </span>
                                    )}
                                </div>
                                <p
                                    className="text-[#363636] text-[13px] leading-[16px] font-normal max-w-[220px]"
                                    style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                                >
                                    {stat.description}
                                </p>
                            </div>
                        );
                    })}

                    {/* Footnote cell */}
                    <div className="px-6 py-6 md:py-2 flex flex-col items-center md:items-start text-center md:text-left justify-center md:min-h-[90px]">
                        <div className="text-[12px] md:text-[14px] text-[#363636] space-y-1 opacity-70">
                            <p># Before exceptional items</p>
                            <p>1 USD = Rs 84.65</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex items-center justify-start gap-2 group cursor-pointer w-full md:w-fit">
                    <div className="w-[2px] h-8 md:h-[34px] bg-[#FBAE17]" />
                    <span
                        className="text-[#004772] font-semibold text-[18px] group-hover:underline decoration-2 underline-offset-8"
                        style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                    >
                        Read More
                    </span>
                </div>
            </div>
        </section>
    );
};

export default AtAGlance;
