'use client'
import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import { useState } from "react";

import card_container from "@/images/payment/Card_Container.png";
import card_payment from "@/images/payment/Front.png";
import social from "@/images/payment/Social_Media.png";
import wallet from "@/images/payment/WALLET.png";
import world from "@/images/payment/World.png";
import access_icon from "@/images/payment/access.svg";
import bg_content3 from "@/images/payment/bg_content3.png";
import icon_gift from "@/images/payment/didi.png";
import icon_arrow from "@/images/payment/didi_arrow.png";
import gift from "@/images/payment/gift.svg";
import hero_payment from "@/images/payment/hero_payment.png";
import img_share from "@/images/payment/img_share_happy.png";
import logo_payment from "@/images/payment/newpay_square_mark_payment.png";
import scan_icon from "@/images/payment/scan.svg";

import Image from "next/image";
import DownloadSection from './download-section';
import Faq from './faq';
import PhysicalCard from "./physical-card";
import VirtualCard from "./virtual-card";

const PaymentScreen = () => {
    const [activeCard, setActiveCard] = useState(true);

    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;

    {/* Hero Section */ }
    const heroSection = payment.heroSection;

    {/* Content Section 1*/ }
    const contentSection1 = payment.contentSection1;
    const virtualCard = contentSection1.virtualCard;
    const physicalCard = contentSection1.physicalCard

    {/* Content: Virtual Card */ }

    {/* Content Section 2*/ }
    const contentSection2 = payment.contentSection2;

    {/* Centered Content */ }
    const safeAssetsSection = payment.safeAssetsSection;

    {/* Content Section: Card */ }
    const cardSection = payment.cardSection;

    {/* Content: Share Happy Moment */ }
    const shareHappyMoment = payment.shareHappyMoment;

    {/* Card Gift */ }
    const giftCard = payment.shareHappyMoment.giftCard;

    {/* Card Receive */ }
    const receiveCard = payment.shareHappyMoment.receiveCard;

    {/* Content Section: FAQ */ }
    const faqSection = payment.faqSection;
    const faqItems = faqSection.faqItems;

    return (
        <div>
            {/* Hero Section */}
            <div className="relative">
                <Image src={hero_payment} alt="background" width={0} height={0} className="object-cover md:w-full md:h-full h-[1000px]" />
                <p className="fadeInUp-no-delay md:text-sm md:w-[20%] w-[50%] text-xs text-gray-600 text-right absolute top-[30%] bottom-[60%] right-[12%]">{heroSection.description}</p>
                <div className="absolute md:right-[9.2%] bottom-[24%]">
                    <Image src={card_container} alt="background" width={0} height={0} className='fadeInUp-no-delay'/>
                </div>
                <div className="absolute md:w-[25%] w-[50%] top-[30%] bottom-[60%] left-[12%]">
                    <Image src={logo_payment} alt="background" width={0} height={0} className="fadeInUp-no-delay w-12 h-12 mb-10" />
                    <h1 style={{
                        background: "linear-gradient(90deg, #FFF 0.13%, rgba(255, 255, 255, 0.00) 128.16%)",
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: "transparent"
                    }} className="fadeInUp-no-delay md:text-5xl md:my-6 md:leading-14 text-xl my-4 text-white leading-8">
                        {heroSection.title}
                    </h1>
                    <button className="fadeInUp-no-delay rounded-full md:py-3 md:px-4 md:text-sm p-2 text-xs text-white cursor-pointer bg-orange-500 hover:bg-orange-600">{heroSection.buttonText}</button>
                </div>
            </div>

            {/* Content Section*/}
            <div className="bg-black">
                <div className="bg-white rounded-4xl pb-10">
                    {/* Content Section 1*/}
                    <div>
                        <h1 className="md:text-6xl text-xl font-semibold text-center pt-10">{contentSection1.title}</h1>
                        <p className="md:w-1/4 text-sm text-center text-gray-500 mt-4 mx-auto">{contentSection1.description}</p>
                        <div className="w-fit mx-auto text-md mt-8">
                            <button
                                className={`${activeCard ? 'bg-black text-white' : ''} border border-gray-300 font-semibold py-3 px-7 rounded-full mx-2 cursor-pointer`}
                                onClick={() => setActiveCard(true)}
                            >
                                {virtualCard.label}
                            </button>
                            <button
                                className={`${activeCard ? '' : 'bg-black text-white'} border border-gray-300 font-semibold py-3 px-7 rounded-full mx-2 cursor-pointer`}
                                onClick={() => setActiveCard(false)}
                            >
                                {physicalCard.label}
                            </button>
                        </div>
                    </div>
                    {/* content Virtual and Physical Card*/}
                    {activeCard ? <VirtualCard virtualItems={virtualCard.virtualItems} labelButton={contentSection1.labelButton} />
                        : <PhysicalCard physicalItems={physicalCard.physicalItems} labelButton={contentSection1.labelButton} />}

                    {/* Content Section 2*/}
                    <div className="mt-30">
                        <h1 className="md:text-6xl text-2xl font-semibold text-center pt-10">{contentSection2.title}</h1>
                        <p className="md:text-md text-sm text-center text-gray-500 mt-4 mx-auto">{contentSection2.description}</p>
                        <Image src={world} alt="world" width={1000} height={500} className="mx-auto mt-10" />
                        <Image src={social} alt="social" width={1000} height={500} className="mx-auto mt-10" />
                    </div>

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
                    <div className="mt-8 sm:mt-12 lg:mt-16">
                        <Image src={card_payment} alt="card payment" sizes="100vw" className="mx-auto w-full max-w-md sm:max-w-lg my-4 sm:my-6" />
                        <Image src={wallet} alt="Wallet" sizes="100vw" className="mx-auto w-full max-w-md sm:max-w-lg" />

                        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
                            <h1 className="md:text-6xl text-3xl font-semibold pt-4 sm:pt-6 lg:pt-10">
                                {cardSection.title}
                            </h1>
                            <p className="text-gray-500 mt-2 sm:mt-4 mx-auto w-full sm:w-[50%] lg:w-[20%] text-sm sm:text-base">
                                {cardSection.description}
                            </p>
                        </div>
                    </div>
                    {/* Content: Share Happy Moment */}
                    <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col md:flex-row mx-auto max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col w-full md:w-[35%]">
                            <Image src={gift} alt="Share Happy Moment" />

                            <h1 className="text-5xl font-semibold pt-4 sm:pt-6 lg:pt-10 text-left">
                                {shareHappyMoment.title}
                            </h1>
                            <p className="text-left text-gray-500 mt-2 sm:mt-4 w-full sm:w-[70%] text-sm sm:text-base">
                                {shareHappyMoment.description}
                            </p>
                            <div className="flex items-center justify-between bg-orange-500 text-white rounded-2xl p-2 sm:p-3 md:p-4 shadow-md w-full max-w-xs mt-8 sm:mt-12 lg:mt-16">
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="flex-shrink-0">
                                        <Image src={icon_gift} alt="Gift Icon" width={24} height={24} className="w-8 h-8 md:w-12 md:h-12" />
                                    </div>
                                    <div>
                                        <p className="text-base sm:text-lg font-semibold">{giftCard.title}</p>
                                        <p className="text-xs sm:text-sm">{giftCard.subtitle}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-base sm:text-lg font-semibold">{giftCard.amount}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-green-400 text-white rounded-2xl p-2 sm:p-3 md:p-4 shadow-md w-full max-w-xs mt-4 sm:mt-6 ml-0 sm:ml-6 lg:ml-20">
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="flex-shrink-0">
                                        <Image src={icon_arrow} alt="Receive Icon" width={24} height={24} className="w-8 md:w-12 h-8 md:h-12" />
                                    </div>
                                    <div>
                                        <p className="text-base sm:text-lg font-semibold">{receiveCard.title}</p>
                                        <p className="text-xs sm:text-sm">{receiveCard.subtitle}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-base sm:text-lg font-semibold">{receiveCard.amount}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[50%] mt-8 md:mt-0">
                            <Image src={img_share} alt="Share Happy Moment" width={0} height={0} sizes="100vw" className="mx-auto w-full max-w-md sm:max-w-lg" />
                        </div>
                    </div>
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

