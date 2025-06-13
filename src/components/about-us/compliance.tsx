import React from 'react'
import bg from '@/images/about-us/security.png';
import cards from '@/images/about-us/cards.svg';
import coin from '@/images/about-us/coin.svg';
import gift from '@/images/about-us/gift.svg';
import arrowRight from '@/images/about-us/arrow-right.svg';
import visa from '@/images/about-us/visa.svg';
import masterCard from '@/images/about-us/master-card.svg';
import item from '@/images/about-us/Item.svg';
import avax from '@/images/about-us/avax.svg';
import eth from '@/images/about-us/eth.svg';
import usdt from '@/images/about-us/usdt.svg';
import usdc from '@/images/about-us/usdc.svg';
import Image from 'next/image';

const items = [
    {
        id: 1,
        icon: cards,
        title: "Regulatory Compliance",
        desc: "NEWPAY follows global standards with tiered KYC, trusted partners like Sumsub, and full legal transparency—worldwide."
    },
    {
        id: 2,
        icon: coin,
        title: "Risk Control System",
        desc: "Blockchain-powered risk engine. Real-time scoring, anomaly detection, and multi-factor checks—OTP, facial ID, behavior—to block fraud before it starts."
    },
    {
        id: 1,
        icon: gift,
        title: "Data Security & Privacy",
        desc: "End-to-end encryption. Isolated storage. GDPR & PDPA compliant. Your data stays yours—always with consent."
    }
]

const icons = [visa, masterCard, item, avax, eth, usdt, usdc]

const Compliance = () => {
    return (
        <div className='w-full h-[1300px] relative'>
            <Image src={bg} alt='background' fill priority className='object-bottom-left object-cover' />
            <div className='relative pt-[160px] '>
                <div className='container mx-auto'>
                    <h4 className='text-white text-[60px] font-semibold text-center'>Compliance and Security</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
                        {items.map((item, index) => {
                            return (
                                <div style={{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.08) 100%), rgba(1, 1, 1, 0.16)' }}
                                    key={index} className='p-8 rounded-[20px] bg-security-item backdrop-blur-[40px]'>
                                    <Image src={item.icon} alt={item.title} />
                                    <p className='mt-[44px] mb-2 text-white text-2xl font-semibold'>{item.title}</p>
                                    <p className='text-[#aeaeae] text-base font-medium'>{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='pt-[120px] pb-10'>
                        <p className='w-full ml-auto lg:w-[416px]'>
                            <span className='text-white text-[60px] font-semibold tracking-[-2px]'>Our Partners</span>
                            <span className='mt-6 inline-block text-[#aeaeae] text-base font-medium'>
                                We integrate with trusted global payment networks, identity providers, and crypto infrastructure platforms to enable real-world usage of digital assets. <br />
                                Together, these partnerships empower NEWPAY to deliver a seamless and compliant payment experience.
                            </span>
                        </p>
                    </div>
                </div>
                <div className='flex items-center space-x-2 mt-20 pr-4'>
                    <div style={{ borderRadius: '0px 1920px 1920px 0px', backdropFilter: '20px' }}
                        className='w-[441px] bg-[rgba(255,105,16,0.16)] flex items-center justify-end '>
                        <Image src={arrowRight} alt='' />
                    </div>
                    <div className='flex space-x-2 ml-4'>
                        {icons.map((item, index) => {
                            return (
                                <figure key={index}>
                                    <Image src={item} alt='icon' />
                                </figure>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Compliance
