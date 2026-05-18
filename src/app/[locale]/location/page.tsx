import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import dynamic from 'next/dynamic';

const LocationClient = dynamic(() => import('@/features/location/components/LocationClient'), {
    ssr: false,
    loading: () => <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center text-white/20 tracking-widest text-xs uppercase font-sans animate-pulse">Cargando Ubicación...</div>,
});

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
