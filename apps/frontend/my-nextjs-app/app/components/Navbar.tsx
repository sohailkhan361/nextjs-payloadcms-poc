import Link from "next/link";

export default function Navbar({ lang }: { lang: string }) {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <Link href={`/${lang}`} className="font-bold text-lg">
        Restroworks
      </Link>

      <div className="flex gap-4">
        <Link href={`/${lang}`}>Home</Link>
        <Link href={`/${lang}/contact`}>Contact</Link>

        {/* Language Switcher (Stripe-like) */}
        <Link href="/en" className="text-sm">EN</Link>
        <Link href="/hi" className="text-sm">हिंदी</Link>
      </div>
    </nav>
  );
}
