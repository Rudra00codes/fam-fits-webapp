"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SanityProduct } from "@/types";

interface ProductCardProps {
    product: SanityProduct;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative flex flex-col h-full"
        >
            <Link href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-brand-gray-light mb-6 relative">
                    <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Quick View / Action Button Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full">
                            <span className="pl-4 text-white text-xs font-bold uppercase tracking-widest">View on Amazon</span>
                            <span className="p-2 bg-white text-brand-black rounded-full">
                                <ArrowRight size={16} />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-display uppercase leading-none tracking-wide text-brand-black">{product.title}</h3>
                        {product.priceLabel && (
                            <span className="text-sm font-bold bg-brand-gray-light px-2 py-1 rounded text-brand-black/60">
                                {product.priceLabel}
                            </span>
                        )}
                    </div>
                    <p className="text-brand-gray-dark/60 text-sm line-clamp-2 leading-relaxed">{product.description}</p>
                </div>
            </Link>
        </motion.div>
    );
}
