export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <section className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {lang === "hi" ? "संपर्क करें" : "Contact Us"}
      </h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder={lang === "hi" ? "नाम" : "Name"}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder={lang === "hi" ? "संदेश" : "Message"}
          className="border p-2 rounded"
          rows={4}
        />
        <button className="bg-black text-white py-2 rounded">
          {lang === "hi" ? "भेजें" : "Submit"}
        </button>
      </form>
    </section>
  );
}
