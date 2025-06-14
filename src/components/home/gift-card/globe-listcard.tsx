'use client'

import globe from '@/images/home/giftcard/Globe.png';
import card1 from '@/images/home/giftcard/card1.png';
import card2 from '@/images/home/giftcard/card2.png';
import card3 from '@/images/home/giftcard/card3.png';
import card4 from '@/images/home/giftcard/card4.png';
import shadow_globe from '@/images/home/giftcard/shadow_globe.png';
import Image from 'next/image';
import { useTranslations } from 'use-intl';

const GlobeListCard = () => {
    const t = useTranslations("home");
    return (
        <div className='bg-black relative'>
            <Image src={globe} alt="Globe Image" className="w-full object-cover mt-60" />

            <div className='absolute right-0 left-0 top-0 bottom-0 flex gap-5 items-start justify-center'>

                <div className='relative'>
                    <Image src={card1} alt="Globe Image" className="object-cover w-76" />
                    <div style={{
                        transform: "rotate(-8deg)",
                    }}
                        className='absolute right-[18px] left-[20px] bottom-12'>
                        <h2 className='text-white text-xl font-semibold my-2'>{t('globeListCard.item1.title')}</h2>
                        <p className='text-[#848484] text-sm'>{t('globeListCard.item1.desc')}</p>
                    </div>
                </div>

                <div className='relative'>
                    <Image src={card2} alt="Globe Image" className="object-cover w-76" />
                    <div className='absolute right-[18px] left-[20px] bottom-12'>
                        <h2 className='text-white text-xl font-semibold my-2'>{t('globeListCard.item2.title')}</h2>
                        <p className='text-[#848484] text-sm'>{t('globeListCard.item2.desc')}</p>
                    </div>
                </div>

                <div className='relative'>
                    <Image src={card3} alt="Globe Image" className="object-cover w-76" />
                    <div className='absolute right-[18px] left-[20px] bottom-12'>
                        <h2 className='text-white text-xl font-semibold my-2'>{t('globeListCard.item3.title')}</h2>
                        <p className='text-[#848484] text-sm'>{t('globeListCard.item3.desc')}</p>
                    </div>
                </div>

                <div className='relative'>
                    <Image src={card4} alt="Globe Image" className="object-cover w-76" />
                    <div style={{
                        transform: "rotate(8deg)",
                    }}
                        className='absolute right-[18px] left-[20px] bottom-17'>
                        <h2 className='text-white text-xl font-semibold my-2'>{t('globeListCard.item4.title')}</h2>
                        <p className='text-[#848484] text-sm'>{t('globeListCard.item4.desc')}</p>
                    </div>
                </div>
            </div>
            <Image src={shadow_globe} alt="Globe Image" className='absolute right-[12%] left-[12%] bottom-0 object-cover' />
        </div>
    )
}

export default GlobeListCard
