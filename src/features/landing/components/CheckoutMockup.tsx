"use client";

import { motion } from "framer-motion";
import { CreditCard, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const CheckoutMockup = ({ onClose }: { onClose: () => void }) => {
    const t = useTranslations("Index.checkout");
    const [step, setStep] = useState(1);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-diamond-black/90 backdrop-blur-xl" onClick={onClose} />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative w-full max-w-lg bg-diamond-matte border border-diamond-white/10 p-8 md:p-12 shadow-[0_0_100px_rgba(255,255,255,0.05)]"
            >
                <div className="absolute top-0 left-0 w-2 h-2 bg-diamond-white" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-diamond-white" />

                {step === 1 ? (
                    <div className="space-y-8">
                        <div className="text-center">
                            <h3 className="text-2xl font-outfit font-bold text-diamond-white mb-2">{t('title')}</h3>
                            <p className="text-diamond-silver/40 text-xs uppercase tracking-widest">{t('subtitle')}</p>
                        </div>

                        <div className="bg-diamond-black p-6 border border-diamond-white/5 space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-diamond-silver/60">{t('service')}:</span>
                                <span className="text-diamond-white font-medium">{t('serviceName')}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-diamond-silver/60">{t('specialist')}:</span>
                                <span className="text-diamond-white font-medium">{t('specialistName')}</span>
                            </div>
                            <div className="h-[1px] bg-diamond-white/5" />
                            <div className="flex justify-between items-center text-lg font-bold">
                                <span className="text-diamond-white">{t('total')}:</span>
                                <span className="text-diamond-white">$150.000 COP</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={t('cardHolder')}
                                    className="w-full bg-transparent border-b border-diamond-white/20 py-3 text-sm focus:border-diamond-white outline-none transition-colors"
                                />
                            </div>
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder={t('cardNumber')}
                                    className="w-full bg-transparent border-b border-diamond-white/20 py-3 text-sm focus:border-diamond-white outline-none transition-colors"
                                />
                                <CreditCard className="absolute right-0 top-3 w-4 h-4 text-diamond-silver/40 group-focus-within:text-diamond-white" />
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    className="bg-transparent border-b border-diamond-white/20 py-3 text-sm focus:border-diamond-white outline-none transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="CVC"
                                    className="bg-transparent border-b border-diamond-white/20 py-3 text-sm focus:border-diamond-white outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => setStep(2)}
                            className="w-full py-4 bg-diamond-white text-diamond-black font-black uppercase tracking-widest text-sm hover:invert transition-all duration-500"
                        >
                            {t('confirm')}
                        </button>

                        <div className="flex items-center justify-center gap-6 opacity-30">
                            <ShieldCheck className="w-4 h-4" />
                            <Lock className="w-4 h-4" />
                            <span className="text-[10px] uppercase tracking-tighter">{t('securePayment')}</span>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 space-y-8"
                    >
                        <div className="flex justify-center">
                            <div className="w-20 h-20 rounded-full border border-diamond-white/20 flex items-center justify-center bg-diamond-black">
                                <CheckCircle2 className="w-10 h-10 text-diamond-white animate-pulse" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-outfit font-bold text-diamond-white mb-4">{t('success')}</h3>
                            <p className="text-diamond-silver/60 text-sm leading-relaxed">
                                {t('successNote')}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="px-12 py-4 border border-diamond-white/20 text-diamond-white font-bold uppercase tracking-widest text-xs hover:bg-diamond-white hover:text-diamond-black transition-all"
                        >
                            {t('backToHome')}
                        </button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};
