'use client'
import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import { useRef, useState, useEffect } from "react";
import access_icon from "@/images/payment/access.svg";
import bg_content3 from "@/images/payment/bg_content3.png";

import scan_icon from "@/images/payment/scan.svg";

import { AnimatePresence, useInView } from 'motion/react';
import Image from "next/image";
import AnimationFade from '../animation/animation-fade';
import ContentCard from './content-card';
import ContentEnd from './content-end';
import ContentMain from './content-main';
import DownloadSection from './download-section';
import Faq from './faq';
import PhysicalCard from "./physical-card";
import VirtualCard from "./virtual-card";
import HeroPayment from './hero-payment';

const PaymentScreen = () => {
    const [activeCard, setActiveCard] = useState<'virtual' | 'physical'>('virtual');

    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;

    {/* Content Section 1*/ }
    const contentSection1 = payment.contentSection1;
    const virtualCard = contentSection1.virtualCard;
    const physicalCard = contentSection1.physicalCard
    {/* Centered Content */ }
    const safeAssetsSection = payment.safeAssetsSection;


    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: true, amount: 0.5 });

    useEffect(() => {
        //get hash is anchor from URL (#physical-card or #virtual-card)
        const hash = window.location.hash;
        if (hash === '#physical-card') {
            setActiveCard('physical');
        } else if (hash === '#virtual-card') {
            setActiveCard('virtual');
        }
    }, []);

    return (
        <div>
            <HeroPayment />
            {/* Content Section*/}
            <div className="bg-black">
                <div className="bg-white lg:rounded-[80px] rounded-4xl pb-10 lg:pt-20 lg:px-0 pt-12">
                    {/* Content Section 1*/}
                    <AnimationFade direction="up" inView={isInView}>
                        <div ref={textRef} className='lg:px-0 px-6'>
                            <h1 className="lg:text-[60px] text-[32px] font-semibold text-center text-[#1b1b1b]">{contentSection1.title}</h1>
                            <p className="lg:w-[430px] lg:text-lg text-sm font-medium text-center text-[#666] mt-4 mx-auto">{contentSection1.description}</p>
                            <div className="justify-center items-center lg:text-base text-sm lg:mt-8 my-8 flex gap-4">
                                <button
                                    className={`${activeCard === 'virtual' ? 'bg-black text-white' : ''} border border-gray-300 font-semibold lg:py-4 lg:px-12 py-3 px-10 rounded-full cursor-pointer`}
                                    onClick={() => setActiveCard('virtual')}
                                >
                                    {virtualCard.label}
                                </button>
                                <button
                                    className={`${activeCard === 'virtual' ? '' : 'bg-black text-white'} border border-gray-300 font-semibold lg:py-4 lg:px-12 py-3 px-10 rounded-full cursor-pointer`}
                                    onClick={() => setActiveCard('physical')}
                                >
                                    {physicalCard.label}
                                </button>
                            </div>
                        </div>
                    </AnimationFade>
                    {/* content Virtual and Physical Card*/}
                    <AnimatePresence mode='wait'>
                        {activeCard === 'virtual' ? (
                            <AnimationFade key="virtual" direction="up">
                                <VirtualCard
                                    virtualItems={virtualCard.virtualItems}
                                    labelButton={contentSection1.labelButton}
                                    id="virtual-card"
                                />
                            </AnimationFade>
                        ) : (
                            <AnimationFade key="physical" direction="up">
                                <PhysicalCard
                                    physicalItems={physicalCard.physicalItems}
                                    labelButton={contentSection1.labelButton}
                                    id="physical-card"
                                />
                            </AnimationFade>
                        )}
                    </AnimatePresence>
                    <ContentMain />
                    {/* content background */}
                    <div className="relative w-full lg:h-[370px] h-[400px] mt-10">
                        <Image src={bg_content3} alt="social" fill className="object-cover w-full h-full" quality={100} />
                        <div className="absolute inset-0 flex flex-col lg:flex-row lg:justify-between items-center px-4 w-full lg:max-w-7xl mx-auto lg:px-8 gap-8">
                            <div className="flex flex-col lg:mt-0 mt-16 items-center lg:items-start text-left lg:text-left max-w-2xl">
                                <h2 className="lg:text-4xl text-2xl font-semibold text-white lg:mb-4 mb-2 w-full">
                                    {safeAssetsSection.title}
                                </h2>
                                <p className="text-gray-300 lg:text-lg text-sm font-medium w-full">
                                    {safeAssetsSection.description}
                                </p>
                            </div>
                            <div className="flex gap-4 sm:gap-5">
                                <div className="lg:w-[272px] lg:-[210px] flex flex-col justify-center items-center p-4 bg-gray-600/20 rounded-2xl">
                                    <Image src={scan_icon} alt="Biometric Icon" className='w-[64px] h-[64px]' />
                                    <p className="font-medium lg:text-2xl text-lg text-white mt-2 lg:px-4 px-3">{safeAssetsSection.biometric.title}</p>
                                    <p className="lg:text-2xl text-lg text-[#848484] font-medium">{safeAssetsSection.biometric.subtitle}</p>
                                </div>
                                <div className="lg:w-[272px] lg:-[210px] flex flex-col justify-center items-center p-4 bg-gray-600/20 rounded-2xl ">
                                    <Image src={access_icon} alt="Access Code Icon" className='w-[64px] h-[64px]' />
                                    <p className="lg:text-2xl text-lg font-medium text-white mt-2 ">{safeAssetsSection.accessCode.title}</p>
                                    <p className="lg:text-2xl text-lg text-[#848484] font-medium">{safeAssetsSection.accessCode.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContentCard />
                    <ContentEnd />
                </div>
                <Faq />
                <DownloadSection />
            </div>
        </div>
    )
}
export default PaymentScreen

