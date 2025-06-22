'use client'
import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import { useRef, useState } from "react";

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
    {/* Content Section: FAQ */ }
    const faqSection = payment.faqSection;
    const faqItems = faqSection.faqItems;

    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: false, amount: 0.5 });


    return (
        <div>
            <HeroPayment />
            {/* Content Section*/}
            <div className="bg-black">
                <div className="bg-white rounded-[80px] pb-10 pt-20">
                    {/* Content Section 1*/}
                    <AnimationFade direction="up" inView={isInView}>
                        <div ref={textRef}>
                            <h1 className="md:text-[60px] text-xl font-semibold text-center text-[#1b1b1b]">{contentSection1.title}</h1>
                            <p className="md:w-[430px] text-lg font-medium text-center text-[#666] mt-4 mx-auto">{contentSection1.description}</p>
                            <div className="w-fit mx-auto text-md mt-8">
                                <button
                                    className={`${activeCard === 'virtual' ? 'bg-black text-white' : ''} border border-gray-300 font-semibold py-4 px-12 rounded-full mx-2 cursor-pointer`}
                                    onClick={() => setActiveCard('virtual')}
                                >
                                    {virtualCard.label}
                                </button>
                                <button
                                    className={`${activeCard === 'virtual' ? '' : 'bg-black text-white'} border border-gray-300 font-semibold py-4 px-12 rounded-full mx-2 cursor-pointer`}
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
                                />
                            </AnimationFade>
                        ) : (
                            <AnimationFade key="physical" direction="up">
                                <PhysicalCard
                                    physicalItems={physicalCard.physicalItems}
                                    labelButton={contentSection1.labelButton}
                                />
                            </AnimationFade>
                        )}
                    </AnimatePresence>
                    <ContentMain />
                    {/* content background */}
                    <div className="relative w-full h-[370px] mt-10">
                        <Image src={bg_content3} alt="social" fill className="object-cover w-full h-full" quality={100} />
                        <div className="absolute inset-0 flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mx-auto sm:px-6 lg:px-8 gap-8">
                            <div className="flex flex-col md:mt-0 mt-5 items-center lg:items-start text-center lg:text-left max-w-2xl">
                                <h2 className="md:text-4xl text-2xl font-semibold text-white mb-4">
                                    {safeAssetsSection.title}
                                </h2>
                                <p className="text-gray-300 text-lg font-medium">
                                    {safeAssetsSection.description}
                                </p>
                            </div>
                            <div className="flex gap-4 sm:gap-5">
                                <div className="md:w-[272px] md:-[210px] flex flex-col justify-center items-center p-4 sm:p-6 bg-gray-600/20 rounded-2xl">
                                    <Image src={scan_icon} alt="Biometric Icon" className='w-[64px] h-[64px]' />
                                    <p className="font-medium text-2xl text-white mt-2 md:px-4 px-6">{safeAssetsSection.biometric.title}</p>
                                    <p className="text-2xl text-[#848484] font-medium">{safeAssetsSection.biometric.subtitle}</p>
                                </div>
                                <div className="md:w-[272px] md:-[210px] flex flex-col justify-center items-center p-4 sm:p-6 bg-gray-600/20 rounded-2xl ">
                                    <Image src={access_icon} alt="Access Code Icon" className='w-[64px] h-[64px]' />
                                    <p className="text-2xl font-medium text-white mt-2">{safeAssetsSection.accessCode.title}</p>
                                    <p className="text-2xl text-[#848484] font-medium">{safeAssetsSection.accessCode.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContentCard />
                    <ContentEnd />
                </div>
                <div className='pt-20'>
                    <Faq faqSection={faqSection} faqItems={faqItems} />
                </div>
                <DownloadSection />
            </div>
        </div>
    )
}
export default PaymentScreen

