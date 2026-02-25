"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

const transformations = [
    { id: "1", beforeUrl: "https://images.unsplash.com/photo-1588776814546-1ffce47267a5?q=80&w=2070&auto=format&fit=crop", afterUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop", title: "Diseño de Sonrisa 3D", category: "Prostodoncia" },
    { id: "2", beforeUrl: "https://images.unsplash.com/photo-1588776814546-1ffce47267a5?q=80&w=2070&auto=format&fit=crop", afterUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop", title: "Blanqueamiento Láser", category: "Estética" },
];

export default function SmileCatalog() {
    const t = useTranslations("Index.catalog");

    return (
        <section className="py-24 bg-diamond-black w-full overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-outfit font-bold text-diamond-white mb-4"
                    >
                        {t("title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-diamond-silver/60 font-light tracking-widest uppercase"
                    >
                        {t("subtitle")}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {transformations.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[16/9] overflow-hidden rounded-none border border-diamond-white/10">
                                {/* Simulated Before/After Slider */}
                                <div className="absolute inset-0 flex">
                                    <div className="w-1/2 h-full overflow-hidden relative border-r border-diamond-white/20">
                                        <img src={item.beforeUrl} alt="Before" className="h-full w-[200%] object-cover grayscale opacity-50" />
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-widest text-white border border-white/10">Antes</div>
                                    </div>
                                    <div className="w-1/2 h-full overflow-hidden relative">
                                        <img src={item.afterUrl} alt="After" className="h-full w-[200%] -translate-x-1/2 object-cover" />
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-diamond-white/80 backdrop-blur-md text-[10px] uppercase tracking-widest text-diamond-black font-bold">Después</div>
                                    </div>
                                </div>

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-diamond-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                                    <span className="text-diamond-silver/60 text-xs uppercase tracking-[0.3em] mb-4">{item.category}</span>
                                    <h3 className="text-2xl font-outfit font-bold text-diamond-white mb-2">{item.title}</h3>
                                    <div className="w-12 h-[1px] bg-diamond-white/40 mb-6" />
                                    <p className="text-sm text-diamond-silver/80 font-light max-w-xs">
                                        Resultados excepcionales utilizando tecnología de punta y un cuidado meticuloso.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
