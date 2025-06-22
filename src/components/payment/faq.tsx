import React from 'react'
import Image from 'next/image'
import message from '@/images/payment/message.png'

type FaqSectionProps = {
    faqSection: {
        title: string;
        subtitle: string;
    };
    faqItems: {
        question: string;
        answer: string;
    }[];
}


const Faq = ({ faqSection, faqItems }: FaqSectionProps) => {
    return (
        <div className="md:py-20 md:p-0 p-6">
            <div className="flex md:flex-row flex-col mx-auto max-w-7xl justify-between">
                <div className="text-white">
                    <h1 className="text-6xl font-semibold">
                        {faqSection.title}
                    </h1>
                    <p className="text-md mt-3 text-[#AEAEAE]">
                        {faqSection.subtitle}
                    </p>
                    <Image src={message} alt="Message Icon" width={205} height={180} />
                </div>
                <div className="text-white">
                    {faqItems.map((item, index) => {
                        return (
                            <details key={item.question} className="border-b border-gray-800 py-6 group">
                                <summary className="md:w-[640px] w-full flex justify-between items-center text-left focus:outline-none cursor-pointer">
                                    <p className="md:text-2xl text-sm font-medium">{item.question}</p>
                                    <span className="text-3xl transition-transform duration-300 group-open:rotate-45">
                                        +
                                    </span>
                                </summary>
                                <p className="md:text-md md:w-[640px] w-full mt-8 text-[#AEAEAE] leading-6 font-medium">
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
