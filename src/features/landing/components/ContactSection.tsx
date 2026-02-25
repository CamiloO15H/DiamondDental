"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageCircle, Calendar, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { CheckoutMockup } from "./CheckoutMockup";
import { whatsAppService } from "@/services/adapters/whatsapp/WhatsAppAdapter";

export default function ContactSection() {
    const t = useTranslations("Index.contact");
    const [showCheckout, setShowCheckout] = useState(false);

    const handleWhatsApp = () => {
        whatsAppService.sendMessage({
            phone: "573000000000",
            text: "Hola Diamond Dental, me gustaría agendar una valoración."
        });
    };

    const contactItems = [
        { icon: <MessageCircle className="w-6 h-6" />, label: "WhatsApp Directo", value: "+57 300 000 0000", onClick: handleWhatsApp },
        { icon: <Mail className="w-6 h-6" />, label: "Email Corporativo", value: "luxury@diamondental.co", onClick: () => window.open("mailto:luxury@diamondental.co") },
        { icon: <MapPin className="w-6 h-6" />, label: "Ubicación Premium", value: "Calle 100 #7-OP, Bogotá, CO", onClick: () => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' }) },
    ];

    return (
        <section id="contact" className="py-24 bg-diamond-matte relative overflow-hidden">
            {showCheckout && <CheckoutMockup onClose={() => setShowCheckout(false)} />}

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-outfit font-bold text-diamond-white mb-8"
                    >
                        {t('futureSmile')}
                    </motion.h2>

                    <div className="space-y-8">
                        {contactItems.map((item, i) => (
                            <motion.button
                                key={i}
                                onClick={item.onClick}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-6 group text-left w-full"
                            >
                                <div className="w-14 h-14 shrink-0 rounded-full border border-diamond-white/10 flex items-center justify-center bg-diamond-black group-hover:bg-diamond-white group-hover:text-diamond-black transition-all duration-500">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-diamond-silver/40 mb-1">{item.label}</div>
                                    <div className="text-lg font-medium text-diamond-white group-hover:text-diamond-silver transition-colors">{item.value}</div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-diamond-black border border-diamond-white/10 p-10 md:p-16 relative"
                >
                    <div className="absolute top-0 left-0 w-2 h-2 bg-diamond-white" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-diamond-white" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-diamond-white" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-diamond-white" />

                    <h3 className="text-2xl font-outfit font-bold text-diamond-white mb-8 text-center uppercase tracking-widest">{t('agendar')}</h3>

                    <button
                        onClick={() => setShowCheckout(true)}
                        className="w-full py-5 bg-diamond-white text-diamond-black font-black uppercase tracking-[0.2em] mb-6 hover:bg-diamond-silver transition-colors flex items-center justify-center gap-3"
                    >
                        <Calendar className="w-5 h-5" /> {t('agendar')}
                    </button>

                    <p className="text-[10px] text-center text-diamond-silver/30 uppercase tracking-widest leading-relaxed">
                        {t('confirmationNote')}
                    </p>
                </motion.div>
            </div>

            {/* Background Decorative Diamond */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-diamond-white/5 rotate-45 pointer-events-none" />
        </section>
    );
};
