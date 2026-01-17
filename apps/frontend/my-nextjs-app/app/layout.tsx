import "./globals.css";

export const metadata = {
  title: "Restroworks POC",
  description: "Next.js + Payload CMS POC for Restroworks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
