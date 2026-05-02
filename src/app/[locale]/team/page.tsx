import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import TeamClient from '@/features/about/components/TeamClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Index.teamIntro' });

    return {
        title: `Nuestro Team | Diamond Dental`,
        description: t('title'),
    };
}

export default function TeamPage() {
    return <TeamClient />;
}
