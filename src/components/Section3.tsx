import Image from "next/image";
import Divider from "./Divider";

const floorPlans = [
  {
    title: "Casita",
    details: "1 Bed • 1 Bath • 425 . ft²",
    image: "/images/home/gallery/FloorPlansCasita.png"
  },
  {
    title: "Nook",
    details: "1 Bed • 1 Bath • 425 . ft²",
    image: "/images/home/gallery/BP-Web-Home-Floor-Plans-nook.png"
  },
  {
    title: "Retreat",
    details: "1 Bed • 1 Bath • 425 . ft²",
    image: "/images/home/gallery/BP-Web-Home-Floor-Plans-Retreat.png"
  }
];

export default function Section3() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#009ce0]/10 text-[#009ce0] text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#009ce0] rounded-full mr-2"></span>
              Floor Plans
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready-to-build designs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of efficient, well-designed floor plans perfect for modern living
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {floorPlans.map((plan, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={plan.image}
                    alt={`${plan.title} floor plan`}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="p-6 group-hover:bg-[#009ce0] transition-all duration-300 ease-in-out">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                    {plan.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-[#009ce0] hover:bg-[#0088cc] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer">
              View All Floor Plans
            </button>
          </div>
        </div>
      </section>
      
      <Divider variant="grey" />
    </>
  );
}