"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useTranslations } from "next-intl";

export default function PrivacidadClient() {
    const t = useTranslations("Index.legal.privacy");

    return (
        <LazyMotion features={domAnimation}>
            <main className="min-h-screen bg-[#0d0d0d] pt-40 pb-20 text-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-12"
                    >
                        <header className="border-b border-white/10 pb-10">
                            <h1 className="text-5xl md:text-7xl font-serif mb-4">{t("title")}</h1>
                            <p className="text-white/40 text-sm uppercase tracking-widest">{t("lastUpdated")}</p>
                        </header>

                        <section className="prose prose-invert prose-lg max-w-none">
                            <div className="bg-white/[0.02] p-10 rounded-[40px] border border-white/5 backdrop-blur-sm mb-16">
                                <p className="text-white/80 leading-relaxed text-xl">
                                    {t("content")}
                                </p>
                            </div>

                            <div className="space-y-16">
                                <div>
                                    <h2 className="text-2xl font-serif mb-6 text-gold-muted">{t("dataTitle")}</h2>
                                    <p className="text-white/60 leading-relaxed font-light">
                                        {t("dataBody")}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-serif mb-6 text-gold-muted">{t("rightsTitle")}</h2>
                                    <p className="text-white/60 leading-relaxed font-light">
                                        {t("rights")} Puede contactarnos en cualquier momento a través de <span className="text-white underline decoration-gold-muted underline-offset-4 font-normal">diamondental.clinica@gmail.com</span> para ejercer estos derechos.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-serif mb-6 text-gold-muted">{t("cookiesTitle")}</h2>
                                    <p className="text-white/60 leading-relaxed font-light">
                                        {t("cookiesBody")}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </m.div>
                </div>
            </main>
        </LazyMotion>
    );
}
