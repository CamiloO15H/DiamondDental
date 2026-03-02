"use client";

import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Play, X, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { WhatsAppLinkGenerator } from "@/core/utils/WhatsAppLinkGenerator";
import { useState, useEffect } from "react";

type ReviewItem = {
    id: string;
    quote: string;
    treatment: string;
    specialist: string;
    videoId: string;
};

export default function ResenasClient() {
    const t = useTranslations("Index.resenasPage");
    const reviews = t.raw('reviews');
    const [selectedVideo, setSelectedVideo] = useState<ReviewItem | null>(null);

    // Prevent body scroll when Lightbox is open
    useEffect(() => {
        if (selectedVideo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [selectedVideo]);

    return (
        <LazyMotion features={domAnimation}>
            <main className="min-h-screen bg-[#1f1f1f] pt-32 pb-24 overflow-hidden relative">
                {/* Background Buda Image */}
                <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
                    <Image
                        src="/images/Buda.png"
                        alt="Buda background Atmosphere"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-[#2a2a2a]/80" />

                    {/* Vignette Gradients */}
                    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#000000] to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#000000] to-transparent" />
                </div>

                {/* Header */}
                <header className="container mx-auto px-6 mb-20 text-center relative z-10">
                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="flex justify-center mb-8">
                            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold-muted to-transparent"></div>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white uppercase tracking-wider leading-[0.9] mb-6" dangerouslySetInnerHTML={{ __html: t('title') }} />
                        <p className="text-diamond-silver/60 uppercase tracking-[0.3em] text-xs font-bold font-sans">
                            {t('subtitle')}
                        </p>
                    </m.div>
                </header>

                {/* Reviews List */}
                <section className="container mx-auto px-6 mb-32 relative z-10">
                    <div className="flex flex-col gap-16 lg:gap-24">
                        {reviews.map((review: ReviewItem, idx: number) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <m.div
                                    key={review.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: 0.1, duration: 0.8 }}
                                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                                >
                                    {/* Lado A: Video */}
                                    <div
                                        className="relative w-full max-w-[340px] md:max-w-[380px] aspect-[9/16] bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.06)] border-[0.5px] border-[#e0e0e0]/60 group cursor-pointer flex-shrink-0 mx-auto"
                                        onClick={() => setSelectedVideo(review)}
                                    >
                                        <iframe
                                            src={`https://www.facebook.com/plugins/video.php?height=600&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${review.videoId}%2F&show_text=false&width=338&t=0`}
                                            className="w-full h-full border-none pointer-events-none group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-500"
                                            scrolling="no"
                                            allowFullScreen={true}
                                            loading="lazy"
                                            title={`Diamond Dental Testimonial ${review.id}`}
                                        ></iframe>

                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300 z-10" />

                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                            <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                                <Play className="w-6 h-6 text-white ml-1" />
                                            </div>
                                        </div>

                                        {/* Decorative corners */}
                                        <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/30 pointer-events-none z-20" />
                                        <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/30 pointer-events-none z-20" />
                                        <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/30 pointer-events-none z-20" />
                                        <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/30 pointer-events-none z-20" />
                                    </div>

                                    {/* Lado B: Quote & Details */}
                                    <div className="flex-1 space-y-8 text-center lg:text-left pt-4 lg:pt-0">
                                        <div>
                                            <div className="mb-6 opacity-30">
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto lg:mx-0 text-gold-muted"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25-.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
                                            </div>
                                            <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed">
                                                {review.quote}
                                            </p>
                                        </div>

                                        <div className="pt-8 border-t border-white/10 space-y-3">
                                            <p className="font-sans text-xs md:text-sm text-diamond-silver/70 uppercase tracking-[0.2em]">
                                                <span className="font-bold text-white/90">{t('treatmentLabel')}</span> <br className="lg:hidden" /> {review.treatment}
                                            </p>
                                            <p className="font-sans text-xs md:text-sm text-diamond-silver/70 uppercase tracking-[0.2em]">
                                                <span className="font-bold text-white/90">{t('teamLabel')}</span> <br className="lg:hidden" /> {t('teamName')}
                                            </p>
                                        </div>

                                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-8">
                                            <a
                                                href={WhatsAppLinkGenerator.generateReviewLink(review.treatment, t('teamName'), `https://www.facebook.com/reel/${review.videoId}`)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] font-black text-black bg-white hover:bg-gold-muted hover:text-white transition-all px-6 py-4 rounded-full w-full sm:w-auto"
                                            >
                                                <MessageCircle className="w-4 h-4 flex-shrink-0" /> {t('whatsappContextAction')}
                                            </a>
                                            <a
                                                href={`https://www.facebook.com/reel/${review.videoId}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-white/40 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors mt-2 sm:mt-0"
                                            >
                                                <ExternalLink className="w-3 h-3" /> {t('viewOnFacebook')}
                                            </a>
                                        </div>
                                    </div>
                                </m.div>
                            )
                        })}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="container mx-auto px-6 text-center relative z-10">
                    <m.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto py-16 px-8 border border-white/10 bg-[#0f0f0f] relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gold-muted/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 italic uppercase tracking-wider" dangerouslySetInnerHTML={{ __html: t('ctaTitle') }} />

                        <a
                            href={WhatsAppLinkGenerator.generateGenericLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-4 bg-white text-black font-black uppercase tracking-[0.3em] text-sm md:text-base px-10 py-6 hover:bg-gold-muted hover:text-white transition-all duration-500"
                        >
                            {t('ctaButton')} <ArrowRight className="w-5 h-5" />
                        </a>
                    </m.div>
                </section>

                {/* Lightbox / Modal */}
                <AnimatePresence>
                    {selectedVideo && (
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedVideo(null)}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
                        >
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-50"
                            >
                                <X className="w-8 h-8 md:w-10 md:h-10" />
                            </button>

                            <m.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="w-full max-w-[400px] aspect-[9/16] bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl"
                            >
                                <iframe
                                    src={`https://www.facebook.com/plugins/video.php?height=800&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${selectedVideo.videoId}%2F&show_text=false&width=450&t=0`}
                                    className="w-full h-full border-none pointer-events-auto"
                                    scrolling="no"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-in-picture; web-share"
                                    loading="lazy"
                                    title={`Diamond Dental Testimonial ${selectedVideo.id}`}
                                ></iframe>
                            </m.div>
                        </m.div>
                    )}
                </AnimatePresence>
            </main>
        </LazyMotion>
    );
}
