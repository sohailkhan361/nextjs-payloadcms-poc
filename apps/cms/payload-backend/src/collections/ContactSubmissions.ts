import { CollectionConfig } from "payload";

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",

  access: {
    create: () => true, // allow public form submit
    read: () => false,  // admin only
  },

  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "message", type: "textarea" },
  ],
};
