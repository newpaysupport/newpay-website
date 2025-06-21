"use client"
import arrowRight from "@/images/faq-help/arrow-right.svg";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BreadCrumbSearch from './bread-crumb-search';

const FaqHelpSlugDetail = ({ slug }: { slug: string }) => {

    const t = useTranslations("faqHelp");
    const listFaqs: { title: string; slug: string; desc: string; faqs: { question: string; answer: string }[] }[] = t.raw("information");

    const currentFaq = listFaqs.find(item => item.slug === slug);
    const router = useRouter();
    const [faqActive, setFaqActive] = useState(-1);

    if (!currentFaq) {
        return <p>Not found</p>
    }


    const handleOnclickSetFAQ = (index: number) => {
        if (faqActive !== index) {
            setFaqActive(index)
        } else {
            setFaqActive(-1)
        }
    }


    return (
        <div className='bg-[#060606] py-[120px]'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4 text-[#848484] text-base font-normal'>
                        <span onClick={() => router.back()} className='cursor-pointer'>All Collection</span>
                        <span>/</span>
                        <span className='text-[#FF6910]'>{currentFaq.title}</span>
                    </div>
                    <BreadCrumbSearch />
                </div>

                <div className='flex flex-col gap-4 mt-12'>
                    <p className='text-white text-[32px] font-semibold'>{currentFaq.title}</p>
                    {/* <p className='text-[#666] text-base font-normal -tracking-[0.24px]'>{currentFaq.desc}</p> */}
                    <p className='py-2 px-4 bg-[#1c1c1c] rounded-full w-fit'>
                        <span className='text-white text-sm font-normal'>
                            {currentFaq.faqs.length} articles
                        </span>
                    </p>
                </div>

                <div className='bg-white/4 rounded-3xl p-10 mt-8 flex flex-col space-y-6'>
                    {currentFaq.faqs.map((faq, index) => {
                        return (
                            <div
                                onClick={() => handleOnclickSetFAQ(index)}
                                key={index} className={`hover:bg-white/4 ${faqActive === index && "bg-white/4"} rounded-lg p-6  cursor-pointer transition-all ease-linear duration-150`}>
                                <div className='flex items-center justify-between'>
                                    <p className={`text-base font-normal ${faqActive === index ? "text-white" : "text-[#848484]"} transition-all ease-linear duration-150`}>{faq.question}</p>
                                    <Image src={arrowRight} alt='icon' className={`${faqActive === index ? "-rotate-90" : ""} transition-all ease-linear duration-150`} />
                                </div>

                                {faqActive === index && <div className='mt-8 text-sm text-[#aeaeae] font-normal' style={{ whiteSpace: "pre-line" }}>
                                    {faq.answer}
                                </div>}
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default FaqHelpSlugDetail
