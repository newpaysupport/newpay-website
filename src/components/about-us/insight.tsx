import React from 'react'
import insight1 from '@/images/about-us/insight1.png';
import insight2 from '@/images/about-us/insight2.png';
import insight3 from '@/images/about-us/insight3.png';
import insight4 from '@/images/about-us/insight4.png';
import chart from '@/images/about-us/chart.svg';
import approach from '@/images/about-us/approach.svg';
import looking from '@/images/about-us/looking.svg';
import stand from '@/images/about-us/stand.svg';
import Image from 'next/image';


const insights = [
    {
        id: 1,
        icon: chart,
        title: "Current Insight",
        desc: [
            "NEWPAY isn’t just building another payment channel — we’re creating a simpler, more direct, and more controlled way to use digital assets.",
            "USDT is no longer locked inside exchanges — it moves into daily spending, subscriptions, and global payments with ease."
        ],
        image: insight1
    },
    {
        id: 2,
        icon: approach,
        title: "Our Approach",
        desc: [
            "No need to convert USDT to fiat first. No more jumping through platforms or transfer steps.",
            "With a single virtual card from NEWPAY, users can spend digital assets instantly — simple, seamless, and ready to go."
        ],
        image: insight2
    },
    {
        id: 3,
        icon: looking,
        title: "Looking Ahead",
        desc: [
            "NEWPAY is building toward full interoperability — integrating with Web3 wallets, CEXs, DAOs, and DePIN networks.",
            "We're laying the foundation for the next-generation digital payment infrastructure — one that serves both individuals and organizations."
        ],
        image: insight3
    },
    {
        id: 4,
        icon: stand,
        title: "What We Stand For",
        desc: [
            "NEWPAY respects every country and region’s regulatory frameworks.",
            "With modular risk controls and tiered KYC, we make sure digital assets are not only usable, but also protected."
        ],
        image: insight4
    },
]



const Insight = () => {
    return (
        <div className='bg-white rounded-[80px] py-[80px] lg:py-[120px] overflow-hidden'>
            <div className='container mx-auto flex flex-col space-y-[120px]'>
                {insights.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={index} className={`flex ${isEven ? "flex-row" : "flex-row-reverse"} items-center gap-x-[60px]`}>
                            <div>
                                <Image src={item.icon} alt={item.title} />
                                <p className='my-8 text-[#1b1b1b] text-[48px] font-semibold -tracking-[1.64px]'>{item.title}</p>
                                <p className='text-[#666] text-lg font-medium'>
                                    {item.desc.map((text, index) => {
                                        return (
                                            <>
                                                <span className='inline-block' key={index}>{text}</span> <br />
                                            </>
                                        )
                                    })}
                                </p>
                            </div>
                            <figure className='w-full lg:w-[480px] lg:min-w-[480px]'>
                                <Image src={item.image} alt={item.title} />
                            </figure>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Insight
