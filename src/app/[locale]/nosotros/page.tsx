import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import NosotrosClient from '@/features/about/components/NosotrosClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Index.nosotros' });

    return {
        title: `${t('hero.title')} | Diamond Dental`,
        description: t('story.title'),
    };
}

export default function NosotrosPage() {
    return <NosotrosClient />;
}
