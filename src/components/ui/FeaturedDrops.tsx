"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const products = [
    { id: 1, name: "SPRING JACKET", desc: "Lightweight and versatile, the BreezeLite Spring Jacket combines comfort and style.", price: 89, oldPrice: 129, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2672&auto=format&fit=crop" },
    { id: 2, name: "SUMMER CAP", desc: "Stay cool and protected with the SunShade Summer Cap, featuring breathable fabric.", price: 45, oldPrice: 65, img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2670&auto=format&fit=crop" },
    { id: 3, name: "WHITE SUMMER TEE", desc: "Lightweight and breathable, the BreezeFit White Summer Tee keeps you cool.", price: 35, oldPrice: 55, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
];

export function FeaturedDrops() {
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
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        whileHover={{ y: -10 }}
                        className="group relative"
                    >
                        <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-brand-gray-light mb-6">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <h3 className="text-white text-2xl md:text-3xl font-display mb-2 drop-shadow-lg">{product.name}</h3>
                                <p className="text-white/80 text-sm line-clamp-2 mb-4 drop-shadow-md">{product.desc}</p>
                            </div>
                        </div>
                        {/* Price Info below or on hover? Snapshot shows simplified list below */}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
