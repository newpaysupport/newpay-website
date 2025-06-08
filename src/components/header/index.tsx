"use client";

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import logo from "@/images/newpay_logo.svg"
import SwitchLanguage from '../switch-language';

const Header = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('navigation');

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const switchLocale = (newLocale: string) => {
        if (!pathname) return;
        const segments = pathname.split("/");
        segments[1] = newLocale;
        const newPath = segments.join("/");
        router.push(newPath);
    };

    return (
        <div className="text-sm text-white w-full font-semibold">
            <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 transition-all shadow-sm">
                <div className="flex items-center space-x-4">
                    <Image src={logo} alt="NewPay Logo" width={100} height={40} className="w-24 h-10 object-contain" />
                </div>

                <div className="hidden md:flex justify-between items-center space-x-8">
                    <p>{t('joint')}</p>
                    <p>{t('personal')}</p>
                </div>

                <ul className="hidden md:flex items-center space-x-8">
                    <li><Link href={`/${locale}`}>{t('home')}</Link></li>
                    <li><Link href={`/${locale}/services`}>{t('services')}</Link></li>
                    <li><Link href={`/${locale}/portfolio`}>{t('portfolio')}</Link></li>
                    <li><Link href={`/${locale}/pricing`}>{t('pricing')}</Link></li>
                </ul>

                <SwitchLanguage locale={locale} switchLocale={switchLocale} t={t} />

                <button
                    aria-label="menu-btn"
                    type="button"
                    className="cursor-pointer menu-btn inline-block md:hidden active:scale-90 transition"
                    onClick={toggleMobileMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                        <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
                    </svg>
                </button>

                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 z-50">
                        <ul className="flex flex-col space-y-4 text-lg">
                            <li><Link href={`/${locale}`} className="text-sm">{t('home')}</Link></li>
                            <li><Link href={`/${locale}/services`} className="text-sm">{t('services')}</Link></li>
                            <li><Link href={`/${locale}/portfolio`} className="text-sm">{t('portfolio')}</Link></li>
                            <li><Link href={`/${locale}/pricing`} className="text-sm">{t('pricing')}</Link></li>
                        </ul>
                        <button
                            type="button"
                            className="cursor-pointer bg-white text-gray-600 border mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
                        >
                            {t('getApp')}
                        </button>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;
