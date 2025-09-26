interface DividerProps {
  variant?: "grey" | "blue";
  className?: string;
}

export default function Divider({ variant = "grey", className = "" }: DividerProps) {
  const colorClass = variant === "blue" ? "border-[#009ce0]" : "border-gray-300";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`w-full border-t-[1.5px] ${colorClass} ${className}`} />
    </div>
  );
}
