import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <Navbar lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
