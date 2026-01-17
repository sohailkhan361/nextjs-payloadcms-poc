export default function ContactPage() {
  return (
    <section className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
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
          placeholder="Message"
          className="border p-2 rounded"
          rows={4}
        />
        <button className="bg-black text-white py-2 rounded">
          Submit
        </button>
      </form>
    </section>
  );
}
