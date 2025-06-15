"use client"
import React from 'react'
import card from '@/images/download/Card.png';
import iconMark from '@/images/download/newpay_mark.svg';
import newpayCard from '@/images/download/newpayCard.png';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const GetTheApp = () => {

    const t = useTranslations("download.getApp");


    return (
        <div className='bg-[#060606] pt-[120px]'>
            <div className='container mx-auto'>
                <div className='w-full h-[400px] relative'>
                    <Image src={card} alt='' fill priority />
                    <div className='relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 items-center'>
                        <div className='relative'>
                            <p className='textTitleClip text-[72px] font-semibold leading-[72px]'>
                                {t("get")} <br />
                                {t("theApp")}
                            </p>
                            <Image src={iconMark} alt='' className='absolute top-[3px] left-[134px]' />
                        </div>

                        <div>
                            <p className='text-white text-[36px] font-medium -tracking-[0.64px]'>
                                {t("title")}
                            </p>
                            <p className='text-[#aeaeae] text-xl font-normal mt-6'>{t("desc")}</p>
                        </div>

                        <figure className='flex justify-center'>
                            <Image src={newpayCard} alt='' />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetTheApp
