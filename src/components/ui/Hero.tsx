"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const slides = [
        { id: "01", title: "LIMITED DROPS, MAXIMUM IMPACT", desc: "We release exclusive, small-batch collections to keep your style fresh and unique—once it’s gone, it’s gone." },
        { id: "02", title: "BUILT FOR THE STREETS", desc: "Streetwear for the bold, built for the movement. Inspired by the raw energy of the streets." },
    ];

    return (
        <section className="relative pt-24 pb-12 px-4 md:px-8">
            <div className="relative h-[85vh] w-full rounded-[2.5rem] overflow-hidden bg-brand-black">
                {/* Placeholder Gradient until Image Tool used */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-black via-brand-gray-dark to-[#3a201a]" />

                {/* Mock Image (using a representative color/feel) */}
                <div className="absolute inset-0 opacity-60 flex items-center justify-center">
                    {/* We will replace this with an actual generated image later */}
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1523381235312-706788f401f8?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-16 left-8 md:left-16 max-w-2xl">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-8xl font-display text-white leading-none mb-6"
                    >
                        {slides[0].title}
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-gray-light/80 text-lg md:text-xl mb-8 max-w-lg"
                    >
                        {slides[0].desc}
                    </motion.p>
                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="group flex items-center bg-white text-brand-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
                    >
                        Shop now
                        <div className="ml-3 p-1 bg-brand-black text-white rounded-full group-hover:translate-x-1 transition-transform">
                            <ArrowRight size={20} />
                        </div>
                    </motion.button>

                    {/* Indicators */}
                    <div className="mt-16 flex space-x-12 border-t border-white/20 pt-8">
                        {slides.map((s, i) => (
                            <div key={s.id} className={cn("flex flex-col opacity-50 hover:opacity-100 cursor-pointer transition-opacity", i === 0 && "opacity-100")}>
                                <span className="text-white font-medium mb-1 font-display leading-none">{s.id}</span>
                                <span className="text-white/60 text-xs font-medium uppercase tracking-widest">{s.id === "01" ? "Limited Drops" : "Built for the Streets"}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Inline utility for now or import it
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}
