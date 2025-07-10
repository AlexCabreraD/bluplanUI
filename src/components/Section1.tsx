import Image from "next/image";
import Divider from "./Divider";

export default function Section1() {
  return (
    <>
      <section className="py-[75px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="w-[454px] h-[346px] flex flex-col justify-end">
              <h2 className="text-[#009ce0] text-3xl font-bold leading-tight mb-6">
                At BluPlan Studio, we specialize in turning residential visions into fully detailed, ready to build projects.
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We focus on creating customized architectural solutions that make the path from idea to construction as clear and seamless as possible.
              </p>
              
              <div className="inline-block relative group">
                <a 
                  href="#" 
                  className="text-black font-semibold text-lg inline-flex items-center gap-2 pb-1 relative"
                >
                  Call Us
                  <span className="text-xl">→</span>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-[#009ce0] w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/home/gallery/BP-Web-Home-Call-Us.png"
                alt="Two professional architects in suits standing together, one holding building plans with a city skyline in the background"
                width={550}
                height={400}
                className="w-full max-w-[550px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Divider variant="grey" />
    </>
  );
}