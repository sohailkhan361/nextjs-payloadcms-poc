async function submit(formData: FormData) {
  "use server";

  if (!process.env.PAYLOAD_URL) {
    throw new Error("PAYLOAD_URL is not defined");
  }

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  console.log("Contact Submissions:", payload);

  const res = await fetch(`${process.env.PAYLOAD_URL}/api/contact-submissions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  console.log("Payload response:", res.status, text);

}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const labels = {
    en: {
      heading: "Contact Us",
      name: "Name",
      message: "Message",
      submit: "Submit",
    },
    hi: {
      heading: "संपर्क करें",
      name: "नाम",
      message: "संदेश",
      submit: "भेजें",
    },
    fr: {
      heading: "Contactez-nous",
      name: "Nom",
      message: "Message",
      submit: "Envoyer",
    },
  };

  const t = labels[lang as keyof typeof labels] ?? labels.en;

  return (
    <section className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t.heading}</h1>

      <form action={submit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder={t.name}
          className="border p-2 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 rounded"
          required
        />

        <textarea
          name="message"
          placeholder={t.message}
          className="border p-2 rounded"
          rows={4}
        />

        <button type="submit" className="bg-black text-white py-2 rounded">
          {t.submit}
        </button>
      </form>
    </section>
  );
}
