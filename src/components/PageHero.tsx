import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export default function PageHero({ title, subtitle, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section
      className="relative w-full overflow-visible pt-20 sm:pt-24 lg:pt-[150px] mb-8 lg:mb-[120px]"
      style={{ height: "auto" }}
    >
      <div className="absolute inset-0 h-[30vh] sm:h-[40vh] lg:h-[354px]">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "rgba(15, 20, 37, 0.4)" }}></div>
      </div>

      <div className="relative z-10 h-full flex items-center lg:h-[354px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="w-full max-w-3xl mt-8 sm:mt-12 md:mt-16 lg:mt-16 xl:mt-20">
            <div className="bg-[#0F1425] w-full max-w-[739px] min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[247px] flex flex-col justify-center p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
              <div>
                <h1
                  className="text-white font-bold mb-2 sm:mb-3 md:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                  style={{
                    fontSize: "clamp(18px, 4vw, 52px)",
                    lineHeight: "clamp(22px, 4vw, 52px)",
                  }}
                >
                  {title}
                </h1>
                <p
                  className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                  style={{
                    fontSize: "clamp(14px, 3vw, 28px)",
                    lineHeight: "clamp(18px, 4vw, 34px)",
                  }}
                >
                  {subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
