import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero/HOME-PAGE-VIDEO_ITSADU 1.png"
          alt="Construction site with wooden framing and building materials"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              We transform ideas into functional, personalized, and ready-to-build spaces
            </h1>
            <button className="bg-transparent border-[1.5px] border-white text-white hover:bg-[#009ce0] hover:border-[#009ce0] hover:text-white px-8 py-3 rounded-[20px] text-lg font-bold transition-all duration-300 ease-in-out">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}