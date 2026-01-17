import Link from "next/link";

export default function CTABlock({ data }: any) {
  return (
    <section className="p-8 text-center bg-black text-white">
      <h2 className="text-2xl font-bold mb-4">{data.text}</h2>
      <Link
        href={data.buttonLink}
        className="inline-block bg-white text-black px-6 py-2 rounded"
      >
        {data.buttonText}
      </Link>
    </section>
  );
}
