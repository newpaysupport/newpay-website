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
            <section className='py-[160px] bg-[#060606]'>
                <div
                    className="mx-auto md:w-[1200px] relative overflow-hidden transition-transform duration-300 hover:scale-101 bg-[#060606]"
                    style={{
                        padding: '64px',
                        borderRadius: '40px',
                        border: '2px solid rgba(255, 183, 0, 0.2)',
                        background: "linear-gradient(292deg, rgba(255, 143, 77, 0.20) 2.5%, rgba(255, 143, 77, 0.00) 37.03%), linear-gradient(109deg, rgba(255, 143, 77, 0.20) -3.64%, rgba(255, 143, 77, 0.00) 36.61%), rgba(255, 255, 255, 0.04)",
                        backdropFilter: 'blur(100px)',
                    }}
                >
                    {/* Background gradient overlay */}
                    <div style={{
                        background: "linear-gradient(292deg, rgba(255, 143, 77, 0.20) 2.5%, rgba(255, 143, 77, 0.00) 37.03%), linear-gradient(109deg, rgba(255, 143, 77, 0.20) -3.64%, rgba(255, 143, 77, 0.00) 36.61%), bg-[#FFFFFF]/4, rgba(255, 255, 255, 0.04);",
                        border: "2px solid rgba(255, 183, 0, 0.00);"
                    }}
                        className="absolute inset-0 rounded-24" />

                    {/* Content */}
                    <div className="relative flex items-end justify-between gap-8">
                        <div className="flex-1 space-y-8">
                            <Image src={head_phone} alt="Mail Icon" />
                            <h2 className="text-white font-semibold text-3xl leading-tight">
                                {t('helpCenter.title')}
                            </h2>
                        </div>
                        {/* Right side - Form */}
                        <div className="space-y-4">
                            <Link href={`/${locale}/contact`}>
                                <button
                                    style={{
                                        background: "linear-gradient(90deg, rgba(235, 169, 0, 0.00) 0%, rgba(235, 169, 0, 0.20) 100%), #FFF;"
                                    }}
                                    className="md:w-[410px] md:h-[55px] cursor-pointer text-lg font-bold bg-white hover:from-orange-600 hover:to-orange-500 text-black py-3 px-6 rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/25 group"
                                >
                                    {t('helpCenter.buttonText')}
                                    <Image src={arrowright} alt='arrow right' className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-orange-400/5 to-transparent rounded-full blur-lg" />
                </div>
            </section>
        </>
    );
};

export default HelpCenter;