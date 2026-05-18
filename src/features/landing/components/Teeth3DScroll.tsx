'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Teeth3DScroll() {
    const t = useTranslations('Index');
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    // State to track preloading status
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(0);

    // Persist preloaded images in a ref
    const preloadedImages = useRef<HTMLImageElement[]>([]);

    // Track scroll within the 350vh container for smooth scrubbing
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // Step 1: "DISEÑAMOS TU SONRISA DIAMOND" fades out as user scrolls
    const text1Opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const text1Y = useTransform(scrollYProgress, [0, 0.25], [0, -60]);

    // Step 2: Intercept with "LA EXCELENCIA TIENE NOMBRE" which fades in and out later
    const text2Opacity = useTransform(scrollYProgress, [0.38, 0.65, 0.85], [0, 1, 0]);
    const text2Y = useTransform(scrollYProgress, [0.38, 0.65, 0.85], [40, 0, -40]);

    // Preload the 30 WebP frames on component mount for lag-free scroll
    useEffect(() => {
        const totalFrames = 30;
        let loadedCount = 0;
        const tempImages: HTMLImageElement[] = [];

        for (let i = 0; i < totalFrames; i++) {
            const img = new Image();
            // Match the formatted frame name frame_000.webp, frame_001.webp, etc.
            const frameNum = String(i).padStart(3, '0');
            img.src = `/frames/frame_${frameNum}.webp`;
            
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setImagesLoaded(true);
                    // Draw the initial frame once all are loaded
                    drawFrame(0);
                }
            };
            img.onerror = () => {
                console.error(`Failed to load frame_${frameNum}.webp`);
                loadedCount++; // Avoid blocking if a frame fails
            };
            tempImages.push(img);
        }
        
        preloadedImages.current = tempImages;

        // Add resize listener to keep canvas perfectly responsive
        const handleResize = () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                // Re-draw current frame on resize
                drawFrame(currentFrame);
            }
        };

        // Initialize canvas dimensions
        if (canvasRef.current) {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
        }

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentFrame]);

    // Helper to draw a specific frame index with perfect "object-cover" logic
    const drawFrame = (index: number) => {
        const img = preloadedImages.current[index];
        const canvas = canvasRef.current;
        if (!img || !canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clear previous frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Aspect ratio calculations for perfect cover fit
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, drawX, drawY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            drawX = 0;
            drawY = (canvas.height - drawHeight) / 2;
        } else {
            drawHeight = canvas.height;
            drawWidth = canvas.height * imgRatio;
            drawX = (canvas.width - drawWidth) / 2;
            drawY = 0;
        }

        // Draw image onto canvas
        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    // Scrub through frames dynamically based on scroll progression
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (!imagesLoaded) return;
        
        // Map 0.0 - 1.0 to frame index 0 - 29
        const frameIndex = Math.min(
            Math.floor(latest * 30),
            29
        );
        
        setCurrentFrame(frameIndex);
        drawFrame(frameIndex);
    });

    return (
        <div ref={containerRef} className="relative h-[350vh] bg-black">
            {/* Sticky Wrapper: Pins the content to the viewport */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
                
                {/* 3D Teeth Canvas: Full screen with 70% opacity for luxury styling and contrast */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 select-none pointer-events-none z-10"
                />

                {/* Ambient vignette gradient around the screen */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)] z-15 pointer-events-none" />

                {/* FIRST TEXT SECTION: Initial Hero Hook */}
                <motion.div
                    style={{ opacity: text1Opacity, y: text1Y }}
                    className="relative z-30 text-center px-6 max-w-7xl flex flex-col items-center justify-center pointer-events-none"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                        className="text-5xl md:text-8xl lg:text-9xl xl:text-[110px] font-serif text-white mb-6 leading-[0.95] tracking-tight uppercase"
                    >
                        {t('scroll3d.title1')}<br />
                        <span className="italic text-gold-muted/90">{t('scroll3d.title2')}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                        className="text-xs md:text-lg font-sans font-light text-white/80 max-w-2xl mx-auto tracking-wide leading-relaxed uppercase"
                    >
                        {t('scroll3d.subtitle1')}
                    </motion.p>
                </motion.div>

                {/* SECOND TEXT SECTION: Intercept message breaking the scroll monotony */}
                <motion.div
                    style={{ opacity: text2Opacity, y: text2Y }}
                    className="absolute z-30 text-center px-6 max-w-7xl flex flex-col items-center justify-center pointer-events-none"
                >
                    <span className="text-[10px] md:text-sm text-gold-muted/60 tracking-[0.8em] uppercase font-bold block mb-4">
                        {t('scroll3d.badge2')}
                    </span>
                    <h2 className="text-4xl md:text-7xl lg:text-8xl xl:text-[95px] font-serif text-white leading-[0.95] tracking-tight uppercase whitespace-pre-line">
                        {t('scroll3d.title3')}<br />
                        <span className="italic text-gold-muted/90">{t('scroll3d.title4')}</span>
                    </h2>
                </motion.div>

                {/* Elegant Scroll Indicator */}
                <motion.div
                    style={{ opacity: text1Opacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 pointer-events-none"
                >
                    <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">{t('scroll3d.indicator')}</span>
                    <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>
            </div>
        </div>
    );
}
