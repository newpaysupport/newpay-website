"use client"
import bgDepositMobile from "@/images/secure/bgDepositMobile.png";
import bgDeposit from "@/images/secure/deposit.png";
import overlay from "@/images/secure/Rectangle.png";
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Deposit = () => {

    const t = useTranslations("secureCustodian.deposit");


    return (
        <div className='bg-[#000] pt-10 lg:py-20'>
            <div className='container mx-auto relative h-[750px]'>
                <Image src={bgDeposit} alt='' fill priority objectFit='contain' className='mix-blend-lighten hidden sm:block' />
                <Image src={bgDepositMobile} alt='' fill priority objectFit="contain" className='mix-blend-lighten sm:hidden h-full' />
                <figure className="absolute w-full h-full z-[-1] inset-0 block lg:hidden">
                    <Image src={overlay} alt='' className='object-cover w-full h-full' />
                </figure>

                <div className='relative z-[1] h-full'>
                    <div className='lg:w-[460px] h-full mx-auto flex flex-col justify-end pb-[100px] sm:pb-[200px] md:pb-[155px] lg:pb-[74px] xl:pb-10 px-6 lg:px-0'>
                        <p className='text-white text-[30px] lg:text-[60px] font-semibold text-center'>{t("title")}</p>
                        <p className='text-[#848484] text-sm lg:text-lg font-medium text-center'>{t("desc")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deposit
