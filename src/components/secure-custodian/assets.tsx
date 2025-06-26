"use client"
import React from 'react'
import asset1 from '@/images/secure/asset1.png';
import asset1Mobile from '@/images/secure/asset1-mobile.png';
import asset2 from '@/images/secure/asset2.png';
import asset2Mobile from '@/images/secure/asset2-mobile.png';
import asset3 from '@/images/secure/asset3.png';
import asset3Mobile from '@/images/secure/asset3-mobile.png';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const images = [asset1, asset2, asset3]

const Assets = () => {

    const t = useTranslations("secureCustodian");

    const list = t.raw("assets.list")

    return (
        <div className='bg-[#060606] py-[64px] px-6 lg:px-20 xl:px-[120px] lg:py-[120px]'>
            <div className='container mx-auto'>
                <h4 className='text-white font-semibold text-[32px] lg:text-[60px] text-center'>{t("assets.title")}</h4>
                <p className='text-[#666] mt-4 text-sm lg:text-lg font-medium text-center'>{t("assets.desc")}</p>

                <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-4 2xl:w-[1200px] lg:mx-auto'>

                    <div style={{ background: 'linear-gradient(0deg, #110F0D 0%, #110F0D 100%), var(--bg-surface-surface-1, rgba(255, 255, 255, 0.04))' }} className='col-span-1 md:col-span-2 relative h-[444px] lg:h-[500px] rounded-3xl overflow-hidden'>
                        <Image src={images[0]} alt='' fill className='hidden lg:block' />
                        <figure className='w-full h-[240px] lg:hidden '>
                            <Image src={asset1Mobile} priority alt='' className='object-cover w-full' />
                        </figure>
                        <div className='relative z-[1] lg:w-[516px] lg:h-full px-6 lg:pt-4 lg:pr-10 lg:pl-[64px] lg:pb-[64px] flex flex-col gap-y-4 justify-end'>
                            <p className='textTitleClip text-2xl lg:text-[32px] font-semibold'>{list[0].title}</p>
                            <p className='text-[#848484] text-sm lg:text-lg font-normal'>{list[0].desc}</p>
                        </div>
                    </div>

                    <div className='w-full 2xl:w-[592px] h-[500px] relative bg-[#020000] rounded-3xl overflow-hidden'>
                        <Image src={images[1]} fill alt='' className='object-center hidden lg:block' />
                        <Image src={asset2Mobile} priority fill alt='' className='lg:hidden object-cover w-full' />

                        <div className='relative flex flex-col gap-y-4 justify-end h-full px-6 py-8 lg:p-10'>
                            <p className='textTitleClip text-2xl lg:text-[32px] font-semibold'>{list[1].title}</p>
                            <p className='text-[#848484] text-sm lg:text-lg font-normal'>{list[1].desc}</p>
                        </div>
                    </div>
                    <div
                        style={{ background: 'linear-gradient(0deg, #110F0D 0%, #110F0D 100%), var(--bg-surface-surface-1, rgba(255, 255, 255, 0.04))' }}
                        className='w-full 2xl:w-[592px] h-[500px] relative bg-[#020000] rounded-3xl overflow-hidden'>
                        <Image src={asset3} fill alt='' className='hidden lg:block' />
                        <figure className='w-full h-[316px] lg:hidden'>
                            <Image src={asset3Mobile} priority alt='' className='object-cover w-full h-full' />
                        </figure>
                        <div className='relative flex flex-col gap-y-4 justify-start h-full px-6 py-8 lg:p-10'>
                            <p className='textTitleClip text-2xl lg:text-[32px] font-semibold'>{list[2].title}</p>
                            <p className='text-[#848484] text-sm lg:text-lg font-normal'>{list[2].desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assets
