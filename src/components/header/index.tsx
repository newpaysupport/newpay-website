"use client";

import logo_black from "@/images/header/newpay_logo_black.svg";
import logo from "@/images/newpay_logo.svg";
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SwitchLanguage from '../switch-language';
import CompanyDropdown from "./company-dropdown";
import PaymentDropdown from "./payment-dropdown";

const Header = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('navigation');

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<"payment" | "company" | null>(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const switchLocale = (newLocale: string) => {
        if (!pathname) return;
        const segments = pathname.split("/");
        segments[1] = newLocale;
        const newPath = segments.join("/");
        router.push(newPath);
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    if (currentScrollY < 10) {
                        setIsVisible(true);
                        setIsScrolled(false);
                    }
                    // If scrolling down and past 100px, hide the header
                    else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                        setIsVisible(false);
                        setOpenDropdown(null);
                    }
                    // If scrolling up, show the header
                    else if (currentScrollY < lastScrollY) {
                        setIsVisible(true);
                        setIsScrolled(true);
                    }

                    lastScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: `/${locale}/joint`, label: t('joint') },
        { href: `/${locale}`, label: t('personal') },
    ];

    const navLinksRight = [
        {
            key: 'payment',
            href: '#',
            label: t('payment'),
            hasDropdown: true,
            dropdownItems: [
                { title: 'Payment', href: `` },
                { title: 'Payment Card', href: `/${locale}/payment` },
                { title: 'Security & Protection', href: `/${locale}/secure` }
            ]
        },
        {
            key: 'company',
            href: '#',
            label: t('company'),
            hasDropdown: true,
            dropdownItems: [
                { title: 'Discover NewPay', href: `/${locale}/discover-newpay` },
                { title: 'About NewPay', href: `/${locale}/about-us` },
                { title: 'Contact us', href: `/${locale}/contact` },
                { title: 'Blog', href: `/${locale}/blog` },
                { title: 'FAQ', href: `/${locale}/faq-help` }
            ]
        },
        { key: 'support', href: `/${locale}/support`, label: t('support'), hasDropdown: false }
    ];

    const getHeaderStyles = () => {
        if (isBlogAndContact) {
            return {
                background: "white",
                color: "black",
                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                fontWeight: '600',
                zIndex: 50
            };
        }

        if (isScrolled) {
            return {
                background: "rgba(0, 0, 0, 0.80)",
                backdropFilter: "blur(8px)",
                color: "white",
            };
        }

        return {
            background: "transparent",
            color: "white"
        };
    };
    const isActive = (path: string) => pathname === path;

    const isBlogAndContact = pathname === `/${locale}/blog` || pathname === `/${locale}/contact`;

    const img_logo = isBlogAndContact ? logo_black : logo;

    return (
        <nav
            style={getHeaderStyles()}
            className={`text-sm h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4
                fixed top-0 left-0 w-full z-50
                text-white transition-all duration-300 ease-out
                ${isVisible ? 'translate-y-0' : 'translate-y-[-100%]'}`}
        >
            <Link href={`/${locale}`} className="flex items-center space-x-4">
                <Image src={img_logo} alt="NewPay Logo" width={120} height={25} className="object-contain" />
            </Link>

            <ul className="hidden md:flex justify-center items-center space-x-6">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`px-8 py-2 rounded-full transition ${isActive(link.href) ? 'bg-white/10' : 'hover:bg-white/10'}`}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <ul className="hidden md:flex items-center gap-2 relative">
                {navLinksRight.map((link) => (
                    <li
                        key={link.key}
                        className="relative"
                        onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.key as "payment" | "company")}
                        onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
                    >
                        <Link
                            href={link.href}
                            className={`px-8 py-2 rounded-full transition flex items-center gap-1 ${isActive(link.href) ? 'bg-white/10' : 'hover:bg-white/10'}`}
                        >
                            {link.label}
                        </Link>

                        {/* Dropdown */}
                        {link.hasDropdown && openDropdown === link.key && (
                            <div
                                className={`md:w-[230vh] absolute top-[full] transform -translate-x-[50%] pt-4 z-50 ${link.key === 'payment' ? 'md:left-1/2 ' : 'left-[-25%]'}`}
                            >
                                {link.key === 'payment' ?
                                    (<PaymentDropdown link={link} locale={locale} isBlogAndContact={isBlogAndContact} />) : <CompanyDropdown link={link} locale={locale} isBlogAndContact={isBlogAndContact} isScrolled={isScrolled} />}
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            <SwitchLanguage locale={locale} switchLocale={switchLocale} t={t} isBlogAndContact={isBlogAndContact} isVisible={isVisible} />

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
                <div className="md:hidden absolute top-[70px] left-0 w-full shadow-sm p-6 z-50 bg-white text-gray-800">
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
