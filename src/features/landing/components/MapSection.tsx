"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function MapSection() {
    return (
        <section id="map" className="py-24 bg-diamond-black border-t border-diamond-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-outfit font-bold text-diamond-white mb-6">Encuéntranos en el <br /> <span className="text-diamond-silver italic">Corazón del Lujo</span>.</h2>
                        <p className="text-diamond-silver/60 leading-relaxed mb-8 max-w-md">
                            Nuestra clínica se encuentra estratégicamente ubicada en la zona más exclusiva de la ciudad, diseñada para ofrecerte comodidad y privacidad desde el primer momento.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-diamond-white">
                                <MapPin className="text-diamond-silver" />
                                <span>Calle 100 #7-OP, Edificio Diamond, Bogotá</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full aspect-video md:aspect-square bg-diamond-matte relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden border border-diamond-white/10"
                    >
                        {/* Mock Map Background */}
                        <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/-74.05,4.68,14,0/800x800?access_token=placeholder')] bg-cover bg-center">
                            <div className="absolute inset-0 bg-diamond-black/40" />
                        </div>

                        {/* Pulsing Location Marker */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                            <div className="absolute w-20 h-20 bg-diamond-white/20 rounded-full animate-ping" />
                            <div className="relative w-4 h-4 bg-diamond-white rounded-full border-2 border-diamond-black" />
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-diamond-black/80 backdrop-blur-md border border-diamond-white/10 text-[10px] uppercase tracking-widest text-diamond-white">
                            Sugerencia: Estacionamiento VIP disponible para pacientes.
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
