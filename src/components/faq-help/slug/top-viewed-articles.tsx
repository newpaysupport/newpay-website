"use client"
import React, { useState } from 'react'
import icBook from '@/images/faq-help/book.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import arrowRight from "@/images/faq-help/arrow-right.svg";

const TopViewedArticles = () => {

    const t = useTranslations("faqHelp");
    const topArticles: { question: string; answer: string; id: number }[] = t.raw("topArticles");

    const [faqActive, setFaqActive] = useState(-1);

    const handleOnclickSetFAQ = (index: number) => {
        if (faqActive !== index) {
            setFaqActive(index)
        } else {
            setFaqActive(-1)
        }
    }


    return (
        <div className='bg-[#060606] mb-3'>
            <div className='container mx-auto p-10 bg-white/4 rounded-3xl'>
                <figure>
                    <Image src={icBook} alt='' />
                </figure>
                <p className='text-white text-2xl font-semibold mt-5 mb-8'>{t("topArticleTitle")}</p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4'>
                    {topArticles.map((item) => {
                        const isActive = item.id === faqActive;
                        return (
                            <div onClick={() => handleOnclickSetFAQ(item.id)} key={item.id} className={`${isActive && "bg-white/4 py-4"} rounded-lg`}>
                                <div className={`group flex items-center justify-between py-2 px-6 cursor-pointer rounded-lg transition-all ease-linear duration-100 ${!isActive && "hover:bg-white/4"}`}>
                                    <p className={`text-[#848484] text-base font-normal -tracking-[0.24px] ${!isActive ? "group-hover:text-white" : "text-white"}`}>{item.question}</p>
                                    <Image src={arrowRight} alt='icon' className={`${isActive ? "-rotate-90" : ""} transition-all ease-linear duration-150`} />
                                </div>
                                {isActive && <div className='text-[#848484] text-sm font-normal py-4 px-6 flex flex-col gap-y-4'>
                                    {item.answer.split('\n').map((item, index) => {
                                        return <span className='' key={index}>{item}</span>
                                    })}
                                </div>}
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TopViewedArticles
