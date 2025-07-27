"use client";

import { useState } from "react";
import FloorPlansGrid, { allFloorPlans, FloorPlan } from "./FloorPlansGrid";
import FloorPlansFilter, { FilterState } from "./FloorPlansFilter";
import Divider from "./Divider";

interface FloorPlansSectionProps {
  showFilters?: boolean;
  showLimit?: number;
  title?: string;
  description?: string;
  showViewAllButton?: boolean;
  containerClassName?: string;
}

export default function FloorPlansSection({
  showFilters = false,
  showLimit,
  title,
  description,
  showViewAllButton = false,
  containerClassName = ""
}: FloorPlansSectionProps) {
  const [filteredPlans, setFilteredPlans] = useState<FloorPlan[]>(allFloorPlans);

  const handleFilterChange = (filters: FilterState) => {
    let filtered = [...allFloorPlans];

    // Filter by size
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(plan => filters.sizes.includes(plan.size));
    }

    // Filter by bedrooms
    if (filters.bedrooms.length > 0) {
      filtered = filtered.filter(plan => filters.bedrooms.includes(plan.bedrooms));
    }


    setFilteredPlans(filtered);
  };

  const displayPlans = showLimit ? filteredPlans.slice(0, showLimit) : filteredPlans;

  if (showFilters) {
    // Full page layout with filters
    return (
      <>
        <section className={`py-8 sm:py-12 lg:py-20 bg-white ${containerClassName}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
              {/* Filter Sidebar */}
              <div className="lg:w-1/4">
                <FloorPlansFilter onFilterChange={handleFilterChange} />
              </div>
              
              {/* Floor Plans Grid */}
              <div className="lg:w-3/4">
                <FloorPlansGrid 
                  floorPlans={displayPlans}
                  className="grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                />
              </div>
            </div>
          </div>
        </section>
        
        <Divider variant="grey" />
      </>
    );
  }

  // Home page layout (like current Section3)
  return (
    <section className={`py-12 sm:py-16 lg:py-[75px] bg-white ${containerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-gray-100 rounded-[20px] mx-auto p-6 sm:p-8">
          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] xl:leading-[52px] font-bold text-black mb-4 sm:mb-6">
              {title}
            </h2>
          )}
          
          {description && (
            <p className="text-sm sm:text-base lg:text-[16px] lg:leading-[24px] font-light text-gray-700 mb-8 sm:mb-10 lg:mb-12 max-w-2xl">
              {description}
            </p>
          )}
        
          <FloorPlansGrid 
            floorPlans={displayPlans}
            showLimit={showLimit}
            className="mb-8 sm:mb-10 lg:mb-12"
          />
          
          {showViewAllButton && (
            <div className="inline-block relative group">
              <a 
                href="/floor-plans" 
                className="text-black font-semibold text-sm sm:text-[14px] sm:leading-[24px] inline-flex items-center gap-2 pb-1 relative"
              >
                See All Floor Plans
                <span className="text-base sm:text-lg">→</span>
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#009ce0] w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}