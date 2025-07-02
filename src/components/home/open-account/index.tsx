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
import { useMemo, useState } from 'react';
import { useTranslations } from 'use-intl';
import { motion } from "motion/react"
import { useBreakpointFlags } from '@/hooks/useBreakpointFlags';
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
    const { is2xl, isLg, isXl } = useBreakpointFlags();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.stepPanel').forEach((stepPanel, index) => {
            const contentWrapper = (stepPanel as HTMLElement).querySelector('.content-wrapper');
            gsap.timeline({
                scrollTrigger: {
                    trigger: contentWrapper,
                    start: 'top center',
                    end: 'top',
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

    const fixedHeight = useMemo(() => {
        if (is2xl) return 710;
        if (isXl) return 710;
        // if (isLg) return 620;
        return 760;
    }, [is2xl, isXl, isLg]);

    return (
        <ReactLenis root>
            <div className="bg-[#060606] pt-[64px] px-4 xl:pt-[120px] xl:pb-[220px] xl:px-[140px] h-[4105px] lg:h-[4007px]">
                <div className='container mx-auto h-full'>
                    <h3 className='text-white text-[32px] xl:text-[48px] font-semibold'>{t('openAccount.title')}</h3>
                    <p className='text-[#aeaeae] text-sm xl:text-lg font-normal mt-6 mb-20'>{t('openAccount.desc')}</p>

                    <div className='flex xl:gap-x-20 h-full'>
                        <div className='w-full h-full lg:w-[800px] relative pb-[500px] xl:pb-[200px]'>
                            <div className='flex flex-col gap-y-[630px] lg:gap-y-[580px]'>
                                {t.raw('openAccount.steps').map((step: { title: string; desc: string }, index: number) => {
                                    return (
                                        <div key={index} className={`stepPanel flex items-start justify-between h-[130px]`}>
                                            <div className='content-wrapper'>
                                                <div className='flex gap-x-6 xl:gap-x-[64px]'>
                                                    <div className='relative z-[10]'>
                                                        <p
                                                            className={`${index === activeStep ? "bg-[#FF6910] border-none" : "bg-[#212121] border-white/16"}
                                                            border-[2px] w-12 h-12 xl:w-20 xl:h-20 rounded-full text-white text-2xl xl:text-[40px] font-semibold flex items-center justify-center`}>
                                                            {stepAccount[index].step}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <p className='text-white text-2xl lg:text-[40px] font-medium'>{step.title}</p>
                                                            <p className='text-[#aeaeae] text-sm xl:text-xl font-normal mt-4 lg:mt-6'>{step.desc}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className={`py-12  transition-all ease-linear duration-150 bg-[#060606] md:mx-auto block xl:hidden  w-full max-w-[400px] md:w-[400px]`}>
                                                    <Image src={stepAccount[index].image} alt='image' className=' mix-blend-lighten w-full h-full' />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <>
                                <div style={{ height: (fixedHeight * 4) }} className='w-12 xl:w-20 lg:h-[2370px] 2xl:h-[2430px] absolute top-12 xl:top-20 z-1'>
                                    <p className='bg-white/20 w-1 h-full mx-auto'></p>
                                </div>
                                <motion.div
                                    initial={false}
                                    animate={{ height: (activeStep * fixedHeight) }}
                                    transition={{ duration: 0.15, ease: "linear" }}
                                    className="w-12 xl:w-20 absolute top-12 xl:top-20 z-2 "
                                >
                                    <p className='bg-[#FF6910] w-1 h-full mx-auto'></p>
                                </motion.div>
                            </>
                        </div>
                        <div className='sticky hidden xl:flex justify-end h-[690px] min-w-[480px] w-[480px] top-[calc(50%-288px)]'>
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
