import type { Metadata } from "next";
import { Anton, Oswald, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridLines from "@/components/GridLines";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const accent = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-accent",
});

const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.aboutTeaser,
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.aboutTeaser,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${accent.variable} ${body.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <GridLines />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
