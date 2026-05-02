'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Teeth3DScroll() {
    const t = useTranslations('Index');
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Track scroll within the 250vh container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // Animate title and opacity based on scroll
    const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

    // Handle scroll-based video scrubbing
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (videoRef.current && videoRef.current.duration) {
            // Adjust to ensure we don't exceed length slightly
            const targetTime = latest * videoRef.current.duration;
            videoRef.current.currentTime = Math.min(targetTime, videoRef.current.duration - 0.05);
        }
    });

    return (
        <div ref={containerRef} className="relative h-[250vh] bg-black">
            {/* Sticky Wrapper: Pins the video to the screen */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
                {/* 3D Teeth Video */}
                <video
                    ref={videoRef}
                    src="/images/3D/3D-Dientes.mp4"
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                />

                {/* Rich Premium Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)] z-20 pointer-events-none" />

                {/* Floating Content Over Video */}
                <motion.div
                    style={{ opacity: textOpacity, y: textY }}
                    className="relative z-30 text-center px-6 max-w-4xl"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="text-[10px] md:text-xs text-white/50 tracking-[0.6em] uppercase font-bold block mb-4"
                    >
                        Diamond 3D Experience
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                        className="text-4xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight leading-tight uppercase"
                    >
                        Diseñamos tu sonrisa Diamond
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                        className="text-sm md:text-lg font-sans font-light text-white/70 max-w-2xl mx-auto tracking-wide leading-relaxed"
                    >
                        Fusionamos la ingeniería dental más avanzada con el arte estético para crear sonrisas que deslumbran al mundo.
                    </motion.p>
                </motion.div>

                {/* Elegant Scroll Indicator */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30 pointer-events-none"
                >
                    <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">Desliza para descubrir</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>
            </div>
        </div>
    );
}
