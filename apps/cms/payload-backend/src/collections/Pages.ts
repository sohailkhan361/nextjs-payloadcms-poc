import { Feature } from "../blocks/Feature";
import { Testimonial } from "../blocks/Testimonial";
import { CTA } from "../blocks/CTA";
import { Hero } from "@/blocks/Heros";
import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: "slug",
  },

  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "layout",
      type: "blocks",
      blocks: [Hero, Feature, Testimonial, CTA],
    },
    {
      name: "seo",
      type: "group",
      fields: [
        { name: "title", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  ],
};
