"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import TeamIntroduction from "@/features/about/components/TeamIntroduction";
import MeetTheExperts from "@/features/about/components/MeetTheExperts";

export default function TeamClient() {
    return (
        <LazyMotion features={domAnimation}>
            <main className="min-h-screen bg-[#0d0d0d] text-white pb-20 overflow-hidden pt-24">
                <TeamIntroduction />
                <MeetTheExperts />
            </main>
        </LazyMotion>
    );
}
