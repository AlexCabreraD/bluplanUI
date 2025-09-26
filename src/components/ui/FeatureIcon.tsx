import { cn } from "@/lib/utils";
import type { FeatureIconProps } from "@/types";

const FeatureIcon: React.FC<FeatureIconProps> = ({ type, value, label }) => {
  const getIcon = () => {
    switch (type) {
      case "bed":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM19 7h-8v7H3V6c0-.55-.45-1-1-1s-1 .45-1 1v11c0 .55.45 1 1 1s1-.45 1-1v-2h18v2c0 .55.45 1 1 1s1-.45 1-1V10c0-1.65-1.35-3-3-3z" />
          </svg>
        );
      case "bath":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 17c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm3-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3-4v2c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-2H3v-2c0-1.1.9-2 2-2h1V7c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v3h1c1.1 0 2 .9 2 2v2h-2z" />
          </svg>
        );
      case "sqft":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
            <path d="M7 17h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-8h2V7h-2v2zm0 4h2v-2h-2v2zm-8-4h2V7H7v2zm4 0h2V7h-2v2z" />
          </svg>
        );
      case "story":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <div
        className={cn(
          "w-12 h-12 rounded-full border-2 border-[#00bcd4] flex items-center justify-center text-[#00bcd4]",
          "transition-colors duration-300 hover:bg-[#00bcd4] hover:text-white"
        )}
        role="img"
        aria-label={`${value} ${label}`}
      >
        {getIcon()}
      </div>
      <div className="text-left">
        <div className="text-base font-semibold text-gray-900">
          {value} {label}
        </div>
      </div>
    </div>
  );
};

export default FeatureIcon;
