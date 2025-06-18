'use client'
import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import card_payment from "@/images/payment/Front.png";
import wallet from "@/images/payment/WALLET.png";

const ContentCard = () => {
    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;

    const [progress, setProgress] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLImageElement>(null);
    const walletRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!wrapperRef.current || !cardRef.current || !walletRef.current) return;

            const wrapperRect = wrapperRef.current.getBoundingClientRect();
            const walletRect = walletRef.current.getBoundingClientRect();
            const cardRect = cardRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            const start = windowHeight;
            const scroll = start - cardRect.top;

            const end = walletRect.top + walletRect.height / 2 - cardRect.height / 2;
            const percent = Math.min(1, Math.max(0, scroll / end));

            setProgress(percent);

        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className="relative container mx-auto pt-30" ref={wrapperRef}>
            <Image
                src={card_payment}
                alt="card payment"
                ref={cardRef}
                className="md:w-[390px] md:h-[245px] mx-auto transition-transform duration-300 ease-linear"
                style={{
                    transform: `translateY(${progress * 130}%)`
                }}
            />
            <div className='pt-20'>
                <Image src={wallet} alt="Wallet" ref={walletRef} className='mx-auto w-[430px] h-[320px]' />
            </div>
        </div>
    )
}

export default ContentCard