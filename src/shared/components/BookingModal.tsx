"use client";

import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { bookingAdapter } from "@/services/adapters/BookingAdapter";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const t = useTranslations("Index.booking");
    const [name, setName] = useState("");
    const [treatment, setTreatment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !treatment) return;

        setIsSubmitting(true);

        // Map treatment key to translated value
        const treatmentName = t(`modal.treatments.${treatment}`);
        const message = t("whatsappMessage", { name, treatment: treatmentName });

        bookingAdapter.scheduleAppointment(
            { name, treatment: treatmentName },
            message
        );

        setTimeout(() => {
            setIsSubmitting(false);
            onClose();
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <LazyMotion features={domAnimation}>
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12">
                        {/* Backdrop */}
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                        />

                        {/* Modal Content */}
                        <m.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                            className="relative w-full max-w-xl bg-diamond-black/40 border border-white/10 p-8 md:p-12 shadow-2xl rounded-none overflow-hidden"
                        >
                            {/* Diamond Glow Decor */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-gold-muted/50 to-transparent" />

                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 tracking-tight">
                                    {t("modal.title")}
                                </h2>
                                <p className="text-sm text-diamond-silver/60 font-sans tracking-wide leading-relaxed">
                                    {t("modal.subtitle")}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Name Input */}
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-muted ml-1">
                                        {t("modal.nameLabel")}
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder={t("modal.namePlaceholder")}
                                        className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white font-sans focus:outline-none focus:border-gold-muted/50 transition-colors placeholder:text-white/20"
                                    />
                                </div>

                                {/* Treatment Selection */}
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-muted ml-1">
                                        {t("modal.treatmentLabel")}
                                    </label>
                                    <div className="relative">
                                        <select
                                            required
                                            value={treatment}
                                            onChange={(e) => setTreatment(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white font-sans focus:outline-none focus:border-gold-muted/50 transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="bg-diamond-black">
                                                {t("modal.treatmentPlaceholder")}
                                            </option>
                                            <option value="design" className="bg-diamond-black">{t("modal.treatments.design")}</option>
                                            <option value="implants" className="bg-diamond-black">{t("modal.treatments.implants")}</option>
                                            <option value="orto" className="bg-diamond-black">{t("modal.treatments.orto")}</option>
                                            <option value="whitening" className="bg-diamond-black">{t("modal.treatments.whitening")}</option>
                                            <option value="general" className="bg-diamond-black">{t("modal.treatments.general")}</option>
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                            <ChevronDown className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-gold-muted transition-colors duration-500 flex items-center justify-center gap-3 group"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            {t("modal.submit")}
                                            <span className="w-8 h-[1px] bg-black/30 group-hover:w-12 transition-all duration-500" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-[9px] uppercase tracking-[0.2em] text-white/30 pt-4 border-t border-white/5">
                                    {t("modal.footer")}
                                </p>
                            </form>
                        </m.div>
                    </div>
                </LazyMotion>
            )}
        </AnimatePresence>
    );
}

