"use client";

import logo_black from "@/images/header/newpay_logo_black.svg";
import logo from "@/images/newpay_logo.svg";
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import SwitchLanguage from '../switch-language';
import CompanyDropdown from "./company-dropdown";
import MobileHeader from "./mobile-header";
import PaymentDropdown from "./payment-dropdown";
import BoxWrapped from "../common/box-wrapped";

const Header = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('navigation');
    const searchParams = useSearchParams();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<"payment" | "company" | null>(null);
    const [hoveringDropdown, setHoveringDropdown] = useState<"payment" | "company" | null>(null);
    const [mobileOpenDropdown, setMobileOpenDropdown] = useState<"payment" | "company" | null>(null);
    const [mobileCardOpen, setMobileCardOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setMobileOpenDropdown(null);
        setMobileCardOpen(false);
    };

    const toggleMobileDropdown = (key: "payment" | "company") => {
        setMobileOpenDropdown(mobileOpenDropdown === key ? null : key);
    };

    const switchLocale = (newLocale: string) => {
        if (newLocale === locale) return;
        if (!pathname) return;

        const segments = pathname.split("/");
        segments[1] = newLocale;
        const newPath = segments.join("/");
        const currentParams = searchParams.toString();
        const newUrl = currentParams ? `${newPath}?${currentParams}` : newPath;

        router.push(newUrl);
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
                    else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                        setIsVisible(false);
                        setOpenDropdown(null);
                        setIsMobileMenuOpen(false);
                    }
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
                { title: locale === 'en' ? 'Payment' : '支付', href: `` },
                { title: locale === 'en' ? 'Payment Card' : '支付卡', href: `/${locale}/payment`, type: 'cardGroup' },
                { title: locale === 'en' ? 'Security & Protection' : '安全与保护', href: `/${locale}/secure` }
            ]
        },
        {
            key: 'company',
            href: '#',
            label: t('company'),
            hasDropdown: true,
            dropdownItems: [
                { title: locale === 'en' ? 'Discover NewPay' : '认识 NewPay', href: `` },
                { title: locale === 'en' ? 'About NewPay' : '关于 NewPay', href: `/${locale}/about-us` },
                { title: locale === 'en' ? 'Contact us' : '联系我们', href: `/${locale}/contact` },
                { title: locale === 'en' ? 'Blog' : '博客', href: `/${locale}/blog` }
            ]
        },
        {
            key: 'support',
            href: `#`,
            label: t('support'),
            hasDropdown: true,
            dropdownItems: [
                { title: locale === 'en' ? 'Our Support' : '我们的支持', href: `` },
                { title: locale === 'en' ? 'FAQ' : '常见问题', href: `/${locale}/faq-help` },
                { title: locale === 'en' ? 'Download App' : '下载应用', href: `/${locale}/download` },
            ]
        }
    ];

    const getHeaderStyles = () => {
        if (isMobileMenuOpen && isBlogAndContact) {
            return {
                background: "white",
                color: "black",
            };
        }
        if (isMobileMenuOpen) {
            return {
                background: "#060606",
                color: "white",
            };
        }
        if (isBlogAndContact) {
            return {
                background: "white",
                color: "black",
                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                fontWeight: '600',
                zIndex: 50,
                transition: "background 0.3s ease",
            };
        }
        if (hoveringDropdown) {
            return {
                background: "#060606",
                color: "white",
                backdropFilter: "blur(8px)",
                transition: "background 0.3s ease",
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
    const isBlogAndContact = pathname === `/${locale}/blog` || pathname === `/${locale}/contact` || new RegExp(`^/${locale}/blog/\\d+-`).test(pathname);;
    const img_logo = isBlogAndContact ? logo_black : logo;

    return (
        <BoxWrapped>
            <nav style={getHeaderStyles()}
                className={`text-sm h-[70px] flex items-center justify-between px-6 lg:px-16 2xl:px-32 py-4
                fixed top-0 left-0 w-full z-50
                text-white transition-all duration-300 ease-out
                ${isVisible ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
                <Link href={`/${locale}`} className="lg:flex lg:items-center lg:space-x-4">
                    <Image src={img_logo} alt="NewPay Logo" width={120} height={25} className="object-contain" />
                </Link>

                {/* Desktop Navigation */}
                <ul className="flex lg:justify-center items-center lg:space-x-3">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`lg:px-6 font-semibold lg:font-normal lg:py-2 px-5 py-2 rounded-full transition
                            ${isActive(link.href)
                                        ? isBlogAndContact
                                            ? 'bg-black/10 text-black'
                                            : 'bg-white/8 text-white'
                                        : isBlogAndContact
                                            ? 'hover:bg-black/10 text-black'
                                            : 'hover:bg-white/8 text-white'
                                    }
                            `}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Right Navigation */}
                <ul className="hidden lg:flex items-center gap-2 ">
                    {navLinksRight.map((link) => (
                        <li
                            key={link.key}
                            onMouseEnter={() => {
                                if (link.hasDropdown) {
                                    setOpenDropdown(link.key as "payment" | "company");
                                    setHoveringDropdown(link.key as "payment" | "company");
                                }
                            }}
                            onMouseLeave={() => {
                                if (link.hasDropdown) {
                                    setOpenDropdown(null);
                                    setHoveringDropdown(null);
                                }
                            }}
                        >
                            <Link
                                href={link.href}
                                className={`px-6 py-2 rounded-full transition flex items-center gap-1
                            ${isActive(link.href)
                                        ? isBlogAndContact
                                            ? 'bg-black/10 text-black'
                                            : 'bg-white/8 text-white'
                                        : isBlogAndContact
                                            ? 'hover:bg-black/10 text-black'
                                            : 'hover:bg-white/8 text-white'
                                    }
                            `}
                            >
                                {link.label}
                            </Link>

                            {/* Desktop Dropdown */}
                            {link.hasDropdown && openDropdown === link.key && (
                                <div className={`absolute top-[full] left-0 w-[100vw] pt-4 z-50`}>
                                    {link.key === 'payment' ?
                                        (<PaymentDropdown link={link} locale={locale} isBlogAndContact={isBlogAndContact} />) :
                                        (
                                            <CompanyDropdown link={link} locale={locale} isBlogAndContact={isBlogAndContact} isScrolled={isScrolled} />
                                        )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:block">
                    <SwitchLanguage locale={locale} switchLocale={switchLocale} t={t} isBlogAndContact={isBlogAndContact} isVisible={isVisible} />
                </div>

                {/* Mobile Menu Button */}
                <button
                    aria-label="menu-btn"
                    type="button"
                    className={`cursor-pointer menu-btn flex items-center justify-center w-10 h-10 lg:hidden active:scale-90 transition-all duration-200
                    ${isBlogAndContact
                            ? 'text-black hover:bg-black/10'
                            : 'text-white hover:bg-white/10'
                        }
                `}
                    onClick={toggleMobileMenu}>

                    {isMobileMenuOpen ? (
                        <span className="text-xl font-light">×</span>
                    ) : (
                        <div className="flex flex-col gap-1">
                            <div className={`w-5 h-0.5 ${isBlogAndContact ? 'bg-black' : 'bg-white'}`}></div>
                            <div className={`w-5 h-0.5 ${isBlogAndContact ? 'bg-black' : 'bg-white'}`}></div>
                            <div className={`w-5 h-0.5 ${isBlogAndContact ? 'bg-black' : 'bg-white'}`}></div>
                        </div>
                    )}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <MobileHeader
                        locale={locale}
                        navLinksRight={navLinksRight}
                        isBlogAndContact={isBlogAndContact}
                        isVisible={isVisible}
                        isMobileMenuOpen={isMobileMenuOpen}
                        toggleMobileDropdown={toggleMobileDropdown}
                        mobileOpenDropdown={mobileOpenDropdown}
                        mobileCardOpen={mobileCardOpen}
                        setMobileCardOpen={setMobileCardOpen}
                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                        switchLocale={switchLocale}
                        t={t}
                    />
                )}
            </nav>
        </BoxWrapped>
    );
};
export default Header;
