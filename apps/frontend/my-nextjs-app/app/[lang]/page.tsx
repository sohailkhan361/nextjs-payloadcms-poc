import BlockRenderer from "../components/blocks/BlockRenderer";
import { fetchPage } from "../lib/payload";

export default async function HomePage({ params }: any) {
  const { lang } = await params;
  const page = await fetchPage("home", lang);

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
        <BlockRenderer key={block.id} block={block} />
      ))}
    </>
  );
}
