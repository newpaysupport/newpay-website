"use client"
import letter from '@/images/contact/letter.svg';
import bgTalkTheTeam from '@/images/contact/talk-the-team.png';
import world from '@/images/contact/world.svg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const TalkTheTeam = () => {

    const t = useTranslations("contactUs");

    return (
        <div className='mx-auto xl:h-[668px] tablet:w-[500px] min-between1280and1440:min-w-[500px] min-1440px:w-[690px] min-1440px:min-w-[690px] h-[400px] relative mt-8 lg:mt-0'>
            <Image src={bgTalkTheTeam} alt='' fill className='w-full h-full ' />
            <div className='relative z-[1] flex flex-col justify-end items-end h-full p-4 lg:p-8'>
                <h3 className='text-xl lg:text-[40px] text-white font-semibold -tracking-[0.64px]'>{t("rightTitle")}</h3>
                <p style={{ whiteSpace: "pre-line" }} className="w-full lg:w-[410px] ml-auto text-white text-xs lg:text-base font-normal text-end -tracking-[0.24px]">
                    {t("rightDesc")}
                </p>
                <div className="text-sm mt-6 flex flex-row justify-end items-center gap-4">
                    <p className='bg-black/10 cursor-pointer py-2 px-4 h-[36px] rounded-md backdrop-blur-[20px] flex justify-center items-center gap-3'>
                        <Image src={world} alt="world Image" />
                        <span className='text-white text-[11px] lg:text-sm leading-[16px] font-medium'>{t("rightSupport")}</span>
                    </p>
                    <p className='bg-black/10 cursor-pointer py-2 px-4 h-[36px] rounded-md backdrop-blur-[20px] flex justify-center items-center gap-3'>
                        <Image src={letter} alt="world Image" />
                        <span className='text-white text-[11px] lg:text-sm leading-[16px] font-medium'>support@newpay.com</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TalkTheTeam
