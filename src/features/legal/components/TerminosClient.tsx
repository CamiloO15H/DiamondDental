"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useTranslations } from "next-intl";

export default function TerminosClient() {
    const t = useTranslations("Index.legal.terms");

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
                            <p className="text-white/60 leading-relaxed italic border-l-2 border-gold-muted/30 pl-6 py-2">
                                {t("introduction")}
                            </p>

                            <div className="mt-16 space-y-16">
                                <div>
                                    <h2 className="text-2xl font-serif mb-6 text-gold-muted underline underline-offset-8 decoration-white/10">{t("sections.servicesTitle")}</h2>
                                    <p className="text-white/60 leading-relaxed font-light">
                                        {t("sections.services")} {t("sections.servicesExtra")}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-serif mb-6 text-gold-muted underline underline-offset-8 decoration-white/10">{t("sections.bookingsTitle")}</h2>
                                    <p className="text-white/60 leading-relaxed font-light">
                                        {t("sections.bookings")} {t("sections.bookingsExtra")}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-serif mb-6 text-gold-muted underline underline-offset-8 decoration-white/10">{t("sections.paymentsTitle")}</h2>
                                    <p className="text-white/60 leading-relaxed font-light">
                                        {t("sections.payments")} {t("sections.paymentsExtra")}
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
