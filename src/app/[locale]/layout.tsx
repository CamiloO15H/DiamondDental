import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";
import SocialFloatingButtons from "@/shared/components/SocialFloatingButtons";
import { BookingProvider } from "@/shared/providers/BookingProvider";

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
            icon: "/images/logo-diamond.png",
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

    return (
        <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
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
            </body>
        </html>
    );
}
