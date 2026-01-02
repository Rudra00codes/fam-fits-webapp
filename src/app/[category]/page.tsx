import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { PRODUCTS_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";
import { SanityProduct } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Allow static generation for these paths
export async function generateStaticParams() {
    return [
        { category: "Women" },
        { category: "Men" },
        { category: "Kids" },
    ];
}

// Map valid categories to descriptions/images (mock for header style)
const categoryMeta: Record<string, { desc: string; subs: { name: string; slug: string }[] }> = {
    Women: {
        desc: "Empower your movement with high-performance activewear and effortless street style.",
        subs: [
            { name: "Activewear", slug: "Activewear" },
            { name: "Casual", slug: "Casual" },
            { name: "Shoes", slug: "Shoes" }
        ]
    },
    Men: {
        desc: "Essentials redefined. Engineered for durability, styled for the city.",
        subs: [
            { name: "Tees", slug: "Tees" },
            { name: "Shorts", slug: "Shorts" },
            { name: "Shoes", slug: "Shoes" }
        ]
    },
    Kids: {
        desc: "Play-proof gear for the next generation of movers and shakers.",
        subs: [
            { name: "Sets", slug: "Sets" },
            { name: "Shoes", slug: "Shoes" },
            { name: "Basics", slug: "Basics" }
        ]
    },
};

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ category: string }>;
}) {
    const resolvedParams = await params;
    const category = resolvedParams.category;

    // Validate category (Basic case-sensitive check, assuming links pass capitalized)
    // We normalize to ensure robust matching if user types 'women' instead of 'Women'
    const validCategories = ["Women", "Men", "Kids"];
    const normalizedCategory = validCategories.find(c => c.toLowerCase() === category.toLowerCase());

    if (!normalizedCategory) {
        return notFound();
    }

    // Fetch Data
    const products = await sanityFetch<SanityProduct[]>({
        query: PRODUCTS_BY_CATEGORY_QUERY,
        params: { category: normalizedCategory },
    });

    const meta = categoryMeta[normalizedCategory];

    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Category Header */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto mb-16">
                <div className="bg-brand-black text-white rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl">
                        <span className="text-brand-accent font-bold tracking-widest uppercase mb-4 block animate-pulse">Collection</span>
                        <h1 className="text-6xl md:text-9xl font-display uppercase leading-none mb-6">{normalizedCategory}</h1>
                        <p className="text-xl text-brand-gray-light/80 mb-10 max-w-lg">{meta.desc}</p>

                        {/* Sub Categories Chips */}
                        <div className="flex flex-wrap gap-3">
                            {meta.subs.map(sub => (
                                <Link
                                    key={sub.slug}
                                    href={`/${category}/${sub.slug}`}
                                    className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white text-white hover:text-brand-black px-6 py-3 rounded-full transition-colors border border-white/20"
                                >
                                    <span className="font-bold text-sm tracking-wide uppercase">{sub.name}</span>
                                    <ArrowRight size={14} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Background Text */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none select-none">
                        <span className="text-[20rem] font-display leading-none">{category.charAt(0)}</span>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto">
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-brand-gray-light rounded-3xl">
                        <h3 className="text-2xl font-display text-brand-dark/50 mb-2">NO DROPS YET</h3>
                        <p className="text-brand-dark/40">Check back soon for new arrivals in {normalizedCategory}.</p>
                    </div>
                )}
            </section>
        </main>
    );
}
