"use client";

import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ComparisonSlider from '@/features/gallery/components/ComparisonSlider';

const galleryCases = [
    {
        id: 1,
        key: "1",
        before: "/images/results/case5-before.jpg",
        after: "/images/results/case5-after.jpg",
        featured: true
    },
    {
        id: 2,
        key: "2",
        before: "/images/results/case4-before.jpg",
        after: "/images/results/case4-after.jpg",
    },
    {
        id: 3,
        key: "3",
        before: "/images/results/case2-before.jpg",
        after: "/images/results/case2-after.jpg",
    },
    {
        id: 4,
        key: "4",
        before: "/images/results/case1-before.jpg",
        after: "/images/results/case1-after.jpg",
    },
    {
        id: 5,
        key: "5",
        before: "/images/results/case3-before.jpg",
        after: "/images/results/case3-after.jpg",
    }
];

export default function GalleryClient() {
    const t = useTranslations('Index.galleryPage');

    return (
        <LazyMotion features={domAnimation}>
            <div className="bg-[#0d0d0d] min-h-screen text-white font-sans selection:bg-gold-muted/30">
                {/* Background Texture */}
                <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(197,160,89,0.05),transparent_70%)] pointer-events-none z-0" />

                <main className="relative z-10">
                    {/* Cinematic Hero */}
                    <section className="h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                        <m.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="relative"
                        >
                            <m.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-gold-muted tracking-[1em] uppercase text-[10px] font-bold mb-8 block ml-[1em]"
                            >
                                {t("badge")}
                            </m.span>
                            <h1 className="text-7xl md:text-9xl font-serif uppercase tracking-tighter leading-[0.8] mb-12 whitespace-pre-line">
                                {t("title")}
                            </h1>
                            <m.div
                                initial={{ width: 0 }}
                                animate={{ width: "100px" }}
                                transition={{ duration: 1, delay: 1 }}
                                className="h-[1px] bg-gold-muted/40 mx-auto"
                            />
                        </m.div>
                    </section>

                    {/* Gallery Grid - Editorial Style */}
                    <section className="container mx-auto px-6 py-32">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-x-12">
                            {galleryCases.map((item, idx) => (
                                <m.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, delay: idx * 0.1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`flex flex-col ${item.featured
                                        ? "md:col-span-12"
                                        : idx % 2 === 0 ? "md:col-span-7" : "md:col-span-5 md:mt-24"
                                        }`}
                                >
                                    <div className="relative group">
                                        <ComparisonSlider
                                            beforeImage={item.before}
                                            afterImage={item.after}
                                            aspectRatio={item.featured ? "video" : "clinical"}
                                            className="border border-white/5 ring-1 ring-white/10"
                                        />

                                        {/* Glass Details Card */}
                                        <div className="mt-8 md:mt-12 max-w-xl">
                                            <div className="flex items-center gap-4 mb-4 text-gold-muted/60">
                                                <span className="text-[10px] tracking-[0.4em] uppercase font-bold">
                                                    {t(`cases.${item.key}.category`)}
                                                </span>
                                                <div className="w-8 h-[1px] bg-gold-muted/20" />
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-tight mb-6">
                                                {t(`cases.${item.key}.title`)}
                                            </h2>
                                            <p className="text-sm md:text-base text-[#a1a1a1] leading-relaxed font-light tracking-wide max-w-lg">
                                                {t(`cases.${item.key}.description`)}
                                            </p>
                                        </div>
                                    </div>
                                </m.div>
                            ))}
                        </div>
                    </section>

                    {/* Closing Statement */}
                    <section className="py-48 text-center px-6">
                        <m.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl md:text-3xl font-serif text-white/40 italic mb-12">
                                {t("closingQuote")}
                            </h3>
                            <div className="text-[10px] text-gold-muted/40 tracking-[0.8em] uppercase">
                                {t("closingLabel")}
                            </div>
                        </m.div>
                    </section>
                </main>
            </div>
        </LazyMotion>
    );
}
