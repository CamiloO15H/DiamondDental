'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function HomeIntroduction() {
    const t = useTranslations('Index.introduction');
    const params = useParams();
    const locale = params?.locale as string || 'es';

    return (
        <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 overflow-hidden relative">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 md:gap-24 items-center relative z-10">
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
                            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1734862043830650%2F&show_text=0&t=0"
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
                        <span className="text-white/40 font-sans text-[10px] tracking-[0.5em] uppercase font-bold">
                            Diamond Sanctuary
                        </span>
                        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.9] tracking-tight whitespace-pre-line py-2">
                            {t('title')}
                        </h2>
                    </div>

                    <p className="font-sans text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-xl">
                        {t('body')}
                    </p>

                    <Link
                        href={`/${locale}/nosotros`}
                        className="group relative mt-4 px-12 py-5 border border-white/10 text-white font-sans text-[11px] tracking-[0.4em] uppercase hover:border-white transition-all duration-700 overflow-hidden"
                    >
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                            {t('cta')}
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
