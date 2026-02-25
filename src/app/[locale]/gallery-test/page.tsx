import React from 'react';
import ComparisonSlider from '@/features/gallery/components/ComparisonSlider';

export default function GalleryTestPage() {
    // Images from GallerySection.tsx
    const beforeImage = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop";
    const afterImage = "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop";

    return (
        <main className="min-h-screen bg-black py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 text-center">
                    <span className="text-diamond-ice tracking-[0.4em] uppercase text-xs font-bold mb-4 block">
                        Component Verification
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 uppercase">
                        Comparison Slider
                    </h1>
                    <p className="text-gray-400 text-lg font-sans max-w-2xl mx-auto">
                        Testing the interactive before/after transformation with Diamond aesthetics and fluid animations.
                    </p>
                </header>

                <div className="space-y-20">
                    {/* Square Ratio Test */}
                    <section>
                        <h2 className="text-white text-xs uppercase tracking-widest mb-6 border-l-2 border-diamond-ice pl-4">
                            Clinical Ratio (4:5)
                        </h2>
                        <div className="max-w-xl mx-auto border border-white/5">
                            <ComparisonSlider
                                beforeImage={beforeImage}
                                afterImage={afterImage}
                                aspectRatio="clinical"
                            />
                        </div>
                    </section>

                    {/* Full Width / Video Ratio Test */}
                    <section>
                        <h2 className="text-white text-xs uppercase tracking-widest mb-6 border-l-2 border-diamond-ice pl-4">
                            Video Ratio (16:9)
                        </h2>
                        <div className="border border-white/5">
                            <ComparisonSlider
                                beforeImage={beforeImage}
                                afterImage={afterImage}
                                aspectRatio="video"
                                beforeLabel="Baseline"
                                afterLabel="Final Result"
                            />
                        </div>
                    </section>
                </div>

                <footer className="mt-20 pt-10 border-t border-white/10 text-center">
                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
                        Diamond Dental • High-End Aesthetic Dentistry
                    </p>
                </footer>
            </div>
        </main>
    );
}
