"use client";

import { LazyMotion, m, domAnimation } from "framer-motion";
import { useTranslations } from "next-intl";
import {
    MapPin, Navigation, Car, Train, Clock,
    Star, Phone, Bookmark, Share2, Smartphone, Map
} from "lucide-react";
import Image from "next/image";

const ActionButton = ({ icon: Icon, label, href, onClick }: { icon: any; label: string; href?: string; onClick?: () => void }) => {
    const Wrapper = href ? "a" : "div";
    return (
        <Wrapper
            href={href}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            onClick={onClick}
            className="flex flex-col items-center gap-2 group cursor-pointer"
        >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-gold-muted/20 transition-colors">
                <Icon className="w-5 h-5 text-blue-400 group-hover:text-gold-muted transition-colors" />
            </div>
            <span className="text-xs text-blue-400 group-hover:text-gold-muted transition-colors text-center w-max">
                {label}
            </span>
        </Wrapper>
    );
};

export default function LocationClient() {
    const t = useTranslations("Index.locationPage");

    const mapsQueryUrl = "https://www.google.com/maps/search/?api=1&query=DIAMOND+DENTAL,+Cl.+51+%23+73+-73,+Medellín";
    const mapsDirUrl = "https://www.google.com/maps/dir/?api=1&destination=DIAMOND+DENTAL,+Cl.+51+%23+73+-73,+Medellín";

    const handleShare = () => {
        if (typeof navigator !== 'undefined' && navigator.share) {
            navigator.share({
                title: 'Diamond Dental',
                text: 'Clínica dental en Medellín',
                url: mapsQueryUrl,
            }).catch((error) => console.log('Error compartiendo:', error));
        } else {
            window.open(mapsQueryUrl, '_blank');
        }
    };

    return (
        <LazyMotion features={domAnimation}>
            <main className="min-h-screen bg-[#0d0d0d] pt-32 pb-24 font-sans text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    {/* Header Section */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <span className="text-gold-muted text-xs uppercase tracking-[0.4em] mb-4 block">
                            {t("subtitle")}
                        </span>
                        <h1 className="text-4xl md:text-7xl font-serif text-white mb-8">
                            {t("title")}
                        </h1>
                        <div className="h-[1px] w-24 bg-gold-muted/30" />
                    </m.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* INFO COLUMN (Google Maps Card Replica + Details) */}
                        <m.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-5 space-y-8"
                        >
                            {/* Google Maps Card Replica (Dark Mode) */}
                            <div className="bg-[#202124] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                {/* Card Header Image */}
                                <div className="h-48 relative w-full overflow-hidden">
                                    <Image
                                        src="/images/Casos/Diseno_De_Sonrisa.png"
                                        alt="Diamond Dental Clinic"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>

                                {/* Card Body */}
                                <div className="p-6">
                                    <h2 className="text-2xl font-serif mb-1">{t("mapCard.name")}</h2>
                                    <div className="flex items-center gap-2 mb-2 text-sm text-gray-300">
                                        <span className="font-bold">5.0</span>
                                        <div className="flex text-yellow-400">
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                        </div>
                                        <span className="text-gray-400">({t("mapCard.reviews")})</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-6">{t("mapCard.category")}</p>

                                    {/* Action Buttons */}
                                    <div className="flex justify-between items-start mb-6 px-2">
                                        <ActionButton icon={Navigation} label={t("mapCard.directions")} href={mapsDirUrl} />
                                        <ActionButton icon={Bookmark} label={t("mapCard.save")} href={mapsQueryUrl} />
                                        <ActionButton icon={Map} label={t("mapCard.nearby")} href={mapsQueryUrl} />
                                        <ActionButton icon={Smartphone} label={t("mapCard.sendToPhone")} href={mapsQueryUrl} />
                                        <ActionButton icon={Share2} label={t("mapCard.share")} onClick={handleShare} />
                                    </div>

                                    <div className="space-y-4 text-sm border-t border-white/10 pt-4">
                                        <div className="flex items-start gap-4">
                                            <MapPin className="w-5 h-5 text-gold-muted shrink-0 mt-0.5" />
                                            <div className="text-gray-300">
                                                {t("info.addressLine1")} <br />
                                                {t("info.addressLine2")} <br />
                                                <span className="font-bold text-white block mt-2 text-base">
                                                    {t("info.addressHighlight")}
                                                </span>
                                                <span className="text-gray-400 mt-1 block">
                                                    {t("info.city")}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <Clock className="w-5 h-5 text-gold-muted shrink-0" />
                                            <div className="text-gray-300">
                                                <span className="text-green-500 font-bold">{t("mapCard.status")}</span> {t("mapCard.closesAt")}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <Phone className="w-5 h-5 text-gold-muted shrink-0" />
                                            <div className="text-gray-300">
                                                {t("mapCard.phone")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Extended Info: How to arrive */}
                            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                                <h3 className="text-xl font-serif text-white mb-6">{t("info.directionsTitle")}</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gold-muted/20 flex items-center justify-center shrink-0">
                                            <Car className="w-5 h-5 text-gold-muted" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{t("info.directionsCar")}</h4>
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                {t("info.directionsCarDesc")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gold-muted/20 flex items-center justify-center shrink-0">
                                            <Train className="w-5 h-5 text-gold-muted" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{t("info.directionsPublic")}</h4>
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                {t("info.directionsPublicDesc")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </m.div>

                        {/* VISUAL COLUMN (Maps) */}
                        <m.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="lg:col-span-7 space-y-8"
                        >
                            {/* Interactive Google Map */}
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-gold-muted/20 group">
                                <div className="absolute inset-0 bg-gold-muted/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d-75.5894015!3d6.2605209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44295ab31e4b33%3A0x4703d004a6a94ad4!2sDIAMOND%20DENTAL!5e0!3m2!1ses!2sco!4v1700000000000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Diamond Dental - Laureles, Medellín"
                                    className="grayscale group-hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>

                            {/* Static Map Image (Ubicacion.png) */}
                            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/20 group bg-[#111] p-3">
                                <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 bg-black">
                                    <Image
                                        src="/images/Ubicacion.png"
                                        alt="Mapa de Ubicación Diamond Dental"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                                <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-gold-muted/30 text-xs text-gold-muted shadow-lg pointer-events-none">
                                    {t('mapBadge')}
                                </div>
                            </div>

                        </m.div>

                    </div>
                </div>
            </main>
        </LazyMotion>
    );
}
