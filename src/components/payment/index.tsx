'use client'
import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import { useRef, useState } from "react";

import card_container from "@/images/payment/Card_Container.png";
import access_icon from "@/images/payment/access.svg";
import bg_content3 from "@/images/payment/bg_content3.png";

import hero_payment from "@/images/payment/hero_payment.png";
import logo_payment from "@/images/payment/newpay_square_mark_payment.png";
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

const PaymentScreen = () => {
    const [activeCard, setActiveCard] = useState<'virtual' | 'physical'>('virtual');

    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;

    {/* Hero Section */ }
    const heroSection = payment.heroSection;

    {/* Content Section 1*/ }
    const contentSection1 = payment.contentSection1;
    const virtualCard = contentSection1.virtualCard;
    const physicalCard = contentSection1.physicalCard

    {/* Content: Virtual Card */ }

    {/* Centered Content */ }
    const safeAssetsSection = payment.safeAssetsSection;

    {/* Content Section: FAQ */ }
    const faqSection = payment.faqSection;
    const faqItems = faqSection.faqItems;


    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: false, amount: 0.5 });


    return (
        <div>
            {/* Hero Section */}
            <div className="relative">
                <Image src={hero_payment} alt="background" width={0} height={0} className="object-cover md:w-full md:h-full h-[1000px]" />
                <p className="fadeInUp-no-delay md:text-sm md:w-[20%] w-[50%] text-xs text-gray-600 text-right absolute top-[30%] bottom-[60%] right-[12%]">{heroSection.description}</p>
                <div className="absolute md:right-[9.2%] bottom-[24%]">
                    <Image src={card_container} alt="background" width={0} height={0} className='fadeInUp-no-delay' />
                </div>
                <div className="absolute md:w-[25%] w-[50%] top-[30%] bottom-[60%] left-[12%]">
                    <Image src={logo_payment} alt="background" width={0} height={0} className="fadeInUp-no-delay w-12 h-12 mb-10" />
                    <h1 style={{
                        background: "linear-gradient(90deg, #FFF 0.13%, rgba(255, 255, 255, 0.00) 128.16%)",
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: "transparent"
                    }} className="fadeInUp-no-delay md:text-5xl md:my-6 md:leading-14 my-4 text-white leading-8">
                        {heroSection.title}
                    </h1>
                    <button className="fadeInUp-no-delay rounded-full md:py-4 md:px-8 text-md font-semibold p-2 text-white cursor-pointer bg-orange-500 hover:bg-orange-600">{heroSection.buttonText}</button>
                </div>
            </div>

            {/* Content Section*/}
            <div className="bg-black">
                <div className="bg-white rounded-4xl pb-10 pt-20">
                    {/* Content Section 1*/}
                    <AnimationFade direction="up" inView={isInView}>
                        <div ref={textRef}>
                            <h1 className="md:text-6xl text-xl font-semibold text-center">{contentSection1.title}</h1>
                            <p className="md:w-1/4 text-sm text-center text-gray-500 mt-4 mx-auto">{contentSection1.description}</p>
                            <div className="w-fit mx-auto text-md mt-8">
                                <button
                                    className={`${activeCard === 'virtual' ? 'bg-black text-white' : ''} border border-gray-300 font-semibold py-3 px-7 rounded-full mx-2 cursor-pointer`}
                                    onClick={() => setActiveCard('virtual')}
                                >
                                    {virtualCard.label}
                                </button>
                                <button
                                    className={`${activeCard === 'virtual' ? '' : 'bg-black text-white'} border border-gray-300 font-semibold py-3 px-7 rounded-full mx-2 cursor-pointer`}
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
                            <AnimationFade key="virtual" direction="right">
                                <VirtualCard
                                    virtualItems={virtualCard.virtualItems}
                                    labelButton={contentSection1.labelButton}
                                />
                            </AnimationFade>
                        ) : (
                            <AnimationFade key="physical" direction="left">
                                <PhysicalCard
                                    physicalItems={physicalCard.physicalItems}
                                    labelButton={contentSection1.labelButton}
                                />
                            </AnimationFade>
                        )}

                    </AnimatePresence>


                    {/* Content Section 2*/}
                    <ContentMain />
                    {/* content background */}
                    <div className="relative w-full h-[370px] mt-10">
                        <Image src={bg_content3} alt="social" fill className="object-cover w-full h-full" quality={100} />
                        <div className="absolute inset-0 flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mx-auto sm:px-6 lg:px-8 gap-8">
                            <div className="flex flex-col md:mt-0 mt-5 items-center lg:items-start text-center lg:text-left max-w-2xl">
                                <h2 className="md:text-4xl text-2xl font-semibold text-white mb-2">
                                    {safeAssetsSection.title}
                                </h2>
                                <p className="text-gray-300 text-sm md:text-md">
                                    {safeAssetsSection.description}
                                </p>
                            </div>
                            <div className="flex gap-4 sm:gap-5">
                                <div className="flex flex-col justify-center items-center sm:p-6 bg-gray-600/20 rounded-2xl max-w-md">
                                    <Image src={scan_icon} alt="Biometric Icon" />
                                    <p className="text-xl sm:text-2xl text-white mt-2 md:px-4 px-6">{safeAssetsSection.biometric.title}</p>
                                    <p className="text-sm text-gray-300">{safeAssetsSection.biometric.subtitle}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center p-4 sm:p-6 bg-gray-600/20 rounded-2xl ">
                                    <Image src={access_icon} alt="Access Code Icon" />
                                    <p className="text-xl sm:text-2xl text-white mt-2">{safeAssetsSection.accessCode.title}</p>
                                    <p className="text-sm text-gray-300">{safeAssetsSection.accessCode.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Content Section: Card */}
                    <ContentCard />
                    {/* Content: Share Happy Moment */}
                    <ContentEnd />
                </div>
                {/* content FAQ */}
                <div className='pt-20'>
                    <Faq faqSection={faqSection} faqItems={faqItems} />
                </div>
                {/* content Download section */}
                <DownloadSection />
            </div>
        </div>
    )
}
export default PaymentScreen

