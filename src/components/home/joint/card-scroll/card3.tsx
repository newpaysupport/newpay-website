import React, { useEffect, useState } from 'react'
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
import Link from 'next/link';
const Card3 = () => {

    const [isMobile, setIsMobile] = useState(false);
    const locale = useLocale();
    const joint = locale === 'en' ? enBlog : ziBlog;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const t = useTranslations("home");

    return (
        <>
            {isMobile ? (
                //moibile
                <section className="bg-white py-12 px-6 flex items-center rounded-3xl">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 space-y-8">
                        {/* Left Section: Text Content and Small Card */}
                        <div className="flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-[32px] font-semibold text-[#1B1B1B] mb-4 leading-tight">
                                    {joint.card3.title}
                                </h2>
                                <p className="text-lg text-[#666] mb-6 font-medium">
                                    {joint.card3.description}
                                </p>
                            </div>

                            <div className="bg-[#FF6910] rounded-2xl p-3 text-white shadow-xl flex gap-4">
                                <Image
                                    src={card1_img1}
                                    alt="Person holding a card"
                                    width={200}
                                    height={200}
                                    className="rounded-lg object-cover w-[125px] h-[125px]"
                                />
                                <div className="flex flex-col justify-between">
                                    <p className="text-sm">
                                        {joint.card3.textCardLeft}
                                    </p>
                                    <Link href={`/${locale}/contact`}>
                                        <button className="border border-white font-semibold py-3 px-6 rounded-full cursor-pointer">
                                            <p className="flex justify-center items-center gap-2.5 text-sm"> {joint.card3.textButtonCard} <FaArrowRight className="font-light animate-translateX" /></p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Large Image Card */}
                        <div className="relative ">
                            <Image
                                src={img_right}
                                alt="Payment device being used"
                                className="rounded-3xl h-[405px] object-cover object-center mx-auto"
                            />
                            <div
                                className="absolute top-[5%] left-[2%] flex items-center justify-between text-white rounded-2xl p-2 sm:p-3 md:p-4 bg-[#FFF] shadow-md w-full max-w-xs">
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
                                className="absolute bottom-[30%] right-[-3%] flex items-center justify-between text-white rounded-2xl p-2 sm:p-3 md:p-4 bg-[#FFF] shadow-md w-full max-w-xs">
                                <div className="flex items-center space-x-5">
                                    <div className="flex-shrink-0">
                                        <Image src={arrow_right} alt="Gift Icon" width={50} height={50} className='text-[#FF6910]' />
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-[#1B1B1B]">{t('giftCard.contentRight.item3.title')}</p>
                                        <p className="text-sm text-[#979797]">{t('giftCard.contentRight.item3.desc')}</p>

                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-[#1B1B1B]">-50.50 USDT</p>
                                </div>
                            </div>

                            <div
                                className="absolute bottom-[5%] left-[-3%] flex items-center justify-between text-white rounded-2xl p-2 sm:p-3 md:p-4 bg-[#FFF] shadow-md w-full max-w-xs">
                                <div className="flex items-center space-x-5">
                                    <div className="flex-shrink-0">
                                        <Image src={arrow_left} alt="Gift Icon" width={50} height={50} />
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-[#1B1B1B]">{locale === 'en' ? 'Receive' : '接收'}</p>
                                        <p className="text-sm text-[#979797]">{locale === 'en' ? 'Dinner' : '晚餐'}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-[#1B1B1B]">+250.00 USDT</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </section >
            ) : (
                //desktop
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

                            <div className="bg-[#FF6910] rounded-3xl p-4 text-white shadow-xl flex md:w-[500px] md:h-[230px]">
                                <Image
                                    src={card1_img1}
                                    alt="Person holding a card"
                                    width={200}
                                    height={200}
                                    className="rounded-lg object-cover w-[200px] h-[200px]"
                                />
                                <div className="flex flex-col justify-between px-8">
                                    <p className="text-md">
                                        {joint.card3.textCardLeft}
                                    </p>
                                    <Link href={`/${locale}/contact`}>
                                        <button className="border border-white font-semibold py-3 px-11 rounded-full cursor-pointer">
                                            <p className="flex justify-center items-center gap-2.5 text-md"> {joint.card3.textButtonCard} <FaArrowRight className="font-light animate-translateX" /></p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Large Image Card */}
                        <div className="relative ">
                            <Image
                                src={img_right}
                                alt="Payment device being used"
                                className="rounded-3xl md:h-[610px] md:w-[530px] object-cover object-center mx-auto"
                            />
                            <div
                                className="absolute top-[5%] left-[-10%] flex items-center justify-between text-white rounded-2xl p-2 sm:p-3 md:p-4 bg-[#FFF] shadow-md w-full max-w-xs">
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
                                className="absolute bottom-[30%] right-[-5%] flex items-center justify-between text-white rounded-2xl p-2 sm:p-3 md:p-4 bg-[#FFF] shadow-md w-full max-w-xs">
                                <div className="flex items-center space-x-5">
                                    <div className="flex-shrink-0">
                                        <Image src={arrow_right} alt="Gift Icon" width={50} height={50} className='text-[#FF6910]' />
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-[#1B1B1B]">{t('giftCard.contentRight.item3.title')}</p>
                                        <p className="text-sm text-[#979797]">{t('giftCard.contentRight.item3.desc')}</p>

                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-[#1B1B1B]">-50.50 USDT</p>
                                </div>
                            </div>

                            <div
                                className="absolute bottom-[5%] left-[-5%] flex items-center justify-between text-white rounded-2xl p-2 sm:p-3 md:p-4 bg-[#FFF] shadow-md w-full max-w-xs">
                                <div className="flex items-center space-x-5">
                                    <div className="flex-shrink-0">
                                        <Image src={arrow_left} alt="Gift Icon" width={50} height={50} />
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-[#1B1B1B]">{locale === 'en' ? 'Receive' : '接收'}</p>
                                        <p className="text-sm text-[#979797]">{locale === 'en' ? 'Dinner' : '晚餐'}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-[#1B1B1B]">+250.00 USDT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            )}
        </>
    )
}

export default Card3