import { Block } from "payload";

export const Hero: Block = {
  slug: "hero",
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "subtitle",
      type: "textarea",
      localized: true,
    },
    {
      name: "ctaText",
      type: "text",
      localized: true,
    },
    {
      name: "ctaLink",
      type: "text",
    },
  ],
};
