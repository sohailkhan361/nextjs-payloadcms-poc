export default function TestimonialBlock({ data }: any) {
  return (
    <section className="p-8 text-center">
      <blockquote className="italic text-lg">“{data.quote}”</blockquote>
      <p className="mt-2 font-semibold">— {data.author}</p>
    </section>
  );
}
