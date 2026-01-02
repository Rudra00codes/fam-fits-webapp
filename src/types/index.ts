export interface SanityProduct {
    _id: string;
    title: string;
    slug: string;
    description: string;
    affiliateLink: string;
    priceLabel?: string;
    imageUrl: string;
    category: "Women" | "Men" | "Kids";
    subCategory?: string;
}
