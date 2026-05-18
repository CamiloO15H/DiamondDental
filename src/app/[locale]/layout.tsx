import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";
import SocialFloatingButtons from "@/shared/components/SocialFloatingButtons";
import { BookingProvider } from "@/shared/providers/BookingProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: '--font-playfair',
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'Index.metadata' });

    return {
        title: t('title'),
        description: t('description'),
        icons: {
            icon: "/images/logo-diamond.webp",
        },
        // Additional Proactive SEO Practices:
        openGraph: {
            title: t('title'),
            description: t('description'),
            url: "https://www.diamonddental.com",
            siteName: "Diamond Dental",
            locale: locale,
            type: "website",
        },
    };
}

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();
    const t = await getTranslations({ locale, namespace: 'Index.metadata' });

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Diamond Dental",
        "image": "https://www.diamonddental.com/images/logo-diamond.webp",
        "url": "https://www.diamonddental.com",
        "telephone": "+573148311777",
        "priceRange": "$$$",
        "description": t('description'),
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Cl. 51 # 73 -73, Laureles - Estadio",
            "addressLocality": "Medellín",
            "addressRegion": "Antioquia",
            "postalCode": "050031",
            "addressCountry": "CO"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 6.2605209,
            "longitude": -75.5894015
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:30",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:30",
                "closes": "14:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/diamonddentalmedellin",
            "https://www.instagram.com/diamonddentalmedellin"
        ],
        "founder": [
            {
                "@type": "Person",
                "name": "Dr. Julio César Gámez"
            },
            {
                "@type": "Person",
                "name": "Dra. Laura Ospina"
            }
        ],
        "medicalSpecialty": [
            "CosmeticDentistry",
            "Orthodontics",
            "Endodontics",
            "Implantology"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+573148311777",
            "contactType": "reservations",
            "areaServed": "CO",
            "availableLanguage": ["Spanish", "English"]
        }
    };

    return (
        <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="bg-white dark:bg-black-matte text-gray-900 dark:text-gray-100 font-sans selection:bg-gold-muted/30">
                <NextIntlClientProvider messages={messages}>
                    <BookingProvider>
                        <Navbar />
                        <main className="min-h-screen">
                            {children}
                        </main>
                        <SocialFloatingButtons />
                        <Footer />
                    </BookingProvider>
                </NextIntlClientProvider>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
