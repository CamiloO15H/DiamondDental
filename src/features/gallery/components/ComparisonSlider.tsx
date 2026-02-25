'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ComparisonSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    className?: string;
    aspectRatio?: 'auto' | 'square' | 'video' | 'clinical';
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
    beforeImage,
    afterImage,
    beforeLabel = 'Before',
    afterLabel = 'After',
    className,
    aspectRatio = 'clinical',
}) => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Smooth movement using Framer Motion springs
    const xProgress = useMotionValue(50);
    const springX = useSpring(xProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Handle interaction
    const handleMove = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
        const relativeX = x - rect.left;
        const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));

        xProgress.set(percentage);
        setSliderPos(percentage);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        handleMove(e);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        handleMove(e);
    };

    useEffect(() => {
        const handleMouseUp = () => setIsDragging(false);
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) handleMove(e);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleMouseMove as any);
            window.addEventListener('touchend', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMouseMove as any);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    const aspectClasses = {
        auto: 'aspect-auto',
        square: 'aspect-square',
        video: 'aspect-video',
        clinical: 'aspect-[4/5]', // Common clinical photo ratio
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative overflow-hidden select-none group cursor-ew-resize bg-diamond-charcoal",
                aspectClasses[aspectRatio],
                className
            )}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            {/* After Image (Base) */}
            <div className="absolute inset-0">
                <Image
                    src={afterImage}
                    alt="After Treatment"
                    fill
                    className="object-cover"
                    priority
                />

                {/* After Label */}
                <div className="absolute top-6 right-6 z-10">
                    <div className="bg-diamond-ice/10 backdrop-blur-md px-4 py-1.5 border border-diamond-ice/20">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-diamond-ice font-bold">
                            {afterLabel}
                        </span>
                    </div>
                </div>
            </div>

            {/* Before Image (Clipped Overlay) */}
            <motion.div
                className="absolute inset-0 z-10 overflow-hidden"
                style={{ clipPath: useTransform(springX, (v) => `inset(0 ${100 - v}% 0 0)`) }}
            >
                <Image
                    src={beforeImage}
                    alt="Before Treatment"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />

                {/* Before Label */}
                <div className="absolute top-6 left-6 z-10">
                    <div className="bg-black/40 backdrop-blur-md px-4 py-1.5 border border-white/10">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">
                            {beforeLabel}
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Slider Line and Handle */}
            <motion.div
                className="absolute inset-y-0 z-20 w-[1px] bg-white/30"
                style={{ left: useTransform(springX, (v) => `${v}%`) }}
            >
                {/* Ultra-thin line Glow */}
                <div className="absolute inset-0 w-full h-full shadow-[0_0_15px_rgba(255,255,255,0.3)]" />

                {/* Circular Glassmorphism Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {/* Branding Isotype in Handle */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none p-2">
                            <Image
                                src="/images/logo-diamond-julio.png"
                                alt="Diamond Isotype"
                                width={24}
                                height={24}
                                className="object-contain object-top scale-[2.5]"
                            />
                        </div>
                        <div className="flex gap-1 z-10">
                            <div className="w-0.5 h-3 bg-white/40 rounded-full" />
                            <div className="w-0.5 h-3 bg-white/40 rounded-full" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default ComparisonSlider;
