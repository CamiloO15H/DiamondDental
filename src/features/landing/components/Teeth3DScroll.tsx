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

    // Handle scroll-based video scrubbing
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (videoRef.current && videoRef.current.duration) {
            const targetTime = latest * videoRef.current.duration;
            videoRef.current.currentTime = Math.min(targetTime, videoRef.current.duration - 0.05);
        }
    });

    return (
        <div ref={containerRef} className="relative h-[350vh] bg-black">
            {/* Sticky Wrapper: Pins the video to the screen */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
                {/* 3D Teeth Video - Increased opacity for maximum clarity and sharpness */}
                <video
                    ref={videoRef}
                    src="/images/3D/3D-Dientes.mp4"
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover opacity-85 select-none"
                />

                {/* Highly dynamic and subtle luxurious overlay for depth without reducing clarity */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/75 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_0%,transparent_70%)] z-20 pointer-events-none" />

                {/* FIRST TEXT SECTION: Initial Hero Hook */}
                <motion.div
                    style={{ opacity: text1Opacity, y: text1Y }}
                    className="absolute z-30 text-center px-6 max-w-7xl flex flex-col items-center justify-center"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="text-[10px] md:text-sm text-white/60 tracking-[0.6em] uppercase font-bold block mb-6"
                    >
                        Diamond 3D Experience
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                        className="text-5xl md:text-8xl lg:text-9xl xl:text-[110px] font-serif text-white mb-8 leading-[0.9] tracking-tight uppercase"
                    >
                        Diseñamos tu<br />
                        <span className="italic text-gold-muted/90">sonrisa Diamond</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                        className="text-xs md:text-xl font-sans font-light text-white/80 max-w-2xl mx-auto tracking-wide leading-relaxed"
                    >
                        Fusionamos la ingeniería dental más avanzada con el arte estético para crear sonrisas que deslumbran.
                    </motion.p>
                </motion.div>

                {/* SECOND TEXT SECTION: Intercept message breaking the scroll monotony */}
                <motion.div
                    style={{ opacity: text2Opacity, y: text2Y }}
                    className="absolute z-30 text-center px-6 max-w-7xl flex flex-col items-center justify-center pointer-events-none"
                >
                    <span className="text-[10px] md:text-sm text-gold-muted/60 tracking-[0.8em] uppercase font-bold block mb-6">
                        Excelencia que trasciende
                    </span>
                    <h2 className="text-5xl md:text-8xl lg:text-9xl xl:text-[110px] font-serif text-white leading-[0.9] tracking-tight uppercase whitespace-pre-line drop-shadow-2xl">
                        La excelencia<br />
                        <span className="italic text-gold-muted/90">tiene nombre</span>
                    </h2>
                </motion.div>

                {/* Elegant Scroll Indicator */}
                <motion.div
                    style={{ opacity: text1Opacity }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30 pointer-events-none"
                >
                    <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">Desliza para explorar</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>
            </div>
        </div>
    );
}
