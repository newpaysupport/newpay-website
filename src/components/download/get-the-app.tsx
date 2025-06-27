"use client"
import React from 'react'
import card from '@/images/download/Card.png';
import cardMobile from '@/images/download/Card-mobile.png';
import iconMark from '@/images/download/newpay_mark.svg';
import newpayCard from '@/images/download/newpayCard.png';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

const GetTheApp = () => {

    const t = useTranslations("download.getApp");
    const locale = useLocale();


    return (
        <div className='bg-[#060606] py-[64px] lg:py-[120px]'>
            <div className='w-full h-full lg:h-[400px] relative '>
                <Image src={card} alt='' fill priority className='hidden lg:block' />
                <Image src={cardMobile} alt='' fill priority className='lg:hidden' />
                <div className='container mx-auto relative z-[1] px-20'>
                    <div className='py-10'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-y-0 lg:gap-x-20 items-center'>
                            <div className='relative'>
                                <Image src={iconMark} alt='' className={`mx-auto block lg:hidden`} />
                                <p className='textTitleClip text-[40px] text-center lg:text-left lg:text-[72px] font-semibold lg:leading-[72px]'>
                                    {t("get")} <br />
                                    {t("theApp")}
                                </p>
                                <Image src={iconMark} alt='' className={`hidden lg:block absolute top-[3px] ${locale === 'zi' ? "left-[160px]" : "left-[134px]"}`} />
                            </div>

                            <div>
                                <p className='text-white text-left text-2xl lg:text-[36px] font-medium -tracking-[0.64px] hidden lg:block'>
                                    {t("title")}
                                </p>
                                <p style={{ whiteSpace: 'pre-line' }} className='text-white text-center text-2xl lg:text-[36px] font-medium -tracking-[0.64px] lg:hidden'>
                                    {t("titleMobile")}
                                </p>
                                <p className='text-[#aeaeae] text-sm text-left lg:text-xl font-normal mt-4 lg:mt-6'>{t("desc")}</p>
                            </div>

                            <figure className='flex justify-center lg:justify-end'>
                                <Image src={newpayCard} alt='' />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetTheApp
