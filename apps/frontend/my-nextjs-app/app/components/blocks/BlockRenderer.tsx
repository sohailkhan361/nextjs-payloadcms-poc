import HeroBlock from "./HeroBlock";
import FeatureBlock from "./FeatureBlock";
import TestimonialBlock from "./TestimonialBlock";
import CTABlock from "./CTABlock";

export default function BlockRenderer({ block }: { block: any }) {
  switch (block.blockType) {
    case "hero":
      return <HeroBlock data={block} />;
    case "feature":
      return <FeatureBlock data={block} />;
    case "testimonial":
      return <TestimonialBlock data={block} />;
    case "cta":
      return <CTABlock data={block} />;
    default:
      return null;
  }
}
