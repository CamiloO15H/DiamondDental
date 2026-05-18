"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

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

// Official WhatsApp icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.764.462 3.49 1.34 5.018L2 22l5.12-1.343a9.96 9.96 0 0 0 4.884 1.343C17.524 22 22 17.52 22 12.004 22 6.48 17.52 2 12.004 2zm0 18.004c-1.616 0-3.204-.424-4.604-1.228l-.33-.196-3.424.897.915-3.336-.215-.342A8.004 8.004 0 0 1 4 12.004c0-4.413 3.59-8.004 8.004-8.004 4.414 0 8.004 3.591 8.004 8.004 0 4.413-3.59 8.004-8.004 8.004zm4.385-6.002c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06a7.39 7.39 0 0 1-1.922-1.185 8.163 8.163 0 0 1-1.332-1.656c-.14-.24-.015-.368.106-.487.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.195-.476-.39-.413-.54-.42-.14-.007-.3-.007-.46-.007s-.42.06-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.57.18 1.1.15 1.5.09.45-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
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
        icon: WhatsAppIcon,
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
