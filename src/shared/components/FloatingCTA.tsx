"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FloatingCTA() {
    const t = useTranslations("Index.common");

    const handleClick = () => {
        // Simulated WhatsApp redirect
        window.open("https://wa.me/your-number", "_blank");
    };

    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
        >
            <motion.button
                onClick={handleClick}
                className="relative group flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {/* Pulsing Aura */}
                <div className="absolute inset-0 bg-gold-muted/30 rounded-full animate-ping" />

                {/* Main Button */}
                <div className="relative w-16 h-16 bg-gold-muted rounded-full flex items-center justify-center shadow-2xl shadow-gold-muted/40 border border-white/20 overflow-hidden">
                    <MessageCircle className="w-8 h-8 text-black" />

                    {/* Shimmer Effect */}
                    <div className="gold-shimmer absolute inset-0 opacity-50" />
                </div>

                {/* Label (Visible on Hover) */}
                <motion.span
                    className="absolute right-20 bg-black-matte border border-white/10 px-4 py-2 rounded-full text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-sans"
                    initial={{ x: 10 }}
                    animate={{ x: 0 }}
                >
                    {t('bookNow')}
                </motion.span>
            </motion.button>
        </motion.div>
    );
}
