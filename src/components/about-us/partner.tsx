'use client'
import React from 'react'
import badge from '@/images/partner/Card Chip.png'
import Image from 'next/image'
import BtnPrimary from '../common/button/btn-primary'
import { useTranslations } from 'next-intl'

const Partner = () => {

    const t = useTranslations("aboutUs");


    return (
        <div className='w-full h-[700px] relative overflow-hidden'>
            <video src={'/videos/home/prism-coin.mp4'} className='w-full h-full object-cover object-center' loop={true} autoPlay={true} muted={true} preload='true' />
            <div className='absolute inset-0 w-full h-full pt-20'>
                <div className='flex items-center justify-center h-full'>
                    <div>
                        <figure className='w-[205px] h-[205px] mx-auto mb-20'>
                            <Image src={badge} alt='' />
                        </figure>
                        <div>
                            <p style={{
                                background: "linear-gradient(90deg, #FFF 0.13%, rgba(255, 255, 255, 0.00) 128.16%)",
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: "transparent"
                            }} className='text-[60px] font-semibold tracking-[-2px]'>{t("partner.title")}</p>
                            <p className='text-[#aeaeae] text-base font-medium text-center mb-8'>{t("partner.desc")}</p>
                            <BtnPrimary text={t("partner.button")} variant={'primary-lighter'} className='mx-auto w-[254px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner
