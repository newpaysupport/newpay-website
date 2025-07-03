"use client"
import message from '@/images/payment/message.png';
import Image from 'next/image';
import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import arrow_right from '@/images/payment/arrow_right.svg';
import { FAQ } from '@/interfaces/common';
import BoxWrapped from '../common/box-wrapped';


const Faq = () => {

    const t = useTranslations("payment.faqSection");

    const locale = useLocale();
    // const payment = locale === 'en' ? enBlog : ziBlog;

    // {/* Content Section: FAQ */ }
    // const faqSection = payment.faqSection;
    // const faqItems = faqSection.faqItems;
    return (
        <BoxWrapped className="2xl:py-20 xl:px-30 px-6 py-12 flex lg:flex-row flex-col justify-between mx-auto">
            <div className="text-white flex lg:flex-col flex-row justify-between lg:h-[450px]">
                <div>
                    <h1 className="lg:text-6xl text-[32px] font-semibold">
                        {t('title')}
                    </h1>
                    <p className="lg:text-base text-sm mt-3 text-[#AEAEAE]">
                        {t('subtitle')}
                    </p>
                    <Link href={`/${locale}/faq-help`} className='lg:block hidden'>
                        <button className='lg:mt-10 bg-[#1C1C1C] text-lg rounded-2xl px-6 py-4 font-semibold cursor-pointer'>
                            <p className="flex justify-center items-center gap-3"> {locale === 'en' ? 'View more' : '查看更多'} <Image src={arrow_right} alt='arrow' className="font-light group-hover:translate-x-1.5 transition ease-in-out animate-translateX" /></p>
                        </button>
                    </Link>
                </div>
                <Image src={message} alt="Message Icon" width={205} height={180} className='lg:w-full lg:h-[180px] w-[190px] h-[150px] object-cover object-bottom' />
            </div>
            <div className="text-white">
                {t.raw("faqItems").map((item: FAQ, index: number) => {
                    return (
                        <details key={index} className="cursor-pointer focus:outline-none group border-b border-gray-800 ">
                            <summary className="lg:w-[640px] w-full flex justify-between items-center text-left py-6">
                                <p className="lg:text-2xl text-lg font-medium lg:w-full w-[90%]">{item.question}</p>
                                <span className="text-3xl transition-transform duration-300 group-open:rotate-45">
                                    +
                                </span>
                            </summary>
                            <p className="lg:text-base text-sm lg:w-[640px] w-full pb-6 text-[#AEAEAE] leading-6 font-medium">
                                {item.answer}
                            </p>
                        </details>
                    )
                })}
                <Link href={`/${locale}/faq-help`} className='lg:hidden flex justify-center'>
                    <button className='mt-6 bg-[#1C1C1C] text-sm text-[#fff] rounded-2xl px-6 py-4 font-semibold cursor-pointer'>
                        <p className="flex justify-center items-center gap-3"> {locale === 'en' ? 'View more' : '查看更多'} <Image src={arrow_right} alt='arrow' className="font-light group-hover:translate-x-1.5 transition ease-in-out animate-translateX" /></p>
                    </button>
                </Link>
            </div>
        </BoxWrapped>
    )
}

export default Faq
