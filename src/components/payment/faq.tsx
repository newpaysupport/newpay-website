import message from '@/images/payment/message.png';
import Image from 'next/image';
import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import arrow_right from '@/images/payment/arrow_right.svg';


const Faq = () => {
    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;

    {/* Content Section: FAQ */ }
    const faqSection = payment.faqSection;
    const faqItems = faqSection.faqItems;
    return (
        <div className="lg:py-20 lg:px-30 px-4 py-12 ">
            <div className="flex md:flex-row flex-col mx-auto max-w-7xl justify-between">
                <div className="text-white flex md:flex-col flex-row justify-between md:h-[450px]">
                    <div>
                        <h1 className="md:text-6xl text-[32px] font-semibold">
                            {faqSection.title}
                        </h1>
                        <p className="md:text-base text-sm mt-3 text-[#AEAEAE]">
                            {faqSection.subtitle}
                        </p>
                        <Link href={`/${locale}/faq-help`} className='md:block hidden'>
                            <button className='lg:mt-10 bg-[#1C1C1C] text-lg rounded-2xl px-6 py-4 font-semibold cursor-pointer'>
                                <p className="flex justify-center items-center gap-3"> {locale === 'en' ? 'View more' : '查看更多'} <Image src={arrow_right} alt='arrow' className="font-light group-hover:translate-x-1.5 transition ease-in-out animate-translateX" /></p>
                            </button>
                        </Link>
                    </div>
                    <Image src={message} alt="Message Icon" width={205} height={180} className='md:w-full md:h-[180px] w-[190px] h-[150px] object-cover object-bottom' />
                </div>
                <div className="text-white">
                    {faqItems.map((item, index) => {
                        return (
                            <details key={item.question} className="cursor-pointer focus:outline-none group border-b border-gray-800 ">
                                <summary className="md:w-[640px] w-full flex justify-between items-center text-left py-6">
                                    <p className="md:text-2xl text-lg font-medium md:w-full w-[90%]">{item.question}</p>
                                    <span className="text-3xl transition-transform duration-300 group-open:rotate-45">
                                        +
                                    </span>
                                </summary>
                                <p className="md:text-base text-sm md:w-[640px] w-full pb-6 text-[#AEAEAE] leading-6 font-medium">
                                    {item.answer}
                                </p>
                            </details>
                        )
                    })}
                    <Link href={`/${locale}/faq-help`} className='md:hidden flex justify-center'>
                        <button className='mt-6 bg-[#1C1C1C] text-sm text-[#fff] rounded-2xl px-6 py-4 font-semibold cursor-pointer'>
                            <p className="flex justify-center items-center gap-3"> {locale === 'en' ? 'View more' : '查看更多'} <Image src={arrow_right} alt='arrow' className="font-light group-hover:translate-x-1.5 transition ease-in-out animate-translateX" /></p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Faq
