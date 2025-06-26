'use client'
import React from 'react'
import bg from '@/images/about-us/security.png';
import cards from '@/images/about-us/cards.svg';
import coin from '@/images/about-us/coin.svg';
import gift from '@/images/about-us/gift.svg';
import arrowRight from '@/images/about-us/arrow-right.svg';
import arrowRightWhite from '@/images/about-us/arrow-right-white.svg';

import visa from '@/images/about-us/visa.svg';
import masterCard from '@/images/about-us/master-card.svg';
import item from '@/images/about-us/Item.svg';
import avax from '@/images/about-us/avax.svg';
import eth from '@/images/about-us/eth.svg';
import usdt from '@/images/about-us/usdt.svg';
import usdc from '@/images/about-us/usdc.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Item } from '@/interfaces/common';

const items = [
    {
        id: 1,
        icon: cards,
    },
    {
        id: 2,
        icon: coin,
    },
    {
        id: 1,
        icon: gift,
    }
]

const icons = [visa, masterCard, item, avax, eth, usdt, usdc]

const Compliance = () => {


    const t = useTranslations("aboutUs");

    return (
        <div className='w-full min-h-[1300px] relative'>
            <Image src={bg} alt='background' fill priority className='object-bottom-left object-cover' />
            <div className='relative py-[64px] lg:py-[160px] lg:px-0'>
                <div className='container mx-auto px-4 xl:px-20'>
                    <h4 className='text-white text-[32px] lg:text-[60px] font-semibold text-center'>{t("compliance.title")}</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-20'>
                        {t.raw("compliance.list").map((item: Item, index: number) => {
                            return (
                                <div style={{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.08) 100%), rgba(1, 1, 1, 0.16)' }}
                                    key={index} className='p-8 rounded-[20px] bg-security-item backdrop-blur-[40px]'>
                                    <Image src={items[index].icon} alt={item.title} />
                                    <p className='mt-[44px] mb-2 text-white text-2xl font-semibold'>{item.title}</p>
                                    <p className='text-[#aeaeae] text-base font-medium'>{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='pt-[64px] lg:pt-[290px] pb-10 lg:px-10'>
                        <p className='w-full ml-auto lg:w-[416px]'>
                            <span className='text-white text-[32px] lg:text-[60px] font-semibold tracking-[-2px]'>{t("compliance.partner.title")}</span>
                            <span style={{ whiteSpace: "pre-line" }} className='mt-6 inline-block text-[#aeaeae] text-sm lg:text-base font-medium'>
                                {t("compliance.partner.desc")}
                            </span>
                        </p>
                    </div>
                </div>
                <div className='flex items-center lg:space-x-2 mt-20 lg:pr-4'>
                    <div style={{ borderRadius: '0px 1920px 1920px 0px', backdropFilter: '20px' }}
                        className='w-[66px] lg:w-[441px] bg-[rgba(255,105,16,0.16)] backdrop-blur-[20px] flex items-center justify-end p-2'>
                        <figure className='w-10 h-10 lg:w-20 lg:h-20 bg-[#FF6910] rounded-full flex items-center justify-center'>
                            <Image src={arrowRightWhite} alt='' />
                        </figure>
                    </div>
                    <div className='flex space-x-2 ml-1 lg:ml-4'>
                        {icons.map((item, index) => {
                            return (
                                <figure key={index}>
                                    <Image src={item} alt='icon' />
                                </figure>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compliance
