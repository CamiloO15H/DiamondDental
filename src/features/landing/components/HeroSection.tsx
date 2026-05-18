"use client";

import { LazyMotion, domAnimation, m, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useBooking } from "@/shared/providers/BookingProvider";

export default function HeroSection() {
  const t = useTranslations("Index.hero");
  const params = useParams();
  const locale = params?.locale as string || "es";
  const { openBooking } = useBooking();
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [0, 1]);

  // ── Carga diferida del video ────────────────────────────────────────────
  // No bloqueamos el render inicial: esperamos a que el componente esté montado
  // y la página esté visible para asignar el src y empezar a cargar el video.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const loadVideo = () => {
      // Asignar src a TODOS los <source data-src="..."> para que el browser
      // elija el formato más ligero que soporta (WebM > MP4)
      const sources = video.querySelectorAll<HTMLSourceElement>('source[data-src]');
      let loaded = false;
      sources.forEach((source) => {
        if (!source.src) {
          source.src = source.dataset.src ?? '';
          loaded = true;
        }
      });
      if (loaded) {
        video.load();
        video.play().catch(() => {/* autoplay blocked por política del browser */});
      }
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadVideo, { timeout: 2000 });
    } else {
      const timer = setTimeout(loadVideo, 300);
      return () => clearTimeout(timer);
    }
  }, []);


  return (
    <LazyMotion features={domAnimation}>
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-poster.webp"
            preload="none"
            className="w-full h-full object-cover object-[60%_30%]"
          >
            {/* El browser elige el primer formato que soporta: WebM < MP4 en tamaño */}
            {/* srcs vacíos intencionalmente: se asignan desde el useEffect tras el mount */}
            <source data-src="/Video/hero-video.webm" type="video/webm" />
            <source data-src="/Video/hero-video.mp4"  type="video/mp4"  />
          </video>
          {/* Dark Overlay Effects */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-20" />

          {/* Scroll-linked transition overlay */}
          <m.div
            style={{ opacity }}
            className="absolute inset-0 bg-black z-30 pointer-events-none"
          />
        </div>

        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-10 pinstripe-texture pointer-events-none z-30" />

        <div className="container mx-auto px-6 relative z-40 text-center">
          <m.div
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
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-4 md:gap-6 justify-center mt-12"
          >
            <button
              onClick={openBooking}
              className="diamond-sparkle group relative px-8 md:px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs md:text-sm rounded-none overflow-hidden transition-all duration-500 hover:tracking-[0.2em] w-full sm:w-auto sm:min-w-[200px]"
            >
              <span className="relative z-10">{t("ctaMain") || "RESERVA YA"}</span>
              <div className="absolute inset-0 bg-diamond-ice/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="absolute inset-0 bg-glass-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </button>

            <Link
              href={`/${locale}/casos`}
              className="px-8 md:px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs md:text-sm hover:border-diamond-ice/60 hover:bg-white/5 transition-all duration-500 backdrop-blur-md w-full sm:w-auto sm:min-w-[200px] flex items-center justify-center"
            >
              {t("ctaSecondary") || "NUESTROS CASOS"}
            </Link>

            <Link
              href={`/${locale}/servicios`}
              className="px-8 md:px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs md:text-sm hover:border-diamond-ice/60 hover:bg-white/5 transition-all duration-500 backdrop-blur-md w-full sm:w-auto sm:min-w-[200px] flex items-center justify-center"
            >
              {t("ctaTertiary") || "SERVICIOS"}
            </Link>
          </m.div>
        </div>

        {/* Scroll Indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 z-40"
        >
          <span className="platinum-text text-[10px] uppercase tracking-[0.6em] opacity-50">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent" />
        </m.div>
      </section>
    </LazyMotion>
  );
};
