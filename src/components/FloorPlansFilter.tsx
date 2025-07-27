"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FilterState {
  sizes: string[];
  bedrooms: number[];
}

interface FloorPlansFilterProps {
  onFilterChange: (filters: FilterState) => void;
}

export default function FloorPlansFilter({ onFilterChange }: FloorPlansFilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    sizes: [],
    bedrooms: []
  });

  const [openSections, setOpenSections] = useState({
    size: true,
    bedrooms: true
  });

  const sizes = ['Light', 'Medium', 'Small', 'Compact'];
  const bedroomOptions = [1, 2, 3];

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSizeToggle = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];
    
    const newFilters = { ...filters, sizes: newSizes };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleBedroomToggle = (bedroom: number) => {
    const newBedrooms = filters.bedrooms.includes(bedroom)
      ? filters.bedrooms.filter(b => b !== bedroom)
      : [...filters.bedrooms, bedroom];
    
    const newFilters = { ...filters, bedrooms: newBedrooms };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = (section: 'sizes' | 'bedrooms') => {
    const newFilters = { ...filters };
    
    if (section === 'sizes') {
      newFilters.sizes = [];
    } else if (section === 'bedrooms') {
      newFilters.bedrooms = [];
    }
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="w-full max-w-sm bg-gray-50 p-4 sm:p-6 rounded-lg">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Filter by</h2>
      
      {/* Size Filter */}
      <div className="mb-4 sm:mb-6">
        <button
          onClick={() => toggleSection('size')}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">Size</h3>
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-200 ${
              openSections.size ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        {openSections.size && (
          <div className="mt-3 sm:mt-4 space-y-3">
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeToggle(size)}
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    filters.sizes.includes(size)
                      ? 'bg-[#009ce0] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {filters.sizes.length > 0 && (
              <button
                onClick={() => clearFilters('sizes')}
                className="text-xs sm:text-sm text-[#009ce0] hover:underline"
              >
                ✕ Clear
              </button>
            )}
          </div>
        )}
      </div>

      {/* Bedrooms Filter */}
      <div className="mb-4 sm:mb-6">
        <button
          onClick={() => toggleSection('bedrooms')}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">Bedrooms</h3>
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-200 ${
              openSections.bedrooms ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        {openSections.bedrooms && (
          <div className="mt-3 sm:mt-4 space-y-3">
            <div className="flex gap-2">
              {bedroomOptions.map((bedroom) => (
                <button
                  key={bedroom}
                  onClick={() => handleBedroomToggle(bedroom)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    filters.bedrooms.includes(bedroom)
                      ? 'bg-[#009ce0] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {bedroom}
                </button>
              ))}
            </div>
            {filters.bedrooms.length > 0 && (
              <button
                onClick={() => clearFilters('bedrooms')}
                className="text-xs sm:text-sm text-[#009ce0] hover:underline"
              >
                ✕ Clear
              </button>
            )}
          </div>
        )}
      </div>

    </div>
  );
}

export type { FilterState };