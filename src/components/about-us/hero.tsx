import React from 'react'
import hero from '@/images/about-us/hero.png'
import Image from 'next/image'
import BtnPrimary from '../common/button/btn-primary'

const Hero = () => {
    return (
        <div className='relative w-full h-[calc(100vh-70px)]'>
            <Image src={hero} alt='' fill priority />
            <div className='relative z-[1] w-full h-full py-20'>
                <div className='container mx-auto w-full h-full flex flex-col justify-end'>
                    <p className=' text-white text-base font-medium tracking-[-0.24px] opacity-0 fadeInUp-no-delay'>— Newpay is the way.</p>
                    <p className='text-white text-[60px] font-semibold tracking-[-1.64px] my-4 opacity-0 fadeInUp-delay-03'>Turning digital assets into <br /> real-world spending</p>
                    <p className='text-[#aeaeae] text-base font-medium tracking-[-0.24px] mb-8 opacity-0 fadeInUp-delay-03'>Utility is the beginning of real change.</p>
                    <BtnPrimary text='Create an account' variant={'primary-lighter'} className='w-[258px] opacity-0 fadeInUp-delay-06' />
                </div>
            </div>
        </div>
    )
}

export default Hero
