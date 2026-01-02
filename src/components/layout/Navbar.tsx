"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "WOMEN", href: "/Women" },
    { name: "MEN", href: "/Men" },
    { name: "KIDS", href: "/Kids" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-gray-medium/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="font-display text-3xl tracking-tighter text-brand-black hover:opacity-80 transition-opacity">
                        FAM-FITS
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative group py-2"
                            >
                                <span className="text-sm font-bold tracking-widest text-brand-black group-hover:text-brand-accent transition-colors">
                                    {link.name}
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-5">
                        <button className="p-2 hover:bg-brand-gray-light rounded-full transition-colors relative group">
                            <ShoppingCart size={22} className="group-hover:text-brand-accent transition-colors" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                        </button>
                        <button
                            className="md:hidden p-2 hover:bg-brand-gray-light rounded-full transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-brand-gray-medium overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-2xl font-display tracking-tight text-brand-black"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
