"use client";

import Image from "next/image";
import Link from "next/link";
import arrow_right from '@/images/header/arrow_right.svg';
import virual_card_dropdown from '@/images/header/virtual_card_dropdown.png';
import physicard_card_dropdown from '@/images/payment/img_card_black.png';
import SwitchLanguage from "../switch-language";

const MobileHeader = ({
    locale,
    navLinksRight,
    isBlogAndContact,
    isVisible,
    isMobileMenuOpen,
    toggleMobileDropdown,
    mobileOpenDropdown,
    mobileCardOpen,
    setMobileCardOpen,
    setIsMobileMenuOpen,
    switchLocale,
    t
}: {
    locale: string,
    navLinksRight: any[],
    isBlogAndContact: boolean,
    isVisible: boolean,
    isMobileMenuOpen: boolean,
    toggleMobileDropdown: (key: "payment" | "company") => void,
    mobileOpenDropdown: "payment" | "company" | null,
    mobileCardOpen: boolean,
    setMobileCardOpen: (v: boolean) => void,
    setIsMobileMenuOpen: (v: boolean) => void,
    switchLocale: (locale: string) => void,
    t: any,
}) => {
    return (
        <div className={`md:hidden fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] backdrop-blur-md z-50 overflow-y-auto ${isBlogAndContact ? 'bg-white text-black' : 'bg-[#060606] text-white'}`}>
            <div className="px-6 py-6">
                {/* Navigation Links */}
                <ul className="space-y-0">
                    {navLinksRight.map((link) => (
                        <li key={link.key}>
                            <div
                                className="flex items-center justify-between py-4"
                                onClick={() => link.hasDropdown ? toggleMobileDropdown(link.key) : null}
                            >
                                {link.hasDropdown ? (
                                    <span
                                        className={`text-base font-medium cursor-pointer 
                                      ${isBlogAndContact
                                                ? mobileOpenDropdown === link.key
                                                    ? 'text-black'
                                                    : 'text-[#666]'
                                                : mobileOpenDropdown === link.key
                                                    ? 'text-white'
                                                    : 'text-[#AEAEAE]'
                                            }`}
                                    >
                                        {link.label}
                                    </span>

                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`text-base font-medium ${isBlogAndContact ? 'text-black' : 'text-white'} `}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )}

                                {link.hasDropdown && (
                                    <svg className={`transition-transform -rotate-90 ${mobileOpenDropdown === link.key ? 'rotate-360' : ''} ${isBlogAndContact ? 'text-black' : 'text-white'}`}
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M4 6L8 10L12 6" stroke={isBlogAndContact ? "black" : "white"} strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>

                            {/* Dropdown Items */}
                            {link.hasDropdown && mobileOpenDropdown === link.key && (
                                <ul className="pl-4 py-2 space-y-3">
                                    {link.dropdownItems?.map((item: any, index: any) => (
                                        <li key={index}>
                                            {item.type === 'cardGroup' ? (
                                                <>
                                                    <div
                                                        className={`text-sm py-2 cursor-pointer flex items-center justify-between ${isBlogAndContact
                                                            ? mobileCardOpen
                                                                ? 'text-black'
                                                                : 'text-[#666]'
                                                            : mobileCardOpen
                                                                ? 'text-white'
                                                                : 'text-[#AEAEAE]'
                                                            }`}
                                                        onClick={() => setMobileCardOpen(!mobileCardOpen)}
                                                    >
                                                        <span>{item.title}</span>
                                                        <svg className={`transition-transform -rotate-90 ${mobileCardOpen ? 'rotate-360' : ''}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M4 6L8 10L12 6" stroke={isBlogAndContact ? "black" : "white"} strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>

                                                    {/* Card Dropdown */}
                                                    {mobileCardOpen && (
                                                        <div className="flex gap-2 overflow-x-auto">
                                                            {[{
                                                                title: locale === 'en' ? "Virtual Card" : "虚拟卡",
                                                                src: virual_card_dropdown
                                                            }, {
                                                                title: locale === 'en' ? "Physical Card" : "实体卡",
                                                                src: physicard_card_dropdown
                                                            }].map((card, i) => (
                                                                <Link key={i} href={`/${locale}/payment`} onClick={() => setIsMobileMenuOpen(false)}>
                                                                    <div style={{
                                                                        border: "1px solid rgba(255, 255, 255, 0.08)"
                                                                    }} 
                                                                    className="rounded-xl relative overflow-hidden cursor-pointer hover:scale-102 transition-transform w-[160px]">
                                                                        <Image src={card.src} alt={card.title} className="w-[160px] h-[160px] object-cover rounded-xl" />
                                                                        <div className="absolute bottom-0 p-3 flex justify-between w-full z-50">
                                                                            <h1 className="text-sm font-semibold text-white">{card.title}</h1>
                                                                            <Image src={arrow_right} alt="arrow right" />
                                                                        </div>
                                                                        <div className="absolute bottom-0 left-0 right-0 h-[30%] opacity-50 shadow-lg"
                                                                            style={{ background: "linear-gradient(180deg, rgba(6,6,6,0.00) 0%, #060606 100%)", backdropFilter: "blur(2px)" }} />
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <Link
                                                    href={item.href || '#'}
                                                    className={`text-sm transition block py-2 ${isBlogAndContact ? 'text-[#666] hover:text-black' : 'text-white/70 hover:text-white'}`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item.title}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                {/* Bottom Section */}
                <div className={`mt-8 pt-6 border-t ${isBlogAndContact ? 'border-black/10' : 'border-white/10'}`}>
                    <div className="mb-6">
                        <SwitchLanguage locale={locale} switchLocale={switchLocale} t={t} isBlogAndContact={isBlogAndContact} isVisible={isVisible} />
                    </div>
                    <button
                        type="button"
                        className={`w-full text-sm font-medium active:scale-95 transition-all h-12 rounded-full 
              ${isBlogAndContact ? 'bg-black text-white hover:bg-black/80' : 'bg-white text-black hover:bg-gray-100'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {t('getApp')}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default MobileHeader;
