"use client";

import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-[#004172] py-4 md:py-6">
            <div className="container mx-auto px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <div className="text-white text-[12px] md:text-[14px] opacity-90 order-2 md:order-1">
                        © 2024 Syngene International. All Rights Reserved
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-7 order-1 md:order-2">
                        {/* Facebook */}
                        <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Facebook">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9.101 24v-11.234h-3.873V8.349h3.873V5.441c0-3.812 2.327-5.891 5.731-5.891 1.63 0 3.033.121 3.442.176v3.988l-2.362.001c-1.85 0-2.208.88-2.208 2.169v2.844h4.414l-.575 4.417h-3.839V24H9.101z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="YouTube">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4.98 3.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>
                        {/* X (formerly Twitter) */}
                        <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="X">
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>

                    {/* Developer Credit */}
                    <div className="text-white text-[12px] md:text-[14px] opacity-90 order-3 md:order-3">
                        Design & Developed by RDX Digital
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
