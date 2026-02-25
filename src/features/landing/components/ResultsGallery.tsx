'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import ComparisonSlider from '@/features/gallery/components/ComparisonSlider';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const cases = [
    {
        id: 1,
        i18nKey: "case1",
        before: "/images/results/case1-before.jpg",
        after: "/images/results/case1-after.jpg",
        aspect: "video" as const,
        marginBottom: "mb-24 md:mb-40"
    },
    {
        id: 2,
        i18nKey: "case2",
        before: "/images/results/case2-before.jpg",
        after: "/images/results/case2-after.jpg",
        aspect: "clinical" as const,
        marginBottom: "mb-24 md:mb-56"
    },
    {
        id: 3,
        i18nKey: "case3",
        before: "/images/results/case3-before.jpg",
        after: "/images/results/case3-after.jpg",
        aspect: "clinical" as const,
        marginBottom: "mb-24 md:mb-32"
    },
    {
        id: 4,
        i18nKey: "case4",
        before: "/images/results/case4-before.jpg",
        after: "/images/results/case4-after.jpg",
        aspect: "video" as const,
        marginBottom: "mb-0"
    }
];

const ResultsGallery = () => {
    const t = useTranslations('Index.results');
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Suble parallax: right column moves slower (offset by 100px over the scroll)
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const springY = useSpring(yParallax, { stiffness: 50, damping: 20 });

    const leftColumn = [cases[0], cases[2]];
    const rightColumn = [cases[1], cases[3]];

    return (
        <section
            id="diamond-results"
            className="py-32 md:py-48 bg-[#0d0d0d] relative overflow-hidden"
        >
            {/* Background Texture/Ambient Light */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.02),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
                <header className="mb-24 md:mb-40 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-gold-muted tracking-[0.8em] uppercase text-[10px] font-bold mb-6 block ml-[0.8em]"
                    >
                        Masterpieces
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-9xl font-serif text-white uppercase tracking-tighter leading-[0.85]"
                    >
                        Diamond<br />Results
                    </motion.h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-24 items-start">
                    {/* Left Column */}
                    <div className="flex flex-col">
                        {leftColumn.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: idx * 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={cn("group relative", item.marginBottom)}
                            >
                                <ComparisonSlider
                                    beforeImage={item.before}
                                    afterImage={item.after}
                                    aspectRatio={item.aspect}
                                    className="border border-white/5"
                                />
                                <div className="mt-8 flex flex-col">
                                    <div className="flex items-baseline justify-between mb-3 border-b border-white/5 pb-3">
                                        <h3 className="text-xl md:text-2xl font-serif text-white uppercase tracking-[0.1em]">{t(`${item.i18nKey}.title`)}</h3>
                                        <span className="text-[9px] text-gold-muted uppercase tracking-[0.3em] font-medium opacity-60 ml-4 whitespace-nowrap">{t(`${item.i18nKey}.type`)}</span>
                                    </div>
                                    <p className="text-[10px] md:text-[11px] font-sans text-[#a1a1a1] uppercase tracking-[0.2em] leading-relaxed max-w-[90%]">
                                        {t(`${item.i18nKey}.description`)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column (Offset + Parallax) */}
                    <motion.div
                        style={{ y: springY }}
                        className="flex flex-col md:pt-48"
                    >
                        {rightColumn.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.4, delay: idx * 0.3 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={cn("group relative", item.marginBottom)}
                            >
                                <ComparisonSlider
                                    beforeImage={item.before}
                                    afterImage={item.after}
                                    aspectRatio={item.aspect}
                                    className="border border-white/5"
                                />
                                <div className="mt-8 flex flex-col">
                                    <div className="flex items-baseline justify-between mb-3 border-b border-white/5 pb-3">
                                        <h3 className="text-xl md:text-2xl font-serif text-white uppercase tracking-[0.1em]">{t(`${item.i18nKey}.title`)}</h3>
                                        <span className="text-[9px] text-gold-muted uppercase tracking-[0.3em] font-medium opacity-60 ml-4 whitespace-nowrap">{t(`${item.i18nKey}.type`)}</span>
                                    </div>
                                    <p className="text-[10px] md:text-[11px] font-sans text-[#a1a1a1] uppercase tracking-[0.2em] leading-relaxed max-w-[90%]">
                                        {t(`${item.i18nKey}.description`)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Footer Note / Signature */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-40 text-center"
                >
                    <p className="text-[10px] text-white/20 tracking-[1em] uppercase ml-[1em]">
                        Clinical Excellence Certified
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ResultsGallery;
