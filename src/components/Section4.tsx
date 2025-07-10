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
      <section className="py-[75px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[52px] leading-[52px] font-bold text-black mb-12">
            Projects
          </h2>
        </div>
        
        <div className="relative mb-12 overflow-hidden">
          <div 
            className="flex overflow-x-auto cursor-grab active:cursor-grabbing select-none"
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
                  className="relative flex-shrink-0 w-[373px] min-w-[200px] h-[507px] group overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={373}
                    height={507}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    draggable={false}
                  />
                  
                  {/* Black overlay that fades on hover */}
                  <div 
                    className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500 ease-in-out pointer-events-none"
                    style={{ background: 'rgba(15, 20, 37, 0.7)' }}
                  ></div>
                  
                  {/* Title that appears on hover */}
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out pointer-events-none">
                    <h3 className="text-[32px] leading-[38px] font-bold text-white select-none">
                      {project.title}
                    </h3>
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block relative group">
            <a 
              href="#" 
              className="text-black font-semibold text-[14px] leading-[24px] inline-flex items-center gap-2 pb-1 relative"
            >
              See All Projects
              <span className="text-lg">→</span>
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#009ce0] w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </a>
          </div>
        </div>
      </section>
      
      <Divider variant="grey" />
    </>
  );
}