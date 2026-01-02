import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Refactor: We will split this into a wrapper or make it a client component that accepts data.
// BETTER: Make FeaturedDrops text static, and the grid a client component?
// OR: Just make the whole ProductCard client-side (it already is).
// Let's refactor this file to be a SERVER component, but `ProductCard` handles the animation.
import { sanityFetch } from "@/sanity/lib/fetch";
import { FEATURED_PRODUCTS_QUERY } from "@/sanity/lib/queries";
import { SanityProduct } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";

export async function FeaturedDrops() {
    const featured = await sanityFetch<SanityProduct[]>({
        query: FEATURED_PRODUCTS_QUERY
    });

    return (
        <section className="py-20 px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-6xl mb-6">FEATURED DROPS: STAND OUT, STAY AHEAD</h2>
                    <p className="text-brand-gray-dark/60 font-medium">
                        Exclusive designs, premium materials, and street-ready vibes—these must-have pieces are setting the trend. Get yours before they’re gone!
                    </p>
                </div>
                <div className="flex space-x-3">
                    <button className="p-4 rounded-full border border-brand-gray-medium hover:bg-brand-black hover:text-white transition-all">
                        <ArrowLeft size={24} />
                    </button>
                    <button className="p-4 rounded-full bg-brand-black text-white hover:bg-brand-gray-dark transition-all">
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featured.length > 0 ? (
                    featured.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <div className="col-span-3 text-center py-10 text-brand-gray-dark/40">
                        Initializing drops...
                    </div>
                )}
            </div>
        </section>
    );
}
