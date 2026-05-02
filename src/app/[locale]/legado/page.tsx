import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import LegadoClient from '@/features/about/components/LegadoClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Index.nosotros' });

    return {
        title: `Legado | Diamond Dental`,
        description: t('story.title'),
    };
}

export default function LegadoPage() {
    return <LegadoClient />;
}
