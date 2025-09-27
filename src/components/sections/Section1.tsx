import Image from "next/image";
import Link from "next/link";

import Divider from "@/components/ui/Divider";

export default function Section1() {
  return (
    <>
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 max-w-xl order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#009ce0]/10 text-[#009ce0] text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-[#009ce0] rounded-full mr-2"></span>
                Why Choose BluPlan
              </div>

              <h2 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                We turn residential visions into
                <span className="text-[#009ce0]"> detailed, ready-to-build projects</span>
              </h2>

              <p className="text-gray-600 text-base sm:text-lg xl:text-xl leading-relaxed mb-6 sm:mb-8">
                Our customized architectural solutions make the path from idea to construction
                clear, seamless, and stress-free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us">
                  <button className="bg-[#009ce0] hover:bg-[#0088cc] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer w-full sm:w-auto">
                    Get Started
                  </button>
                </Link>
                <Link
                  href="/contact-us"
                  className="text-[#009ce0] font-semibold inline-flex items-center justify-center sm:justify-start gap-2 py-3 hover:gap-3 transition-all duration-200 group w-full sm:w-auto"
                >
                  Call Us Today
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#009ce0]/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
                <Image
                  src="/images/home/gallery/BP-Web-Home-Call-Us.png"
                  alt="Two professional architects in suits standing together, one holding building plans with a city skyline in the background"
                  width={550}
                  height={400}
                  className="relative w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider variant="grey" />
    </>
  );
}
