import Footer from '@/components/footer';
import Header from '@/components/header';
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { inter } from '../fonts/fonts';
import { Toaster } from 'react-hot-toast';
export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    setRequestLocale(locale);
    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased`}>
                <NextIntlClientProvider>
                    {/* <Header /> */}
                    {children}
                    <Footer />
                    <Toaster position='bottom-right' toastOptions={{ duration: 3000 }} />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
