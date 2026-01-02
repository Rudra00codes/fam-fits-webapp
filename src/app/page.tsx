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

      {/* Trust Bar / Logos - Optional addition for credibility */}
      <div className="py-12 border-y border-brand-gray-light bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex justify-between items-center whitespace-nowrap opacity-30 grayscale gap-12 font-display text-2xl md:text-4xl text-brand-black">
            <span>STREETCRAFT</span>
            <span>URBAN EDGE</span>
            <span>BOLD MOVE</span>
            <span>RAW BLOX</span>
            <span className="hidden md:inline">STREETCRAFT</span>
            <span className="hidden md:inline">URBAN EDGE</span>
          </div>
        </div>
      </div>

      {/* Featured Drops */}
      <FeaturedDrops />

      {/* Big Statement Section */}
      <section className="py-24 px-4 md:px-8 bg-brand-gray-light/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop"
                className="w-full h-full object-cover"
                alt="Streetwear Culture"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-5xl md:text-7xl leading-tight">SHIP YOUR WEBSITE QUICKLY WITH FAM-FITS</h2>
            <p className="text-brand-gray-dark font-medium leading-relaxed">
              Use our curated affiliate discovery engine to find products that define your movement.
              Save time and focus on style with our user-friendly, high-performance interface.
            </p>
            <button className="btn-primary">Explore Collections</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
