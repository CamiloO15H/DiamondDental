'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Instagram, Facebook, Chrome } from 'lucide-react';
import { useTranslations } from 'next-intl';

const SourceIcon = ({ source }: { source: string }) => {
    if (source.includes('Instagram')) return <Instagram className="w-3 h-3" />;
    if (source.includes('Facebook')) return <Facebook className="w-3 h-3" />;
    return <Chrome className="w-3 h-3" />; // Using Chrome as a placeholder for Google/Web
};

export default function PatientReviews() {
    const t = useTranslations('Index.reviews');
    const reviewsData = t.raw('list') as any[];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextReview = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    };

    const prevReview = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, reviewsData.length]);

    return (
        <section className="relative w-full py-12 md:py-16 flex items-center justify-center overflow-hidden bg-[#1f1f1f]">
            {/* Background Image with Fade Overlays */}
            <div className="absolute inset-0 z-0 h-full w-full flex items-center justify-center">
                <div className="absolute w-full h-full opacity-80">
                    <Image
                        src="/images/Buda.png"
                        alt="Diamond Dental Zen Atmosphere"
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </div>
                {/* Gradient Overlays for aggressive edge vanishing to Pure Black */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-transparent to-[#000000] z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000] z-10" />
                {/* Platinum Grey Overlay for subtle texture */}
                <div className="absolute inset-0 bg-[#2a2a2a]/80 z-10" />
            </div>

            {/* Content Container */}
            <div className="relative z-20 max-w-4xl mx-auto px-6 w-full text-center">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="text-gold-muted text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase block mb-3">
                        {t('badge')}
                    </span>
                    <h2 className="text-white font-serif text-3xl md:text-4xl uppercase italic tracking-wider">
                        {t('title')}
                    </h2>
                </motion.div>

                <div className="relative flex flex-col items-center min-h-[200px] justify-center">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex flex-col items-center space-y-6"
                        >
                            {/* Main Review Text (Reduced size per user request) */}
                            <p className="font-serif text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-light max-w-3xl italic">
                                "{reviewsData[currentIndex].text}"
                            </p>

                            {/* Divider Line */}
                            <div className="w-10 h-[1px] bg-white/20" />

                            <div className="flex flex-col items-center space-y-4">
                                {/* Stars */}
                                <div className="flex space-x-1">
                                    {[...Array(reviewsData[currentIndex].stars)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-white/80 text-white/80" />
                                    ))}
                                </div>

                                {/* Profile & Name */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 font-sans text-sm border border-white/10 uppercase font-bold">
                                        {reviewsData[currentIndex].avatar}
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="font-sans text-white/90 uppercase tracking-[0.2em] text-xs font-semibold">
                                            {reviewsData[currentIndex].name}
                                        </span>
                                        <span className="font-sans text-[9px] text-white/40 uppercase tracking-widest flex items-center space-x-1 mt-1">
                                            <SourceIcon source={reviewsData[currentIndex].source} />
                                            <span>{reviewsData[currentIndex].source}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full hidden lg:flex justify-between pointer-events-none z-30">
                        <button
                            onClick={prevReview}
                            className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300 pointer-events-auto"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={nextReview}
                            className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300 pointer-events-auto"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Mobile Navigation Dots */}
                    <div className="flex lg:hidden space-x-2 mt-12">
                        {reviewsData.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setCurrentIndex(idx);
                                }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white/60 w-6' : 'bg-white/10 w-2'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
