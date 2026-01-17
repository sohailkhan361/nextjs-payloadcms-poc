import { redirect } from "next/navigation";

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

  const res = await fetch(`${process.env.PAYLOAD_URL}/api/contact-submissions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to submit contact form");
  }

  redirect("?success=true");
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ success?: string }>;
}) {
  const { lang } = await params;
  const { success } = await searchParams;

  const labels = {
    en: {
      heading: "Contact Us",
      name: "Name",
      message: "Message",
      submit: "Submit",
      success: "Thank you! Your message has been submitted successfully.",
    },
    hi: {
      heading: "संपर्क करें",
      name: "नाम",
      message: "संदेश",
      submit: "भेजें",
      success: "धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।",
    },
    fr: {
      heading: "Contactez-nous",
      name: "Nom",
      message: "Message",
      submit: "Envoyer",
      success: "Merci ! Votre message a été envoyé avec succès.",
    },
  };

  const t = labels[lang as keyof typeof labels] ?? labels.en;

  return (
    <section className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t.heading}</h1>

      {success && (
        <div className="mb-4 rounded border border-green-300 bg-green-50 p-3 text-green-800">
          {t.success}
        </div>
      )}

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
