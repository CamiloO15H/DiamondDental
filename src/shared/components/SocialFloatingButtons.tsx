"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

// Custom TikTok icon since Lucide doesn't have it in older versions
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
);

const socialLinks = [
    {
        id: "tiktok",
        icon: TikTokIcon,
        href: "https://www.tiktok.com/@diamondental",
        color: "hover:bg-[#ff0050]"
    },
    {
        id: "facebook",
        icon: Facebook,
        href: "https://www.facebook.com/profile.php?id=100063458412996",
        color: "hover:bg-[#1877F2]"
    },
    {
        id: "instagram",
        icon: Instagram,
        href: "https://www.instagram.com/diamondental.clinica/",
        color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
    },
    {
        id: "whatsapp",
        icon: MessageCircle,
        href: "https://wa.me/573148311777",
        color: "hover:bg-[#25D366]"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.5,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
        }
    }
};

export default function SocialFloatingButtons() {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-center group/container"
            >
                {socialLinks.map((social) => (
                    <m.a
                        key={social.id}
                        variants={itemVariants}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative group flex items-center justify-center outline-none"
                        aria-label={social.id}
                    >
                        {/* The circle itself with mix-blend-difference so it adapts to light/dark backgrounds */}
                        <div className={`
                            w-12 h-12 rounded-full flex items-center justify-center 
                            bg-transparent text-white mix-blend-difference border border-white/30
                            transition-all duration-300 group-hover:mix-blend-normal group-hover:border-transparent group-hover:text-white
                            ${social.color.replace('hover:', 'group-hover:')}
                        `}>
                            <social.icon className="w-5 h-5" />
                        </div>

                        {/* Hover Label for better clarity - outside of blend mode so it doesn't invert */}
                        <span className="absolute right-16 bg-[#0d0d0d] border border-white/10 px-3 py-1.5 rounded-sm text-[10px] uppercase tracking-widest text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-x-2 group-hover:translate-x-0 shadow-xl">
                            {social.id}
                        </span>
                    </m.a>
                ))}
            </m.div>
        </LazyMotion>
    );
}
