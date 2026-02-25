import HeroSection from "@/features/landing/components/HeroSection";
import ResultsGallery from "@/features/landing/components/ResultsGallery";
import TeamSection from "@/features/landing/components/TeamSection";
import TreatmentsGrid from "@/features/landing/components/TreatmentsGrid";
import SocialProof from "@/features/landing/components/SocialProof";
import SmileCatalog from "@/features/landing/components/SmileCatalog";
import MapSection from "@/features/landing/components/MapSection";
import ContactSection from "@/features/landing/components/ContactSection";
import FloatingCTA from "@/shared/components/FloatingCTA";

export default function LandingPage() {
    return (
        <div className="bg-black-matte">
            <HeroSection />
            <ResultsGallery />
            <SocialProof />
            <TeamSection />
            <TreatmentsGrid />
            <SmileCatalog />
            <MapSection />
            <ContactSection />
            <FloatingCTA />

            {/* Editorial Footer Space */}
            <footer className="py-20 text-center border-t border-white/5 opacity-40">
                <p className="font-serif text-2xl mb-4 italic">Diamond Dental</p>
                <p className="text-[10px] uppercase tracking-widest font-sans">
                    © 2024 Excellence in Dentistry. Crafted with passion.
                </p>
            </footer>
        </div>
    );
}
