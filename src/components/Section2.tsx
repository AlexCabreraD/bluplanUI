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
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#009ce0]/10 text-[#009ce0] text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#009ce0] rounded-full mr-2"></span>
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to construction-ready plans, we provide comprehensive architectural services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 hover:border-[#009ce0]/50 hover:shadow-xl rounded-xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-[#009ce0]/10 group-hover:bg-[#009ce0] rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                  <div className="w-6 h-6 bg-[#009ce0] group-hover:bg-white rounded transition-colors duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#009ce0] mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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