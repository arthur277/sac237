import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Serif de titre : positionnement « maroquinerie italienne ». Police
// variable, donc pas de liste de graisses à déclarer.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const titre = `${site.name} — ${site.tagline}`;

// L'image de partage et les icônes viennent des conventions de fichiers du
// dossier `app/` : opengraph-image.jpg, favicon.ico, icon.png, apple-icon.png.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: titre,
  description: site.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: titre,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-neutral-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
