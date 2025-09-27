import Link from "next/link";

import Divider from "@/components/ui/Divider";

const services = [
  {
    title: "Custom Residential Design",
    description:
      "We create personalized home designs that reflect your vision, lifestyle, and site conditions.",
  },
  {
    title: "ADU (Accessory Dwelling Unit) Design",
    description:
      "We design efficient, stylish ADUs that maximize space, rental potential, and flexibility.",
  },
  {
    title: "3D Modeling and Renderings",
    description:
      "Experience your project before it's built through realistic, high-quality 3D visualizations.",
  },
  {
    title: "Permit Management",
    description:
      "We handle every step of the permitting process to ensure a fast, compliant, stress-free approval.",
  },
  {
    title: "Feasibility Studies and Conceptual Design",
    description:
      "We study your site's potential and regulations to build designs that are achievable and strategic.",
  },
  {
    title: "Construction Documents",
    description:
      "We produce detailed technical drawings that streamline construction and meet code standards.",
  },
];

export default function Section2() {
  return (
    <>
      <section className="py-12 sm:py-16 lg:py-[75px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-8 sm:mb-10 lg:mb-12">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href="/services"
                className="group bg-white border border-gray-200 hover:border-[#009ce0]/50 hover:bg-[#009ce0] hover:shadow-xl rounded-xl p-6 sm:p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 block cursor-pointer"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-white leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Divider variant="grey" />
    </>
  );
}
