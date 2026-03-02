"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useTranslations } from "next-intl";
import {
    MessageCircle,
    Mail,
    MapPin,
    Clock,
    Phone,
    Send,
    CheckCircle,
    ArrowRight,
    Instagram,
    Facebook,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useState, FormEvent } from "react";

const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.95a8.27 8.27 0 0 0 4.76 1.5V7a4.83 4.83 0 0 1-1-.31z" />
    </svg>
);

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ContactoClient() {
    const t = useTranslations("Index.contactPage");
    const tFooter = useTranslations("Index.footer");
    const params = useParams();
    const locale = params?.locale || "es";

    const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", reason: "" });

    const whatsappNumber = "573148311777";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t("whatsappMessage"))}`;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setFormState("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setFormState("success");
            } else {
                setFormState("idle");
                alert(t("formAlertError"));
            }
        } catch {
            setFormState("idle");
            alert(t("formAlertConnection"));
        }
    };

    const resetForm = () => {
        setFormData({ name: "", email: "", phone: "", reason: "" });
        setFormState("idle");
    };

    return (
        <LazyMotion features={domAnimation}>
            <main className="min-h-screen bg-[#0d0d0d] pt-32 pb-20 overflow-hidden text-white">
                <div className="container mx-auto px-6 max-w-6xl">

                    {/* ─── HERO HEADER ─── */}
                    <m.header
                        className="mb-20 text-center relative"
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                    >
                        <m.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/[0.03] to-transparent rounded-full blur-[120px] -z-10" variants={fadeUp} />

                        <m.span
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-gold-muted tracking-[0.3em] text-[10px] font-bold uppercase mb-8"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-muted animate-pulse" />
                            {t("trustBadge")}
                        </m.span>

                        <m.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6">
                            {t("title")}
                        </m.h1>

                        <m.p variants={fadeUp} className="text-white/40 font-serif italic text-lg md:text-xl max-w-xl mx-auto">
                            {t("subtitle")}
                        </m.p>
                    </m.header>

                    {/* ─── WHATSAPP CTA HERO ─── */}
                    <m.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={stagger}
                        className="mb-20"
                    >
                        <m.div
                            variants={scaleIn}
                            className="relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-gradient-to-br from-[#128C7E]/10 via-[#0d0d0d] to-[#25D366]/5 p-10 md:p-16"
                        >
                            {/* Glow effect */}
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#25D366]/10 rounded-full blur-[100px]" />
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#128C7E]/10 rounded-full blur-[80px]" />

                            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                                <div className="flex-1 text-center lg:text-left">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 mb-6">
                                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#25D366]">
                                            {t("whatsappLabel")}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 leading-tight">
                                        {t("heroCtaTitle")}
                                    </h2>

                                    <p className="text-white/50 text-base md:text-lg mb-8 max-w-lg">
                                        {t("heroCtaBody")}
                                    </p>

                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-sm uppercase tracking-[0.15em] rounded-2xl hover:bg-[#20bd5a] transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:scale-[1.02]"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        {t("heroCtaButton")}
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </a>

                                    <p className="mt-4 text-white/30 text-xs flex items-center gap-2 justify-center lg:justify-start">
                                        <Clock className="w-3 h-3" />
                                        {t("heroCtaNote")}
                                    </p>
                                </div>

                                {/* Phone mockup */}
                                <div className="hidden lg:block relative w-56 flex-shrink-0">
                                    <div className="w-56 h-72 rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm p-4 flex flex-col items-center justify-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                                            <MessageCircle className="w-8 h-8 text-[#25D366]" />
                                        </div>
                                        <div className="text-center">
                                            <p className="font-serif text-sm mb-1">Diamond Dental</p>
                                            <p className="text-[10px] text-white/40 uppercase tracking-widest">Online</p>
                                        </div>
                                        <div className="w-full space-y-2 mt-2">
                                            <div className="bg-white/5 rounded-xl rounded-tl-sm p-3">
                                                <p className="text-[11px] text-white/60">
                                                    {t("whatsappWelcome")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </m.div>
                    </m.section>

                    {/* ─── CONTACT CHANNELS + FORM ─── */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

                        {/* Left: Contact Channels */}
                        <m.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={stagger}
                            className="space-y-6"
                        >
                            <m.h3
                                variants={fadeUp}
                                className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-2"
                            >
                                {t("channelsTitle")}
                            </m.h3>

                            {/* WhatsApp Card */}
                            <m.a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeUp}
                                className="group flex items-center gap-5 p-6 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-[#25D366]/30 hover:bg-[#25D366]/5 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                                    <Phone className="w-6 h-6 text-[#25D366]" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">
                                        {t("whatsappLabel")}
                                    </p>
                                    <p className="text-xl font-serif">{tFooter("contact.phone")}</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#25D366] transition-colors" />
                            </m.a>

                            {/* Email Card */}
                            <m.a
                                href={`mailto:${tFooter("contact.email")}`}
                                variants={fadeUp}
                                className="group flex items-center gap-5 p-6 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-gold-muted/30 hover:bg-gold-muted/5 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gold-muted/10 flex items-center justify-center group-hover:bg-gold-muted/20 transition-colors">
                                    <Mail className="w-6 h-6 text-gold-muted" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">
                                        {t("emailLabel")}
                                    </p>
                                    <p className="text-xl font-serif">{tFooter("contact.email")}</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-gold-muted transition-colors" />
                            </m.a>

                            {/* Location Card */}
                            <m.a
                                href="https://maps.google.com/?q=Diamond+Dental+Medellin"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeUp}
                                className="group flex items-center gap-5 p-6 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    <MapPin className="w-6 h-6 text-white/60" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">
                                        {t("locationLabel")}
                                    </p>
                                    <p className="font-serif">{t("info.address")}</p>
                                    <p className="text-white/40 text-sm">{t("info.reference")} · {t("info.city")}</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors" />
                            </m.a>

                            {/* Schedule */}
                            <m.div
                                variants={fadeUp}
                                className="p-6 rounded-[24px] bg-white/[0.02] border border-white/5"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <Clock className="w-5 h-5 text-gold-muted" />
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">
                                        {t("scheduleLabel")}
                                    </span>
                                    <span className="ml-auto px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold rounded-full border border-green-500/20">
                                        {t("openStatus")}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest block mb-1 text-white/20">
                                            {t("weekdaysShort")}
                                        </span>
                                        <p className="font-serif text-lg">{t("weekdaysHours")}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest block mb-1 text-white/20">
                                            {t("saturdayShort")}
                                        </span>
                                        <p className="font-serif text-lg">{t("saturdayHours")}</p>
                                    </div>
                                </div>
                            </m.div>
                        </m.div>

                        {/* Right: Contact Form */}
                        <m.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={scaleIn}
                            className="relative"
                        >
                            <div className="sticky top-32 p-8 md:p-10 rounded-[32px] bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                                {formState === "success" ? (
                                    <m.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle className="w-10 h-10 text-green-400" />
                                        </div>
                                        <h3 className="text-2xl font-serif mb-3">{t("quickForm.successTitle")}</h3>
                                        <p className="text-white/50 mb-8 max-w-sm mx-auto">{t("quickForm.successBody")}</p>
                                        <button
                                            onClick={resetForm}
                                            className="px-6 py-3 bg-white/5 border border-white/10 text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-xl hover:bg-white/10 transition-all"
                                        >
                                            {t("quickForm.successButton")}
                                        </button>
                                    </m.div>
                                ) : (
                                    <>
                                        <div className="mb-8">
                                            <h3 className="text-2xl md:text-3xl font-serif mb-2">{t("quickForm.title")}</h3>
                                            <p className="text-white/40 text-sm">{t("formSubtitle")}</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div>
                                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 block mb-2">
                                                    {t("quickForm.name")}
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-gold-muted/50 transition-colors text-sm"
                                                    placeholder={t("placeholders.name")}
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 block mb-2">
                                                        {t("quickForm.email")}
                                                    </label>
                                                    <input
                                                        type="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-gold-muted/50 transition-colors text-sm"
                                                        placeholder={t("placeholders.email")}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 block mb-2">
                                                        {t("quickForm.phone")}
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-gold-muted/50 transition-colors text-sm"
                                                        placeholder={t("placeholders.phone")}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 block mb-2">
                                                    {t("quickForm.reason")}
                                                </label>
                                                <textarea
                                                    required
                                                    rows={4}
                                                    value={formData.reason}
                                                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                                    className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-gold-muted/50 transition-colors text-sm resize-none"
                                                    placeholder={t("placeholders.reason")}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={formState === "sending"}
                                                className="w-full py-4 bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-gold-muted hover:text-white transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-50"
                                            >
                                                {formState === "sending" ? (
                                                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        {t("quickForm.submit")}
                                                    </>
                                                )}
                                            </button>

                                            <p className="text-center text-white/20 text-[11px]">
                                                🔒 {t("quickForm.privacy")}
                                            </p>
                                        </form>
                                    </>
                                )}
                            </div>
                        </m.div>
                    </div>

                    {/* ─── SOCIAL SECTION ─── */}
                    <m.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={stagger}
                        className="text-center"
                    >
                        <m.div variants={fadeUp} className="max-w-2xl mx-auto mb-10">
                            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-muted mb-4">
                                {t("socialTitle")}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed">
                                {t("socialBody")}
                            </p>
                        </m.div>

                        <m.div
                            variants={fadeUp}
                            className="flex items-center justify-center gap-4"
                        >
                            {[
                                { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/diamondental.clinica/", label: "Instagram" },
                                { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/profile.php?id=100063458412996", label: "Facebook" },
                                { icon: <TikTokIcon />, href: "https://www.tiktok.com/@diamondental", label: "TikTok" },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500"
                                >
                                    <span className="text-white/40 group-hover:text-white transition-colors">
                                        {social.icon}
                                    </span>
                                    <span className="text-sm font-semibold text-white/60 group-hover:text-white transition-colors">
                                        {social.label}
                                    </span>
                                </a>
                            ))}
                        </m.div>
                    </m.section>

                </div>
            </main>
        </LazyMotion>
    );
}
