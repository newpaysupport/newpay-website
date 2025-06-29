'use client'
import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from "next/image";
import card_container from "@/images/payment/Card_Container.png";
import hero_payment from "@/images/payment/hero_payment.png";
import hero_payment_mobile from "@/images/payment/hero_payment_mobile.png";
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
            <Image src={hero_payment} alt="background" width={0} height={0} className="object-cover md:block hidden" />
            <Image src={hero_payment_mobile} alt="background" width={0} height={0} className="object-cover md:hidden" />
            
            <p className="fadeInUp-no-delay xl:text-sm text-xs font-normal md:w-[30%] md:right-[10%] w-[60%] text-[#AEAEAE] text-right absolute top-[27%] lg:top-[28%] right-[8%] lg:bottom-[60%] lg:right-[12%] lg:w-[20%]">
                {locale === 'en' ?
                    <>
                        Accessible crypto wallet for everyone, everywhere. Let's embrace the future with cryptocurrency payments via NewPay!
                    </>
                    : <>
                        人人可用、全球通行的加密钱包。<br />通过 NewPay，一起迈入加密支付的未来！
                    </>
                }
            </p>
            
            <div className="absolute right-[5%] bottom-[24%] md:right-[9.2%]">
                <Image src={card_container} alt="background" width={0} height={0} className={`fadeInUp-no-delay w-[300px] h-[130px] lg:w-[640px] lg:h-[250px] 2xl:w-[670px] 2xl:h-[300px]`} />
            </div>
            
            <div className="absolute md:w-[40%] w-[80%] top-[27%] lg:top-[28%] bottom-[60%] left-[8%] lg:w-[30%] lg:bottom-[60%] md:left-[12%]">
                <Image src={logo_payment} alt="background" width={0} height={0} className="fadeInUp-no-delay w-12 h-12 lg:mb-8" />
                
                <h1 style={{
                    background: "linear-gradient(90deg, #FFF 0.13%, rgba(255, 255, 255, 0.00) 128.16%)",
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: "transparent"
                }} className="fadeInUp-no-delay text-2xl my-4 text-white leading-8 font-medium 2xl:text-5xl lg:my-6 2xl:leading-14 xl:w-full lg:w-[60%]">
                    {heroSection.title}
                </h1>
                
                <button onClick={handleToast} className="fadeInUp-no-delay rounded-full text-sm font-semibold px-6 py-3 lg:py-4 lg:px-8 text-[#FFF] cursor-pointer bg-orange-500 hover:bg-orange-600">
                    {heroSection.buttonText}
                </button>
            </div>
        </div>
    );
}

export default HeroPayment;
