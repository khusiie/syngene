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
        <section className="bg-white pt-10 pb-24 px-6 md:px-20">
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

                <div className="grid grid-cols-1 md:grid-cols-4 relative">
                    {/* Dotted dividers using absolute lines for consistency */}
                    <div className="hidden md:block absolute inset-0 pointer-events-none">
                        <div className="absolute left-1/4 top-0 bottom-0 border-r border-[#D1D1D1] border-dashed" />
                        <div className="absolute left-2/4 top-0 bottom-0 border-r border-[#D1D1D1] border-dashed" />
                        <div className="absolute left-3/4 top-0 bottom-0 border-r border-[#D1D1D1] border-dashed" />
                        <div className="absolute top-1/3 left-0 right-0 border-b border-[#D1D1D1] border-dashed" />
                        <div className="absolute top-2/3 left-0 right-0 border-b border-[#D1D1D1] border-dashed" />
                    </div>

                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`p-10 flex flex-col justify-start min-h-[220px] relative transition-all duration-300 hover:bg-gray-50/30 group`}
                        >
                            {stat.label && (
                                <span className="text-[#9E9E9E] text-[12px] font-normal mb-1">{stat.label}</span>
                            )}
                            <div className="flex items-baseline gap-1 mb-3">
                                <span
                                    className={`text-[50px] leading-tight font-bold tracking-tight ${stat.valueColor === "gradient" ? "" : stat.valueColor}`}
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
                                        className={`text-[26px] font-normal ml-1 ${stat.suffixColor || "text-[#4F5B93]"}`}
                                        style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                                    >
                                        {stat.valueSuffix}
                                    </span>
                                )}
                            </div>
                            <p
                                className="text-[#363636] text-[16px] leading-[20px] font-normal max-w-[220px]"
                                style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                            >
                                {stat.description}
                            </p>
                        </div>
                    ))}

                    {/* Footnote cell */}
                    <div className="p-10 flex flex-col justify-end min-h-[220px]">
                        <div className="text-[14px] text-[#363636] space-y-1 opacity-70">
                            <p># Before exceptional items</p>
                            <p>1 USD = Rs 84.65</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex items-center gap-4 group cursor-pointer w-fit">
                    <div className="w-[2px] h-[34px] bg-[#FBAE17]" />
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
