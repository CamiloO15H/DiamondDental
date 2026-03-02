import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HomeClient from '@/features/landing/components/HomeClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Index' });

    return {
        title: 'Diamond Dental | Clínica Odontológica de Alta Gama',
        description: 'Especialistas en Diseño de Sonrisa, Rehabilitación Oral y Estética Dental. Descubre la experiencia Diamond en Medellín.',
    };
}

export default function LandingPage() {
    return <HomeClient />;
}
