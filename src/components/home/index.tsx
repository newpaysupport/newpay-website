'use client'
import BtnPrimary from '@/components/common/button/btn-primary'
import { virtualCardContent } from '@/constants/virtual-card'
import card from '@/images/home/hero/card.png'
import hero from '@/images/home/hero/Hero.png'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import PhysicCard from './consume/physic-card'
import OpenAccount from './open-account'

import apple from '@/images/home/consume/apple.svg'
import ebay from '@/images/home/consume/ebay.svg'
import mobileUser from '@/images/home/consume/mobile-user.png'
import nextflix from '@/images/home/consume/nextflix.svg'
import spotify from '@/images/home/consume/spotify.svg'
import { useLocale, useTranslations } from 'use-intl'
import Link from 'next/link'
import toast from 'react-hot-toast'
import ToastCustom from '../common/toast'

const HomeScreen = () => {

    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const mobileRef = useRef(null);
    const heroRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const t = useTranslations("home");
    const locale = useLocale();

    const TabCards = [
        {
            id: 1,
            name: t('virtualCard')
        },
        {
            id: 2,
            name: t('physicCard')
        },
    ]
    const [tabActive, setTabActive] = useState(TabCards[0].id);


    const handleSetTabActive = (id: number) => {
        setTabActive(id);
    }


    useEffect(() => {

        const handleScroll = () => {

            if (tabActive !== TabCards[0].id) return;

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

    }, [tabActive])


    return (
        <div>
            {/* hero section */}
            <div ref={heroRef} className='w-full h-[872px] overflow-y-hidden relative'>
                <video src={'/videos/home/prism-coin.mp4'} className='w-full h-full object-cover object-top z-[2] absolute mix-blend-lighten' loop={true} autoPlay={true} muted={true} preload='true' />
                <figure className='absolute inset-0 bottom-0 left-0 w-full'>
                    <Image src={hero} alt='' className='w-full h-full' priority />
                </figure>
                <div className='absolute inset-0 flex top-20 justify-center z-[3]'>
                    <div className="w-full lg:w-[600px] 2xl:w-[806px] px-4">
                        <p
                            style={{
                                background: "linear-gradient(90deg, #FFF 0.13%, rgba(255, 255, 255, 0.00) 128.16%)",
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: "transparent"
                            }} className='text-[48px] font-semibold text-center w-full lg:min-w-[472px] -tracking-[1.64px] mx-auto'>
                            {t("titleHero")}
                        </p>
                        <p className='text-[#848484] text-base font-medium -tracking-[0.24px] text-center mb-8'>{t("descHero")}</p>

                        <div className='flex items-center justify-center gap-x-4'>
                            <Link href={`${locale}/download`}>
                                <BtnPrimary text={t("btnGetApp")} variant={'primary-lighter'} />
                            </Link>
                            <BtnPrimary onClick={() => {
                                toast.custom(<ToastCustom type='warning' />)
                            }} text={t("btnCreateAccount")} variant={'surface-3'} />
                        </div>
                    </div>
                </div>
            </div>
            {
                tabActive === TabCards[0].id ? <>
                    <div className={`${scrollProgress >= 0.47657952069716775 ? "hidden" : "fixed flex justify-center inset-0 top-[383px] z-[1000]"}  `}>
                        <figure
                            style={{
                                transform: scrollProgress < 0.05 ? "scale(1)" : `scale(${1 - scrollProgress})`,
                                visibility: scrollProgress >= 0.47657952069716775 ? "hidden" : "visible",
                            }}
                            className='lg:w-[530px] lg:h-[320px]'
                            ref={cardRef}>
                            <Image src={card} alt='card' className='w-full h-full' />
                        </figure>
                    </div>
                </> : <>

                    <div className='top-[383px] z-[1000] absolute flex justify-center inset-0'>
                        <figure
                            className='lg:w-[530px] lg:h-[320px]'>
                            <Image src={card} alt='card' className='w-full h-full' />
                        </figure>
                    </div>

                </>
            }


            {/* consume section */}
            <div className='bg-[#060606]'>
                <div ref={containerRef} className='py-20 bg-white min-h-[700px] rounded-[80px]'>
                    <div className='container mx-auto'>
                        <div className=' pb-20 '>
                            <div className='w-full lg:w-[573px] mx-auto'>
                                <p className='text-[#060606] font-semibold text-[60px] text-center -tracking-[2px] leading-normal'>
                                    {t("consumeEasily")}
                                </p>
                                <p className='my-6 text-[#aeaeae] text-base font-medium -tracking-[0.24px] text-center'>{t("consumeEasilyDesc")}</p>

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

                                        <figure style={{ opacity: scrollProgress < 0.47657952069716775 ? 0 : 1 }} ref={mobileRef} className='w-[164px] h-[117px] absolute top-[-17px] left-[41%] z-[2]'>
                                            <Image src={card} alt='card' />
                                        </figure>

                                        <figure className='w-[448px] h-[600px] absolute top-[-85px] left-[29%]'>
                                            <Image src={mobileUser} alt='mobile' />
                                        </figure>
                                    </div>
                                </> : <PhysicCard />}
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[64px]'>
                                {t.raw('utils').map((item: { title: string; desc: string }, index: number) => {
                                    return <div key={index} className='p-8 bg-[#f8f8f8] rounded-[20px]'>
                                        <figure className='w-12 h-12'>
                                            <Image src={virtualCardContent[index].icon} alt='icon' />
                                        </figure>
                                        <p className='mt-8 mb-2 text-[#1b1b1b] text-2xl font-semibold'>{item.title}</p>
                                        <p className='text-[#666] text-base font-medium'>{item.desc}</p>
                                    </div>
                                })}
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <OpenAccount />
        </div>
    )
}

export default HomeScreen



