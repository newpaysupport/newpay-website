import React from 'react'
import bgTalkTheTeam from '@/images/contact/talk-the-team.png'
import Image from 'next/image'
import arrow_right from '@/images/contact/arrow_right.svg';
import image_contact from '@/images/contact/image_contact.png';
import letter from '@/images/contact/letter.svg';
import world from '@/images/contact/world.svg';

const TalkTheTeam = () => {
    return (
        <div className='w-full lg:w-[690px] lg:min-w-[690px] h-[668px] relative'>
            <Image src={bgTalkTheTeam} alt='' fill className='w-full h-full ' />
            <div className='relative z-[1] flex flex-col justify-end items-end h-full p-8'>
                <h3 className='text-[40px] text-white font-semibold -tracking-[0.64px]'>Talk with the team</h3>
                <p className="w-[410px] ml-auto text-white text-base font-normal text-end -tracking-[0.24px]">
                    Work with NewPay to explore the world of payment together. Want to become our partners? Please give us a little details of yourself and we will be in touch soon!
                </p>
                <div className="text-sm mt-6 flex flex-row justify-end items-center gap-4">
                    <p className='bg-black/10 cursor-pointer p-y-2 px-4 h-[36px] rounded-md backdrop-blur-[20px] flex justify-center items-center gap-3'>
                        <Image src={world} alt="world Image" />
                        <span className='text-white text-sm font-medium'>Support Center</span>
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
