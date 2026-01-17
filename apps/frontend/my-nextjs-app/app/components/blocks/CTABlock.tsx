import Link from "next/link";

export default function CTABlock({ data, lang }: any) {
  const href = data.buttonLink.startsWith("http")
    ? data.buttonLink // external link
    : `/${lang}${data.buttonLink}`; // internal link with locale prefix

  return (
    <section className="p-8 text-center bg-black text-white">
      <h2 className="text-2xl font-bold mb-4">{data.text}</h2>

      <Link
        href={href}
        className="inline-block bg-white text-black px-6 py-2 rounded"
      >
        {data.buttonText}
      </Link>
    </section>
  );
}
