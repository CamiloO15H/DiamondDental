import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/shared/components/Navbar";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: '--font-playfair',
});

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
                    <Navbar />
                    <main className="min-h-screen">
                        {children}
                    </main>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
