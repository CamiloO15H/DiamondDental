"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Diamond, Microscope, Sparkles, HeartHandshake, BookOpen } from "lucide-react";

export default function NosotrosClient() {
    const t = useTranslations("Index.nosotros");

    return (
        <LazyMotion features={domAnimation}>
            <main className="min-h-screen bg-[#0d0d0d] text-white pb-20 overflow-hidden">
                {/* Hero Section - The Protagonists (Editorial Redesign) */}
                <section className="relative w-full h-screen min-h-[700px] mb-32 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/Casos/Laura-Julio1.JPEG"
                            alt="Dr. Julio y Dra. Laura - Diamond Dental Founders"
                            fill
                            className="object-cover object-[center_15%] scale-105"
                            priority
                            sizes="100vw"
                        />
                        {/* Editorial Mask: Fades to black on the left for text readability and bottom for transition */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent z-10 w-full" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent z-10" />
                    </div>

                    <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-20">
                        <div className="max-w-4xl pt-20">
                            <m.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <div className="h-[1px] w-12 bg-gold-muted/50" />
                                <m.span className="text-[10px] font-bold tracking-[0.6em] uppercase text-gold-muted">{t("hero.subtitle")}</m.span>
                            </m.div>

                            <m.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 1 }}
                                className="text-6xl md:text-8xl lg:text-[100px] font-serif italic mb-12 leading-[0.9] tracking-tighter"
                            >
                                {t("hero.title")}
                            </m.h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 border-t border-white/10 pt-12">
                                {/* Julio's Seal */}
                                <m.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/5 rounded-full border border-white/10">
                                            <Microscope className="w-5 h-5 text-gold-muted" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif text-white uppercase tracking-wider">Dr. Julio César Gámez</h3>
                                            <p className="text-[10px] text-white/50 tracking-[0.2em] uppercase">FUNDADOR & ORTODONCISTA</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-gold-muted/10 border border-gold-muted/20 rounded-full w-fit">
                                        <Sparkles className="w-3 h-3 text-gold-muted" />
                                        <span className="text-[9px] font-bold tracking-widest uppercase text-gold-muted">Arquitectura Funcional</span>
                                    </div>
                                </m.div>

                                {/* Laura's Seal */}
                                <m.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/5 rounded-full border border-white/10">
                                            <Diamond className="w-5 h-5 text-gold-muted" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif text-white uppercase tracking-wider">Dra. Laura Ospina</h3>
                                            <p className="text-[10px] text-white/50 tracking-[0.2em] uppercase">FUNDADORA & ODONTÓLOGA ESTÉTICA</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit">
                                        <Sparkles className="w-3 h-3 text-white/60" />
                                        <span className="text-[9px] font-bold tracking-widest uppercase text-white/80">Estética de Autor</span>
                                    </div>
                                </m.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Path of Excellence (Macro Narrative) */}
                <section className="container mx-auto px-6 mb-40 text-center max-w-5xl">
                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <span className="text-gold-muted tracking-[0.8em] text-xs uppercase font-bold">{t("story.title")}</span>
                        <p className="text-2xl md:text-3xl font-serif leading-relaxed italic text-white/90 whitespace-pre-line">
                            {t("story.body")}
                        </p>
                        <div className="h-20 w-[1px] bg-gradient-to-b from-gold-muted/50 to-transparent mx-auto mt-12" />
                    </m.div>
                </section>

                {/* Philosophy Section - "El Don de Servir" */}
                <section className="container mx-auto px-6 mb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <m.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="relative aspect-[3/4] md:aspect-square rounded-[60px] overflow-hidden border border-white/10"
                            >
                                <Image
                                    src="/images/Casos/Laura-Julio.JPEG"
                                    alt="Fundadores Diamond Dental - Empatía y Responsabilidad"
                                    fill
                                    className="object-cover object-[center_35%]"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </m.div>
                            {/* Floating Element */}
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-black/40 border border-white/10 rounded-full flex flex-col items-center justify-center text-center p-8 backdrop-blur-3xl shadow-2xl z-10 hidden md:flex">
                                <HeartHandshake className="w-10 h-10 text-gold-muted mb-4 animate-pulse" />
                                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/90 leading-relaxed">
                                    Don de<br />Servir
                                </span>
                            </div>
                        </div>

                        <div className="space-y-12 order-1 lg:order-2">
                            <m.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="space-y-8"
                            >
                                <span className="text-gold-muted tracking-[0.8em] text-xs uppercase font-bold">{t('philosophy.badge')}</span>
                                <h2 className="text-4xl md:text-7xl font-serif leading-tight">
                                    {t("philosophy.title")}
                                </h2>
                                <p className="text-[#a1a1a1] text-lg font-light leading-relaxed whitespace-pre-line">
                                    {t("philosophy.body")}
                                </p>
                            </m.div>
                        </div>
                    </div>
                </section>

                {/* Mastery & Vanguard Section */}
                <section className="bg-white/[0.02] py-40 border-y border-white/5 relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <m.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="space-y-8"
                                >
                                    <span className="text-gold-muted tracking-[0.8em] text-xs uppercase font-bold">{t('mastery.badge')}</span>
                                    <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                                        {t("mastery.title")}
                                    </h2>
                                    <p className="text-[#a1a1a1] text-lg font-light leading-relaxed whitespace-pre-line">
                                        {t("mastery.body")}
                                    </p>
                                </m.div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="group p-8 bg-black/40 border border-white/5 rounded-3xl backdrop-blur-md">
                                        <BookOpen className="w-8 h-8 text-gold-muted mb-6" />
                                        <h3 className="text-xl font-serif mb-4 uppercase tracking-widest">{t('mastery.education')}</h3>
                                        <p className="text-white/40 text-xs leading-relaxed uppercase tracking-widest">{t('mastery.educationDesc')}</p>
                                    </div>
                                    <div className="group p-8 bg-black/40 border border-white/5 rounded-3xl backdrop-blur-md">
                                        <Microscope className="w-8 h-8 text-gold-muted mb-6" />
                                        <h3 className="text-xl font-serif mb-4 uppercase tracking-widest">{t('mastery.technology')}</h3>
                                        <p className="text-white/40 text-xs leading-relaxed uppercase tracking-widest">{t('mastery.technologyDesc')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                                {/* Julio */}
                                <m.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="relative aspect-[3/4] md:aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10"
                                >
                                    <Image
                                        src="/images/Casos/JulioOrtodonciaInvisible.JPEG"
                                        alt="Dr. Julio César Gámez - Ortodoncia Invisible"
                                        fill
                                        className="object-cover object-[center_20%]"
                                        sizes="(max-width: 1024px) 100vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8">
                                        <div className="transform translate-y-4 hover:translate-y-0 transition-transform duration-500">
                                            <span className="text-white font-serif italic text-2xl tracking-wide block mb-1">{t("mastery.julio.name")}</span>
                                            <span className="text-gold-muted text-[9px] tracking-[0.2em] uppercase">{t("mastery.julio.role")}</span>
                                        </div>
                                    </div>
                                </m.div>

                                {/* Laura */}
                                <m.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="relative aspect-[3/4] md:aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 sm:mt-16"
                                >
                                    <Image
                                        src="/images/Casos/Laura3.JPEG"
                                        alt="Dra. Laura Ospina - Odontología Estética"
                                        fill
                                        className="object-cover object-[center_20%]"
                                        sizes="(max-width: 1024px) 100vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8">
                                        <div className="transform translate-y-4 hover:translate-y-0 transition-transform duration-500">
                                            <span className="text-white font-serif italic text-2xl tracking-wide block mb-1">{t("mastery.laura.name")}</span>
                                            <span className="text-gold-muted text-[9px] tracking-[0.2em] uppercase">{t("mastery.laura.role")}</span>
                                        </div>
                                    </div>
                                </m.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </LazyMotion>
    );
}
