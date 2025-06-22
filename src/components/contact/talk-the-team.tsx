"use client"
import letter from '@/images/contact/letter.svg';
import bgTalkTheTeam from '@/images/contact/talk-the-team.png';
import world from '@/images/contact/world.svg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const TalkTheTeam = () => {

    const t = useTranslations("contactUs");

    return (
        <div className='w-full lg:w-[690px] lg:min-w-[690px] h-[668px] relative'>
            <Image src={bgTalkTheTeam} alt='' fill className='w-full h-full ' />
            <div className='relative z-[1] flex flex-col justify-end items-end h-full p-8'>
                <h3 className='text-[40px] text-white font-semibold -tracking-[0.64px]'>{t("rightTitle")}</h3>
                <p className="w-[410px] ml-auto text-white text-base font-normal text-end -tracking-[0.24px]">
                    {t("rightDesc")}
                </p>
                <div className="text-sm mt-6 flex flex-row justify-end items-center gap-4">
                    <p className='bg-black/10 cursor-pointer p-y-2 px-4 h-[36px] rounded-md backdrop-blur-[20px] flex justify-center items-center gap-3'>
                        <Image src={world} alt="world Image" />
                        <span className='text-white text-sm font-medium'>{t("rightSupport")}</span>
                    </p>
                    <p className='bg-black/10 cursor-pointer p-y-2 px-4 h-[36px] rounded-md backdrop-blur-[20px] flex justify-center items-center gap-3'>
                        <Image src={letter} alt="world Image" />
                        <span className='text-white text-sm font-medium'>support@newpay.com</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TalkTheTeam
