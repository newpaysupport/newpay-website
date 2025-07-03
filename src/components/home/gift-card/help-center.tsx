'use client';
import arrowright from '@/images/home/giftcard/arrowright.svg';
import head_phone from '@/images/home/giftcard/head_phone.svg';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';


const HelpCenter = () => {
    const t = useTranslations('home');
    const locale = useLocale();

    return (
        <>
            <section className='lg:py-[160px] py-12 px-6 xl:px-0 bg-[#060606]'>
                <div
                    className="lg:mx-auto xl:w-[1200px] transition-transform duration-300 hover:scale-101"
                    style={{
                        borderRadius: '40px',
                        border: '2px solid transparent',
                        backgroundImage: `
                          linear-gradient(#060606, #060606),
                          linear-gradient(-45deg,
                            #FFB700 0%,
                            #FFB281 10%,
                            transparent 30%,
                            transparent 70%,
                            #FFB281 90%,
                            #FFB700 100%)
                        `,
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                    }}
                >
                    <div
                        className="lg:mx-auto lg:p-16 py-8 px-6 relative overflow-hidden"
                        style={{
                            borderRadius: '40px',
                            border: '2px solid rgba(255, 183, 0, 0.2)',
                            background: "linear-gradient(292deg, rgba(255, 143, 77, 0.20) 2.5%, rgba(255, 143, 77, 0.00) 37.03%), linear-gradient(109deg, rgba(255, 143, 77, 0.20) -3.64%, rgba(255, 143, 77, 0.00) 36.61%), rgba(255, 255, 255, 0.04)",
                            backdropFilter: 'blur(100px)',
                        }}
                    >
                        {/* Content */}
                        <div className="relative flex lg:flex-row flex-col items-end justify-between lg:gap-8 gap-12">
                            <div className="flex-1 lg:space-y-8 space-y-6">
                                <Image src={head_phone} alt="Mail Icon" />
                                <h2 className="text-white lg:font-semibold font-medium lg:text-3xl text-2xl leading-tight">
                                    {t('helpCenter.title')}
                                </h2>
                            </div>
                            {/* Right side - Form */}
                            <Link href={`/${locale}/contact`} className="lg:w-[410px] lg:h-[55px] w-full">
                                <button
                                    className="w-full lg:py-3 lg:px-6 px-[30px] py-4 cursor-pointer text-lg font-bold bg-white hover:from-orange-600 hover:to-orange-500 text-black rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/25 group"
                                >
                                    {t('helpCenter.buttonText')}
                                    <Image src={arrowright} alt='arrow right' className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HelpCenter;
