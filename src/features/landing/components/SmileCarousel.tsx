"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    "/images/Carrusel/Sonrisa-bad1.PNG",
    "/images/Carrusel/Sonrisa-bad2.PNG",
    "/images/Carrusel/Sonrisa-bad3.jpeg",
    "/images/Carrusel/Sonrisa-bad5.jpeg",
    "/images/Carrusel/Sonrisa-bada4.jpeg",
    "/images/Carrusel/Sonrisa-good1.PNG",
    "/images/Carrusel/Sonrisa-good2.PNG",
    "/images/Carrusel/Sonrisa-good3.jpeg",
    "/images/Carrusel/Sonrisa-good4.jpeg",
    "/images/Carrusel/Sonrisa-good5.jpeg",
];

export default function SmileCarousel() {
    return (
        <section className="w-full bg-[#0d0d0d] py-6 relative overflow-hidden flex items-center border-b border-white/5">
            {/* Left and Right Gradient Masks using bg-gradient */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

            <div className="flex w-max relative">
                {/* First Set of Images */}
                <motion.div
                    className="flex gap-4 pr-4 will-change-transform"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                >
                    {images.map((src, index) => (
                        <div
                            key={`first-${index}`}
                            className="relative w-[135px] h-[90px] flex-shrink-0"
                        >
                            <Image
                                src={src}
                                alt={`Result ${index}`}
                                fill
                                sizes="(max-width: 768px) 135px, 135px"
                                className="object-cover rounded-md grayscale-[50%] hover:grayscale-0 transition-all duration-500 cursor-pointer"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Duplicate Set of Images for seamless looping */}
                <motion.div
                    className="flex gap-4 pr-4 will-change-transform"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                >
                    {images.map((src, index) => (
                        <div
                            key={`second-${index}`}
                            className="relative w-[135px] h-[90px] flex-shrink-0"
                        >
                            <Image
                                src={src}
                                alt={`Result ${index}`}
                                fill
                                sizes="(max-width: 768px) 135px, 135px"
                                className="object-cover rounded-md grayscale-[50%] hover:grayscale-0 transition-all duration-500 cursor-pointer"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
