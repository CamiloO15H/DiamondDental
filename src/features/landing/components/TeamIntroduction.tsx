'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const TeamIntroduction = () => {
    const t = useTranslations('Index.teamIntro');

    return (
        <section className="w-full bg-[#0d0d0d] py-24 md:py-32 relative overflow-hidden">
            {/* Background Decorative Element */}
            <motion.div
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                whileInView={{ opacity: 0.05, rotate: 0, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: false }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white opacity-5 pointer-events-none hidden md:block"
                style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                    >
                        <span className="inline-block text-xs md:text-sm font-sans tracking-[0.4em] text-white/50 uppercase mb-6">
                            {t('badge')}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-[1.1] whitespace-pre-line"
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                        viewport={{ once: false }}
                        className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-10"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: false }}
                        className="text-lg md:text-xl font-sans text-white/70 leading-relaxed max-w-2xl mx-auto"
                    >
                        {t('description')}
                    </motion.p>
                </div>
            </div>

            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default TeamIntroduction;
