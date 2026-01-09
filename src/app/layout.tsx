import type { Metadata } from "next";
import "./globals.css";
import { FontDebugger } from "@/components/utils/FontDebugger";

export const metadata: Metadata = {
  title: "Fam-Fits | Premium Streetwear & Affiliate Discovery",
  description: "Discover the best streetwear and lifestyle products curated for you.",
  other: {
    "p:domain_verify": "24b566570c621e72c5d6c41ff947371d",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <FontDebugger />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
