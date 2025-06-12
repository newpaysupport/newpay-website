'use client'
import step1 from '@/images/home/open-account/1.png';
import step2 from '@/images/home/open-account/2.png';
import step3 from '@/images/home/open-account/3.png';
import step4 from '@/images/home/open-account/4.png';
import step5 from '@/images/home/open-account/5.png';
import ReactLenis from 'lenis/react';
import Image from 'next/image';
import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react"
import { useRef } from "react"

const stepAccount = [
    {
        step: 1,
        title: 'Spend crypto like fiat',
        description: 'No need for fiat conversion, use crypto directly for everyday purchases (shopping, dining, subscriptions, etc.).',
        image: step1,
    },
    {
        step: 2,
        title: 'Worldwide Acceptance',
        description: 'Support Apple Pay, card withdrawals, and transactions at millions of locations worldwide.',
        image: step2,
    },
    {
        step: 3,
        title: 'Instant Transactions',
        description: 'Send, receive, and complete crypto-to-fiat transactions, whether P2P or global payments.',
        image: step3,
    },
    {
        step: 4,
        title: 'Gift Card',
        description: 'Easily send value and crypto gifts to friends, celebrations, or just because — no conversion fees.',
        image: step4,
    },
    {
        step: 5,
        title: 'Referral Rewards',
        description: 'Earn bonus rewards (up to 50%) in credits with our easy-to-use invite program.',
        image: step5,
    },
];

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

const OpenAccount = () => {

    const stepRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: stepRef })
    const y = useParallax(scrollYProgress, 300)
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <ReactLenis root>
            <div className="bg-[#060606] py-20 px-[120px]">
                <div className='container mx-auto'>
                    <h3 className='text-white text-[48px] font-semibold'>Open your NewPay Account</h3>
                    <p className='text-[#aeaeae] text-lg font-normal mt-6 mb-20'>Just 4 steps to start – Global transparent spending, physical card ATM access, full security</p>

                    <div className='h-[500px] overflow-y-hidden'>
                        {stepAccount.map((step, index) => {
                            return (
                                <div key={index} ref={stepRef} className='stepPanel flex items-start justify-between'>
                                    <div className='flex gap-x-12'>
                                        <div>
                                            <p className='w-20 h-20 bg-[#FF6910] rounded-full text-white text-[40px] font-semibold flex items-center justify-center'>{step.step}</p>
                                            <div className='w-1 h-[500px] bg-white/20 mx-auto relative'>
                                                <p className='w-1 h-[355px] bg-[#FF6910] absolute top-0'></p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-white text-[60px] font-medium'>{step.title}</p>
                                            <p className='text-[#aeaeae] text-xl font-medium'>{step.description}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Image src={step.image} alt='image' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </ReactLenis>

    )
}

export default OpenAccount
