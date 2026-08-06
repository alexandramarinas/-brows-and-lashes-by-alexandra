import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brows & Lashes by Alexandra",
  description:
    "Studio premium din București specializat în pensat, laminare sprâncene, laminare gene și masaj facial.",

  keywords: [
    "pensat București",
    "laminare sprâncene",
    "laminare gene",
    "brow spa",
    "masaj facial",
    "Aviatiei",
  ],

  authors: [
    {
      name: "Brows & Lashes by Alexandra",
    },
  ],

  openGraph: {
    title: "Brows & Lashes by Alexandra",
    description:
      "Studio premium de beauty în București.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}