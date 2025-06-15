'use client'

import { home as en } from '@/i18n/messages/en.json';
import { home as zi } from '@/i18n/messages/zi.json';
import globe from '@/images/home/giftcard/Globe.png';
import shadow_globe from '@/images/home/giftcard/shadow_globe.png';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const GlobeListCard = () => {
    const locale = useLocale()
    const home = locale === 'en' ? en : zi;
    const globeListCard = home.globeListCard;
    return (
        <div className='bg-[#060606] relative'>
            <div className='pt-60'>
                <Image src={globe} alt="Globe Image" className="w-full object-cover" />

                <div className='absolute right-0 left-0 top-45 bottom-0 flex gap-5 items-start justify-center '>

                    {globeListCard.map((item, index) => {
                        let style = "rotate(0deg)";
                        if (index === 0) {
                            style = "rotate(-8deg)";
                        } else if (index === 3) {
                            style = "rotate(8deg)";
                        }
                        return (
                            <div key={item.title} className='relative overflow-hidden group hover:-translate-y-5 transition-all ease-linear duration-500 cursor-pointer'>
                                <Image src={item.image} width={300} height={300} alt="Globe Image" className="object-cover w-76" />
                                <div style={{
                                    transform: `${style}`,

                                }}
                                    className={`absolute right-[18px] left-[20px]
                                    ${index === 3 || index === 0 ? 'bottom-12' : 'bottom-10'}
                                     transition-all duration-500 ease-in-out`}>
                                    <h2 className={`
                                    text-white text-xl font-medium my-2
                                    ${index === 3 || index === 0 ? '' : 'transform translate-y-10'} transform translate-y-5 transition-all duration-500 ease-in-out
                                    group-hover:translate-y-0
                                    `}>
                                        {item.title}
                                    </h2>
                                    <p
                                        className='text-[#848484] text-sm
                                    transform translate-y-10 opacity-0
                                    transition-all duration-500 ease-in-out
                                    group-hover:translate-y-0 group-hover:opacity-100'
                                    >{item.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Image src={shadow_globe} alt="Globe Image" className='absolute right-[12%] left-[12%] bottom-0 object-cover' />
            </div>

        </div>
    )
}

export default GlobeListCard
