"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Counter = ({ value, label }: { value: number; label: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        let start = 0;
        const end = value;
        const duration = 2000;
        let timer: any;

        const updateCount = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                timer = requestAnimationFrame(updateCount);
            }
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                timer = requestAnimationFrame(updateCount);
            }
        }, { threshold: 0.5 });

        if (ref.current) observer.observe(ref.current);

        return () => {
            cancelAnimationFrame(timer);
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [value]);

    return (
        <div ref={ref} className="text-center p-8 border border-diamond-white/5 bg-diamond-matte/40 backdrop-blur-sm">
            <div className="text-6xl md:text-8xl font-outfit font-black text-diamond-white mb-2 tabular-nums">
                {count}+
            </div>
            <div className="text-sm md:text-base text-diamond-silver/40 uppercase tracking-[0.3em] font-light">
                {label}
            </div>
        </div>
    );
};

export default function SocialProof() {
    return (
        <section className="py-24 bg-diamond-black border-y border-diamond-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <Counter value={5000} label="Pacientes Satisfechos" />
                    <Counter value={15} label="Años de Excelencia" />
                    <Counter value={120} label="Diamantes de Sonrisa" />
                </div>
            </div>
        </section>
    );
};
