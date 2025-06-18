import React from 'react'
import card2_img2 from '@/images/home/joint/card2_img2.png'
import card1_img1 from '@/images/home/joint/card-scroll/image.png'
import img_right from '@/images/home/joint/card-scroll/img_right.png'
import { FaArrowRight } from "react-icons/fa";
import icon_gift from '@/images/home/giftcard/icon_gift.svg';
import arrow_left from '@/images/home/giftcard/arrow_left.svg';
import arrow_right from '@/images/home/giftcard/arrow_right.svg';

import { joint as enBlog } from '@/i18n/messages/en.json';
import { joint as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from "next/image"
import { useTranslations } from 'use-intl';
const Card3 = () => {
    const locale = useLocale();
    const joint = locale === 'en' ? enBlog : ziBlog;
    const t = useTranslations("home");

    return (
        <section className="bg-white p-16 flex items-center rounded-3xl min-h-screen">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-30">
                {/* Left Section: Text Content and Small Card */}
                <div className="flex flex-col justify-between space-y-10">
                    <div className="pl-32">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#1B1B1B] mb-4 leading-tight">
                            {joint.card3.title}
                        </h2>
                        <p className="text-3xl text-[#666] mb-6 font-medium">
                            {joint.card3.description}
                        </p>
                    </div>

                    <div className="bg-[#FF6910] rounded-3xl p-6 lg:p-8 text-white max-w-xl gap-10 shadow-xl flex">
                        <Image
                            src={card1_img1}
                            alt="Person holding a card"
                            width={200}
                            height={200}
                            className="rounded-lg object-cover w-[200px] h-[200px]"
                        />
                        <div className="flex flex-col justify-between">
                            <p className="text-md">
                                {joint.card3.textCardLeft}
                            </p>
                            <button className="border border-white font-semibold py-3 px-6 rounded-3xl cursor-pointer">
                                <p className="flex justify-center items-center gap-3"> {joint.card3.textButtonCard} <FaArrowRight className="font-light animate-translateX" /></p>

                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section: Large Image Card */}
                <div className="relative ">
                    <Image
                        src={img_right}
                        alt="Payment device being used"
                        className="rounded-3xl h-full object-cover object-center"
                    />
                    <div
                        className="absolute top-[5%] left-[-15%] flex items-center justify-between text-white rounded-2xl p-2 sm:p-3 md:p-4 bg-[#FFF] shadow-md w-full max-w-xs">
                        <div className="flex items-center space-x-5">
                            <div className="flex-shrink-0">
                                <Image src={icon_gift} alt="Gift Icon" width={50} height={50} />
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-[#1B1B1B]">{t('giftCard.contentRight.item1.title')}</p>
                                <p className="text-sm text-[#979797]">{t('giftCard.contentRight.item1.desc')}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold text-[#1B1B1B]">+20.68 USDT</p>
                        </div>
                    </div>

                    <div 
                        className="absolute bottom-[30%] right-[-15%] flex items-center justify-between text-white rounded-2xl p-2 sm:p-3 md:p-4 bg-[#FFF] shadow-md w-full max-w-xs">
                        <div className="flex items-center space-x-5">
                            <div className="flex-shrink-0">
                                <Image src={arrow_right} alt="Gift Icon" width={50} height={50} className='text-[#FF6910]' />
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-[#1B1B1B]">{t('giftCard.contentRight.item2.title')}</p>
                                <p className="text-sm text-[#979797]">{t('giftCard.contentRight.item2.desc')}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold text-[#1B1B1B]">-50.50 USDT</p>
                        </div>
                    </div>

                    <div 
                        className="absolute bottom-[5%] left-[-8%] flex items-center justify-between text-white rounded-2xl p-2 sm:p-3 md:p-4 bg-[#FFF] shadow-md w-full max-w-xs">
                        <div className="flex items-center space-x-5">
                            <div className="flex-shrink-0">
                                <Image src={arrow_left} alt="Gift Icon" width={50} height={50} />
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-[#1B1B1B]">{t('giftCard.contentRight.item3.title')}</p>
                                <p className="text-sm text-[#979797]">{t('giftCard.contentRight.item3.desc')}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold text-[#1B1B1B]">+250.00 USDT</p>
                        </div>
                    </div>


                </div>
            </div>
        </section >
    )
}

export default Card3