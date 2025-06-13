import React from 'react'
import flag_hongkong from '@/icons/Flag_HongKong.svg';
import flag_japan from '@/icons/Flag_Japan.svg';
import flag_malaysia from '@/icons/Flag_Malaysia.svg';
import flag_singapore from '@/icons/Flag_Singapore.svg';
import bg_about from '@/images/home/joint/bg_about.png';
import about_joint from '@/images/home/joint/about_joint.png';
import phone_icon from '@/images/home/joint/phone_icon.svg';

import Image from 'next/image';
const listFlag = [
    {
        flag: flag_hongkong,
        country: 'Hong Kong'
    },
    {
        flag: flag_singapore,
        country: 'Singapore'
    },
    {
        flag: flag_malaysia,
        country: 'Malaysia'
    },
    {
        flag: flag_japan,
        country: 'Japan'
    }
]

const About = () => {
    return (
        <>
            <div className="relative w-full h-[500px] md:h-[750px]">
                <div
                    style={{
                        backgroundImage: `url(${bg_about.src})`,
                    }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                >

                    <div className="absolute inset-0 flex flex-col mt-20 justify-start items-center text-center p-4">
                        <h1 className="text-4xl md:text-6xl text-[#FFF] font-semibold mb-4">About NewPay</h1>
                        <p className="text-lg md:text-xl text-white/80 mt-6 w-full max-w-3xl mx-auto px-4">
                            NewPay is dedicated to helping you spend and grow your crypto assets. Founded in 2022, with offices in Hong Kong, Singapore, Malaysia, and Japan.
                        </p>
                        <div className='mt-8 flex gap-3'>
                            {listFlag.map(item => {
                                return (
                                    <div key={item.country} className='rounded-full bg-[#FFF] py-2 px-3 flex gap-3'>
                                        <Image src={item.flag} alt='' />
                                        <p className='text-lg text-[#060606]'>{item.country}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Image src={about_joint} alt='' className='absolute md:h-[640px] top-[60%] right-[8%] left-[8%] visible rounded-4xl max-w-7xl mx-auto object-cover object-center ' />
                    <button className='absolute bottom-[-40%] right-[10%] py-3 px-4 text-[#060606] bg-[#FFF] flex gap-3 items-center rounded-full'>
                        <Image src={phone_icon} alt='message icon' />
                        <span className='text-2xl font-semibold'>Contact us</span>
                    </button>
                </div>
            </div>
            <div className='bg-black h-[400px]'></div>
        </>
    )
}

export default About