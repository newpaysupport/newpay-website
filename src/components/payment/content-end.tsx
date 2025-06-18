import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from 'next/image';

import icon_gift from "@/images/payment/didi.png";
import icon_arrow from "@/images/payment/didi_arrow.png";
import gift from "@/images/payment/gift.svg";
import img_share from "@/images/payment/img_share_happy.png";
import img_top_right from "@/images/payment/content_end/img_top_right.png";
import img_bottom_left from "@/images/payment/content_end/img_bottom_left.png";
import img_center from "@/images/payment/content_end/img_center.png";
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
    return (
        <div className='pt-20 pb-30 container mx-auto'>
            <div className="pb-30 text-center">
                <h1 className="md:text-6xl text-3xl font-semibold pt-4 sm:pt-6 lg:pt-10">
                    {cardSection.title}
                </h1>
                <p className="text-gray-500 mt-2 sm:mt-4 mx-auto w-full sm:w-[50%] lg:w-[20%] text-sm sm:text-base">
                    {cardSection.description}
                </p>
            </div>

            <div className="pt-30 flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col w-full md:w-[35%]">
                    <Image src={gift} alt="Share Happy Moment" />

                    <h1 className="text-6xl font-semibold pt-4 sm:pt-6 lg:pt-10 text-left">
                        {shareHappyMoment.title}
                    </h1>
                    <p className="text-left text-gray-500 pt-4 sm:mt-4 w-full sm:w-[70%] text-lg font-medium">
                        {shareHappyMoment.description}
                    </p>

                    <div className='pt-22'>
                        <div className="flex items-center justify-between bg-orange-500 text-white rounded-2xl p-2 sm:p-3 md:p-4 shadow-md md:w-[400px]">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0">
                                    <Image src={icon_gift} alt="Gift Icon" width={24} height={24} className="w-8 h-8 md:w-12 md:h-12" />
                                </div>
                                <div>
                                    <p className="text-2xl font-semibold">{giftCard.title}</p>
                                    <p className="text-lg font-medium">{giftCard.subtitle}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-base sm:text-lg font-semibold">{giftCard.amount}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-green-400 text-white rounded-2xl p-2 sm:p-3 md:p-4 shadow-md mt-6 ml-0 md:ml-20 md:w-[400px]">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0">
                                    <Image src={icon_arrow} alt="Receive Icon" width={24} height={24} className="w-8 md:w-12 h-8 md:h-12" />
                                </div>
                                <div>
                                    <p className="text-2xl font-semibold">{receiveCard.title}</p>
                                    <p className="text-lg font-medium">{receiveCard.subtitle}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-base sm:text-lg font-semibold">{receiveCard.amount}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative md:w-[700px] md:h-[680px]">
                    <Image src={img_top_right} alt="Top Right Decoration" className="absolute top-0 right-0 z-10 animate-translateY " />
                    <Image src={img_bottom_left} alt="Bottom Left Decoration" className="absolute bottom-[11%] left-[13%] z-20 animate-translateY " />
                    <Image src={img_center} alt="Center Decoration" className="absolute inset-0 m-auto z-30 " />



                </div>
            </div>

        </div>
    )
}

export default ContentEnd