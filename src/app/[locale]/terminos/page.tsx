import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import TerminosClient from '@/features/legal/components/TerminosClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Index.legal.terms' });

    return {
        title: `${t('title')} | Diamond Dental`,
        description: t('introduction').substring(0, 160),
    };
}

export default function TerminosPage() {
    return <TerminosClient />;
}
