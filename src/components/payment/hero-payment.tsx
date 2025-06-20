'use client'
import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from "next/image";
import card_container from "@/images/payment/Card_Container.png";
import hero_payment from "@/images/payment/hero_payment.png";
import logo_payment from "@/images/payment/newpay_square_mark_payment.png";
import ToastCustom from '../common/toast';
import toast from 'react-hot-toast';

const HeroPayment = () => {
    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;

    {/* Hero Section */ }
    const heroSection = payment.heroSection;
    const handleToast = () => {
        toast.custom(<ToastCustom type='warning' />)
    }
    return (
        <div className="relative">
            <Image src={hero_payment} alt="background" width={0} height={0} className="object-cover md:w-full md:h-full h-[1000px]" />
            <p className="fadeInUp-no-delay font-normal md:w-[20%] w-[50%] text-sm text-[#AEAEAE] text-right absolute top-[30%] bottom-[60%] right-[12%]">{heroSection.description}</p>
            <div className="absolute md:right-[9.2%] bottom-[24%]">
                <Image src={card_container} alt="background" width={0} height={0} className='fadeInUp-no-delay w-[670px] h-[300px]' />
            </div>
            <div className="absolute md:w-[25%] w-[50%] top-[30%] bottom-[60%] left-[12%]">
                <Image src={logo_payment} alt="background" width={0} height={0} className="fadeInUp-no-delay w-12 h-12 mb-10" />
                <h1 style={{
                    background: "linear-gradient(90deg, #FFF 0.13%, rgba(255, 255, 255, 0.00) 128.16%)",
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: "transparent"
                }} className="fadeInUp-no-delay md:text-5xl md:my-6 md:leading-14 my-4 text-white leading-8 font-medium">
                    {heroSection.title}
                </h1>
                <button onClick={handleToast} className="fadeInUp-no-delay rounded-full md:py-4 md:px-8 text-md font-semibold p-2 text-[#FFF] cursor-pointer bg-orange-500 hover:bg-orange-600">{heroSection.buttonText}</button>
            </div>
        </div>
    )
}

export default HeroPayment