"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Play, CheckCircle2, ShieldCheck, Zap, Activity, Scan, MessageCircle } from "lucide-react";
import { WhatsAppLinkGenerator } from "@/core/utils/WhatsAppLinkGenerator";

const serviceList = [
    {
        id: "smileDesign",
        image: "/images/Casos/IMG_6668.PNG",
        icon: Zap,
        accent: "from-white/10 to-white/5",
        imgPosition: "object-[center_20%]"
    },
    {
        id: "orthodontics",
        image: "/images/Casos/Julio2.JPEG",
        icon: ShieldCheck,
        accent: "from-gold-muted/10 to-transparent",
        imgPosition: "object-center"
    },
    {
        id: "aesthetics",
        image: "/images/Casos/Laura2.JPEG",
        icon: CheckCircle2,
        accent: "from-white/10 to-white/5",
        imgPosition: "object-[center_15%]"
    },
    {
        id: "implants",
        image: "/images/Casos/Dr_Jhon_Implantes.png",
        icon: ShieldCheck,
        accent: "from-white/10 to-white/5",
        imgPosition: "object-center"
    },
    {
        id: "endodontics",
        image: "/images/team/SaraVaca.png",
        icon: Activity,
        accent: "from-white/10 to-white/5",
        imgPosition: "object-[center_10%]"
    },
    {
        id: "scanner",
        image: "/images/Casos/Scanner.png",
        icon: Scan,
        accent: "from-white/10 to-white/5",
        imgPosition: "object-center"
    }
];

export default function ServiciosClient() {
    const t = useTranslations("Index.servicios");

    return (
        <LazyMotion features={domAnimation}>
            <main className="min-h-screen bg-[#1f1f1f] relative overflow-hidden">
                {/* Background Texture (Buddha) with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/Buda.png"
                        alt="Diamond Dental Zen Atmosphere"
                        fill
                        className="object-cover opacity-10"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-[#2a2a2a]/80 backdrop-blur-[2px]"></div>
                </div>

                {/* Top and Bottom Vignettes for Seamless Blending */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]/90"></div>

                <div className="relative z-20 pt-32 pb-20 container mx-auto px-6">
                    {/* Header */}
                    <header className="mb-32 text-center max-w-4xl mx-auto">
                        <m.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-gold-muted tracking-[1em] text-[10px] font-bold uppercase mb-8 block"
                        >
                            {t("subtitle")}
                        </m.span>
                        <m.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-6xl md:text-9xl font-serif text-white tracking-tighter leading-none mb-12"
                        >
                            {t("title")}
                        </m.h1>
                        <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed italic">
                            &ldquo;{t("tagline")}&rdquo;
                        </p>
                    </header>

                    {/* Services Grid (Zig-Zag / Lado A & B) */}
                    <div className="flex flex-col gap-24 mb-40">
                        {serviceList.map((service, i) => {
                            const isEven = i % 2 === 0;
                            const serviceTitle = t(`list.${service.id}.title`);
                            const waLink = WhatsAppLinkGenerator.generateGenericLink(t('whatsappMessage', { serviceTitle }));

                            return (
                                <m.section
                                    key={service.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                    className={`relative group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                                >
                                    {/* Background Blob (Light reflection) */}
                                    <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-1/4' : 'right-1/4'} w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none transition-all duration-1000 group-hover:bg-gold-light/10`}></div>

                                    {/* Lado A: Imagen */}
                                    <div className="w-full lg:w-1/2 relative">
                                        <div className="relative w-full aspect-[4/3] lg:aspect-square lg:max-h-[600px] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.03)] group-hover:shadow-[0_0_60px_rgba(255,255,255,0.08)] transition-all duration-700">
                                            <Image
                                                src={service.image}
                                                alt={serviceTitle}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                className={`object-cover group-hover:scale-105 transition-all duration-1000 ${service.imgPosition}`}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000"></div>
                                        </div>
                                    </div>

                                    {/* Lado B: Texto y Contenido */}
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
                                        <service.icon className="w-10 h-10 text-gold-muted mb-8 group-hover:scale-110 transition-transform duration-500" />

                                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 group-hover:text-gold-light transition-colors duration-500">
                                            <span className={isEven ? '' : 'italic font-light'}>
                                                {serviceTitle.split(' ')[0]}
                                            </span>
                                            {" "}
                                            <span className={isEven ? 'italic font-light' : ''}>
                                                {serviceTitle.split(' ').slice(1).join(' ')}
                                            </span>
                                        </h2>

                                        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-10">
                                            {t(`list.${service.id}.description`)}
                                        </p>

                                        {/* Action Button */}
                                        <div className="flex items-center gap-6">
                                            <a
                                                href={waLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white/90 text-sm font-sans font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                                            >
                                                <MessageCircle className="w-4 h-4" />
                                                {t("cta")}
                                            </a>
                                        </div>
                                    </div>
                                </m.section>
                            );
                        })}
                    </div>

                    {/* Multimedia / Video Section ("Diamond Stories") */}
                    <section className="pt-24 border-t border-white/10 relative">
                        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8">
                            <div>
                                <span className="text-gold-muted tracking-[0.6em] text-[10px] font-bold uppercase mb-4 block">{t("stories.badge")}</span>
                                <h2 className="text-5xl md:text-7xl font-serif text-white">{t("stories.title")}</h2>
                            </div>
                            <p className="max-w-md text-white/50 font-light italic text-lg">
                                {t("stories.body")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {/* Video Card 1: Implants Myths (Facebook Reel Embed) */}
                            <m.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative aspect-[9/16] rounded-3xl overflow-hidden border-[0.5px] border-white/20 bg-[#0d0d0d] shadow-[0_10px_30px_rgba(0,0,0,0.5)] group block max-w-[320px] mx-auto w-full"
                            >
                                <iframe
                                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F762811929834230%2F&show_text=false&width=267&t=0"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full z-0"
                                ></iframe>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-none">
                                    <h3 className="text-white font-serif text-xl sm:text-2xl leading-tight mb-2">{t("storiesVideos.video1Title")}</h3>
                                    <p className="text-white/60 text-xs tracking-widest uppercase italic bg-black/40 inline-block px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">{t("storiesVideos.video1Author")}</p>
                                </div>
                            </m.div>

                            {/* Video Card 2: Patient Testimonial */}
                            <m.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative aspect-[9/16] rounded-3xl overflow-hidden border-[0.5px] border-white/20 bg-[#0d0d0d] shadow-[0_10px_30px_rgba(0,0,0,0.5)] group block max-w-[320px] mx-auto w-full"
                            >
                                <iframe
                                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1150623530253168%2F&show_text=false&width=267&t=0"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full z-0"
                                ></iframe>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-none">
                                    <h3 className="text-white font-serif text-xl sm:text-2xl leading-tight mb-2">{t("storiesVideos.video2Title")}</h3>
                                    <p className="text-white/60 text-xs tracking-widest uppercase italic bg-black/40 inline-block px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">{t("storiesVideos.video2Author")}</p>
                                </div>
                            </m.div>

                            {/* Video Card 3: Ceramic Veneers update */}
                            <m.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative aspect-[9/16] rounded-3xl overflow-hidden border-[0.5px] border-white/20 bg-[#0d0d0d] shadow-[0_10px_30px_rgba(0,0,0,0.5)] group block max-w-[320px] mx-auto w-full"
                            >
                                <iframe
                                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F829104302311905%2F&show_text=false&width=267&t=0"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full z-0"
                                ></iframe>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-none">
                                    <h3 className="text-white font-serif text-xl sm:text-2xl leading-tight mb-2">{t("storiesVideos.video3Title")}</h3>
                                    <p className="text-white/60 text-xs tracking-widest uppercase italic bg-black/40 inline-block px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">{t("storiesVideos.video3Author")}</p>
                                </div>
                            </m.div>
                        </div>
                    </section>
                </div>
            </main>
        </LazyMotion>
    );
}
