'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const teamMembers = [
    {
        id: 'laura',
        image: '/images/team/dra-laura-portrait.png',
        roleKey: 'laura.role',
        nameKey: 'laura.name',
        bioKey: 'laura.bio'
    },
    {
        id: 'paula',
        image: '/images/team/dra-paula-portrait.png',
        roleKey: 'paula.role',
        nameKey: 'paula.name',
        bioKey: 'paula.bio'
    },
    {
        id: 'action',
        image: '/images/team/dra-laura-action.png',
        roleKey: 'laura.role',
        nameKey: 'laura.name',
        bioKey: 'laura.bio'
    }
];

const TeamSection = () => {
    const t = useTranslations('Index.team');

    return (
        <section className="py-24 bg-diamond-charcoal relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 pinstripe-texture opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mb-16">
                    <span className="platinum-text tracking-[0.4em] uppercase text-xs font-bold mb-4 block">
                        Medical Excellence
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                        {t('title')}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl font-sans leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative h-[500px] overflow-hidden bg-black/40 border border-white/5"
                        >
                            <Image
                                src={member.image}
                                alt={t(`members.${member.nameKey}`)}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="platinum-text text-[10px] uppercase tracking-widest font-bold mb-2 block">
                                    {t(`members.${member.roleKey}`)}
                                </span>
                                <h3 className="text-2xl font-serif text-white mb-4">
                                    {t(`members.${member.nameKey}`)}
                                </h3>
                                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 leading-relaxed">
                                    {t(`members.${member.bioKey}`)}
                                </p>

                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <div className="w-10 h-[1px] bg-gradient-to-r from-diamond-platinum to-transparent" />
                                </div>
                            </div>

                            {/* Diamond Edge Shimmer */}
                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-700" />
                        </motion.div>
                    ))}
                </div>

                {/* Team Group Highlight */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 relative h-[400px] md:h-[600px] overflow-hidden group"
                >
                    <Image
                        src="/images/team/medical-team-group.png"
                        alt="Diamond Dental Team"
                        fill
                        className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                        <span className="diamond-text text-lg md:text-2xl font-serif mb-4 italic opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            "Excelencia en cada detalle"
                        </span>
                        <h3 className="text-4xl md:text-6xl font-serif text-white tracking-wider diamond-sparkle px-8 py-4">
                            {t('members.teamGroup.title')}
                        </h3>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;
