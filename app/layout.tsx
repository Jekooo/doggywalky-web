import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Doggy Walky — Trouvez des balades pour votre chien",
  description:
    "Rejoignez la communauté Doggy Walky : organisez des balades, rencontrez d'autres maîtres et faites socialiser votre chien près de chez vous.",
  keywords: [
    "balade chien",
    "promenade chien",
    "rencontre chien",
    "socialisation chien",
    "communauté chien",
    "doggy walky",
  ],
  authors: [{ name: "Doggy Walky" }],
  openGraph: {
    title: "Doggy Walky — Balades entre amis à 4 pattes",
    description:
      "Organisez et rejoignez des balades de chiens près de chez vous.",
    url: "https://doggywalky.dog",
    siteName: "Doggy Walky",
    locale: "fr_FR",
    type: "website",
  },
  metadataBase: new URL("https://doggywalky.dog"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
