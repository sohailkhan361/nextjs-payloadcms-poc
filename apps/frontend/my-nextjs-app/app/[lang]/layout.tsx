import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <>
      <Navbar lang={params.lang} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
