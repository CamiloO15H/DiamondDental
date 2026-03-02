"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter, useParams } from "next/navigation";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MapPin, Menu } from "lucide-react";
import NavigationMenu from "./NavigationMenu";
import { useBooking } from "@/shared/providers/BookingProvider";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const t = useTranslations("Index");
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const locale = params?.locale as string || "es";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
    <LazyMotion features={domAnimation}>
      <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-6 pointer-events-none">
        <m.div
          initial={false}
          animate={{
            backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0)",
            backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
            borderColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
            paddingTop: isScrolled ? "8px" : "12px",
            paddingBottom: isScrolled ? "8px" : "12px",
            borderRadius: isScrolled ? "20px" : "0px",
            boxShadow: isScrolled ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" : "none",
          }}
          className={cn(
            "max-w-7xl mx-auto flex items-center justify-between border px-8 transition-all duration-300 pointer-events-auto",
            !isScrolled && "border-transparent"
          )}
        >
          <Link href={`/${locale}`} className="relative flex items-center">
            <m.div
              layout
              animate={{
                width: isScrolled ? 100 : 130,
              }}
              className="flex flex-col items-center gap-2 transition-all duration-500"
            >
              <m.div
                initial={{ width: 54, height: 54 }}
                animate={{
                  width: isScrolled ? 40 : 54,
                  height: isScrolled ? 40 : 54,
                }}
                className="relative"
              >
                <Image
                  src="/images/logo-diamond.png"
                  alt="Diamond Isotype"
                  width={54}
                  height={54}
                  className="w-full h-full object-contain brightness-110 contrast-105"
                  priority
                />
              </m.div>
            </m.div>
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

            <Link
              href={`/${locale}/location`}
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Location"
            >
              <MapPin className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <button
              onClick={openBooking}
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 rounded-full text-xs md:text-sm font-sans font-bold transition-all duration-500 backdrop-blur-md group relative overflow-hidden"
            >
              <m.span
                className="relative z-10 transition-colors duration-500"
              >
                {t("contact.booking") || "RESERVAR VALORACIÓN"}
              </m.span>
              <m.div
                className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
              />
            </button>
          </div>
        </m.div>

        <NavigationMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </nav>
    </LazyMotion>
  );
}
