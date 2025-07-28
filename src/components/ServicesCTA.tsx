import Link from "next/link";

import Divider from "./Divider";

export default function ServicesCTA() {
  return (
    <>
      <section className="py-8 sm:py-12 lg:py-[75px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#009ce0] rounded-[20px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[52px] lg:leading-[52px] font-bold mb-4 sm:mb-6 leading-tight">
              We turn visions into buildable spaces
            </h2>

            <p className="text-white text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s design your future—stress-free. Reach out today for a free consultation.
            </p>

            <Link href="/contact-us">
              <button className="bg-transparent border-2 border-white text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white hover:text-[#009ce0] transition-all duration-300 ease-in-out text-base sm:text-lg cursor-pointer">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Divider variant="grey" />
    </>
  );
}
