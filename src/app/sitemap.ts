import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.diamonddental.co';
    const locales = ['es', 'en'];
    const paths = [
        '',
        '/legado',
        '/servicios',
        '/casos',
        '/team',
        '/location',
        '/resenas',
        '/contacto',
    ];

    const routes: MetadataRoute.Sitemap = [];

    // Generate localized routes for Google indexing
    for (const locale of locales) {
        for (const path of paths) {
            const url = `${baseUrl}/${locale}${path}`;
            const priority = path === '' ? 1.0 : 0.8;
            routes.push({
                url,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority,
            });
        }
    }

    return routes;
}
