import React from 'react'
import badge from '@/images/partner/Card Chip.png'
import Image from 'next/image'
import BtnPrimary from '../common/button/btn-primary'

const Partner = () => {
    return (
        <div className='w-full h-[664px] relative overflow-hidden'>
            <video src={'/videos/home/prism-coin.mp4'} className='w-full h-full object-cover object-center' loop={true} autoPlay={true} muted={true} preload='true' />
            <div className='absolute inset-0 w-full h-full'>
                <div className='flex items-center justify-center h-full'>
                    <div>
                        <figure className='w-[205px] h-[205px] mx-auto mb-20'>
                            <Image src={badge} alt='' />
                        </figure>
                        <p style={{
                            background: "linear-gradient(90deg, #FFF 0.13%, rgba(255, 255, 255, 0.00) 128.16%)",
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: "transparent"
                        }} className='text-[60px] font-semibold tracking-[-2px]'>Partner with NewPay</p>
                        <p className='text-[#aeaeae] text-base font-medium text-center mb-8'>Let’s drive the future of usable digital assets together.</p>
                        <BtnPrimary text={'Become a Partner'} variant={'primary-lighter'} className='mx-auto w-[254px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner
