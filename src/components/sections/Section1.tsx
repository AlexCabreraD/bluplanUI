import Image from "next/image";

import Divider from "@/components/ui/Divider";

export default function Section1() {
  return (
    <>
      <section className="py-12 sm:py-16 lg:py-[75px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-end">
            <div className="w-full max-w-none lg:max-w-[454px] flex flex-col justify-center lg:justify-end order-2 lg:order-1">
              <h2 className="text-[#009ce0] text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-4 sm:mb-6">
                At BluPlan Studio, we specialize in turning residential visions into fully detailed,
                ready to build projects.
              </h2>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                We focus on creating customized architectural solutions that make the path from idea
                to construction as clear and seamless as possible.
              </p>

              <div className="inline-block relative group">
                <a
                  href="#"
                  className="text-black font-semibold text-base sm:text-lg inline-flex items-center gap-2 pb-1 relative"
                >
                  Call Us
                  <span className="text-lg sm:text-xl">→</span>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-[#009ce0] w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <Image
                src="/images/home/gallery/BP-Web-Home-Call-Us.png"
                alt="Two professional architects in suits standing together, one holding building plans with a city skyline in the background"
                width={550}
                height={400}
                className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[550px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Divider variant="grey" />
    </>
  );
}
