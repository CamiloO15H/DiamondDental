'use client';

import { useState, useRef, useEffect } from 'react';
import { LazyMotion, domAnimation, m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
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

const ComparisonSlider = ({
    beforeImage,
    afterImage,
    beforeLabel = 'Before',
    afterLabel = 'After',
    className,
    aspectRatio = 'clinical',
}: ComparisonSliderProps) => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Smooth movement using Framer Motion springs
    const xProgress = useMotionValue(50);
    const springX = useSpring(xProgress, {
        stiffness: 400, // Increased for immediate response
        damping: 40,   // Adjusted to maintain stability without feeling "slow"
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
        e.preventDefault();
        setIsDragging(true);
        // Do not call handleMove(e) here to avoid jumping
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        // e.preventDefault(); // Sometimes touch preventDefault blocks scroll if not careful
        setIsDragging(true);
        // Do not call handleMove(e) here to avoid jumping
    };

    useEffect(() => {
        const handleMouseUp = () => setIsDragging(false);
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) handleMove(e);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleMouseMove as any, { passive: true });
            window.addEventListener('touchend', handleMouseUp, { passive: true });
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
        <LazyMotion features={domAnimation}>
            <div
                ref={containerRef}
                className={cn(
                    "relative overflow-hidden select-none group bg-diamond-charcoal",
                    aspectClasses[aspectRatio],
                    className
                )}
                style={{
                    touchAction: 'pan-y'
                }}
            >
                {/* After Image (Base) */}
                <div className="absolute inset-0">
                    <Image
                        src={afterImage}
                        alt="After Treatment"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        draggable={false}
                        className="object-cover select-none"
                        loading="lazy"
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
                <m.div
                    className="absolute inset-0 z-10 overflow-hidden"
                    style={{ clipPath: useTransform(springX, (v) => `inset(0 ${100 - v}% 0 0)`) }}
                >
                    <Image
                        src={beforeImage}
                        alt="Before Treatment"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        draggable={false}
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 select-none"
                    />

                    {/* Before Label */}
                    <div className="absolute top-6 left-6 z-10">
                        <div className="bg-black/40 backdrop-blur-md px-4 py-1.5 border border-white/10">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">
                                {beforeLabel}
                            </span>
                        </div>
                    </div>
                </m.div>

                {/* Slider Line and Handle */}
                <m.div
                    className="absolute inset-y-0 z-20 w-[1px] bg-white/30"
                    style={{ left: useTransform(springX, (v) => `${v}%`) }}
                >
                    {/* Ultra-thin line Glow */}
                    <div className="absolute inset-0 w-full h-full shadow-[0_0_15px_rgba(255,255,255,0.3)]" />

                    {/* Branding Isotype - Fine Outline Diamond: Positioned at neck level to avoid face obstruction */}
                    <div
                        className="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-ew-resize"
                        role="slider"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={Math.round(sliderPos)}
                        aria-label="Comparison slider"
                        tabIndex={0}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart}
                    >
                        <m.div
                            className="flex items-center justify-center p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="relative flex items-center justify-center w-5 h-5 md:w-6 md:h-6 select-none pointer-events-none">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#E5E4E2"
                                    strokeWidth="1.2"
                                    className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                                >
                                    <path
                                        d="M12 3L4 9L12 21L20 9L12 3Z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4 9H20"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7.5 9L12 3L16.5 9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7.5 9L12 21L16.5 9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </m.div>
                    </div>
                </m.div>
            </div>
        </LazyMotion>
    );
};

export default ComparisonSlider;
