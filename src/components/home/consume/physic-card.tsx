import cardBack from '@/images/home/consume/back.png';
import cardBackMobile from '@/images/home/consume/back-mobile.png';
import cardFront from '@/images/home/consume/Front.png';
import cardFrontMobile from '@/images/home/consume/Front-mobile.png';
import cardMid from '@/images/home/consume/mid.png';
import cardMidMobile from '@/images/home/consume/mid-mobile.png';
import Image from 'next/image';

const PhysicCard = () => {
    return (
        <div className='w-full px-4 lg:px-0 mx-auto flex justify-center space-x-[-110px] lg:space-x-[-200px] mt-20'>
            <figure className='w-[210px] h-[132px] lg:w-[380px] lg:h-[239px] z-[3] cardFront'>
                <Image src={cardFront} alt='' priority className='hidden lg:block' />
                <Image src={cardFrontMobile} alt='' priority className='block lg:hidden' />
            </figure>
            <figure className='w-[210px] h-[132px] lg:w-[380px] lg:h-[239px] z-[2] cardMid'>
                <Image src={cardMid} alt='' priority className='hidden lg:block' />
                <Image src={cardMidMobile} alt='' priority className='block lg:hidden' />
            </figure>
            <figure className='w-[210px] h-[132px] lg:w-[380px] lg:h-[239px] z-[1] cardBack'>
                <Image src={cardBack} alt='' priority className='hidden lg:block' />
                <Image src={cardBackMobile} alt='' priority className='block lg:hidden' />
            </figure>
        </div>
    )
}

export default PhysicCard
