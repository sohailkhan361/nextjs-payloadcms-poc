import { Block } from "payload";

export const Testimonial: Block = {
  slug: "testimonial",
  fields: [
    {
      name: "author",
      type: "text",
    },
    {
      name: "quote",
      type: "textarea",
    },
  ],
};
