export default function HeroBlock({ data }: any) {
  return (
    <section className="p-12 text-center">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="mt-4">{data.subtitle}</p>
    </section>
  );
}
