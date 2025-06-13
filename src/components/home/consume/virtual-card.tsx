import React from 'react'
import apple from '@/images/home/consume/apple.svg'
import ebay from '@/images/home/consume/ebay.svg'
import nextflix from '@/images/home/consume/nextflix.svg'
import spotify from '@/images/home/consume/spotify.svg'
import mobileUser from '@/images/home/consume/mobile-user.png'
import Image from 'next/image'



const VirtualCard = ({ mobileRef }: { mobileRef: React.RefObject<null> }) => {
    return (
        <div className='mt-20 relative'>
            <div className='w-full lg:w-[897px] h-[337px] mx-auto relative'>
                <Image src={apple} alt='apple' className='absolute top-0 left-0' />
                <Image src={spotify} alt='apple' className='absolute top-[280px] left-[110px]' />

                <Image src={nextflix} alt='apple' className='absolute top-4 right-0' />
                <Image src={ebay} alt='apple' className='absolute top-[280px] right-[110px]' />
            </div>

            <figure ref={mobileRef} className='w-[448px] absolute top-[-85px] left-[35%]'>
                <Image src={mobileUser} alt='mobile' />
            </figure>
        </div>
    )
}

export default VirtualCard
