'use client'
import React, { useEffect, useRef, useState } from 'react'
import Hero from './hero'
import Consume from './consume'
import OpenAccount from './open-account'
import BtnPrimary from '@/components/common/button/btn-primary'
import card from '@/images/home/hero/card.png'
import Image from 'next/image'
import { TabCards } from '@/constants/tab-card'
import { virtualCardContent } from '@/constants/virtual-card'
import PhysicCard from './consume/physic-card'

import apple from '@/images/home/consume/apple.svg'
import ebay from '@/images/home/consume/ebay.svg'
import nextflix from '@/images/home/consume/nextflix.svg'
import spotify from '@/images/home/consume/spotify.svg'
import mobileUser from '@/images/home/consume/mobile-user.png'

const HomeScreen = () => {

    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const mobileRef = useRef(null);
    const heroRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [tabActive, setTabActive] = useState(TabCards[0].id);


    const handleSetTabActive = (id: number) => {
        setTabActive(id);
    }


    useEffect(() => {

        const handleScroll = () => {

            const heroSection: any = heroRef.current;
            const container: any = containerRef.current;
            if (!heroSection || !container) return;

            const heroRect = heroSection.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();


            if (heroRect.bottom <= window.innerHeight && containerRect.top <= window.innerHeight) {
                const scrolled = window.innerHeight - containerRect.top;
                const totalScrollDistance = container.offsetHeight;
                const progress = Math.min(Math.max(scrolled / totalScrollDistance, 0), 1);
                setScrollProgress(progress);
            } else if (heroRect.bottom > window.innerHeight) {
                setScrollProgress(0);
            }

        }
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])
    return (
        <div>
            {/* hero section */}
            <div ref={heroRef} className='w-full h-100vh overflow-y-hidden relative'>
                <video src={'/videos/home/prism-coin.mp4'} className='w-full object-cover object-center' loop={true} autoPlay={true} muted={true} preload='true' />
                <div className='absolute w-full lg:w-[806px] h-full top-20 left-1/2 -translate-x-1/2'>
                    <div>
                        <p
                            style={{
                                background: "linear-gradient(90deg, #FFF 0.13%, rgba(255, 255, 255, 0.00) 128.16%)",
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: "transparent"
                            }} className='text-[48px] font-semibold text-center w-full lg:w-[470px] -tracking-[1.64px] mx-auto'>
                            Easy to use, Safe and Cost-effective
                        </p>
                        <p className='text-[#848484] text-base font-medium -tracking-[0.24px] text-center mb-8'>NewPay allow you to connect your crypto assets in real life!</p>

                        <div className='flex items-center justify-center gap-x-4'>
                            <BtnPrimary text='Get the app' variant={'primary-lighter'} />
                            <BtnPrimary text='Create an account' variant={'surface-3'} />
                        </div>
                    </div>
                </div>
            </div>
            <figure
                style={{
                    transform: scrollProgress < 0.05 ? "scale(1)" : `scale(${1 - scrollProgress})`,
                    visibility: scrollProgress >= 0.47657952069716775 ? "hidden" : "visible"
                }}
                ref={cardRef} className={`top-[486px] z-[1000] fixed left-1/2 -translate-x-1/2`}>
                <Image src={card} alt='card' />
            </figure>
            {/* consume section */}
            <div ref={containerRef} className='py-20 bg-white min-h-[700px] container mx-auto'>
                <div className=' pb-20 '>
                    <div className='w-full lg:w-[573px] mx-auto'>
                        <p className='text-[#060606] font-semibold text-[60px] text-center -tracking-[2px] leading-normal'>
                            Consume easily <br /> Anytime, Anywhere
                        </p>
                        <p className='my-6 text-[#aeaeae] text-base font-medium -tracking-[0.24px] text-center'>With NewPay Your crypto further using virtual and physical cards
                            You can spend instantly without conversion or delay</p>

                        <div className='bg-[#f8f8f8] rounded-full w-full lg:w-[341px] h-[72px] p-1 flex mx-auto overflow-hidden'>
                            {TabCards.map((item, index) => {
                                return <div
                                    key={index}
                                    onClick={() => handleSetTabActive(item.id)}
                                    className={`${item.id === tabActive ? "text-[#1b1b1b] bg-white shadow-tab-card-item rounded-full" : "text-[#AEAEAE] bg-[#f8f8f8]"} transition-all ease-linear duration-150 cursor-pointer flex-1 flex items-center justify-center text-xl font-semibold `}>
                                    {item.name}
                                </div>
                            })}
                        </div>
                    </div>

                    <div className='mt-[64px] min-h-[606px] flex justify-center'>
                        {tabActive === 1 ? <>
                            <div className='mt-20 relative'>
                                <div className='w-full lg:w-[897px] h-[337px] mx-auto relative'>
                                    <Image src={apple} alt='apple' className='absolute top-0 left-0' />
                                    <Image src={spotify} alt='apple' className='absolute top-[280px] left-[110px]' />

                                    <Image src={nextflix} alt='apple' className='absolute top-4 right-0' />
                                    <Image src={ebay} alt='apple' className='absolute top-[280px] right-[110px]' />
                                </div>

                                <figure style={{ opacity: scrollProgress < 0.47657952069716775 ? 0 : 1 }} ref={mobileRef} className='w-[174px] h-[117px] absolute top-[-17px] left-[40%] z-[2]'>
                                    <Image src={card} alt='card' />
                                </figure>

                                <figure className='w-[448px] h-[600px] absolute top-[-85px] left-[32%]'>
                                    <Image src={mobileUser} alt='mobile' />
                                </figure>
                            </div>
                        </> : <PhysicCard />}
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[64px]'>
                        {virtualCardContent.map((item, index) => {
                            return <div key={index} className='p-8 bg-[#f8f8f8] rounded-[20px]'>
                                <Image src={item.icon} alt='icon' />
                                <p className='mt-8 mb-2 text-[#1b1b1b] text-2xl font-semibold'>{item.title}</p>
                                <p className='text-[#666] text-base font-medium'>{item.description}</p>
                            </div>
                        })}
                    </div>

                </div>
            </div>
            <OpenAccount />
        </div>
    )
}

export default HomeScreen
