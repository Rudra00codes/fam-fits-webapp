import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
