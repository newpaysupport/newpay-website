"use client";

import logo from "@/images/newpay_logo.svg";
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
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
        <nav
            className={`text-sm h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4
            fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md
             text-white transition-all duration-300 ease-in-out shadow-sm`}
        >
            <Link href={"/"} className="flex items-center space-x-4">
                <Image src={logo} alt="NewPay Logo" className="object-contain bg-transparent" />
            </Link>

            <ul className="hidden md:flex justify-center items-center space-x-10">
                <li><Link href={`/${locale}/joint`}>{t('joint')}</Link></li>
                <li><Link href={`/${locale}`}>{t('personal')}</Link></li>

            </ul>

            <ul className="hidden md:flex items-center space-x-8">
                <li><Link href={`/${locale}/payment`}>{t('payment')}</Link></li>
                <li><Link href={`/${locale}/about-us`}>{t('company')}</Link></li>
                {/* <li><Link href={`/${locale}/support`}>{t('support')}</Link></li> */}
            </ul>

            <SwitchLanguage locale={locale} switchLocale={switchLocale} t={t} />

            <button
                aria-label="menu-btn"
                type="button"
                className="cursor-pointer menu-btn inline-block md:hidden active:scale-90 transition"
                onClick={toggleMobileMenu}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="white" strokeOpacity="0.16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-[70px] left-0 w-full shadow-sm p-6 z-50">
                    <ul className="flex flex-col space-y-4 text-lg">
                        <li><Link href={`/${locale}`} className="text-sm">{t('payment')}</Link></li>
                        <li><Link href={`/${locale}/company`} className="text-sm">{t('company')}</Link></li>
                        <li><Link href={`/${locale}/support`} className="text-sm">{t('support')}</Link></li>
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
    );
};

export default Header;
