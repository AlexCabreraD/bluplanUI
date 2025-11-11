import Image from "next/image";

export default function ServicesHero() {
  return (
    <section
      className="relative w-full overflow-visible pt-[150px]"
      style={{ height: "354px", marginBottom: "120px" }}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/services/hero/serviceHero.jpg"
          alt="Modern architectural interior with clean lines and professional design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: "rgba(15, 20, 37, 0.4)" }}></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="w-full max-w-3xl mt-8 md:mt-16 lg:mt-20">
            <div className="bg-[#0F1425] w-full max-w-[739px] min-h-[200px] md:min-h-[247px] flex flex-col justify-center p-6 md:p-8 lg:p-10">
              <div>
                <h1
                  className="text-white font-bold mb-4 text-3xl md:text-4xl lg:text-5xl"
                  style={{
                    fontSize: "clamp(36px, 5vw, 52px)",
                    lineHeight: "clamp(36px, 5vw, 52px)",
                  }}
                >
                  Services
                </h1>
                <p
                  className="text-white text-lg md:text-xl lg:text-2xl"
                  style={{
                    fontSize: "clamp(20px, 3vw, 28px)",
                    lineHeight: "clamp(24px, 4vw, 34px)",
                  }}
                >
                  Smart design, clear planning, and homes built around your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
