import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import LocationClient from '@/features/location/components/LocationClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Index.locationPage' });

    return {
        title: `${t('title')} | Diamond Dental`,
        description: t('subtitle'),
    };
}

export default function LocationPage() {
    return <LocationClient />;
}
