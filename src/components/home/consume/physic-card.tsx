import cardBack from '@/images/home/consume/back.png';
import cardFront from '@/images/home/consume/Front.png';
import cardMid from '@/images/home/consume/mid.png';
import Image from 'next/image';

const PhysicCard = () => {
    return (
        <div className='w-full mx-auto flex justify-center space-x-[-200px] mt-20'>
            <figure className='w-[380px] h-[239px] z-[3] cardFront'>
                <Image src={cardFront} alt='' />
            </figure>
            <figure className='w-[380px] h-[239px] z-[2] cardMid'>
                <Image src={cardMid} alt='' />
            </figure>
            <figure className='w-[380px] h-[239px] z-[1] cardBack'>
                <Image src={cardBack} alt='' />
            </figure>
        </div>
    )
}

export default PhysicCard
