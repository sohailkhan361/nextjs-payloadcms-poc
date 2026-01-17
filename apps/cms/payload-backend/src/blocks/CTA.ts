import { Block } from "payload";

export const CTA: Block = {
  slug: "cta",
  fields: [
    {
      name: "text",
      type: "text",
      localized: true,
    },
    {
      name: "buttonText",
      type: "text",
      localized: true,
    },
    {
      name: "buttonLink",
      type: "text",
    },
  ],
};
