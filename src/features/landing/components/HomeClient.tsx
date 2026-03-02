"use client";

import HeroSection from "@/features/landing/components/HeroSection";
import HomeIntroduction from "@/features/landing/components/HomeIntroduction";
import SmileCarousel from "@/features/landing/components/SmileCarousel";
import TeamIntroduction from "@/features/landing/components/TeamIntroduction";
import MeetTheExperts from "@/features/landing/components/MeetTheExperts";
import QuickResultsGallery from "@/features/landing/components/QuickResultsGallery";
import PatientReviews from "@/features/landing/components/PatientReviews";

export default function HomeClient() {
    return (
        <div className="bg-black-matte">
            <HeroSection />
            <HomeIntroduction />
            <SmileCarousel />
            <TeamIntroduction />
            <MeetTheExperts />
            <QuickResultsGallery />
            <PatientReviews />
        </div>
    );
}
