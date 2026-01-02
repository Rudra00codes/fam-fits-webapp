import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { PRODUCTS_BY_SUB_CATEGORY_QUERY } from "@/sanity/lib/queries";
import { SanityProduct } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function SubCategoryPage({
    params,
}: {
    params: Promise<{ category: string; subcategory: string }>;
}) {
    const resolvedParams = await params;
    const { category, subcategory } = resolvedParams;

    // Simple normalization
    const validCategories = ["Women", "Men", "Kids"];
    const normalizedCategory = validCategories.find(c => c.toLowerCase() === category.toLowerCase());

    if (!normalizedCategory) {
        return notFound();
    }

    // Sanity usually stores sub-categories as plain strings with specific case provided in the Studio dropdowns.
    // We'll pass the slug directly as the subCategory value. 
    // NOTE: Schema enforces "Activewear", "Casual", etc so we might need to capitalize the first letter.
    const formattedSubCategory = subcategory.charAt(0).toUpperCase() + subcategory.slice(1);

    // Fetch Data
    const products = await sanityFetch<SanityProduct[]>({
        query: PRODUCTS_BY_SUB_CATEGORY_QUERY,
        params: {
            category: normalizedCategory,
            subCategory: formattedSubCategory
        },
    });

    return (
        <main className="min-h-screen pt-24 pb-20">
            <section className="px-4 md:px-8 max-w-7xl mx-auto mb-12">
                <Link
                    href={`/${category}`}
                    className="inline-flex items-center text-brand-gray-dark hover:text-brand-black transition-colors mb-6 group"
                >
                    <div className="p-2 rounded-full border border-brand-gray-medium mr-3 group-hover:bg-brand-black group-hover:text-white transition-all">
                        <ArrowLeft size={16} />
                    </div>
                    <span className="font-bold tracking-wide text-sm uppercase">Back to {normalizedCategory}</span>
                </Link>

                <h1 className="text-5xl md:text-7xl font-display uppercase leading-none mb-2">
                    {normalizedCategory} <span className="text-brand-gray-medium">/</span> {formattedSubCategory}
                </h1>
            </section>

            <section className="px-4 md:px-8 max-w-7xl mx-auto">
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-brand-gray-light rounded-3xl">
                        <h3 className="text-2xl font-display text-brand-dark/50 mb-2">EMPTY RACK</h3>
                        <p className="text-brand-dark/40">We haven't dropped any {formattedSubCategory} for {normalizedCategory} yet.</p>
                    </div>
                )}
            </section>
        </main>
    );
}
