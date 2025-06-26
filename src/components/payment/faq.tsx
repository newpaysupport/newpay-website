import message from '@/images/payment/message.png';
import Image from 'next/image';
import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';


const Faq = () => {
    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;

    {/* Content Section: FAQ */ }
    const faqSection = payment.faqSection;
    const faqItems = faqSection.faqItems;
    return (
        <div className="md:py-20 md:px-30 px-4 py-12">
            <div className="flex md:flex-row flex-col mx-auto max-w-7xl justify-between">
                <div className="text-white flex md:flex-col flex-row justify-between md:h-[450px]">
                    <div>
                        <h1 className="md:text-6xl text-[32px] font-semibold">
                            {faqSection.title}
                        </h1>
                        <p className="md:text-base text-sm mt-3 text-[#AEAEAE]">
                            {faqSection.subtitle}
                        </p>
                    </div>
                    <Image src={message} alt="Message Icon" width={205} height={180} className='md:w-full md:h-[180px] w-[190px] h-[150px] object-cover object-bottom' />
                </div>
                <div className="text-white">
                    {faqItems.map((item, index) => {
                        return (
                            <details key={item.question} className="border-b border-gray-800 py-6 group">
                                <summary className="md:w-[640px] w-full flex justify-between items-center text-left focus:outline-none cursor-pointer">
                                    <p className="md:text-2xl text-lg font-medium md:w-full w-[90%]">{item.question}</p>
                                    <span className="text-3xl transition-transform duration-300 group-open:rotate-45">
                                        +
                                    </span>
                                </summary>
                                <p className="md:text-base text-sm md:w-[640px] w-full mt-8 text-[#AEAEAE] leading-6 font-medium">
                                    {item.answer}
                                </p>
                            </details>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Faq
