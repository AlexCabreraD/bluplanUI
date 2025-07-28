"use client";

import { Plus, Minus } from "lucide-react";
import { useState, useCallback } from "react";

export interface QA {
  question: string;
  answer: string;
}

interface AccordionProps {
  title: string;
  qas: QA[];
}

// Responsive icon sizes
const ICON_SIZE_MOBILE = 24;
const ICON_SIZE_DESKTOP = 32;
const ICON_STROKE_WIDTH = 1.5;

const AccordionItem = ({
  qa,
  index,
  isExpanded,
  onToggle,
}: {
  qa: QA;
  index: number;
  isExpanded: boolean;
  onToggle: (index: number) => void;
}) => (
  <div className="border-b border-gray-300 last:border-b-0">
    <div className="py-6 sm:py-8">
      <button
        onClick={() => onToggle(index)}
        className="
          w-full 
          flex 
          items-start 
          text-left 
          group 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500 
          focus:ring-offset-2 
          hover:bg-gray-50 
          active:bg-gray-100
          transition-all 
          duration-200 
          touch-manipulation 
          min-h-[48px]
          rounded-lg
          -mx-2
          px-2
          py-2
        "
        aria-expanded={isExpanded}
        aria-controls={`accordion-content-${index}`}
      >
        <div className="flex-shrink-0 mt-0.5 sm:mt-1 mr-3 sm:mr-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors duration-200">
            {isExpanded ? (
              <Minus
                size={ICON_SIZE_MOBILE}
                className="text-black transition-all duration-300 ease-in-out sm:hidden"
                strokeWidth={ICON_STROKE_WIDTH}
                aria-hidden="true"
              />
            ) : (
              <Plus
                size={ICON_SIZE_MOBILE}
                className="text-black transition-all duration-300 ease-in-out sm:hidden"
                strokeWidth={ICON_STROKE_WIDTH}
                aria-hidden="true"
              />
            )}
            {/* Desktop icons */}
            {isExpanded ? (
              <Minus
                size={ICON_SIZE_DESKTOP}
                className="text-black transition-all duration-300 ease-in-out hidden sm:block"
                strokeWidth={ICON_STROKE_WIDTH}
                aria-hidden="true"
              />
            ) : (
              <Plus
                size={ICON_SIZE_DESKTOP}
                className="text-black transition-all duration-300 ease-in-out hidden sm:block"
                strokeWidth={ICON_STROKE_WIDTH}
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        <span className="text-lg sm:text-xl lg:text-2xl font-medium text-black leading-relaxed flex-1 pr-2 py-1">
          {qa.question}
        </span>
      </button>

      <div
        id={`accordion-content-${index}`}
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isExpanded ? "max-h-screen opacity-100 mt-4 sm:mt-6" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="ml-9 sm:ml-12 pr-2 sm:pr-12">
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed break-words">
            {qa.answer}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function Accordion({ title, qas }: AccordionProps) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleAccordion = useCallback((index: number) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }, []);

  if (!qas?.length) {
    return null;
  }

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8 sm:mb-10 lg:mb-12 leading-tight px-1">
          {title}
        </h2>
      )}

      {qas.map((qa, index) => (
        <AccordionItem
          key={`${qa.question}-${index}`}
          qa={qa}
          index={index}
          isExpanded={expandedItems.has(index)}
          onToggle={toggleAccordion}
        />
      ))}
    </div>
  );
}
