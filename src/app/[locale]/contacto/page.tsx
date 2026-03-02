import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ContactoClient from './ContactoClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Index.contactPage' });

    return {
        title: `${t('title')} | Diamond Dental`,
        description: t('subtitle'),
    };
}

export default function ContactoPage() {
    return <ContactoClient />;
}
