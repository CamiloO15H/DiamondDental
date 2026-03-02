"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useTranslations } from "next-intl";

// Thin-stroke SVG icons
const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.15 },
    }),
};

export default function Footer() {
    const t = useTranslations("Index.footer");
    const params = useParams();
    const locale = params?.locale || "es";

    return (
        <LazyMotion features={domAnimation}>
            <footer className="bg-[#050505] relative">
                {/* ── Google Maps Section ── */}
                <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
                    <div className="absolute inset-0 grayscale invert brightness-[0.85] contrast-125">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d-75.5894015!3d6.2605209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44295ab31e4b33%3A0x4703d004a6a94ad4!2sDIAMOND%20DENTAL!5e0!3m2!1ses!2sco!4v1700000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Diamond Dental Location"
                            className="pointer-events-auto"
                        />
                    </div>
                    {/* Gradient fade into footer content */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />
                </div>

                {/* ── Main Footer Content ── */}
                <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">

                        {/* Column 1: Brand */}
                        <m.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0}
                            className="flex flex-col items-center md:items-start"
                        >
                            <Image
                                src="/images/logo-diamond.png"
                                alt="Diamond Dental"
                                width={140}
                                height={60}
                                className="object-contain mb-6 brightness-110"
                            />
                            <p className="font-serif text-lg italic text-white/40 tracking-wide">
                                {t("philosophy")}
                            </p>
                        </m.div>

                        {/* Column 2: Contact */}
                        <m.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1}
                            className="flex flex-col items-center md:items-start"
                        >
                            <h4 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6 ml-[0.5em]">
                                {t("contact.title")}
                            </h4>
                            <ul className="space-y-4 text-sm text-white/50">
                                <li className="flex items-start gap-3 group">
                                    <span className="mt-0.5 text-white/30 group-hover:text-white/70 transition-colors duration-300">
                                        <MapPinIcon />
                                    </span>
                                    <span className="group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                                        {t("contact.address")}
                                    </span>
                                </li>
                                <li>
                                    <a
                                        href={`tel:${t("contact.phone").replace(/\s/g, "")}`}
                                        className="flex items-center gap-3 group"
                                    >
                                        <span className="text-white/30 group-hover:text-white/70 transition-colors duration-300">
                                            <PhoneIcon />
                                        </span>
                                        <span className="group-hover:text-white/80 transition-colors duration-300">
                                            {t("contact.phone")}
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${t("contact.email")}`}
                                        className="flex items-center gap-3 group"
                                    >
                                        <span className="text-white/30 group-hover:text-white/70 transition-colors duration-300">
                                            <MailIcon />
                                        </span>
                                        <span className="group-hover:text-white/80 transition-colors duration-300">
                                            {t("contact.email")}
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </m.div>

                        {/* Column 3: Schedule & Social */}
                        <m.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={2}
                            className="flex flex-col items-center md:items-start"
                        >
                            <h4 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6 ml-[0.5em]">
                                {t("schedule.title")}
                            </h4>
                            <ul className="space-y-3 text-sm text-white/50 mb-10">
                                <li className="flex items-center gap-3">
                                    <span className="text-white/30"><ClockIcon /></span>
                                    {t("schedule.weekdays")}
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-white/30"><ClockIcon /></span>
                                    {t("schedule.saturday")}
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-white/30"><ClockIcon /></span>
                                    {t("schedule.sunday")}
                                </li>
                            </ul>

                            <h4 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-5 ml-[0.5em]">
                                {t("social.title")}
                            </h4>
                            <div className="flex gap-5">
                                <a
                                    href="https://www.instagram.com/diamondental.clinica/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/30 hover:text-white/80 transition-colors duration-300"
                                    aria-label="Instagram"
                                >
                                    <InstagramIcon />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=100063458412996"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/30 hover:text-white/80 transition-colors duration-300"
                                    aria-label="Facebook"
                                >
                                    <FacebookIcon />
                                </a>
                            </div>
                        </m.div>
                    </div>

                    {/* ── Divider ── */}
                    <div className="mt-16 mb-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* ── Copyright & Credits ── */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium">
                        <div className="flex items-center gap-6">
                            <span>{t("copyright")}</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <Link href={`/${locale}/privacidad`} className="hover:text-white/60 transition-colors duration-300">
                                {t("privacy")}
                            </Link>
                            <Link href={`/${locale}/terminos`} className="hover:text-white/60 transition-colors duration-300">
                                {t("terms")}
                            </Link>
                        </div>
                        <span className="text-white/15">
                            {t("designedBy")}{" "}
                            <span
                                className="text-white/30 hover:text-white/60 transition-colors duration-300 cursor-default"
                            >
                                Studio K
                            </span>
                        </span>
                    </div>
                </div>
            </footer>
        </LazyMotion>
    );
}
