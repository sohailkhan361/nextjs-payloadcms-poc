import BlockRenderer from "../components/blocks/BlockRenderer";
import { fetchPage } from "../lib/payload";

const SUPPORTED_LOCALES = ["en", "hi", "fr"];

export default async function HomePage({ params }: any) {
  const { lang } = await params;

  // Guard against invalid locales like /home
  if (!SUPPORTED_LOCALES.includes(lang)) {
    return (
      <section className="p-8 text-center">
        <p>Invalid language</p>
      </section>
    );
  }

  const page = await fetchPage("home", lang);

  console.log("Fetched page data:", page);

  if (!page) {
    return (
      <section className="p-8 text-center">
        <p>Content not available</p>
      </section>
    );
  }

  return (
    <>
      {page.layout.map((block: any) => (
        <BlockRenderer key={block.id} block={block} lang={lang} />
      ))}
    </>
  );
}
