'use client'
import React from 'react'
import BtnPrimary from '../common/button/btn-primary'
import overlay from '@/images/secure/overlay.png';
import { useTranslations } from 'next-intl'
import Image from 'next/image';
import toast from 'react-hot-toast';
import ToastCustom from '../common/toast';

const Hero = () => {

    const t = useTranslations('secureCustodian');

    const handleToast = () => {
        toast.custom((t) => <ToastCustom type='warning' toastId={t.id} />);
    }

    return (
        <div className='w-full h-[800px] lg:h-screen relative overflow-hidden'>
            <video src={'/videos/secure-custodian/heroVideo.mp4'} className='w-full h-full object-cover object-center hidden lg:block' loop={true} autoPlay={true} muted={true} preload='true' />
            <video src={'/videos/secure-custodian/heroVideoMobile.mp4'} className='w-full h-full object-cover object-center lg:hidden' loop={true} autoPlay={true} muted={true} preload='true' />

            <figure className='absolute w-full lg:h-[460px] z-[1] bottom-0 left-0'>
                <Image src={overlay} alt='' className='object-cover w-full h-full lg:h-auto' />
            </figure>
            <div className='absolute inset-0 w-full h-full z-[2]'>
                <div className='flex justify-center items-end h-full pb-12 px-4 lg:px-0 lg:pb-[120px]'>
                    <div className='w-full lg:w-[600px] text-center'>
                        <p
                            style={{
                                background: "linear-gradient(90deg, #FFF 0.13%, rgba(255, 255, 255, 0.00) 128.16%)",
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: "transparent"
                            }} className='text-[32px] lg:text-[72px] font-semibold text-center w-full lg:min-w-[472px] -tracking-[1.64px] mx-auto opacity-0 fadeInUp-no-delay'>
                            {t("hero.title")}
                        </p>
                        <p className='text-[#aeaeae] text-sm lg:text-base font-medium -tracking-[0.24px] opacity-0 fadeInUp-delay-03'>{t("hero.desc1")}</p>
                        <p className='text-[#aeaeae] text-sm lg:text-base font-medium -tracking-[0.24px] opacity-0 fadeInUp-delay-03'>{t("hero.desc2")}</p>
                        <BtnPrimary onClick={handleToast} text={t("hero.button")} variant={'primary-lighter'} className='w-[207px] mt-8 mx-auto opacity-0 fadeInUp-delay-06' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
