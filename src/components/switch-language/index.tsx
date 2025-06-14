import Image from 'next/image';
import { useState } from 'react';
import logoEN from '@/images/UnitedKingdom.png';
import logoZH from '@/images/china.png';

type Props = {
    locale: string;
    switchLocale: (lng: string) => void;
    t: (key: string) => string;
};

const languages = [
    { code: 'en', label: 'EN', flag: logoEN },
    { code: 'zi', label: 'ZI', flag: logoZH }
];

const SwitchLanguage = ({ locale, switchLocale, t }: Props) => {
    const [open, setOpen] = useState(false);

    const currentLanguage = languages.find((lng) => lng.code === locale) || languages[0];

    return (
        <div className="flex items-center space-x-4 relative hover: cursor-pointer">
            {/* Language Dropdown */}
            <div className="relative">
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex items-center gap-2 px-3 py-2 rounded-full text-sm"
                >
                    <Image
                        src={currentLanguage.flag.src}
                        alt={currentLanguage.label}
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
                    <div className="absolute left-0 mt-2 w-32 rounded z-20 bg-[#060606]/80 ">
                        {languages.map((lng) => (
                            <div
                                key={lng.code}
                                onClick={() => {
                                    switchLocale(lng.code);
                                    setOpen(false);
                                }}
                                className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-black"
                            >
                                <Image
                                    src={lng.flag.src}
                                    alt={lng.label}
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 rounded-full"
                                />
                                <span>{lng.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Get App Button */}
            <button className="cursor-pointer font-semibold md:inline hidden bg-white ml-4 px-5 py-3 rounded-full active:scale-95 text-[#060606] text-sm">
                {t('getApp')}
            </button>
        </div>
    );
};

export default SwitchLanguage;
