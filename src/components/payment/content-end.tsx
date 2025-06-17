import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from 'next/image';

import icon_gift from "@/images/payment/didi.png";
import icon_arrow from "@/images/payment/didi_arrow.png";
import gift from "@/images/payment/gift.svg";
import img_share from "@/images/payment/img_share_happy.png";
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
        <div className='pt-20 pb-30'>
            <div className="pb-30 text-center">
                <h1 className="md:text-6xl text-3xl font-semibold pt-4 sm:pt-6 lg:pt-10">
                    {cardSection.title}
                </h1>
                <p className="text-gray-500 mt-2 sm:mt-4 mx-auto w-full sm:w-[50%] lg:w-[20%] text-sm sm:text-base">
                    {cardSection.description}
                </p>
            </div>
            <div className="pt-30 flex flex-col md:flex-row mx-auto max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
    )
}

export default ContentEnd