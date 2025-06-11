import React from 'react'
import apple from '@/images/home/consume/apple.svg'
import ebay from '@/images/home/consume/ebay.svg'
import nextflix from '@/images/home/consume/nextflix.svg'
import spotify from '@/images/home/consume/spotify.svg'
import mobileUser from '@/images/home/consume/mobile-user.png'
import Image from 'next/image'
import { virtualCardContent } from '@/constants/virtual-card'


const VirtualCard = () => {
    return (
        <div>
            <div className='w-full lg:w-[897px] mx-auto relative'>
                <Image src={apple} alt='apple' className='absolute top-4 left-0' />
                <Image src={spotify} alt='apple' className='absolute top-[280px] left-[110px]' />

                <Image src={nextflix} alt='apple' className='absolute top-4 right-0' />
                <Image src={ebay} alt='apple' className='absolute top-[280px] right-[110px]' />
            </div>

            <figure className='w-full lg:w-[448px] mx-auto'>
                <Image src={mobileUser} alt='mobile' />
            </figure>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[64px]'>
                {virtualCardContent.map((item, index) => {
                    return <div key={index} className='p-8 bg-[#f8f8f8] rounded-[20px]'>
                        <Image src={item.icon} alt='icon' />
                        <p className='mt-8 mb-2 text-[#1b1b1b] text-2xl font-semibold'>{item.title}</p>
                        <p className='text-[#666] text-base font-medium'>{item.description}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default VirtualCard
