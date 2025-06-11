import React from 'react'
import physicCards from '@/images/home/consume/physic-card.png'
import Image from 'next/image'

const PhysicCard = () => {
    return (
        <div className='w-full lg:w-[690px] h-[350px] mx-auto'>
            <Image src={physicCards} alt='' />
        </div>
    )
}

export default PhysicCard
