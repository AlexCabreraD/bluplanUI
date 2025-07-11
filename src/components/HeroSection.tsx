"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 w-full h-[120%]"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Image
            src="/images/home/hero/HOME-PAGE-VIDEO_ITSADU 1.png"
            alt="Construction site with wooden framing and building materials"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              We transform ideas into 
              <span className="text-[#009ce0] block">ready-to-build spaces</span>
            </h1>
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl">
              From concept to construction-ready plans. We make your architectural vision reality with precision and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#009ce0] hover:bg-[#0088cc] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 cursor-pointer">
                Get Started Today
              </button>
              <button className="bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 cursor-pointer">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}