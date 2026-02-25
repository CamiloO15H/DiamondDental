import HeroSection from "@/features/landing/components/HeroSection";
import ResultsGallery from "@/features/landing/components/ResultsGallery";
import TeamSection from "@/features/landing/components/TeamSection";
import TreatmentsGrid from "@/features/landing/components/TreatmentsGrid";
import SocialProof from "@/features/landing/components/SocialProof";
import SmileCatalog from "@/features/landing/components/SmileCatalog";
import MapSection from "@/features/landing/components/MapSection";
import ContactSection from "@/features/landing/components/ContactSection";
import FloatingCTA from "@/shared/components/FloatingCTA";
import Footer from "@/shared/components/Footer";

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
            <Footer />
        </div>
    );
}
