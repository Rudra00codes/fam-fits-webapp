import type { Metadata } from "next";
import "./globals.css";
import { FontDebugger } from "@/components/utils/FontDebugger";

export const metadata: Metadata = {
  title: "Fam-Fits | Premium Streetwear & Affiliate Discovery",
  description: "Discover the best streetwear and lifestyle products curated for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <FontDebugger />
        {children}
      </body>
    </html>
  );
}
