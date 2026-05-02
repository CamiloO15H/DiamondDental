'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { Instagram, ArrowRight } from 'lucide-react';
import { WhatsAppLinkGenerator } from '@/core/utils/WhatsAppLinkGenerator';

const teamMembers = [
    {
        id: 'julio',
        image: '/images/team/Julio2.JPEG',
        key: 'julio',
        instagram: 'https://www.instagram.com/ortodoncistajuliogamez/'
    },
    {
        id: 'laura',
        image: '/images/team/Laura4.JPEG',
        key: 'laura',
        instagram: 'https://www.instagram.com/dralauraospina_hernandez/'
    },
    {
        id: 'jhon',
        image: '/images/team/Jhon.png',
        key: 'jhon',
        instagram: 'https://www.instagram.com/odontologo_jhonestebangarcia/'
    },
    {
        id: 'paula',
        image: '/images/team/Paula.PNG',
        key: 'paula',
        instagram: 'https://www.instagram.com/paula.andrea.lopez/'
    },
    {
        id: 'camila',
        image: '/images/team/Camila.PNG',
        key: 'camila'
    }
];

const MeetTheExperts = () => {
    const tTeam = useTranslations('Index.team');

    return (
        <section
            id="experts"
            className="w-full relative bg-[#0d0d0d]"
        >
            {teamMembers.map((member, index) => {
                const isPhotoRight = index % 2 === 0;

                // Get services array from localization
                const services = tTeam.raw(`members.${member.key}.services`) as string[];

                return (
                    <div
                        key={member.id}
                        className="w-full min-h-[100svh] flex flex-col md:flex-row relative"
                    >
                        {/* PHOTO SIDE */}
                        <div className={`w-full h-[50vh] md:h-screen md:w-1/2 relative overflow-hidden order-1 ${isPhotoRight ? 'md:order-2' : 'md:order-1'}`}>
                            <motion.div
                                initial={{ opacity: 0, x: isPhotoRight ? 100 : -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="w-full h-full relative"
                            >
                                <Image
                                    src={member.image}
                                    alt={tTeam(`members.${member.key}.name`)}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    loading="lazy"
                                />
                                {/* Soft gradient transition to black depending on the side */}
                                <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0d0d0d] via-transparent to-[#0d0d0d]/30 opacity-60 ${isPhotoRight ? 'md:bg-gradient-to-l' : 'md:bg-gradient-to-r'}`} />
                            </motion.div>
                        </div>

                        {/* TEXT SIDE */}
                        <div className={`w-full h-[50vh] md:h-screen md:w-1/2 bg-[#0d0d0d] flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 order-2 ${isPhotoRight ? 'md:order-1' : 'md:order-2'}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 50, x: isPhotoRight ? -50 : 50 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="max-w-xl"
                            >
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-2 leading-tight">
                                    {tTeam(`members.${member.key}.name`)}
                                </h2>
                                <h3 className="text-sm md:text-base font-sans uppercase tracking-[0.3em] text-[#a1a1a1] mb-2">
                                    {tTeam(`members.${member.key}.role`)}
                                </h3>
                                {tTeam.has(`members.${member.key}.specialty`) && (
                                    <div className="mb-6 flex items-center gap-2">
                                        <div className="h-[1px] w-4 bg-gold-muted/50" />
                                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gold-muted">
                                            {tTeam(`members.${member.key}.specialty`)}
                                        </span>
                                    </div>
                                )}

                                {member.instagram && (
                                    <motion.a
                                        href={member.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold-muted/50 hover:bg-white/10 transition-all duration-300 group"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Instagram className="w-4 h-4 text-[#a1a1a1] group-hover:text-gold-muted transition-colors" />
                                        <span className="text-[10px] font-bold tracking-widest text-[#a1a1a1] group-hover:text-gold-muted uppercase">
                                            Instagram
                                        </span>
                                    </motion.a>
                                )}

                                <p className="font-sans italic text-[#c0c0c0] text-lg md:text-xl mb-8 border-l-[0.5px] border-white/20 pl-6 leading-relaxed">
                                    "{tTeam(`members.${member.key}.quote`)}"
                                </p>

                                <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed mb-8">
                                    {tTeam(`members.${member.key}.bio`)}
                                </p>

                                <ul className="space-y-3">
                                    {services?.map((service, idx) => (
                                        <li key={idx} className="font-sans text-xs md:text-sm text-[#b0b0b0] tracking-widest uppercase flex items-center">
                                            <div className="w-[3px] h-[3px] bg-white/50 mr-4 rounded-full" />
                                            {service}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-10">
                                    <a
                                        href={WhatsAppLinkGenerator.generateBookingLink(
                                            tTeam(`members.${member.key}.name`),
                                            tTeam(`members.${member.key}.role`)
                                        )}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-muted transition-colors duration-500 group"
                                    >
                                        Reservar Valoración
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                );
            })}

            {/* GROUP PHOTO: FINAL SECTION */}
            <div className="w-full h-screen relative overflow-hidden flex items-center justify-center">
                <motion.div
                    initial={{ scale: 1.05, y: 50 }}
                    whileInView={{ scale: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/images/team/Equipo-Diamond.JPEG"
                        alt="Diamond Dental Team Ensemble"
                        fill
                        className="object-cover object-center grayscale opacity-80"
                        sizes="100vw"
                        loading="lazy"
                    />
                </motion.div>

                {/* Dark premium overlay */}
                <div className="absolute inset-0 bg-[#0d0d0d]/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-[#0d0d0d]/80 opacity-90" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="relative z-10 text-center px-6 max-w-4xl"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-white tracking-widest uppercase mb-6 leading-tight drop-shadow-2xl">
                        Diamond Dental Team
                    </h2>
                    <p className="font-sans text-white/70 uppercase tracking-[0.4em] text-xs md:text-sm">
                        {tTeam('groupSubtitle')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MeetTheExperts;
