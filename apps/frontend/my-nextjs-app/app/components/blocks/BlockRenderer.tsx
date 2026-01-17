import HeroBlock from "./HeroBlock";
import FeatureBlock from "./FeatureBlock";
import TestimonialBlock from "./TestimonialBlock";
import CTABlock from "./CTABlock";

export default function BlockRenderer({
  block,
  lang
}: {
  block: any,
  lang: string,
}) {
  switch (block.blockType) {
    case "hero":
      return <HeroBlock data={block} />;
    case "feature":
      return <FeatureBlock data={block} />;
    case "testimonial":
      return <TestimonialBlock data={block} />;
    case "cta":
      return <CTABlock data={block} lang={lang} />;
    default:
      return null;
  }
}
