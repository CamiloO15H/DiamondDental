'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useParams } from 'next/navigation';
import ComparisonSlider from '@/features/gallery/components/ComparisonSlider';

const cases = [
    {
        id: 1,
        before: "/images/results/case1-before.jpg",
        after: "/images/results/case1-after.jpg",
    },
    {
        id: 2,
        before: "/images/results/case2-before.jpg",
        after: "/images/results/case2-after.jpg",
    },
    {
        id: 3,
        before: "/images/results/case3-before.jpg",
        after: "/images/results/case3-after.jpg",
    },
    {
        id: 4,
        before: "/images/results/case4-before.jpg",
        after: "/images/results/case4-after.jpg",
    },
    {
        id: 5,
        before: "/images/results/case5-before.jpg",
        after: "/images/results/case5-after.jpg",
    },
    {
        id: 6,
        before: "/images/results/case6-before.png",
        after: "/images/results/case6-after.png",
    }
];

const QuickResultsGallery = () => {
    const t = useTranslations('Index.quickResults');
    const params = useParams();
    const locale = params?.locale as string || "es";

    return (
        <section className="py-24 bg-[#0d0d0d] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <header className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-white/40 tracking-[0.4em] uppercase text-[10px] font-medium mb-4 block"
                    >
                        {t('subtitle')}
                    </motion.span>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-serif text-white uppercase tracking-tight"
                        >
                            {t('title')}
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <Link
                                href={`/${locale}/casos`}
                                className="group flex items-center gap-2 text-gold-muted hover:text-white transition-colors text-sm tracking-widest uppercase font-bold"
                            >
                                {t('cta')}
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cases.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/5] bg-black/40 rounded-sm overflow-hidden border border-white/5 shadow-2xl"
                        >
                            <ComparisonSlider
                                beforeImage={item.before}
                                afterImage={item.after}
                                beforeLabel="Antes"
                                afterLabel="Después"
                                className="h-full w-full"
                                aspectRatio="auto"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickResultsGallery;
