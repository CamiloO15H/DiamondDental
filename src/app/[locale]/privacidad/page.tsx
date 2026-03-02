import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PrivacidadClient from '@/features/legal/components/PrivacidadClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Index.legal.privacy' });

    return {
        title: `${t('title')} | Diamond Dental`,
        description: t('content').substring(0, 160),
    };
}

export default function PrivacidadPage() {
    return <PrivacidadClient />;
}
