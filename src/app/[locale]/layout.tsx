import Header from '@/components/header';
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { inter } from '../fonts/fonts';

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    setRequestLocale(locale);
    return (
        <html lang={locale}>
            <body  className={`${inter.variable} font-sans antialiased`}>
                <NextIntlClientProvider>
                <Header />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
