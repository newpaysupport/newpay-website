"use client"
import Image from 'next/image'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import hero from '@/images/home/hero/Hero.png'
import { useLocale, useTranslations } from 'use-intl';
import Link from 'next/link';
import BtnPrimary from '@/components/common/button/btn-primary';
import toast from 'react-hot-toast';
import ToastCustom from '@/components/common/toast';
import card from '@/images/home/hero/card.png'
import apple from '@/images/home/consume/apple.svg'
import ebay from '@/images/home/consume/ebay.svg'
import mobileUser from '@/images/home/consume/mobile-user.png'
import nextflix from '@/images/home/consume/nextflix.svg'
import spotify from '@/images/home/consume/spotify.svg'
import { useBreakpointFlags } from '@/hooks/useBreakpointFlags';
import PhysicCard from '../consume/physic-card';
import { virtualCardContent } from '@/constants/virtual-card';
const HomeScreenMobileNoAnimation = () => {

    const t = useTranslations("home");
    const locale = useLocale();
    const TabCards = [
        {
            id: 1,
            name: t('virtualCard')
        },
        {
            id: 2,
            name: t('physicCard')
        },
    ]
    const [tabActive, setTabActive] = useState(TabCards[0].id);
    const { isXsMobile, isSmallMobile, isTablet } = useBreakpointFlags();



    const handleSetTabActive = (id: number) => {
        setTabActive(id);
    }
    const classNameCardRefMobile = (isXsMobile || isSmallMobile) ? "h-[180px]" : "h-[230px]";
    const classNameMobileCardRefMobile = (isXsMobile || isSmallMobile) ? "w-[90px]" : "sm:w-[180px] w-[111px]";

    return (
        <div>
            <div>
                {/* hero section */}
                <div className='w-full h-[872px] overflow-y-hidden relative'>
                    <video
                        src={'/videos/home/prism-coin-mobile.mp4'}
                        className='w-full h-full object-cover object-bottom z-[2] absolute mix-blend-lighten'
                        controls={false}
                        loop={true}
                        autoPlay={true}
                        muted={true}
                        preload='true'
                        playsInline={true}
                        webkit-playsinline="true"
                        disablePictureInPicture={true}
                        controlsList="nodownload nofullscreen noremoteplayback"
                        style={{
                            pointerEvents: 'none'
                        }}
                    />
                    <figure className='absolute inset-0 bottom-0 left-0 w-full'>
                        <Image src={hero} alt='' className='w-full h-full' priority />
                    </figure>
                    <div className='absolute inset-0 flex top-[130px] md:top-[130px] justify-center z-[3]'>
                        <div className="w-full px-4">
                            <p
                                style={{
                                    background: "linear-gradient(90deg, #FFF 0.13%, rgba(255, 255, 255, 0.00) 128.16%)",
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: "transparent"
                                }} className='text-[32px] font-semibold text-center w-full lg:min-w-[472px] -tracking-[1.64px] mx-auto'>
                                {t("titleHero")}
                            </p>
                            <p className='text-[#848484] text-sm font-medium -tracking-[0.24px] text-center mb-8'>{t("descHero")}</p>

                            <div className={`flex items-center justify-between sm:justify-center gap-4 px-4`}>
                                <Link href={`${locale}/download`} className='flex-1 sm:flex-none'>
                                    <BtnPrimary text={t("btnGetApp")} variant={'primary-lighter'} className='sm:w-[178px]' />
                                </Link>
                                <div onClick={() => {
                                    toast.custom(<ToastCustom type='warning' />)
                                }} className='flex-1 sm:flex-none'>
                                    <BtnPrimary text={t("btnCreateAccount")} variant={'surface-3'} className='sm:w-[178px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='top-[383px] z-[1000] absolute flex justify-center inset-0 h-fit'>
                    <figure
                        className={`w-4/5 ${classNameCardRefMobile} sm:w-[530px] sm:h-[320px]`}>
                        <Image src={card} alt='card' className='w-full h-full' />
                    </figure>
                </div>

                {/* consume section */}
                <div className='bg-[#060606]'>
                    <div className='py-12 bg-white min-h-[700px] rounded-4xl'>
                        <div className='container mx-auto'>
                            <div className=' pb-20 '>
                                <div className='w-full md:w-[573px] mx-auto px-4'>
                                    <p
                                        className='text-[#060606] font-semibold text-[32px] text-center -tracking-[2px] leading-normal'>
                                        {t("consumeEasily")}
                                    </p>
                                    <p

                                        className='my-6 text-[#aeaeae] text-sm font-medium -tracking-[0.24px] text-center'>{t("consumeEasilyDesc")}</p>

                                    <div className='bg-[#f8f8f8] rounded-full w-full h-[72px] p-1 flex mx-auto overflow-hidden'>
                                        {TabCards.map((item, index) => {
                                            return <div
                                                key={index}
                                                onClick={() => handleSetTabActive(item.id)}
                                                className={`${item.id === tabActive ? "text-[#1b1b1b] bg-white shadow-tab-card-item rounded-full" : "text-[#AEAEAE] bg-[#f8f8f8]"} transition-all ease-linear duration-150 cursor-pointer flex-1 flex items-center justify-center text-base font-semibold `}>
                                                {item.name}
                                            </div>
                                        })}
                                    </div>
                                </div>

                                <div className='mt-[64px] min-h-[410px] flex'>
                                    {tabActive === 1 ? <>
                                        <div className='relative w-full'>
                                            <div className='w-full h-[337px] mx-auto relative'>
                                                <Image src={apple} alt='apple' className='absolute top-0 left-4 md:left-0 w-[46px] h-[46px] md:w-[101px] md:h-[101px]' />
                                                <Image src={spotify} alt='apple' className='absolute top-[50px] left-[70px] md:top-[280px] md:left-[110px] w-[34px] h-[34px] md:w-[74px] md:h-[74px]' />

                                                <Image src={nextflix} alt='apple' className='absolute top-4 right-4 md:right-0 w-[46px] h-[46px] md:w-[101px] md:h-[101px]' />
                                                <Image src={ebay} alt='apple' className='absolute top-[50px] right-[70px] md:top-[280px] md:right-[110px] w-[34px] h-[34px] md:w-[74px] md:h-[74px]' />
                                            </div>

                                            <figure
                                                style={{
                                                    transform: 'translateX(-50%)'
                                                }}
                                                className={`${classNameMobileCardRefMobile} h-[117px] absolute top-[40px] sm:top-[66px] left-[50%] z-[2] block md:hidden`}>
                                                <Image src={card} alt='card' />
                                            </figure>

                                            <figure
                                                className={`md:w-[150px] md:top-[60px] h-[117px] absolute left-[41%] z-[2] hidden md:block`}>
                                                <Image src={card} alt='card' />
                                            </figure>

                                            <figure className='w-4/5 h-[536px] md:w-[448px] md:h-[600px] absolute top-0 left-[16%] md:left-[26%]'>
                                                <Image src={mobileUser} alt='mobile' />
                                            </figure>
                                        </div>
                                    </> : <PhysicCard />}
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:mt-[200px] md:mt-[160px]'>
                                    {t.raw('utils').map((item: { title: string; desc: string }, index: number) => {
                                        return <div key={index} className='p-8 bg-[#f8f8f8] rounded-[20px]'>
                                            <figure className='w-12 h-12'>
                                                <Image src={virtualCardContent[index].icon} alt='icon' />
                                            </figure>
                                            <p className='mt-8 mb-2 text-[#1b1b1b] text-2xl font-semibold'>{item.title}</p>
                                            <p className='text-[#666] text-base font-medium'>{item.desc}</p>
                                        </div>
                                    })}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreenMobileNoAnimation
