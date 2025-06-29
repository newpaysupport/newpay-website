'use client'

import { home as en } from '@/i18n/messages/en.json';
import { home as zi } from '@/i18n/messages/zi.json';
import globe from '@/images/home/giftcard/Globe.png';
import shadow_globe from '@/images/home/giftcard/shadow_globe.png';
import card1_mobile from '@/images/home/giftcard/card1_mobile.png';
import card4_mobile from '@/images/home/giftcard/card4_mobile.png';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const GlobeListCard = () => {
    const locale = useLocale()
    const home = locale === 'en' ? en : zi;
    const globeListCard = home.globeListCard;

    const listImg = [
        { id: 1, image: card1_mobile },
        { id: 2, image: globeListCard[1].image },
        { id: 3, image: globeListCard[2].image },
        { id: 4, image: card4_mobile },
    ]

    return (
        <div className='bg-[#060606] relative'>
            <div className='pt-60'>
                <Image src={globe} alt="Globe Image" className="w-full md:h-full h-[600px] object-cover" />

                {/* Desktop */}
                <div className='absolute right-0 left-0 top-[20%] bottom-0 md:flex gap-5 items-start justify-center hidden h-fit z-10'>
                    {globeListCard.map((item, index) => {
                        let rotation = 0;
                        if (index === 0) rotation = -8;
                        else if (index === 3) rotation = 8;
                        return (
                            <div key={item.title} className='relative overflow-hidden group hover:-translate-y-5 transition-all ease-linear duration-500 cursor-pointer'>
                                <div className='relative'>
                                    <Image src={item.image} width={280} height={280} alt="Globe Image" className="object-cover" />
                                    <div style={{
                                        transform: `skewY(${rotation}deg)`,
                                    }}
                                        className={`absolute right-[18px] left-[20px]
                                        ${index === 3 || index === 0 ? 'bottom-12' : 'bottom-10'}
                                         transition-all duration-500 ease-in-out`}>
                                        <h2 className={`
                                        text-white text-xl font-medium my-2
                                        ${index === 3 || index === 0 ? 'transform translate-y-5' : 'transform translate-y-10'} 
                                        transition-all duration-500 ease-in-out
                                        group-hover:translate-y-0
                                        `}>
                                            {item.title}
                                        </h2>
                                        <p className='text-[#848484] text-sm
                                        transform translate-y-10 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover:translate-y-0 group-hover:opacity-100'>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Mobile */}
                <div className="absolute right-0 left-0 bottom-0 top-[20%] md:hidden">
                    <div className="flex items-start justify-start overflow-x-auto flex-nowrap px-4">
                        <div className='animation-slideshow flex gap-5'>
                            {listImg.map((img, index) => {
                                const item = globeListCard[index];

                                return (
                                    <div
                                        key={img.id}
                                        className="relative mt-4 min-w-[260px] h-[340px] flex flex-col justify-between overflow-hidden group hover:-translate-y-5 transition-all ease-linear duration-500 cursor-pointer"
                                    >
                                        <div>
                                            <Image
                                                src={img.image}
                                                width={300}
                                                height={300}
                                                alt={`Globe Image ${img.id}`}
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="absolute left-1/2 -translate-x-1/2 bottom-[30%] w-full ">
                                            <h2 className="text-white text-xl font-medium text-center transform translate-y-5 transition-all duration-500 ease-in-out group-hover:translate-y-0">
                                                {item?.title}
                                            </h2>
                                            <p className="text-[#848484] text-sm text-center transform translate-y-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                                                {item?.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className='absolute inset-0 bottom-0 left-0 md:flex items-end justify-center hidden z-0'>
                    <Image src={shadow_globe} alt="Globe Image" />
                </div>
            </div>
        </div>
    )
}

export default GlobeListCard