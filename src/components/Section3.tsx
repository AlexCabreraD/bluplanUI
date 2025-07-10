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
      <section className="py-[75px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full bg-gray-100 rounded-[20px] mx-auto p-8">
            <h2 className="text-[52px] leading-[52px] font-bold text-black mb-6">
              Floor Plans
            </h2>
            
            <p className="text-[16px] leading-[24px] font-light text-gray-700 mb-12 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {floorPlans.map((plan, index) => (
                <div
                  key={index}
                  className="group bg-white overflow-hidden"
                >
                  <div className="pt-6 px-6">
                    <Image
                      src={plan.image}
                      alt={`${plan.title} floor plan`}
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-full px-6 py-[19px] group-hover:bg-[#009ce0] transition-all duration-300 ease-in-out">
                    <h3 className="text-[16px] leading-[24px] font-semibold text-black group-hover:text-white mb-1 transition-colors duration-300">
                      {plan.title}
                    </h3>
                    <p className="text-[16px] leading-[24px] font-light text-gray-600 group-hover:text-white transition-colors duration-300">
                      {plan.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="inline-block relative group">
              <a 
                href="#" 
                className="text-black font-semibold text-[14px] leading-[24px] inline-flex items-center gap-2 pb-1 relative"
              >
                See All Floor Plans
                <span className="text-lg">→</span>
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#009ce0] w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Divider variant="grey" />
    </>
  );
}