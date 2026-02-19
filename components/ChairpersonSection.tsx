"use client";

import Image from "next/image";

const ChairpersonSection = () => {
    const cards = [
        {
            title: "Chairperson",
            name: "Kiran Mazumdar-Shaw",
            content: "At Syngene, our purpose goes beyond science. We are building a resilient, inclusive, and values-driven organization where people thrive and innovation flourishes. FY25 was a year of alignment between vision and action, with investments in wellbeing, equity, and sustainability reinforcing our commitment to long-term value creation for all stakeholders.",
            image: "/assests/kiran.png"
        },
        {
            title: "Managing Director & CEO",
            name: "Peter Bains",
            content: "Syngene is well positioned for accelerating growth and transformation, with the potential to become a leader in serving the global biopharma and wider life sciences outsourcing market models.",
            image: "/assests/peterbrains.png"
        },
        {
            title: "Chief Financial Officer",
            name: "Deepak Goyal",
            content: "Our team's dedication to research and development ensures that we stay at the forefront of the industry, providing cutting-edge solutions that address the most complex challenges in science.",
            image: "/assests/Deepakjain.png"
        }
    ];

    return (
        <section className="w-full bg-white py-20 px-6 md:px-20">
            <div className="flex flex-col gap-24 max-w-7xl mx-auto">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center justify-center gap-12"
                    >
                        {/* Image Side (Left) */}
                        <div className="flex-shrink-0 w-full md:w-[445px] h-[446px] relative rounded-[20px] overflow-hidden shadow-xl animate-reveal-up bg-gray-100">
                            <Image
                                src={card.image}
                                alt={card.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Card Side */}
                        <div
                            className="bg-[#004172] p-8 md:p-14 text-white flex flex-col justify-center relative shadow-xl animate-reveal-up flex-1 w-full rounded-[20px] md:min-h-[520px]"
                        >
                            <h2
                                className="text-white text-3xl md:text-[35px] font-light mb-8 leading-tight text-left"
                                style={{
                                    maxWidth: '444px',
                                    minHeight: '40px',
                                    letterSpacing: '0px',
                                    fontFamily: '"Myriad Pro", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
                                }}
                            >
                                Message from our <br /><span className="font-bold">{card.title}</span>
                            </h2>

                            <div className="relative mb-4 pt-10 pb-6 pr-6 md:pr-12 max-w-[540px]">
                                {/* The Frame */}
                                {/* Top line */}
                                <div className="absolute top-0 left-10 right-0 h-[0.5px] bg-white/60" />
                                {/* Right vertical line */}
                                <div className="absolute top-0 right-0 bottom-0 w-[0.5px] bg-white/60" />
                                {/* Bottom horizontal line */}
                                <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-white/60" />

                                {/* Top Left Icon - Centered on the left alignment axis */}
                                <div className="absolute -top-[24px] -left-[24px] w-[48px] h-[48px] z-10">
                                    <Image
                                        src="/assests/Fireicon.png"
                                        alt="Icon"
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Bottom Left Dot - Centered on the left alignment axis */}
                                <div className="absolute -bottom-[4.5px] -left-[4.5px] w-[9px] h-[9px] rounded-full bg-white z-20 shadow-sm" />

                                {/* Text Content */}
                                <div className="pl-6">
                                    <p
                                        className="text-white text-[18px] font-light leading-[26px] text-left"
                                        style={{
                                            fontFamily: '"Myriad Pro", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                                            maxWidth: '412px',
                                            letterSpacing: '0.2px'
                                        }}
                                    >
                                        {card.content}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-2">
                                <h4 className="text-[#FBAE17] text-[24px] font-semibold tracking-wide">
                                    {card.name}
                                </h4>
                            </div>

                            <div className="flex items-center gap-3 group cursor-pointer w-fit">
                                <div className="w-[3px] h-8 bg-[#FBAE17]" />
                                <span className="text-white font-semibold text-[18px] group-hover:underline decoration-2 underline-offset-4">
                                    Read More
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default ChairpersonSection;
