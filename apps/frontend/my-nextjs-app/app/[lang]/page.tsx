export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        {lang === "hi"
          ? "रेस्ट्रोवर्क्स में आपका स्वागत है"
          : "Welcome to Restroworks"}
      </h1>

      <p className="text-lg text-gray-600">
        {lang === "hi"
          ? "यह Next.js और Payload CMS का POC है।"
          : "This is a Next.js + Payload CMS POC."}
      </p>
    </section>
  );
}
