const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL;

if (!PAYLOAD_URL) {
  throw new Error("PAYLOAD_URL is not defined");
}

export async function fetchPage(slug: string, locale: string) {
  const url = `${PAYLOAD_URL}/api/pages?where[slug][equals]=${slug}&locale=${locale}`;

  try {
    const res = await fetch(url, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    console.log("Payload response status:", res.status);

    if (!res.ok) {
      console.error("Payload fetch failed:", res.status, url);
      return null;
    }

    const json = await res.json();

    if (!json?.docs || json.docs.length === 0) {
      console.warn(`No CMS page found for slug="${slug}"`);
      return null;
    }

    return json.docs[0];
  } catch (error) {
    console.error("Payload fetch error:", error);
    return null;
  }
}
