import logoEN from '@/images/UnitedKingdom.png';
import logoZH from '@/images/china.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Props = {
    locale: string;
    switchLocale: (lng: string) => void;
    t: (key: string) => string;
    isBlogAndContact?: boolean;
    isVisible?: boolean;
};

const languages = [
    { code: 'en', label: 'EN', flag: logoEN },
    { code: 'zi', label: 'CN', flag: logoZH }
];

const SwitchLanguage = ({ locale, switchLocale, t, isBlogAndContact, isVisible }: Props) => {
    useEffect(() => {
        if (!isVisible) {
            setOpen(false);
        }
    }, [isVisible])

    const [open, setOpen] = useState(false);
    const currentLanguage = languages.find((lng) => lng.code === locale) || languages[0];

    return (
        <div className="lg:rounded-none rounded-full lg:bg-transparent bg-[#FFFFFF]/8 lg:p-0 p-1 flex items-center lg:space-x-4 relative hover:cursor-pointer">
            {/* Language Dropdown */}
            <div className="relative">
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex items-center gap-2 px-3 py-2 rounded-full text-sm"
                >
                    <Image
                        src={currentLanguage.flag.src}
                        alt={""}
                        width={20}
                        height={20}
                        className="w-5 h-5 rounded-full"
                    />
                    {currentLanguage.label}
                    <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {open && (
                    <>
                        <div className={`absolute lg:block hidden left-0 mt-2 w-32 z-20  rounded-lg p-2 bg-[#131313]`}>
                            {languages.map((lng) => (
                                <div
                                    key={lng.code}
                                    onClick={() => {
                                        switchLocale(lng.code);
                                        setOpen(false);
                                    }}
                                    className={`flex items-center gap-2 px-4 py-2 cursor-pointer rounded-lg my-1
                                    ${locale === lng.code ? 'bg-white/8' : 'hover:bg-white/8'}`}
                                >
                                    <Image
                                        src={lng.flag.src}
                                        alt={""}
                                        width={20}
                                        height={20}
                                        className="w-5 h-5 rounded-full"
                                    />
                                    <span className={`${isBlogAndContact ? 'text-white' : ''}`}>{lng.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className={`absolute lg:hidden bottom-12 mt-2 w-32 z-20  rounded-lg p-2 bg-[#131313]`}>
                            {languages.map((lng) => (
                                <div
                                    key={lng.code}
                                    onClick={() => {
                                        switchLocale(lng.code);
                                        setOpen(false);
                                    }}
                                    className={`flex items-center gap-2 px-4 py-2 cursor-pointer rounded-lg my-1
                                    ${locale === lng.code ? 'bg-white/8' : 'hover:bg-white/8'}`}
                                >
                                    <Image
                                        src={lng.flag.src}
                                        alt={""}
                                        width={20}
                                        height={20}
                                        className="w-5 h-5 rounded-full"
                                    />
                                    <span className={`${isBlogAndContact ? 'text-white' : ''}`}>{lng.label}</span>
                                </div>
                            ))}
                        </div>
                    </>

                )}
            </div>
            {/* Get App Button */}
            <Link href={`/${locale}/download`} className='lg:block hidden'>
                <button className={`${isBlogAndContact ? 'bg-black text-white' : 'bg-white '} text-[#060606] cursor-pointer font-semibold md:inline hidden px-5 py-3 rounded-full active:scale-95  text-sm hover:scale-102`}>
                    {t('getApp')}
                </button>
            </Link>
        </div>
    );
};
export default SwitchLanguage;
