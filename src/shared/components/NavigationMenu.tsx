"use client";

import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useBooking } from "@/shared/providers/BookingProvider";

interface NavigationMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuVariants = {
    closed: {
        x: "100%",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
    open: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
};

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
    const t = useTranslations("Index.navigation");
    const params = useParams();
    const locale = params?.locale as string || "es";
    const { openBooking } = useBooking();

    const menuItems = [
        { label: t("home"), href: `/${locale}` },
        { label: t("gallery"), href: `/${locale}/casos` },
        { label: t("services"), href: `/${locale}/servicios` },
        { label: t("nosotros"), href: `/${locale}/nosotros` },
        { label: t("resenas"), href: `/${locale}/resenas` },
        { label: t("contact"), href: `/${locale}/contacto` },
    ];

    return (
        <LazyMotion features={domAnimation}>
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop Overlay */}
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-md pointer-events-auto"
                        />

                        {/* Menu Panel */}
                        <m.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-0 right-0 h-full w-full sm:w-[450px] z-[200] bg-[#0d0d0d]/90 backdrop-blur-2xl border-l border-white/10 flex flex-col p-12 pointer-events-auto"
                        >
                            {/* Close Button */}
                            <div className="flex justify-end mb-20">
                                <button
                                    onClick={onClose}
                                    className="group p-4 -mr-4 text-white/50 hover:text-white transition-colors"
                                >
                                    <X className="w-8 h-8 group-hover:rotate-180 transition-transform duration-500" />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-8">
                                {menuItems.map((item) => (
                                    <m.div
                                        key={item.label}
                                        variants={itemVariants}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className="text-4xl md:text-5xl font-playfair italic text-white/70 hover:text-white transition-all duration-300 hover:pl-4"
                                        >
                                            {item.label}
                                        </Link>
                                    </m.div>
                                ))}
                            </nav>

                            {/* CTA Button */}
                            <m.div variants={itemVariants} className="mt-12">
                                <button
                                    onClick={() => { onClose(); openBooking(); }}
                                    className="w-full py-5 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 group relative overflow-hidden"
                                >
                                    <span className="relative z-10 transition-colors duration-500">
                                        {t("booking") || "Reservar valoración"}
                                    </span>
                                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                                </button>
                            </m.div>

                            {/* Decorative Diamond Element */}
                            <div className="mt-auto flex justify-center opacity-10">
                                <Image
                                    src="/images/logo-diamond.png"
                                    alt="Diamond"
                                    width={128}
                                    height={128}
                                    className="grayscale"
                                />
                            </div>
                        </m.div>
                    </>
                )}
            </AnimatePresence>
        </LazyMotion>
    );
}
