'use client'
import React from 'react'
import hero from '@/images/about-us/hero.png'
import heroMobile from '@/images/about-us/hero-mobile.png'

import Image from 'next/image'
import BtnPrimary from '../common/button/btn-primary'
import { useTranslations } from 'next-intl'
import toast from 'react-hot-toast'
import ToastCustom from '../common/toast'

const Hero = () => {

    const t = useTranslations('aboutUs');

    const handleShowToast = () => {
        toast.custom(<ToastCustom type='warning' />)
    }

    return (
        <div className='relative w-full h-[800px] lg:h-[calc(100vh-70px)]'>
            <Image src={hero} alt='' fill priority className='hidden lg:block' />
            <Image src={heroMobile} alt='' fill priority className='block lg:hidden' />
            <div className='relative z-[1] w-full h-full pt-20 pb-12 lg:pb-[143px] px-6'>
                <div className='container mx-auto w-full h-full flex flex-col justify-end'>
                    <p className=' text-white text-sm lg:text-base font-medium tracking-[-0.24px] opacity-0 fadeInUp-no-delay'>{t("hero.subTitle")}</p>
                    <p style={{ whiteSpace: "pre-line" }} className='text-white text-[32px] lg:text-[60px] lg:leading-[60px] font-semibold tracking-[-1.64px] my-4 opacity-0 fadeInUp-delay-03'>{t("hero.title")}</p>
                    <p className='text-[#aeaeae] text-sm lg:text-base font-medium tracking-[-0.24px] mb-8 opacity-0 fadeInUp-delay-03'>{t("hero.desc")}</p>
                    <div className='w-[258px]'>
                        <BtnPrimary
                            onClick={handleShowToast}
                            text={t("hero.buttonHero")}
                            variant={'primary-lighter'}
                            className='opacity-0 fadeInUp-delay-06' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
