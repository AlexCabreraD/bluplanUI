import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden pt-16 sm:pt-20 min-h-[500px]">
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero/HOME-PAGE-VIDEO_ITSADU 1.png"
          alt="Construction site with wooden framing and building materials"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40"></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              We transform ideas into ready-to-build spaces
            </h1>
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-8 sm:mb-10 max-w-3xl">
              Architectural vision meets precision engineering
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link href="/contact-us">
                <button className="bg-[#009ce0] hover:bg-[#0088cc] text-white px-6 sm:px-8 py-3 rounded-[20px] text-base sm:text-lg font-bold transition-all duration-300 ease-in-out w-full sm:w-auto">
                  Get Started Today
                </button>
              </Link>
              <Link href="/projects">
                <button className="bg-transparent border-[1.5px] border-white text-white hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 rounded-[20px] text-base sm:text-lg font-bold transition-all duration-300 ease-in-out w-full sm:w-auto">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
