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
            className="relative w-full overflow-hidden"
            style={{ height: '662px' }}
        >
            <div className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-out ${isVisible ? 'scale-100' : 'scale-110'}`}>
                <Image
                    src="/assests/newImg1.png"
                    alt="Featured Innovation"
                    fill
                    className="object-cover"
                    priority
                />
            </div>


            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                <div
                    className={`bg-white/40 backdrop-blur-[4px] p-6 md:p-16 w-full max-w-[825px] md:min-h-[425px] shadow-2xl flex flex-col justify-center transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                >
                    <span
                        className="block mb-2"
                        style={{
                            textAlign: 'left',
                            font: 'normal normal normal 18px/60px "Myriad Pro", sans-serif',
                            letterSpacing: '0px',
                            color: '#363636',
                            opacity: 1
                        }}
                    >
                        About Syngene
                    </span>
                    <h2
                        className="text-[#363636] font-semibold mb-6 leading-[40px] text-left"
                        style={{
                            fontSize: '35px',
                            fontFamily: '"Myriad Pro", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                            letterSpacing: '0px',
                            width: 'auto',
                            maxWidth: '548px'
                        }}
                    >
                        Driving Scientific Innovation with Service, Quality and Excellence
                    </h2>
                    <p
                        className="text-[#004172] text-[18px] leading-[20px] mb-8 text-left"
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
        </section>
    );
};

export default FeaturedImageSection;
