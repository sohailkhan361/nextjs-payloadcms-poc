const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL!;

export async function fetchPage(slug: string, locale: string) {
  const res = await fetch(
    `${PAYLOAD_URL}/api/pages?where[slug][equals]=${slug}&locale=${locale}`,
    { cache: "no-store" }
  );

  const json = await res.json();
  return json.docs[0];
}
