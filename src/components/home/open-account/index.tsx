'use client'
import step1 from '@/images/home/open-account/1.png';
import step2 from '@/images/home/open-account/2.png';
import step3 from '@/images/home/open-account/3.png';
import step4 from '@/images/home/open-account/4.png';
import step5 from '@/images/home/open-account/5.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ReactLenis from 'lenis/react';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'use-intl';

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

const OpenAccount = () => {

    const [activeStep, setActiveStep] = useState(0);
    const t = useTranslations("home");

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.stepPanel').forEach((stepPanel, index) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: stepPanel as HTMLElement,
                    start: 'top center',
                    end: 'bottom',
                    scrub: true,
                    markers: false,
                    onEnter: () => {
                        gsap.to(stepPanel as HTMLElement, { opacity: 1, duration: 0.05 })
                        setActiveStep(index)
                    },
                    // onLeave: () => gsap.to(stepPanel as HTMLElement, { opacity: 0.2, duration: 0.05 }),
                    onEnterBack: () => {
                        gsap.to(stepPanel as HTMLElement, { opacity: 1, duration: 0.05 })
                        setActiveStep(index)
                    },
                    onLeaveBack: () => {
                        if (index !== 0) {
                            // gsap.to(stepPanel as HTMLElement, { opacity: 0.2, duration: 0.05 })
                        }
                    },
                }
            })

        })

    });

    return (
        <ReactLenis root>
            <div className="bg-[#060606] py-20 px-[120px]">
                <div className='container mx-auto'>
                    <h3 className='text-white text-[48px] font-semibold'>{t('openAccount.title')}</h3>
                    <p className='text-[#aeaeae] text-lg font-normal mt-6 mb-20'>{t('openAccount.desc')}</p>

                    <div className='flex justify-between'>
                        <div className='w-full h-full lg:w-[800px] relative'>
                            <div>
                                {t.raw('openAccount.steps').map((step: { title: string; desc: string }, index: number) => {
                                    return (
                                        <div key={index} className={`stepPanel flex items-start justify-between pb-40 pt-20  `}>
                                            <div className='flex gap-x-12'>
                                                <div className='relative z-[10]'>
                                                    <p className={`${index === activeStep ? "bg-[#FF6910] border-none" : "bg-[#212121] border-white/16"} border-[2px] w-20 h-20 rounded-full text-white text-[40px] font-semibold flex items-center justify-center`}>{stepAccount[index].step}</p>

                                                    {index !== stepAccount.length - 1 && <div className={`bg-white/20 w-1 h-[355px]  mx-auto relative`}>
                                                        <p className={`${activeStep === index ? "bg-[#FF6910] h-[355px]" : "bg-white/20 h-0"} w-1 absolute top-0 duration-150 transition-all ease-linear mx-auto`}> </p>
                                                    </div>}
                                                </div>
                                                <div>
                                                    <p className='text-white text-[60px] font-medium'>{step.title}</p>
                                                    <p className='text-[#aeaeae] text-xl font-medium'>{step.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <>
                                <div className='w-20 h-[2700px] absolute top-20 z-1'>
                                    <p className='bg-white/20 w-1 h-full mx-auto'></p>
                                </div>
                            </>

                        </div>
                        <div className='sticky flex justify-end h-[575px] min-w-[400px] w-[400px] top-[calc(50%-288px)]'>
                            <div className={`${activeStep !== -1 ? "opacity-100" : "opacity-0"} transition-all ease-linear duration-150 bg-[#060606]`}>
                                <Image src={stepAccount[activeStep].image} alt='image' className=' mix-blend-lighten' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </ReactLenis>

    )
}

export default OpenAccount
