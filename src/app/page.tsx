import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/ui/Hero";
import { FeaturedDrops } from "@/components/ui/FeaturedDrops";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Featured Drops */}
      <FeaturedDrops />

      <Footer />
    </main>
  );
}
