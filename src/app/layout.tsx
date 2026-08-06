import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brows & Lashes by Alexandra | Beauty Studio București",
  description: "Stilizare premium a sprâncenelor, laminare gene și ritualuri faciale la Brows & Lashes by Alexandra, București.",
  openGraph: {
    title: "Brows & Lashes by Alexandra",
    description: "Beauty studio premium în București.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ro"><body className={`${inter.variable} ${cormorant.variable}`}>{children}</body></html>;
}
