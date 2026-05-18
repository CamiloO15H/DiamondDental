"use client";

import Teeth3DScroll from "@/features/landing/components/Teeth3DScroll";
import HomeIntroduction from "@/features/landing/components/HomeIntroduction";
import dynamic from "next/dynamic";

const QuickResultsGallery = dynamic(() => import("@/features/landing/components/QuickResultsGallery"), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-[#0d0d0d] animate-pulse flex items-center justify-center text-white/20 tracking-widest text-xs uppercase font-sans">Cargando Galería...</div>,
});

const PatientReviews = dynamic(() => import("@/features/landing/components/PatientReviews"), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-[#1f1f1f] animate-pulse flex items-center justify-center text-white/20 tracking-widest text-xs uppercase font-sans">Cargando Reseñas...</div>,
});

export default function HomeClient() {
    return (
        <div className="bg-black-matte">
            <Teeth3DScroll />
            <HomeIntroduction />
            <QuickResultsGallery />
            <PatientReviews />
        </div>
    );
}

