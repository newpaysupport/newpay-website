'use client'

import React from 'react'
import insight1 from '@/images/about-us/insight1.png';
import insight2 from '@/images/about-us/insight2.png';
import insight3 from '@/images/about-us/insight3.png';
import insight4 from '@/images/about-us/insight4.png';
import chart from '@/images/about-us/chart.svg';
import approach from '@/images/about-us/approach.svg';
import looking from '@/images/about-us/looking.svg';
import stand from '@/images/about-us/stand.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Item } from '@/interfaces/common';
import arrowRight from '@/images/about-us/arrow-right-black.svg';

const insights = [
    {
        id: 1,
        icon: chart,
        image: insight1
    },
    {
        id: 2,
        icon: approach,
        image: insight2
    },
    {
        id: 3,
        icon: looking,
        image: insight3
    },
    {
        id: 4,
        icon: stand,
        image: insight4
    },
]



const Insight = () => {

    const t = useTranslations("aboutUs");

    return (
        <div className='bg-[#060606]'>
            <div className='bg-white rounded-4xl lg:rounded-[80px] py-12 px-6 lg:py-[120px] lg:px-[160px] overflow-hidden'>
                <div className='container mx-auto flex flex-col items-center space-y-[120px]'>
                    {t.raw("insight").map((item: Item, index: number) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className={`flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-x-[80px]`}>
                                <div className='w-full lg:w-[560px] lg:min-w-[560px]'>
                                    <Image src={insights[index].icon} alt={item.title} />
                                    <p className='my-4 lg:my-8 text-[#1b1b1b] text-[32px] lg:text-[48px] font-semibold -tracking-[1.64px]'>{item.title}</p>
                                    <p className='text-[#666] text-sm lg:text-lg font-medium flex flex-col gap-4'>
                                        {(item.desc as string[]).map((text, index) => {
                                            return (
                                                <span key={index}>{text}</span>
                                            )
                                        })}
                                    </p>
                                    <button className='border border-black/16 font-semibold cursor-pointer rounded-full py-4 w-[260px] flex items-center justify-center space-x-[10px] mt-12'>
                                        <span>{t('hero.buttonHero')}</span>
                                        <Image src={arrowRight} alt='' />
                                    </button>
                                </div>
                                <figure className='w-full lg:w-[480px] lg:min-w-[480px]'>
                                    <Image src={insights[index].image} alt={item.title} />
                                </figure>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Insight
