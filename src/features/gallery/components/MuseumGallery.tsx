"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Search, Sparkles, Activity, Layers } from "lucide-react";
import ComparisonSlider from "@/features/gallery/components/ComparisonSlider";

const categories = [
    { id: "all", icon: Layers, labelKey: "all" },
    { id: "natural", icon: Sparkles, labelKey: "natural" },
    { id: "total", icon: Activity, labelKey: "total" }
];

const galleryItems = [
    // Transformaciones Totales
    { id: 101, category: "total", image: "/images/results/case1-after.jpg", before: "/images/results/case1-before.jpg", title: "Armonía Facial Completa", tech: "Rehabilitación Oral Bio-Estética" },
    { id: 102, category: "total", image: "/images/results/case2-after.jpg", before: "/images/results/case2-before.jpg", title: "Equilibrio Muscular y Dental", tech: "Oclusión Funcional Avanzada" },
    { id: 103, category: "total", image: "/images/results/case3-after.jpg", before: "/images/results/case3-before.jpg", title: "Transformación Estructural", tech: "Biocompatibilidad Cerámica" },
    { id: 104, category: "total", image: "/images/results/case4-after.jpg", before: "/images/results/case4-before.jpg", title: "Proyección de Perfil", tech: "Arquitectura Gingival" },
    { id: 105, category: "total", image: "/images/results/case5-after.jpg", before: "/images/results/case5-before.jpg", title: "Diseño de Autor", tech: "Micro-texturizado Cerámico" },
    { id: 106, category: "total", image: "/images/results/case6-after.png", before: "/images/results/case6-before.png", title: "Rehabilitación Integral", tech: "Ingeniería Dental Avanzada" },

    // Diseños Naturales
    { id: 1, category: "natural", image: "/images/Carrusel/Sonrisa-good1.PNG", before: "/images/Carrusel/Sonrisa-bad1.PNG", tech: "Mimetismo Natural" },
    { id: 2, category: "natural", image: "/images/Carrusel/Sonrisa-good2.PNG", before: "/images/Carrusel/Sonrisa-bad2.PNG", tech: "Lentes de Contacto Dental" },
    { id: 3, category: "natural", image: "/images/Carrusel/Sonrisa-good3.jpeg", before: "/images/Carrusel/Sonrisa-bad3.jpeg", tech: "Estética Mínimamente Invasiva" },
    { id: 4, category: "natural", image: "/images/Carrusel/Sonrisa-good4.jpeg", before: "/images/Carrusel/Sonrisa-bada4.jpeg", tech: "Reconstrucción Estética" },
    { id: 5, category: "natural", image: "/images/Carrusel/Sonrisa-good5.jpeg", before: "/images/Carrusel/Sonrisa-bad5.jpeg", tech: "Cambio de Dimensión Vertical" },
    { id: 6, category: "natural", image: "/images/Carrusel/Sonrisa-good6.png", before: "/images/Carrusel/Sonrisa-bad6.png", tech: "Armonía Estética Superior" }
];

export default function MuseumGallery() {
    const t = useTranslations("Index.quickResults");
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredItems = activeCategory === "all"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <div className="w-full">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`
              group flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-500
              ${activeCategory === cat.id
                                ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                : "bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white"}
            `}
                    >
                        <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? "text-black" : "text-white/30 group-hover:text-white"}`} />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] ml-1">
                            {cat.id === "all" ? "EXPLORAR TODO" : t(`categories.${cat.id}`)}
                        </span>
                    </button>
                ))}
            </div>

            {/* Results Grid */}
            <div className={`grid gap-8 ${activeCategory === 'natural' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className={`relative group rounded-3xl overflow-hidden bg-[#1a1a1a] border border-white/5 ${item.category === 'natural' ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}
                        >
                            <ComparisonSlider
                                beforeImage={item.before}
                                afterImage={item.image}
                                aspectRatio="video"
                                className="h-full w-full"
                            />

                            {/* Meta info Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
                                    <span className="text-gold-muted text-[10px] font-bold tracking-[0.3em] uppercase block mb-1">
                                        {item.tech || t(`categories.${item.category}`)}
                                    </span>
                                    <h4 className="text-white font-serif text-lg italic tracking-wide">
                                        {item.title || "Perfección Diamante"}
                                    </h4>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Infinite Scroll Placeholder */}
            <div className="mt-20 flex flex-col items-center">
                <div className="w-[1px] h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
                <p className="mt-8 text-white/30 font-serif italic text-lg tracking-widest">
                    Historias en construcción...
                </p>
            </div>
        </div>
    );
}
