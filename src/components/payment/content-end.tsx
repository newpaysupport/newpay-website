import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from 'next/image';

import img_bottom_left from "@/images/payment/content_end/img_bottom_left.png";
import img_center from "@/images/payment/content_end/img_center.png";
import img_top_right from "@/images/payment/content_end/img_top_right.png";
import icon_gift from "@/images/payment/didi.svg";
import icon_arrow from "@/images/payment/didi_arrow.svg";
import gift from "@/images/payment/gift.svg";
import { useInView } from 'motion/react';
import { useRef } from 'react';
import AnimationFade from '../animation/animation-fade';
import BoxWrapped from '../common/box-wrapped';
const ContentEnd = () => {
    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;
    {/* Content: Share Happy Moment */ }
    const shareHappyMoment = payment.shareHappyMoment;

    {/* Card Gift */ }
    const giftCard = payment.shareHappyMoment.giftCard;

    {/* Card Receive */ }
    const receiveCard = payment.shareHappyMoment.receiveCard;
    {/* Content Section: Card */ }
    const cardSection = payment.cardSection;

    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: false, amount: 0.5 });

    return (
        <BoxWrapped className='lg:pt-20 lg:pb-30 py-8 lg:px-30 px-6'>
            <AnimationFade inView={isInView} direction='up-title'>
                <div
                    ref={textRef}
                    className="lg:pb-30 pb-12 text-center"
                >
                    <h1 className="lg:text-6xl text-[32px] text-[#1B1B1B] font-semibold">
                        {cardSection.title}
                    </h1>
                    <p className="lg:text-2xl text-base font-medium text-[#AEAEAE] mt-4 mx-auto xl:w-[35%]">
                        {cardSection.description}
                    </p>
                </div>
            </AnimationFade>


            <div className="lg:pt-30 pt-16 flex flex-col lg:flex-row items-center justify-between">
                <div className="flex flex-col w-full lg:w-[40%]">
                    <Image src={gift} alt="Share Happy Moment" className='animation-gift-box xl:w-16 xl:h-16 h-12 w-12' />
                    <h1 className="lg:text-6xl text-[32px] font-semibold pt-4 sm:pt-6 xl:pt-10 text-left text-[#1B1B1B]">
                        {shareHappyMoment.title}
                    </h1>
                    <p className="text-left text-[#666] pt-4 w-[80%] lg:text-lg text-sm font-medium">
                        {shareHappyMoment.description}
                    </p>
                    <div className='xl:pt-22 pt-6'>
                        <div className="flex items-center xl:justify-between xl:gap-0 gap-10 bg-orange-500 text-white rounded-[20px] p-4.5 xl:p-6 shadow-lg lg:w-[400px] w-fit">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0">
                                    <Image src={icon_gift} alt="Gift Icon" width={24} height={24} className="w-[45px] h-[45px] xl:w-[60px] xl:h-[60px]" />
                                </div>
                                <div>
                                    <p className="lg:text-2xl text-lg font-semibold">{giftCard.title}</p>
                                    <p className="lg:text-lg text-sm font-medium">{giftCard.subtitle}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">{giftCard.amount}</p>
                            </div>
                        </div>
                        <div className="flex items-center xl:justify-between xl:gap-0 gap-10 bg-green-400 text-white rounded-[20px] p-4.5 xl:p-6 shadow-lg mt-6 ml-[10%] lg:ml-[15%] lg:w-[400px] w-fit">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0">
                                    <Image src={icon_arrow} alt="Receive Icon" width={24} height={24} className="w-[45px] h-[45px] xl:w-[60px] xl:h-[60px]" />
                                </div>
                                <div>
                                    <p className="lg:text-2xl text-lg  font-semibold">{receiveCard.title}</p>
                                    <p className="lg:text-lg text-sm font-medium">{receiveCard.subtitle}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">{receiveCard.amount}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative xl:w-[50%] xl:h-[680px] w-[350px] h-[370px] xl:mt-0 mt-12">
                    <Image src={img_top_right} alt="Top Right Decoration" className="absolute top-0 xl:-right-[8%] right-0 z-10 animate-translateY xl:w-[250px] xl:h-[250px] w-[135px]" />
                    <Image src={img_bottom_left} alt="Bottom Left Decoration" className="absolute left-[10%] bottom-[12%] xl:bottom-[8%] xl:left-[2%] z-20 animate-translateY xl:w-[165px] xl:h-[165px] w-[90px]" />
                    <Image src={img_center} alt="Center Decoration" className="absolute xl:right-5 m-auto z-30 xl:w-full xl:h-full w-[370px] h-[350px]" />
                </div>
            </div>
        </BoxWrapped>
    )
}

export default ContentEnd