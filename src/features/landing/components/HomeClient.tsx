"use client";

import Teeth3DScroll from "@/features/landing/components/Teeth3DScroll";
import HomeIntroduction from "@/features/landing/components/HomeIntroduction";
import QuickResultsGallery from "@/features/landing/components/QuickResultsGallery";
import PatientReviews from "@/features/landing/components/PatientReviews";

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

