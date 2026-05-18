'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
    Compass, 
    Sparkles, 
    Award, 
    Users, 
    ArrowUpRight 
} from 'lucide-react';

export default function HomeIntroduction() {
    const tIntro = useTranslations('Index.introduction');
    const tHub = useTranslations('Index.hub');
    const params = useParams();
    const locale = params?.locale as string || 'es';

    const paths = {
        legacy: `/${locale}/legado`,
        services: `/${locale}/servicios`,
        cases: `/${locale}/casos`,
        team: `/${locale}/team`
    };

    const cards = [
        {
            key: "legacy",
            path: paths.legacy,
            icon: Compass,
            badgeColor: "border-[#c5a880]/40 text-[#8e7046] bg-[#c5a880]/10",
            hoverGlow: "group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)]",
            gradient: "from-gold-muted/5 via-transparent to-transparent"
        },
        {
            key: "services",
            path: paths.services,
            icon: Sparkles,
            badgeColor: "border-sky-500/30 text-sky-800 bg-sky-500/10",
            hoverGlow: "group-hover:shadow-[0_20px_50px_rgba(14,165,233,0.08)]",
            gradient: "from-sky-500/5 via-transparent to-transparent"
        },
        {
            key: "cases",
            path: paths.cases,
            icon: Award,
            badgeColor: "border-black/20 text-[#0f0f0f] bg-black/5",
            hoverGlow: "group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]",
            gradient: "from-black/5 via-transparent to-transparent"
        },
        {
            key: "team",
            path: paths.team,
            icon: Users,
            badgeColor: "border-[#c5a880]/40 text-[#8e7046] bg-[#c5a880]/10",
            hoverGlow: "group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)]",
            gradient: "from-gold-muted/5 via-transparent to-transparent"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 overflow-hidden relative border-b border-white/5">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute top-[60%] left-1/4 w-[300px] h-[300px] bg-gold-muted/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-1/4 w-[400px] h-[400px] bg-diamond-ice/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* 1. TOP PART: CLINIC STORY INTRODUCTION */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 md:gap-24 items-center mb-24 sm:mb-32">
                    {/* Left Column: Video */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1 flex justify-center"
                    >
                        {/* Glassmorphism Container for the Video */}
                        <motion.div
                            whileHover={{ scale: 1.015 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="relative aspect-[9/16] w-full max-w-[460px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] bg-black group transform-gpu"
                        >
                            {/* Subtle inner glow for depth */}
                            <div className="absolute inset-0 z-20 pointer-events-none border border-white/5 rounded-3xl"></div>

                            <iframe
                                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F973238971722405&show_text=0&t=0"
                                title="Introduction Video"
                                className="w-full h-full border-none overflow-hidden"
                                scrolling="no"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-[100px] pointer-events-none opacity-50" />
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-[120px] pointer-events-none opacity-30" />
                    </motion.div>

                    {/* Right Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col items-start space-y-8 order-1 lg:order-2"
                    >
                        <div className="space-y-4">
                            <span className="text-white/40 font-sans text-[10px] tracking-[0.3em] sm:tracking-[0.5em] uppercase font-bold">
                                {tIntro('badge')}
                            </span>
                            <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.9] tracking-tight break-words py-2">
                                {tIntro('title')}
                            </h2>
                        </div>

                        <p className="font-sans text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-xl">
                            {tIntro('body')}
                        </p>

                        <Link
                            href={`/${locale}/nosotros`}
                            className="group relative mt-4 px-12 py-5 border border-white/10 text-white font-sans text-[11px] tracking-[0.4em] uppercase hover:border-white transition-all duration-700 overflow-hidden"
                        >
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                                {tIntro('cta')}
                            </span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                        </Link>
                    </motion.div>
                </div>

                {/* 2. BOTTOM PART: SHORTCUTS NAVIGATION HUB */}
                <div className="border-t border-white/5 pt-20">
                    {/* Small gold navigation header */}
                    <div className="text-center mb-16">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 0.6, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.5em] text-gold-muted block"
                        >
                            {tHub("sectionBadge") || "Navega nuestros módulos de nuestra clínica"}
                        </motion.span>
                    </div>

                    {/* Interactive Shortcuts Grid */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
                    >
                        {cards.map((card) => {
                            const IconComponent = card.icon;

                            return (
                                <Link href={card.path} key={card.key} className="group block relative">
                                    <motion.div
                                        variants={cardVariants}
                                        whileHover={{ y: -6, transition: { duration: 0.4, ease: "easeOut" } }}
                                        className={`relative h-full min-h-[220px] sm:min-h-[260px] bg-[#FAF9F6]/90 hover:bg-[#FFFFFF] border border-black/5 hover:border-black/10 rounded-[30px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 shadow-md ${card.hoverGlow}`}
                                    >
                                        {/* Corner Glow */}
                                        <div className={`absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br ${card.gradient} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-700`} />

                                        {/* Metadata Row */}
                                        <div className="flex items-start justify-between relative z-10">
                                            <div className={`px-4 py-2 border rounded-full text-[9px] font-bold tracking-[0.25em] uppercase ${card.badgeColor} transition-colors duration-500`}>
                                                {tHub(`cards.${card.key}.badge`)}
                                            </div>
                                            <div className="w-10 h-10 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-black/40 group-hover:text-black group-hover:border-black/20 transition-all duration-500">
                                                <IconComponent className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
                                            </div>
                                        </div>

                                        {/* Text Content */}
                                        <div className="mt-8 sm:mt-12 relative z-10">
                                            <h3 className="text-xl sm:text-2xl font-serif text-[#0f0f0f] uppercase tracking-wider mb-3 group-hover:text-gold-muted transition-colors duration-500">
                                                {tHub(`cards.${card.key}.title`)}
                                            </h3>
                                            <p className="text-xs sm:text-sm font-sans text-black/60 group-hover:text-black/80 leading-relaxed font-light transition-colors duration-500">
                                                {tHub(`cards.${card.key}.description`)}
                                            </p>
                                        </div>

                                        {/* CTA Link Footer */}
                                        <div className="mt-6 flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-black/40 group-hover:text-black transition-all duration-500 relative z-10 pt-4 border-t border-black/5">
                                            <span>{tHub(`cards.${card.key}.cta`)}</span>
                                            <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
