import Divider from "./Divider";

const services = [
  {
    title: "Custom Residential Design",
    heading: "At BluPlan Studio, we craft custom homes that seamlessly integrate functionality, aesthetics, and site-specific considerations.",
    description: "Every design is tailored to the client's lifestyle, future needs, and architectural vision, ensuring a truly personalized living experience."
  },
  {
    title: "ADU (Accessory Dwelling Unit) Design",
    heading: "Our ADU designs offer smart solutions for additional living space, rental income, or multigenerational housing.",
    description: "We specialize in creating detached, attached, or converted ADUs that meet California regulations while maximizing your property's potential and enhancing its long-term value."
  },
  {
    title: "3D Modeling and Renderings",
    heading: "We bring your vision to life with high-quality 3D models and photorealistic renderings.",
    description: "This technology allows you to visualize your project with clarity before construction begins, making design decisions easier and ensuring greater alignment between ideas and execution."
  },
  {
    title: "Permit Management",
    heading: "Navigating California's complex permitting process can be overwhelming.",
    description: "BluPlan handles it entirely, from preparing the necessary documents to coordinating with local agencies. Ensuring your project complies with all zoning, building codes, and environmental regulations without unnecessary delays."
  },
  {
    title: "Feasibility Studies and Conceptual Design",
    heading: "Before committing to a project, we conduct feasibility studies that analyze site conditions, zoning codes, and development restrictions.",
    description: "Our conceptual designs are built on this foundation, offering clients a clear, practical path forward for design and construction."
  },
  {
    title: "Construction Documents",
    heading: "We provide comprehensive construction documentation, including floor plans, elevations, sections, and detailed specifications.",
    description: "Our documents meet the highest industry standards, ensuring smooth approval processes and serving as accurate guides during construction."
  }
];

export default function ServicesSection1() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-100 hover:bg-[#009ce0] p-8 rounded-none transition-all duration-300 ease-in-out"
              >
                <h3 className="text-black group-hover:text-white font-medium mb-4 transition-colors duration-300" style={{ fontSize: '28px' }}>
                  {service.title}
                </h3>
                <h4 className="text-[#009ce0] group-hover:text-white font-medium mb-4 transition-colors duration-300" style={{ fontSize: '32px', lineHeight: '38px' }}>
                  {service.heading}
                </h4>
                <p className="text-gray-700 group-hover:text-white leading-relaxed transition-colors duration-300" style={{ fontSize: '16px' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Divider variant="grey" />
    </>
  );
}