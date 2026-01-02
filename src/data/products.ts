export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  affiliateLink: string;
  priceLabel?: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "neon-sports-bra",
    title: "NEON PULSE SPORTS BRA",
    description: "High-impact support meets electric style. Designed for the bold runner who commands attention.",
    image: "https://m.media-amazon.com/images/I/71c+BDDR0vL._AC_SX569_.jpg",
    affiliateLink: "https://amzn.to/4jwXT47",
    priceLabel: "Check Price",
    category: "Women"
  },
  {
    id: "midnight-leggings",
    title: "MIDNIGHT RUNNER LEGGINGS",
    description: "Sleek, high-waisted performance leggings engineered for speed and comfort in the urban jungle.",
    image: "https://m.media-amazon.com/images/I/61IAgLM4uSL._AC_SY741_.jpg",
    affiliateLink: "https://amzn.to/3NpJnyZ",
    priceLabel: "Check Price",
    category: "Women"
  },
  {
    id: "urban-grey-zip",
    title: "URBAN GREY ZIP-UP",
    description: "The essential lightweight layer. technical fabric meets street-ready aesthetics.",
    image: "https://m.media-amazon.com/images/I/713iB7jyIEL._AC_SY741_.jpg",
    affiliateLink: "https://amzn.to/4piLjXu",
    priceLabel: "Check Price",
    category: "Women"
  },
  {
    id: "cloud-stride-kicks",
    title: "CLOUD STRIDE KICKS",
    description: "Breathable mesh construction with responsive cushioning for those long city runs.",
    image: "https://m.media-amazon.com/images/I/41EWzULbnBL._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/3LtaWab",
    priceLabel: "Check Price",
    category: "Women"
  }
];
