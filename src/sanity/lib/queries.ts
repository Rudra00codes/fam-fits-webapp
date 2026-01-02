import { defineQuery } from "next-sanity";

// Fetch all products (for testing or general lists)
export const ALL_PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] {
    _id,
    title,
    "slug": slug.current,
    description,
    affiliateLink,
    priceLabel,
    "imageUrl": image.asset->url,
    category,
    subCategory
  }
`);

// Fetch products by Main Category (e.g., "Women")
export const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "product" && category == $category] {
    _id,
    title,
    "slug": slug.current,
    description,
    affiliateLink,
    priceLabel,
    "imageUrl": image.asset->url,
    category,
    subCategory
  }
`);

// Fetch products by Sub-Category (e.g., "Women" -> "Shoes")
export const PRODUCTS_BY_SUB_CATEGORY_QUERY = defineQuery(`
  *[_type == "product" && category == $category && subCategory == $subCategory] {
    _id,
    title,
    "slug": slug.current,
    description,
    affiliateLink,
    priceLabel,
    "imageUrl": image.asset->url,
    category,
    subCategory
  }
`);

// Fetch Featured Products (newest 4)
export const FEATURED_PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] | order(_createdAt desc) [0...4] {
    _id,
    title,
    "slug": slug.current,
    description,
    affiliateLink,
    priceLabel,
    "imageUrl": image.asset->url,
    category,
    subCategory
  }
`);
