import Divider from "./Divider";

const services = [
  {
    title: "Custom Residential Design",
    description: "We create personalized home designs that reflect your vision, lifestyle, and site conditions."
  },
  {
    title: "ADU (Accessory Dwelling Unit) Design",
    description: "We design efficient, stylish ADUs that maximize space, rental potential, and flexibility."
  },
  {
    title: "3D Modeling and Renderings",
    description: "Experience your project before it's built through realistic, high-quality 3D visualizations."
  },
  {
    title: "Permit Management",
    description: "We handle every step of the permitting process to ensure a fast, compliant, stress-free approval."
  },
  {
    title: "Feasibility Studies and Conceptual Design",
    description: "We study your site's potential and regulations to build designs that are achievable and strategic."
  },
  {
    title: "Construction Documents",
    description: "We produce detailed technical drawings that streamline construction and meet code standards."
  }
];

export default function Section2() {
  return (
    <>
      <section className="py-[75px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12">
            Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-100 hover:bg-[#009ce0] transition-all duration-300 ease-in-out p-8"
              >
                <h3 className="text-[28px] leading-[30px] font-normal text-black group-hover:text-white mb-4 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[16px] leading-[24px] font-light text-gray-700 group-hover:text-white transition-colors duration-300">
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