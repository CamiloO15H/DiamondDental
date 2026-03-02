import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ResenasClient from '@/features/reviews/components/ResenasClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Index.resenasPage' });

    return {
        title: `${t('title').replace(/<[^>]*>/g, '')} | Diamond Dental`,
        description: t('subtitle'),
    };
}

export default function ResenasPage() {
    return <ResenasClient />;
}
