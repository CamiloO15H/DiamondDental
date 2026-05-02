import { redirect } from 'next/navigation';

export default function NosotrosPage({ params: { locale } }: { params: { locale: string } }) {
    redirect(`/${locale}/legado`);
}
