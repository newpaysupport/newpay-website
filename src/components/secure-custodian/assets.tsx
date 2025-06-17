"use client"
import React from 'react'
import asset1 from '@/images/secure/asset1.png';
import asset2 from '@/images/secure/asset2.png';
import asset3 from '@/images/secure/asset3.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const images = [asset1, asset2, asset3]

const Assets = () => {

    const t = useTranslations("secureCustodian");

    const list = t.raw("assets.list")

    return (
        <div className='bg-[#060606] py-[120px]'>
            <div className='container mx-auto'>
                <h4 className='text-white font-semibold text-[60px] text-center'>{t("assets.title")}</h4>
                <p className='text-[#666] text-lg font-medium text-center'>{t("assets.desc")}</p>

                <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-4 lg:w-[1200px] lg:mx-auto'>

                    <div className='col-span-1 md:col-span-2 relative h-[500px]'>
                        <Image src={images[0]} alt='' fill />
                        <div className='relative z-[1] w-[516px] h-full pt-4 pr-10 pl-[64px] pb-[64px] flex flex-col gap-y-4 justify-end'>
                            <p className='textTitleClip text-[32px] font-semibold'>{list[0].title}</p>
                            <p className='text-[#848484] text-lg font-normal'>{list[0].desc}</p>
                        </div>
                    </div>

                    <div className='w-full lg:w-[592px] h-[500px] relative bg-[#020000] rounded-3xl overflow-hidden p-10'>
                        <Image src={images[1]} fill alt='' />
                        <div className='relative flex flex-col gap-y-4 justify-end h-full'>
                            <p className='textTitleClip text-[32px] font-semibold'>{list[1].title}</p>
                            <p className='text-[#848484] text-lg font-normal'>{list[1].desc}</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-[592px] h-[500px] relative bg-[#020000] rounded-3xl overflow-hidden p-10'>
                        <Image src={asset3} fill alt='' />
                        <div className='relative flex flex-col gap-y-4 justify-start h-full'>
                            <p className='textTitleClip text-[32px] font-semibold'>{list[2].title}</p>
                            <p className='text-[#848484] text-lg font-normal'>{list[2].desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assets
