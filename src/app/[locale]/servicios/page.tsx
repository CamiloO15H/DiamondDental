import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ServiciosClient from '@/features/services/components/ServiciosClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Index.servicios' });

    return {
        title: `${t('title')} | Diamond Dental`,
        description: t('tagline'),
    };
}

export default function ServiciosPage() {
    return <ServiciosClient />;
}
