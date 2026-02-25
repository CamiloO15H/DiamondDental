"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("Index.hero");

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Video/hero-video.mp4.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay Effects */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-20" />
      </div>

      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pinstripe-texture pointer-events-none z-30" />

      <div className="container mx-auto px-6 relative z-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="platinum-text text-[10px] md:text-sm uppercase tracking-[0.8em] mb-6 block font-sans font-bold opacity-80">
            Diamond Edition
          </span>
          <h1 className="diamond-text text-5xl md:text-8xl lg:text-9xl font-serif mb-10 leading-tight">
            Diamond Dental
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
        >
          <button className="diamond-sparkle group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-none overflow-hidden transition-all duration-500 hover:tracking-[0.2em]">
            <span className="relative z-10">{t("ctaMain") || "RESERVA YA"}</span>
            <div className="absolute inset-0 bg-diamond-ice/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="absolute inset-0 bg-glass-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </button>

          <button className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:border-diamond-ice/60 hover:bg-white/5 transition-all duration-500 backdrop-blur-md">
            {t("ctaSecondary") || "CONÓCENOS"}
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 z-40"
      >
        <span className="platinum-text text-[10px] uppercase tracking-[0.6em] opacity-50">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
};
