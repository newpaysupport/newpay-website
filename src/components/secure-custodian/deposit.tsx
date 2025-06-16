"use client"
import React from 'react'
import bgDeposit from "@/images/secure/deposit.png";
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Deposit = () => {

    const t = useTranslations("secureCustodian.deposit");


    return (
        <div className='bg-[#000] py-20'>
            <div className='container mx-auto relative h-[750px]'>
                <Image src={bgDeposit} alt='' fill priority />
                <div className='relative z-[1] h-full'>
                    <div className='w-[460px] h-full mx-auto flex flex-col justify-end'>
                        <p className='text-white text-[60px] font-semibold text-center'>{t("title")}</p>
                        <p className='text-[#848484] text-lg font-medium text-center'>{t("desc")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deposit
