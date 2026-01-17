// export default async function HomePage({
//   params,
// }: {
//   params: Promise<{ lang: string }>;
// }) {
//   const { lang } = await params;

//   const content = {
//     en: {
//       title: "Welcome to Restroworks",
//       description: "This is a Next.js + Payload CMS POC.",
//     },
//     hi: {
//       title: "रेस्ट्रोवर्क्स में आपका स्वागत है",
//       description: "यह Next.js और Payload CMS का POC है।",
//     },
//     fr: {
//       title: "Bienvenue chez Restroworks",
//       description: "Ceci est une POC Next.js + Payload CMS.",
//     },
//   };

//   const t = content[lang as keyof typeof content] ?? content.en;

//   return (
//     <section className="p-8 max-w-5xl mx-auto">
//       <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
//       <p className="text-lg text-gray-600">{t.description}</p>
//     </section>
//   );
// }

import HeroBlock from "../components/blocks/HeroBlock";
import { fetchPage } from "../lib/payload";

export default async function HomePage({ params }: any) {
  const { lang } = await params;
  const page = await fetchPage("home", lang);

  return (
    <>
      {page.layout.map((block: any, i: number) => {
        if (block.blockType === "hero") {
          return <HeroBlock key={i} data={block} />;
        }
        return null;
      })}
    </>
  );
}
