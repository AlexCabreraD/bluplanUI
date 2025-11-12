import FloorPlansSection from "@/components/FloorPlansSection";
import Divider from "@/components/ui/Divider";

export default function Section3() {
  return (
    <>
      <FloorPlansSection
        showFilters={false}
        showLimit={3}
        title="Floor Plans"
        description="Explore our collection of thoughtfully designed floor plans, each crafted to maximize functionality and style. From cozy ADUs to spacious family homes, find the perfect layout that fits your vision and lifestyle."
        showViewAllButton={true}
      />

      <Divider variant="grey" />
    </>
  );
}
