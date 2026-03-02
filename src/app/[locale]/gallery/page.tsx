import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import GalleryClient from '@/features/gallery/components/GalleryClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Index.galleryPage' });

    return {
        title: `${t('title').replace(/\n/g, ' ')} | Diamond Dental`,
        description: t('badge'),
    };
}

export default function GalleryPage() {
    return <GalleryClient />;
}
