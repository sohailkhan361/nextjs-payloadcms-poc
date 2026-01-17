import { CollectionConfig } from "payload";

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",

  access: {
    create: () => true,
    read: () => true,   // keep true for debugging
    update: () => false,
    delete: () => false,
  },

  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "message", type: "textarea" },
  ],
};
