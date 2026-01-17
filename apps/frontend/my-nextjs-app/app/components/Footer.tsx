export default function Footer() {
  return (
    <footer className="mt-auto p-4 border-t text-center text-sm">
      © {new Date().getFullYear()} Restroworks POC | Built with Next.js & Payload CMS
      <br />By Sohail Khan
    </footer>
  );
}
