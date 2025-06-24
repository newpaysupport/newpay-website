"use client"
import React from 'react'
import bgGradient from '@/images/faq-help/gradient.png';
import searchIcon from '@/images/faq-help/search-icon.svg';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const NeedAHand = () => {


    const t = useTranslations("faqHelp.needAHand");

    return (
        <div className='h-[400px] relative bg-[#060606]'>
            <div className='relative z-[1] container mx-auto flex flex-col justify-end items-center pb-10 w-full h-full px-6 lg:px-0'>
                <p className='textTitleClip text-[32px] lg:text-[72px] font-semibold'>{t("title")}</p>
                <p className='text-sm lg:text-lg text-[#aeaeae] font-medium mt-3 mb-10'>{t("desc")}</p>
                <div className='w-full lg:w-[480px] mx-auto h-[72px] bg-white/8 rounded-2xl box-border p-6 flex items-center gap-x-[10px]'>
                    <figure>
                        <Image src={searchIcon} alt='' />
                    </figure>
                    <input autoFocus={true} type="text" placeholder={t("placeHolder")} className='text-white w-full placeholder:text-[#848484] text-base font-medium border-none outline-none' />
                </div>
            </div>
        </div>
    )
}

export default NeedAHand
