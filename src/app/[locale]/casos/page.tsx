import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import CasosClient from '@/features/gallery/components/CasosClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Index' });

    return {
        title: `${t('casos.header.title').replace(/<[^>]*>/g, '')} | Diamond Dental`,
        description: t('casos.header.quote'),
    };
}

export default function CasosPage() {
    return <CasosClient />;
}
