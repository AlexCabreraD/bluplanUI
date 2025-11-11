"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

import Divider from "@/components/ui/Divider";
import type { HomeProject } from "@/types";

interface Section4Props {
  homeProjects: HomeProject[];
}

export default function Section4({ homeProjects }: Section4Props) {
  // Duplicate projects for scroll effect
  const displayProjects = [...homeProjects, ...homeProjects];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(20);
  const [isDraggingThumb, setIsDraggingThumb] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const percentage = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;

      // Calculate thumb width based on visible area vs total scrollable area
      const visibleRatio = container.clientWidth / container.scrollWidth;
      const calculatedThumbWidth = Math.max(10, Math.min(100, visibleRatio * 100));

      setScrollPercentage(percentage);
      setThumbWidth(calculatedThumbWidth);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    // Recalculate on window resize
    window.addEventListener("resize", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleThumbDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const track = e.currentTarget.parentElement;
    const container = scrollContainerRef.current;
    if (!track || !container) return;

    const trackRect = track.getBoundingClientRect();
    const thumbWidthPx = e.currentTarget.offsetWidth;
    const trackWidth = trackRect.width;
    const scrollWidth = container.scrollWidth - container.clientWidth;

    setIsDraggingThumb(true);
    document.body.style.userSelect = "none";

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const mouseX = e.clientX - trackRect.left;
      const maxThumbPosition = trackWidth - thumbWidthPx;
      const newThumbPosition = Math.max(0, Math.min(maxThumbPosition, mouseX - thumbWidthPx / 2));
      const newPercentage = (newThumbPosition / maxThumbPosition) * 100;
      container.scrollLeft = (newPercentage / 100) * scrollWidth;
    };

    const handleMouseUp = () => {
      setIsDraggingThumb(false);
      document.body.style.userSelect = "";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-[75px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] xl:leading-[52px] font-bold text-black mb-8 sm:mb-10 lg:mb-12">
            Projects
          </h2>
        </div>

        <div className="relative mb-2 overflow-hidden">
          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div
            ref={el => {
              (scrollContainerRef as any).current = el;
              if (el) {
                (el as any).hasMoved = false;
              }
            }}
            className="hide-scrollbar flex overflow-x-auto cursor-grab active:cursor-grabbing select-none"
            style={{
              WebkitOverflowScrolling: "touch",
              paddingLeft: "max(1rem, calc((100vw - 1280px) / 2 + 1rem))",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onMouseDown={e => {
              const slider = e.currentTarget;
              const startX = e.pageX - slider.offsetLeft;
              const scrollLeft = slider.scrollLeft;
              let isDown = false;

              const handleMouseMove = (e: MouseEvent) => {
                if (!isDown) return;
                e.preventDefault();
                (slider as any).hasMoved = true;
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 0.5;
                slider.scrollLeft = scrollLeft - walk;
              };

              const handleMouseUp = () => {
                isDown = false;
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);

                // Reset hasMoved after a small delay to allow click events
                setTimeout(() => {
                  (slider as any).hasMoved = false;
                }, 100);
              };

              isDown = true;
              (slider as any).hasMoved = false;
              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
            }}
          >
            {displayProjects.map((project, index) => (
              <Link
                key={index}
                href={`/projects/${project.id}`}
                className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[373px] min-w-[200px] h-[380px] sm:h-[440px] md:h-[507px] group overflow-hidden block"
                onDragStart={e => e.preventDefault()}
                onClick={e => {
                  // Check if this was a drag operation by looking at the slider's state
                  const slider = e.currentTarget.parentElement;
                  if (slider && (slider as any).hasMoved) {
                    e.preventDefault();
                    return false;
                  }
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover object-center select-none pointer-events-none"
                  draggable={false}
                  priority={index < 3}
                />

                <div className="absolute inset-0 bg-transparent group-hover:bg-[rgba(15,20,37,0.5)] transition-all duration-500 ease-in-out pointer-events-none"></div>

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out pointer-events-none">
                  <h3 className="text-xl sm:text-2xl md:text-[32px] md:leading-[38px] font-bold text-white select-none">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}

            {/* Spacer to allow scrolling past last image */}
            <div
              className="flex-shrink-0"
              style={{
                width: "max(2rem, calc((100vw - 1280px) / 2 + 2rem))",
              }}
            ></div>
          </div>
        </div>

        {/* Custom Scrollbar */}
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 lg:mb-12"
          style={{ transform: "translateX(-8px)" }}
        >
          <div className="relative h-2 bg-[#f1f1f1] rounded-full cursor-pointer select-none">
            <div
              className={`absolute top-0 h-2 bg-[#009ce0] rounded-full transition-colors select-none ${
                isDraggingThumb ? "bg-[#0088c7]" : "hover:bg-[#0088c7]"
              }`}
              style={{
                left: `${(scrollPercentage * (100 - thumbWidth)) / 100}%`,
                width: `${thumbWidth}%`,
                cursor: isDraggingThumb ? "grabbing" : "grab",
              }}
              onMouseDown={handleThumbDrag}
            ></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block relative group">
            <Link
              href="/projects"
              className="text-black font-semibold text-sm sm:text-[14px] sm:leading-[24px] inline-flex items-center gap-2 pb-1 relative"
            >
              See All Projects
              <span className="text-base sm:text-lg">→</span>
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#009ce0] w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </Link>
          </div>
        </div>
      </section>

      <Divider variant="grey" />
    </>
  );
}
