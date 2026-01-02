import Link from "next/link";
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-brand-black text-white pt-20 pb-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="space-y-6">
                    <h2 className="text-4xl font-display tracking-tight">FAM-FITS</h2>
                    <p className="text-brand-gray-light/60 max-w-xs font-medium uppercase text-xs tracking-widest leading-relaxed">
                        Streetwear for the bold, built for the movement. Inspired by the raw energy of the streets.
                    </p>
                    <p className="text-brand-gray-light/30 text-xs">© 2025 Copyright</p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-sm font-display tracking-widest text-brand-gray-light/50">MENU</h3>
                    <ul className="space-y-4">
                        {["Home", "Shop", "About", "Contact", "Story"].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-sm font-medium hover:text-brand-gray-light transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-6">
                    <h3 className="text-sm font-display tracking-widest text-brand-gray-light/50">SHOP</h3>
                    <ul className="space-y-4">
                        {["Collections", "New arrival", "Men collections", "Women collections", "Accessories", "Category"].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-sm font-medium hover:text-brand-gray-light transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-6">
                    <h3 className="text-sm font-display tracking-widest text-brand-gray-light/50">SOCIAL</h3>
                    <ul className="space-y-4">
                        {[
                            { name: "LinkedIn", icon: <Linkedin size={18} /> },
                            { name: "Instagram", icon: <Instagram size={18} /> },
                            { name: "Twitter", icon: <Twitter size={18} /> },
                            { name: "Facebook", icon: <Facebook size={18} /> },
                        ].map((item) => (
                            <li key={item.name}>
                                <Link href="#" className="flex items-center space-x-3 text-sm font-medium hover:text-brand-gray-light transition-colors">
                                    <span className="p-2 border border-white/10 rounded-lg">{item.icon}</span>
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Huge Background Text as per snapshot */}
            <div className="relative overflow-hidden">
                <h1 className="text-[15rem] md:text-[25rem] font-display text-white/[0.03] leading-none select-none -mb-20">
                    FAMFITS
                </h1>
            </div>
        </footer>
    );
}
