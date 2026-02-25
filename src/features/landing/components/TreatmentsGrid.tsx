"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Sparkles, ShieldCheck, Microscope, HeartPulse } from "lucide-react";

const treatments = [
    {
        id: "implants",
        icon: ShieldCheck,
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "invisalign",
        icon: Sparkles,
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "whitening",
        icon: HeartPulse,
        image: "https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "technology",
        icon: Microscope,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    }
];

export default function TreatmentsGrid() {
    const t = useTranslations("Index.treatments");

    return (
        <section className="py-32 bg-diamond-charcoal relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="platinum-text tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
                        >
                            Dental Excellence
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-serif text-4xl md:text-6xl text-white leading-tight"
                        >
                            {t('sectionTitle')}
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 font-sans max-w-sm text-right italic"
                    >
                        {t('sectionSubtitle')}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {treatments.map((treatment, index) => (
                        <motion.div
                            key={treatment.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[550px] overflow-hidden rounded-none cursor-pointer p-[1px] bg-white/5 hover:bg-white/20 transition-colors duration-500"
                        >
                            <div className="relative w-full h-full overflow-hidden bg-black">
                                {/* Image with zoom effect */}
                                <motion.img
                                    src={treatment.image}
                                    alt={treatment.id}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0"
                                />

                                {/* Luxury Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-diamond-black via-transparent to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-700" />
                                <div className="absolute inset-0 bg-diamond-ice/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Content */}
                                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full w-fit mb-8 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                        <treatment.icon className="w-5 h-5 text-diamond-ice" />
                                    </div>

                                    <h3 className="font-serif text-2xl text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                                        {t(`${treatment.id}.title`)}
                                    </h3>

                                    <p className="text-gray-400 text-sm overflow-hidden opacity-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-700 font-sans leading-relaxed">
                                        {t(`${treatment.id}.description`)}
                                    </p>

                                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                                        <span className="platinum-text text-xs uppercase tracking-widest font-bold group-hover:tracking-[0.2em] transition-all">
                                            {t('viewDetails') || 'Ver Detalles'}
                                        </span>
                                        <div className="w-10 h-[1px] bg-gradient-to-r from-diamond-platinum to-transparent" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
