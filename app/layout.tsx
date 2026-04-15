import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Layers — GEO Intelligence pour agences SEO",
  description: "La première plateforme GEO conçue exclusivement pour les agences SEO.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", background: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
