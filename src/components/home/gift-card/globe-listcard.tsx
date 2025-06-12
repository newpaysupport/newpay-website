import React from 'react'
import Image from 'next/image';
import globe from '@/images/home/giftcard/Globe.png';
import card1 from '@/images/home/giftcard/card1.png';
import card2 from '@/images/home/giftcard/card2.png';
import card3 from '@/images/home/giftcard/card3.png';
import card4 from '@/images/home/giftcard/card4.png';

const GlobeListCard = () => {
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
                        <h2 className='text-white text-xl font-semibold my-2'>One Card for Global Travel</h2>
                        <p className='text-[#848484] text-sm'>Accepted by 100M+ merchants, compatible with Apple Pay & Google Pay</p>
                    </div>
                </div>

                <div className='relative'>
                    <Image src={card2} alt="Globe Image" className="object-cover w-76" />
                    <div className='absolute right-[18px] left-[20px] bottom-12'>
                        <h2 className='text-white text-xl font-semibold my-2'>Global Subscriptions for Online Entertainment</h2>
                    </div>
                </div>

                <div className='relative'>
                    <Image src={card3} alt="Globe Image" className="object-cover w-76" />
                    <div className='absolute right-[18px] left-[20px] bottom-12'>
                        <h2 className='text-white text-xl font-semibold my-2'>Cross-Border Shopping Made Easy</h2>
                    </div>
                </div>

                <div className='relative'>
                    <Image src={card4} alt="Globe Image" className="object-cover w-76" />
                    <div style={{
                        transform: "rotate(8deg)",
                    }}
                        className='absolute right-[18px] left-[20px] bottom-17'>
                        <h2 className='text-white text-xl font-semibold my-2'>Global Social Tipping & Verified Payments</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobeListCard