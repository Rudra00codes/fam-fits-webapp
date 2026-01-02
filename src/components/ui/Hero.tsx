"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative pt-24 pb-12 px-4 md:px-8">
            <div className="relative h-[85vh] w-full rounded-[2.5rem] overflow-hidden bg-brand-black group">

                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-brand-black/20 z-10" />
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full bg-[url('https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center"
                    />
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent z-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-transparent to-transparent z-20" />

                {/* Content */}
                <div className="absolute bottom-16 left-8 md:left-16 max-w-3xl z-30">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1 mb-6 border border-white/30 rounded-full text-xs font-bold tracking-[0.2em] text-white/80 uppercase backdrop-blur-sm">
                            New Collection 2026
                        </span>
                        <h1 className="text-6xl md:text-9xl font-display text-white leading-[0.9] mb-8 tracking-wide">
                            DEFINING <br /> THE STREETS
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-brand-gray-light/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light"
                    >
                        Curated streetwear for the bold. Exclusive drops, limited editions, and the gear that moves with you.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="/Men"
                            className="group flex items-center bg-white text-brand-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-gray-light transition-all active:scale-95"
                        >
                            Shop Men
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/Women"
                            className="group flex items-center bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all active:scale-95"
                        >
                            Shop Women
                        </Link>
                    </motion.div>

                    {/* Indicators / Stats */}
                    <div className="mt-20 flex space-x-12 border-t border-white/10 pt-8">
                        <div>
                            <span className="block text-3xl font-display text-white mb-1">20+</span>
                            <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Brands</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-display text-white mb-1">Weekly</span>
                            <span className="text-white/40 text-xs font-bold uppercase tracking-widest">New Drops</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
