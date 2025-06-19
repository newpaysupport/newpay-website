"use client"
import React from 'react'
import card from "@/images/faq-help/cards.svg";
import securityUser from "@/images/faq-help/security-user.svg";
import bill from "@/images/faq-help/bill.svg";
import wallet from "@/images/faq-help/wallet-2.svg";
import securitySafe from "@/images/faq-help/security-safe.svg";
import arrowUpRight from "@/images/faq-help/arrow-up-right.svg";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';


const listIcons = [card, securityUser, bill, wallet, securitySafe];

const FaqInfo = () => {

    const t = useTranslations("faqHelp");
    const listFaqs: { title: string; slug: string; desc: string; faqs: { question: string; answer: string }[] }[] = t.raw("information");

    return (
        <div className='bg-[#060606]'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {listFaqs.map((item, index) => {
                        return (
                            <Link href={`faq-help/${item.slug}`} key={index}>
                                <div className='p-10 bg-white/4 hover:bg-white/8 transition-all ease-linear duration-150 rounded-[20px] cursor-pointer  h-[276px]'>
                                    <div className='flex items-center justify-between'>
                                        <figure>
                                            <Image src={listIcons[index]} alt='' />
                                        </figure>
                                        <figure>
                                            <Image src={arrowUpRight} alt='' />
                                        </figure>
                                    </div>

                                    <p className='text-white text-xl font-semibold my-4'>{item.title}</p>
                                    <p className='text-[#aeaeae] text-base font-normal -tracking-[0.24px] mb-8'>{item.desc}</p>
                                    <p className='text-[rgba(255,255,255,0.56)] text-sm font-normal'>{item.faqs.length} {t("articles")}</p>
                                </div>
                            </Link>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FaqInfo
