'use client'
import React from 'react'
import Image from 'next/image';

import giftcard from '@/video/home/bg_giftcard.gif';
import icon_gift from '@/images/home/giftcard/icon_gift.svg';
import arrow_left from '@/images/home/giftcard/arrow_left.svg';
import arrow_right from '@/images/home/giftcard/arrow_right.svg';
import { useTranslations } from 'use-intl';
import ToastCustom from '@/components/common/toast';
import toast from 'react-hot-toast';

const VideoBackground = () => {

    const t = useTranslations("home");
    const handleToast = () => {
        toast.custom(<ToastCustom type='warning' />)
    }
    return (
        <section className='bg-[#060606] pt-[120px]'>
            <div className='container mx-auto relative'>
                {/* title */}
                <h1 style={{
                    background: "linear-gradient(90deg, #FFF 0.13%, rgba(255, 255, 255, 0.00) 128.16%)",
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: "transparent"
                }} className='lg:text-6xl text-[32px] font-semibold text-center mx-auto lg:w-[520px] w-[300px]'>
                    {t('giftCard.title')}
                </h1>
                <p className='text-[#848484] text-center mt-4 font-medium text-base lg:w-full w-[300px] mx-auto'>
                    {t('giftCard.desc')}
                </p>
                {/* video */}
                <div className='relative'>
                    <img
                        src={giftcard.src}
                        alt="Gift card background"
                        className="w-full object-cover object-center mt-8 rounded-3xl lg:h-full h-[650px]"
                    />
                    {/*overlay #FF6910 */}
                    <div className="absolute inset-0 bg-[#FF7510] opacity-100 mix-blend-color" />
                </div>

                {/* content right */}
                <div style={{
                    background: "rgba(255, 255, 255, 0.04))",
                    backdropFilter: "blur(40px)"
                }}
                    className='absolute lg:right-[10%] lg:bottom-[10%] lg:w-[360px] lg:p-6 lg:rounded-3xl rounded-2xl py-4 px-3 w-[240px] bottom-[15px] right-[20px] flex flex-col gap-2  '
                >
                    <h1 className='lg:text-2xl text-sm text-white mb-4'>
                        {t('giftCard.contentRight.title')}
                    </h1>

                    <div style={{
                        background: "rgba(255, 255, 255, 0.04)"
                    }}
                        className="flex items-center justify-between  text-white lg:rounded-2xl rounded-xl p-2 sm:p-3 lg:p-4 shadow-md w-full max-w-xs">
                        <div className="flex items-center lg:space-x-4 space-x-2">
                            <div className="flex-shrink-0">
                                <Image src={icon_gift} alt="Gift Icon" className='lg:w-full lg:h-full w-[24px] h-[24px]'/>
                            </div>
                            <div>
                                <p className="text-xs text-white">{t('giftCard.contentRight.item1.title')}</p>
                                <p className="lg:text-xs text-[11px] text-[#979797]">{t('giftCard.contentRight.item1.desc')}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="lg:text-xs text-[11px] font-medium">20.68 USDT</p>
                        </div>
                    </div>
                    <div style={{
                        background: "rgba(255, 255, 255, 0.04)"
                    }}
                        className="flex items-center justify-between  text-white lg:rounded-2xl rounded-xl p-2 sm:p-3 lg:p-4 shadow-md w-full max-w-xs">
                        <div className="flex items-center lg:space-x-4 space-x-2">
                            <div className="flex-shrink-0">
                                <Image src={arrow_left} alt="Gift Icon" className='lg:w-full lg:h-full w-[24px] h-[24px]'/>
                            </div>
                            <div>
                                <p className="text-xs text-white">{t('giftCard.contentRight.item2.title')}</p>
                                <p className="lg:text-xs text-[11px] text-[#979797]">{t('giftCard.contentRight.item2.desc')}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="lg:text-xs text-[11px] font-medium">488.00 USDT</p>
                        </div>
                    </div>

                    <div style={{
                        background: "rgba(255, 255, 255, 0.04)"
                    }}
                        className="flex items-center justify-between  text-white  lg:rounded-2xl rounded-xl p-2 sm:p-3 lg:p-4 shadow-md lg:w-full">
                        <div className="flex items-center lg:space-x-4 space-x-2">
                            <div className="flex-shrink-0">
                                <Image src={arrow_right} alt="Gift Icon" className='lg:w-full lg:h-full w-[24px] h-[24px]'/>
                            </div>
                            <div>
                                <p className="text-xs text-white">{t('giftCard.contentRight.item3.title')}</p>
                                <p className="lg:text-xs text-[11px] text-[#979797]">{t('giftCard.contentRight.item3.desc')}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="lg:text-xs text-[11px] font-medium">– 50.50 USDT</p>
                        </div>
                    </div>
                    <button
                        onClick={handleToast}
                        className='text-white bg-[#FF6910] lg:text-md text-sm lg:p-4 p-3 rounded-full cursor-pointer mt-4'>{t('giftCard.contentRight.button')}</button>
                </div>
            </div>
        </section>
    )
}

export default VideoBackground
