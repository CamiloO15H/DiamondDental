"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("Index");

    return (
        <footer className="bg-black-matte py-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Monochromatic Logo */}
                <div className="mb-8 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale brightness-125 contrast-75">
                    <Image
                        src="/images/logo-diamond-julio.png"
                        alt="Diamond Dental Monochromatic Logo"
                        width={180}
                        height={80}
                        className="object-contain"
                    />
                </div>

                <p className="font-serif text-2xl mb-4 italic text-white/40 tracking-wide">
                    Diamond Dental
                </p>

                <p className="text-[10px] uppercase tracking-[0.4em] text-gold-muted/40 font-medium font-sans max-w-md text-center leading-relaxed">
                    © 2024 Excellence in Advanced Dentistry. <br className="md:hidden" />
                    Premium Care & Aesthetic Mastery.
                </p>

                <div className="mt-12 flex gap-8 text-[9px] uppercase tracking-widest text-white/20 font-medium">
                    <Link href="#" className="hover:text-gold-muted transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-gold-muted transition-colors">Legal Terms</Link>
                </div>
            </div>
        </footer>
    );
}
