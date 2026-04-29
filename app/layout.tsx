import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Private Taekwondo - Bela Diri untuk Anak-Anak",
  description:
    "Program taekwondo private dan kelas regular untuk anak-anak dengan instruktur profesional berpengalaman.",
  keywords: "taekwondo, kelas anak, bela diri, jakarta",
  openGraph: {
    title: "Private Taekwondo - Bela Diri untuk Anak-Anak",
    description: "Program taekwondo terbaik untuk anak-anak",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-full flex flex-col">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
