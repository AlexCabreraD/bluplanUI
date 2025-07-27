import Divider from "./Divider";
import FloorPlansSection from "./FloorPlansSection";

export default function Section3() {
  return (
    <>
      <FloorPlansSection 
        showFilters={false}
        showLimit={3}
        title="Floor Plans"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        showViewAllButton={true}
      />
      
      <Divider variant="grey" />
    </>
  );
}