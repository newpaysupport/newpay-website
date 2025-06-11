import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import { useState } from "react";

import card_container from "@/images/Card_Container.png";
import card_payment from "@/images/Front.png";
import social from "@/images/Social_Media.png";
import wallet from "@/images/WALLET.png";
import world from "@/images/World.png";
import bg_content3 from "@/images/bg_content3.png";
import icon_gift from "@/images/didi.png";
import icon_arrow from "@/images/didi_arrow.png";
import hero_payment from "@/images/hero_payment.png";
import img_share from "@/images/img_share_happy.png";
import message from "@/images/message.png";
import logo_payment from "@/images/newpay_square_mark_payment.png";

import Image from "next/image";
import DownloadSection from "./download-section";
import PhysicalCard from "./physical-card";
import VirtualCard from "./virtual-card";

const Payment = () => {
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

    {/* Content Section: Download */ }
    const downloadSection = payment.downloadSection;

    return (
        <div>
            {/* Hero Section */}
            <div className="relative">
                {/* background and content background */}
                <Image src={hero_payment} alt="background" width={0} height={0} className="object-cover md:w-full md:h-full h-[1000px]" />
                <p className="md:text-sm md:w-[20%] w-[50%] text-xs text-gray-600 text-right absolute top-[30%] bottom-[60%] right-[12%]">{heroSection.description}</p>
                <div className="absolute md:right-[9.2%] bottom-[24%]">
                    <Image src={card_container} alt="background" width={0} height={0} />
                </div>
                <div className="absolute md:w-[25%] w-[50%] top-[30%] bottom-[60%] left-[12%]">
                    <Image src={logo_payment} alt="background" width={0} height={0} className="w-12 h-12 mb-10" />
                    <h1 className="md:text-5xl md:my-6 md:leading-14 text-xl my-4 text-white leading-8">{heroSection.title}</h1>
                    <button className="rounded-full md:py-3 md:px-4 md:text-sm p-2 text-xs text-white cursor-pointer bg-orange-500 hover:bg-orange-600">{heroSection.buttonText}</button>
                </div>
            </div>

            {/* Content Section*/}
            <div className="bg-black">

                <div className="bg-white rounded-4xl pb-10">
                    {/* Content Section 1*/}
                    <div>
                        <h1 className="md:text-6xl text-xl font-semibold text-center pt-10">{contentSection1.title}</h1>
                        <p className="md:w-1/4 text-sm text-center text-gray-500 mt-4 mx-auto">{contentSection1.description}</p>
                        {/* two button */}
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
                        {/* image world */}
                        <Image src={world} alt="world" width={1000} height={500} className="mx-auto mt-10" />
                        <Image src={social} alt="social" width={1000} height={500} className="mx-auto mt-10" />
                    </div>

                    {/* content background */}
                    <div className="relative w-full h-[370px] mt-10">
                        {/* Background Image */}
                        <Image src={bg_content3} alt="social" fill className="object-cover w-full h-full" quality={100} />

                        {/* Centered Content */}
                        <div className="absolute inset-0 flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mx-auto sm:px-6 lg:px-8 gap-8">
                            {/* Left Content: Heading and Description */}
                            <div className="flex flex-col md:mt-0 mt-5 items-center lg:items-start text-center lg:text-left max-w-2xl">
                                <h2 className="md:text-4xl text-2xl font-semibold text-white mb-2">
                                    {safeAssetsSection.title}
                                </h2>
                                <p className="text-gray-300 text-sm md:text-md">
                                    {safeAssetsSection.description}
                                </p>
                            </div>

                            {/* Right Content: Biometric and Access Code */}
                            <div className="flex gap-4 sm:gap-5">
                                <div className="flex flex-col justify-center items-center sm:p-6 bg-gray-600/20 rounded-2xl max-w-md">
                                    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
                                    >
                                        <path d="M5.33203 24.0002V17.3335C5.33203 10.6935 10.692 5.3335 17.332 5.3335H23.9987" stroke="#AEAEAE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M40 5.3335H46.6667C53.3067 5.3335 58.6667 10.6935 58.6667 17.3335V24.0002" stroke="#AEAEAE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M58.668 42.6665V46.6665C58.668 53.3065 53.308 58.6665 46.668 58.6665H42.668" stroke="#AEAEAE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M23.9987 58.6667H17.332C10.692 58.6667 5.33203 53.3067 5.33203 46.6667V40" stroke="#AEAEAE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M45.3346 25.3335V38.6668C45.3346 44.0002 42.668 46.6668 37.3346 46.6668H26.668C21.3346 46.6668 18.668 44.0002 18.668 38.6668V25.3335C18.668 20.0002 21.3346 17.3335 26.668 17.3335H37.3346C42.668 17.3335 45.3346 20.0002 45.3346 25.3335Z" stroke="#AEAEAE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M50.6654 32H13.332" stroke="#AEAEAE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-xl sm:text-2xl text-white mt-2 md:px-4 px-6">{safeAssetsSection.biometric.title}</p>
                                    <p className="text-sm text-gray-300">{safeAssetsSection.biometric.subtitle}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center p-4 sm:p-6 bg-gray-600/20 rounded-2xl ">
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.388 52H20.0013C18.348 52 16.8813 51.9467 15.5746 51.76C8.5613 50.9867 6.66797 47.68 6.66797 38.6667V25.3333C6.66797 16.32 8.5613 13.0133 15.5746 12.24C16.8813 12.0533 18.348 12 20.0013 12H29.228" stroke="#AEAEAE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M40.0508 12H43.9974C45.6508 12 47.1174 12.0533 48.4241 12.24C55.4374 13.0133 57.3308 16.32 57.3308 25.3333V38.6667C57.3308 47.68 55.4374 50.9867 48.4241 51.76C47.1174 51.9467 45.6508 52 43.9974 52H40.0508" stroke="#AEAEAE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M40 5.3335V58.6668" stroke="#AEAEAE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M29.5882 31.9998H29.6122" stroke="#AEAEAE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.9242 31.9998H18.9481" stroke="#AEAEAE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className="text-xl sm:text-2xl text-white mt-2">{safeAssetsSection.accessCode.title}</p>
                                    <p className="text-sm text-gray-300">{safeAssetsSection.accessCode.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section: Card */}
                    <div className="mt-8 sm:mt-12 lg:mt-16">
                        <Image src={card_payment} alt="card payment" width={0} height={0} sizes="100vw" className="mx-auto w-full max-w-md sm:max-w-lg my-4 sm:my-6" />
                        <Image src={wallet} alt="Wallet" width={0} height={0} sizes="100vw" className="mx-auto w-full max-w-md sm:max-w-lg" />

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
                            <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12.8066C0 6.17922 5.37258 0.806641 12 0.806641H52C58.6274 0.806641 64 6.17922 64 12.8066V52.8066C64 59.4341 58.6274 64.8066 52 64.8066H12C5.37258 64.8066 0 59.4341 0 52.8066V12.8066Z" fill="#F8F8F8" />
                                <path d="M0 12.8066C0 6.17922 5.37258 0.806641 12 0.806641H52C58.6274 0.806641 64 6.17922 64 12.8066V52.8066C64 59.4341 58.6274 64.8066 52 64.8066H12C5.37258 64.8066 0 59.4341 0 52.8066V12.8066Z" fill="url(#paint0_linear_390_3879)" fill-opacity="0.2" />
                                <path d="M45.2799 29.4736H18.6133V42.807C18.6133 47.807 20.2799 49.4736 25.2799 49.4736H38.6133C43.6133 49.4736 45.2799 47.807 45.2799 42.807V29.4736Z" stroke="#FF6910" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M47.8346 24.473V26.1396C47.8346 27.973 46.9513 29.473 44.5013 29.473H19.5013C16.9513 29.473 16.168 27.973 16.168 26.1396V24.473C16.168 22.6396 16.9513 21.1396 19.5013 21.1396H44.5013C46.9513 21.1396 47.8346 22.6396 47.8346 24.473Z" stroke="#FF6910" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M31.398 21.1404H22.198C21.6313 20.5237 21.648 19.5737 22.248 18.9737L24.6147 16.607C25.2313 15.9904 26.248 15.9904 26.8647 16.607L31.398 21.1404Z" stroke="#FF6910" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M41.7859 21.1404H32.5859L37.1193 16.607C37.7359 15.9904 38.7526 15.9904 39.3693 16.607L41.7359 18.9737C42.3359 19.5737 42.3526 20.5237 41.7859 21.1404Z" stroke="#FF6910" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M26.9023 29.4736V38.0403C26.9023 39.3736 28.369 40.157 29.4857 39.4403L31.0523 38.407C31.619 38.0403 32.3357 38.0403 32.8857 38.407L34.369 39.407C35.469 40.1403 36.9523 39.357 36.9523 38.0236V29.4736H26.9023Z" stroke="#FF6910" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_390_3879" x1="32" y1="0.806641" x2="32" y2="64.8066" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6910" stop-opacity="0" />
                                        <stop offset="1" stop-color="#FF6910" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <h1 className="text-5xl font-semibold pt-4 sm:pt-6 lg:pt-10 text-left">
                                {shareHappyMoment.title}
                            </h1>
                            <p className="text-left text-gray-500 mt-2 sm:mt-4 w-full sm:w-[70%] text-sm sm:text-base">
                                {shareHappyMoment.description}
                            </p>

                            {/* Card Gift */}
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

                            {/* Card Receive */}
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
                <div className="mt-16 md:pb-6 md:p-0 p-6">
                    <div className="flex md:flex-row flex-col mx-auto max-w-7xl justify-between">
                        <div className="text-white">
                            <h1 className="text-6xl font-semibold">
                                {faqSection.title}
                            </h1>
                            <p className="text-md mt-3">
                                {faqSection.subtitle}
                            </p>
                            <Image src={message} alt="Message Icon" width={205} height={180} />
                        </div>
                        <div className="text-white">
                            {faqItems.map((item, index) => {
                                return (
                                    <details key={item.question} className="border-b border-gray-800 py-6 group">
                                        <summary className="md:w-[640px] w-full flex justify-between items-center text-left focus:outline-none cursor-pointer">
                                            <h3 className="md:text-xl text-sm font-medium">{item.question}</h3>
                                            <span className="text-3xl transition-transform duration-300 group-open:rotate-45">
                                                +
                                            </span>
                                        </summary>
                                        <p className="md:text-md md:w-[640px] w-full text-xs mt-4 text-gray-400 leading-6 font-medium">
                                            {item.answer}
                                        </p>
                                    </details>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* content Download section */}
                <DownloadSection downloadSection={downloadSection} />
            </div>
        </div>
    )
}
export default Payment

