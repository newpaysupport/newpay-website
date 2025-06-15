"use client"
import React from 'react'
import newpayMask from '@/images/download/newpay_square_mark.png'
import appStore from '@/images/download/apple-app-store.svg.svg'
import googleStore from '@/images/download/google-play-store.svg.svg'
import product from '@/images/download/product.png'


import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const Banner = () => {

    const t = useTranslations("download.banner");

    return (
        <div className='bg-[#060606] pt-[120px]'>
            <div className='container mx-auto'>
                <div>
                    <p className='text-[#FF6910] text-xl font-semibold text-center opacity-0 fadeInUp-no-delay'>{t("heading")}</p>
                    <div className='textTitleClip text-[72px] text-center font-semibold' >
                        <span>{t("title1")}</span> <br />
                        <p className='flex justify-center items-center gap-x-2'>
                            <span>{t("title2")}</span>
                            <figure className='min-w-[72px] w-[72px] h-[72px]'>
                                <Image src={newpayMask} alt='' />
                            </figure>
                            <span>{t("title3")}</span>
                        </p>
                    </div>
                    <p className='my-10 text-[#aeaeae] text-lg font-medium text-center opacity-0 fadeInUp-delay-03'>
                        {t("desc1")} <br />
                        {t("desc2")}
                    </p>
                    <div className='flex items-center justify-center gap-x-6 opacity-0 fadeInUp-delay-06'>
                        <Link href={"/"}>
                            <button
                                className='hover:bg-[#212121] btnCta transition-all ease-linear duration-300 w-[287px] h-[84px] py-[10px] rounded-2xl flex items-center justify-center cursor-pointer'>
                                <Image src={appStore} alt='' />
                            </button>
                        </Link>
                        <Link href={"/"}>
                            <button className='hover:bg-[#212121] btnCta transition-all ease-linear duration-300 w-[287px] h-[84px] py-[10px] rounded-2xl flex items-center justify-center cursor-pointer'>
                                <Image src={googleStore} alt='' />
                            </button>
                        </Link>
                    </div>
                </div>

                <figure className='flex justify-center mt-[40px]'>
                    <Image src={product} alt='' />
                </figure>
            </div>
        </div>
    )
}

export default Banner
