"use client";

import React from "react";
import Image from "next/image";

const FeaturedImageSection = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const sectionRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden bg-white"
            style={{ height: 'auto' }}
        >
            {/* Desktop Background Image Wrapper */}
            <div className="hidden md:block absolute inset-0 w-full h-[662px]">
                <div className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-out ${isVisible ? 'scale-100' : 'scale-110'}`}>
                    <Image
                        src="/assests/newImg1.png"
                        alt="Featured Innovation"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Content Container: Mobile (Full-Screen) vs Desktop (Centered Card) */}
            <div className={`relative md:absolute md:inset-0 flex items-center justify-center p-0 md:p-6 min-h-[400px] md:min-h-0 md:h-[662px] transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <div
                    className="bg-white md:bg-white/40 md:backdrop-blur-[4px] p-8 md:p-16 w-full h-full md:h-auto md:max-w-[825px] md:min-h-[425px] md:shadow-2xl md:border md:border-white/50 flex flex-col justify-center"
                >
                    <span
                        className="block mb-2 text-left"
                        style={{
                            font: 'normal normal normal 14px/24px "Myriad Pro", sans-serif',
                            letterSpacing: '0px',
                            color: '#363636',
                            opacity: 1
                        }}
                    >
                        <span className="md:hidden">About Syngene</span>
                        <span className="hidden md:inline" style={{ fontSize: '18px', lineHeight: '18px' }}>About Syngene</span>
                    </span>
                    <h2
                        className="text-[#363636] font-semibold mb-6 text-left"
                        style={{
                            fontFamily: '"Myriad Pro", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                            letterSpacing: '0px',
                            width: 'auto',
                            maxWidth: '548px'
                        }}
                    >
                        <span className="text-[24px] leading-[30px] md:text-[35px] md:leading-[40px] block">
                            Driving Scientific Innovation with Service, Quality and Excellence
                        </span>
                    </h2>
                    <p
                        className="text-[#004172] text-[15px] md:text-[18px] leading-[22px] md:leading-[20px] mb-8 text-left"
                        style={{
                            fontFamily: '"Myriad Pro", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                            maxWidth: '609px'
                        }}
                    >
                        We combine cutting-edge science with a deep understanding of customer needs
                        to drive innovation. Our commitment to service, quality and excellence is
                        embedded in every aspect of our operations, fostering trust, confidentiality, and
                        seamless collaboration.
                    </p>
                    <div className="flex items-center gap-3 group cursor-pointer w-fit">
                        <div className="w-[3px] h-8 bg-[#FBAE17]" />
                        <span
                            className="text-[#004772] font-semibold hover:underline decoration-2 underline-offset-4"
                            style={{
                                fontSize: '18px',
                                fontFamily: '"Myriad Pro", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                                width: 'auto',
                                height: '27px',
                                display: 'inline-block',
                                lineHeight: '27px',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Read More
                        </span>
                    </div>
                </div>
            </div>
            {/* Space reservation for desktop layout flow */}
            <div className="hidden md:block h-[662px]" />
        </section>
    );
};

export default FeaturedImageSection;
