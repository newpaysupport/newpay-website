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

    const heroSection = payment.heroSection;
    const handleToast = () => {
        toast.custom(<ToastCustom type='warning' />);
    };
    return (
        <div className="relative">
            <Image src={hero_payment} alt="background" width={0} height={0} className="object-cover md:w-full md:h-full h-[800px] w-full" />
            <p className="fadeInUp-no-delay lg:text-sm text-xs font-normal w-[60%]  text-[#AEAEAE] text-right absolute top-[26%] right-[6%]  2xl:top-[30%] md:bottom-[60%] md:right-[12%] md:w-[20%]">
                {locale === 'en' ?
                    <>
                        Accessible crypto wallet for everyone, everywhere. Let’s embrace the future with cryptocurrency payments via NewPay!
                    </>
                    : <>
                        人人可用、全球通行的加密钱包。<br />通过 NewPay，一起迈入加密支付的未来！
                    </>
                }
            </p>
            <div className="absolute right-0 bottom-[24%] md:right-[9.2%]">
                <Image src={card_container} alt="background" width={0} height={0} className={`fadeInUp-no-delay w-[320px] h-[145px] md:w-[640px] md:h-[250px] 2xl:w-[670px] 2xl:h-[300px]`} />
            </div>
            <div className="absolute w-[80%] top-[26%] bottom-[60%] left-[6%] md:w-[30%] 2xl:top-[30%] md:bottom-[60%] md:left-[12%]">
                <Image src={logo_payment} alt="background" width={0} height={0} className="fadeInUp-no-delay w-12 h-12 mb-8" />
                <h1 style={{
                    background: "linear-gradient(90deg, #FFF 0.13%, rgba(255, 255, 255, 0.00) 128.16%)",
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: "transparent"
                }} className="fadeInUp-no-delay text-2xl my-4 text-white leading-8 font-medium 2xl:text-5xl md:my-6 2xl:leading-14 lg:w-full w-[60%]">
                    {heroSection.title}
                </h1>
                <button onClick={handleToast} className="fadeInUp-no-delay rounded-full text-sm font-semibold px-6 py-3 md:py-4 md:px-8 text-[#FFF] cursor-pointer bg-orange-500 hover:bg-orange-600">{heroSection.buttonText}</button>
            </div>
        </div>
    );
}

export default HeroPayment;
