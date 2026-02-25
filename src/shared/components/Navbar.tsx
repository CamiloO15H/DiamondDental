"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("Index");
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const isEn = pathname.startsWith("/en");
    const newLocale = isEn ? "es" : "en";
    const newPathname = pathname.replace(/^\/(es|en)/, `/${newLocale}`);
    router.push(newPathname || `/${newLocale}`);
  };

  const currentLocale = pathname.startsWith("/en") ? "EN" : "ES";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-6">
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          borderColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
          paddingTop: isScrolled ? "12px" : "16px",
          paddingBottom: isScrolled ? "12px" : "16px",
        }}
        className="max-w-7xl mx-auto flex items-center justify-between border rounded-full px-8 shadow-2xl transition-all duration-300"
      >
        <Link href="/" className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white group">
          DIAMOND<span className="text-gold-muted group-hover:text-white transition-colors duration-500">DENTAL</span>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={toggleLanguage}
            className="text-xs md:text-sm font-sans font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <span className={currentLocale === "ES" ? "text-white font-bold" : ""}>ES</span>
            <span className="opacity-20">|</span>
            <span className={currentLocale === "EN" ? "text-white font-bold" : ""}>EN</span>
          </button>

          <button className="hidden sm:block px-6 py-2 bg-white text-black rounded-full text-xs md:text-sm font-sans font-bold hover:bg-gold-muted transition-all duration-300 transform hover:scale-105 active:scale-95">
            {t("contact.booking") || "BOOK NOW"}
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
