'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Teeth3DScroll() {
    const t = useTranslations('Index');
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Track scroll within the 350vh container for extra smoothness and more storytelling space
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // Step 1: "DISEÑAMOS TU SONRISA DIAMOND" fades out as user scrolls
    const text1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const text1Y = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

    // Step 2: Intercept with "LA EXCELENCIA TIENE NOMBRE" which fades in and out later
    const text2Opacity = useTransform(scrollYProgress, [0.38, 0.68, 0.88], [0, 1, 0]);
    const text2Y = useTransform(scrollYProgress, [0.38, 0.68, 0.88], [40, 0, -40]);

    // Video Scale: subtle upscale for immersion
    const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    // Handle scroll-based video scrubbing
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (videoRef.current && videoRef.current.duration) {
            const targetTime = latest * videoRef.current.duration;
            videoRef.current.currentTime = Math.min(targetTime, videoRef.current.duration - 0.05);
        }
    });

    return (
        <div ref={containerRef} className="relative h-[350vh] bg-black">
            {/* Sticky Wrapper: Pins the content to the viewport */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-black px-6 overflow-hidden">
                
                {/* 3D Teeth Video: Kept with official colors (no darkening mask) and crisp bounded dimensions */}
                <motion.div 
                    style={{ scale: videoScale }}
                    className="relative w-full max-w-4xl aspect-video mx-auto overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.8)] z-10"
                >
                    <video
                        ref={videoRef}
                        src="/images/3D/3D-Dientes.mp4"
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover opacity-100 select-none"
                    />
                </motion.div>

                {/* FIRST TEXT SECTION: Initial Hero Hook */}
                <motion.div
                    style={{ opacity: text1Opacity, y: text1Y }}
                    className="absolute z-30 text-center px-6 max-w-7xl flex flex-col items-center justify-center pointer-events-none"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="text-[10px] md:text-sm text-white/60 tracking-[0.6em] uppercase font-bold block mb-4"
                    >
                        Diamond 3D Experience
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                        className="text-4xl md:text-7xl lg:text-8xl xl:text-[95px] font-serif text-white mb-6 leading-[0.95] tracking-tight uppercase"
                    >
                        Diseñamos tu<br />
                        <span className="italic text-gold-muted/90">sonrisa Diamond</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                        className="text-xs md:text-lg font-sans font-light text-white/80 max-w-2xl mx-auto tracking-wide leading-relaxed"
                    >
                        Fusionamos la ingeniería dental más avanzada con el arte estético para crear sonrisas que deslumbran.
                    </motion.p>
                </motion.div>

                {/* SECOND TEXT SECTION: Intercept message breaking the scroll monotony */}
                <motion.div
                    style={{ opacity: text2Opacity, y: text2Y }}
                    className="absolute z-30 text-center px-6 max-w-7xl flex flex-col items-center justify-center pointer-events-none"
                >
                    <span className="text-[10px] md:text-sm text-gold-muted/60 tracking-[0.8em] uppercase font-bold block mb-4">
                        Excelencia que trasciende
                    </span>
                    <h2 className="text-4xl md:text-7xl lg:text-8xl xl:text-[95px] font-serif text-white leading-[0.95] tracking-tight uppercase whitespace-pre-line">
                        La excelencia<br />
                        <span className="italic text-gold-muted/90">tiene nombre</span>
                    </h2>
                </motion.div>

                {/* Elegant Scroll Indicator */}
                <motion.div
                    style={{ opacity: text1Opacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 pointer-events-none"
                >
                    <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">Desliza para explorar</span>
                    <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>
            </div>
        </div>
    );
}
