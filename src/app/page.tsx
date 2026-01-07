import { Hero } from "@/components/ui/Hero";
import { FeaturedDrops } from "@/components/ui/FeaturedDrops";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Drops */}
      <FeaturedDrops />
    </main>
  );
}
