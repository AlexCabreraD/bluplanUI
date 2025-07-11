"use client";

import Image from "next/image";
import Divider from "./Divider";

const projects = [
  {
    title: "39th Street",
    image: "/images/home/gallery/BP-Web-Home-Projects1.png"
  },
  {
    title: "North G Street", 
    image: "/images/home/gallery/BP-Web-Home-Projects2.png"
  },
  {
    title: "Dean Dr",
    image: "/images/home/gallery/BP-Web-Home-Projects3.png"
  },
  {
    title: "Excepteur occaecat",
    image: "/images/home/gallery/BP-Web-Home-Projects4.png"
  },
  {
    title: "39th Street",
    image: "/images/home/gallery/BP-Web-Home-Projects1.png"
  },
  {
    title: "North G Street", 
    image: "/images/home/gallery/BP-Web-Home-Projects2.png"
  },
  {
    title: "Dean Dr",
    image: "/images/home/gallery/BP-Web-Home-Projects3.png"
  },
  {
    title: "Excepteur occaecat",
    image: "/images/home/gallery/BP-Web-Home-Projects4.png"
  }
];

export default function Section4() {
  return (
    <>
      <section className="pt-24 lg:pt-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#009ce0]/10 text-[#009ce0] text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-[#009ce0] rounded-full mr-2"></span>
                Recent Projects
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Bringing visions to life
              </h2>
              <p className="text-xl text-gray-600">
                See how we&apos;ve transformed ideas into beautiful, functional spaces for our clients
              </p>
            </div>
            <button className="bg-[#009ce0] hover:bg-[#0088cc] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer lg:flex-shrink-0">
              View All Projects
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex overflow-x-auto cursor-grab active:cursor-grabbing select-none pb-24 lg:pb-32"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              paddingLeft: 'max(1rem, calc((100vw - 1280px) / 2 + 2rem))'
            }}
              onMouseDown={(e) => {
                const slider = e.currentTarget;
                const startX = e.pageX - slider.offsetLeft;
                const scrollLeft = slider.scrollLeft;
                let isDown = false;
                
                const handleMouseMove = (e: MouseEvent) => {
                  if (!isDown) return;
                  e.preventDefault();
                  const x = e.pageX - slider.offsetLeft;
                  const walk = (x - startX) * 0.5;
                  slider.scrollLeft = scrollLeft - walk;
                };
                
                const handleMouseUp = () => {
                  isDown = false;
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };
                
                isDown = true;
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-[320px] h-[420px] group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={320}
                    height={420}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    draggable={false}
                  />
                  
                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                  ></div>
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2 select-none">
                        {project.title}
                      </h3>
                      <div className="w-12 h-1 bg-[#009ce0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Spacer to allow scrolling past last image */}
              <div 
                className="flex-shrink-0"
                style={{ 
                  width: 'max(2rem, calc((100vw - 1280px) / 2 + 2rem))'
                }}
              ></div>
            </div>
        </div>
        
      </section>
      
      <Divider variant="grey" />
    </>
  );
}