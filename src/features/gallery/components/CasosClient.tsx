"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useTranslations } from "next-intl";
import MuseumGallery from "@/features/gallery/components/MuseumGallery";
import ComparisonSlider from "@/features/gallery/components/ComparisonSlider";
import { ArrowLeft, Diamond, Sparkles } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function CasosClient() {
    const t = useTranslations("Index");
    const params = useParams();
    const locale = params?.locale || "es";

    return (
        <LazyMotion features={domAnimation}>
            <main className="min-h-screen bg-[#0d0d0d] pt-32 pb-20 overflow-hidden">
                {/* Ambient Background */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[150px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/[0.01] blur-[150px] rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Header Section */}
                    <header className="mb-24">
                        <Link
                            href={`/${locale}`}
                            className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 w-fit"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{t("casos.header.back")}</span>
                        </Link>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                            <div className="max-w-3xl">
                                <m.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-center gap-4 mb-6"
                                >
                                    <div className="h-[1px] w-12 bg-gold-muted/30"></div>
                                    <span className="text-gold-muted text-xs font-bold tracking-[0.8em] uppercase">
                                        {t("casos.header.badge")}
                                    </span>
                                </m.div>
                                <m.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.8] tracking-tighter mb-8 uppercase"
                                    dangerouslySetInnerHTML={{ __html: t("casos.header.title") }}
                                />
                            </div>

                            <m.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="max-w-sm"
                            >
                                <p className="text-white/50 text-base font-light leading-relaxed italic border-l border-white/5 pl-8 py-2">
                                    {t("casos.header.quote")}
                                </p>
                            </m.div>
                        </div>
                    </header>

                    {/* Face Transformation Spotlight (The Global Impact) */}
                    <section className="mb-40">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
                            <div className="space-y-10">
                                <m.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="space-y-6"
                                >
                                    <span className="text-gold-muted text-xs font-bold tracking-[0.5em] uppercase">{t("casos.faceTransformation.badge")}</span>
                                    <h2 className="text-white font-serif text-5xl md:text-7xl leading-tight italic uppercase" dangerouslySetInnerHTML={{ __html: t("casos.faceTransformation.title") }} />
                                    <p className="text-white/60 text-lg leading-relaxed font-light">
                                        {t("casos.faceTransformation.body")}
                                    </p>
                                </m.div>

                                <div className="space-y-8 border-l border-white/10 pl-8">
                                    <div className="space-y-2">
                                        <h4 className="text-white font-serif text-xl">{t("casos.faceTransformation.oclusionTitle")}</h4>
                                        <p className="text-white/40 text-sm">{t("casos.faceTransformation.oclusionBody")}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-white font-serif text-xl">{t("casos.faceTransformation.bioTitle")}</h4>
                                        <p className="text-white/40 text-sm">{t("casos.faceTransformation.bioBody")}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
                                <ComparisonSlider
                                    beforeImage="/images/results/case1-before.jpg"
                                    afterImage="/images/results/case1-after.jpg"
                                    className="h-full w-full"
                                />
                                <div className="absolute top-8 left-8 z-20 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-white/90">{t("casos.faceTransformation.caseLabel")} #001</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Video Case Spotlight (International Trust & Testimonial) */}
                    <section className="mb-40 bg-white/[0.02] border border-white/5 rounded-[60px] p-8 md:p-16">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
                            <div className="flex justify-center">
                                <div className="relative aspect-[9/16] w-full max-w-[380px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                                    <iframe
                                        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F941427089043340%2F&show_text=0&t=0"
                                        className="w-full h-full border-none overflow-hidden"
                                        scrolling="no"
                                        allowFullScreen={true}
                                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <Image src="/images/logo-diamond.png" alt="Diamond Dental" width={40} height={40} className="object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-serif text-3xl uppercase">{t("casos.testimonial.title")}</h3>
                                        <p className="text-gold-muted text-[10px] tracking-widest uppercase font-bold">{t("casos.testimonial.subtitle")}</p>
                                    </div>
                                </div>
                                <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light italic">
                                    "{t("casos.testimonial.body")}"
                                </p>
                                <div className="flex items-center gap-6 pt-4">
                                    <div className="h-[1px] flex-grow bg-white/10"></div>
                                    <Diamond className="w-4 h-4 text-gold-muted opacity-50" />
                                    <div className="h-[1px] flex-grow bg-white/10"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Macro Texture Section */}
                    <section className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <m.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-[0_40px_100px_rgba(0,0,0,0.6)] bg-[#0a0a0a]"
                        >
                            <Image
                                src="/images/LenteCeramico.jpeg"
                                alt={t("casos.macro.title")}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-10 left-10">
                                <h3 className="text-white font-serif text-4xl italic uppercase">{t("casos.macro.title")}</h3>
                                <p className="text-white/50 text-xs tracking-widest uppercase mt-3 flex items-center gap-3">
                                    <Sparkles className="w-3 h-3 text-gold-muted" />
                                    {t("casos.macro.subtitle")}
                                </p>
                            </div>
                        </m.div>

                        <div className="space-y-10 lg:pl-12">
                            <div className="relative">
                                <span className="text-gold-muted/20 text-[120px] font-serif absolute -top-16 -left-8 pointer-events-none select-none">“</span>
                                <h2 className="text-white font-serif text-4xl md:text-5xl leading-tight mb-8 italic uppercase">{t("casos.macro.quote")}</h2>
                                <p className="text-white/60 text-lg leading-relaxed font-light mb-10">
                                    {t("casos.macro.body")}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Comparative Cases Section */}
                    <section className="mb-40">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-gold-muted text-xs font-bold tracking-[0.5em] uppercase">{t("casos.comparative.subtitle")}</span>
                            <h2 className="text-white font-serif text-4xl md:text-5xl uppercase italic">{t("casos.comparative.title")}</h2>
                            <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
                                {t("casos.comparative.body")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                "/images/Casos-Comparativos/Caso1-2.jpeg",
                                "/images/Casos-Comparativos/Caso3-4.jpeg",
                                "/images/Casos-Comparativos/Caso5-6.jpeg",
                                "/images/Casos-Comparativos/Caso7-8.jpeg",
                                "/images/Casos-Comparativos/Caso9-10.jpeg",
                                "/images/Casos-Comparativos/Caso11-12.jpeg"
                            ].map((src, index) => (
                                <m.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: index * 0.1, duration: 0.8 }}
                                    className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl"
                                >
                                    <Image
                                        src={src}
                                        alt={`Caso Clínico ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                                </m.div>
                            ))}
                        </div>
                    </section>

                    {/* The Main Gallery */}
                    <div className="border-t border-white/5 pt-20">
                        <MuseumGallery />
                    </div>
                </div>
            </main>
        </LazyMotion>
    );
}
