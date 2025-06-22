'use client';
import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
// import card_payment from "@/images/payment/Front.png";
import wallet_no_card from "@/images/payment/content-card/wallet_no_card.svg";
import card_payment from "@/images/payment/content-card/card_payment.svg";
import wallet_has_card from "@/images/payment/content-card/Wallet.svg";

const ContentCard = () => {
    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;

    const [isSticky, setIsSticky] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(true);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLImageElement>(null);
    const walletRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!wrapperRef.current || !cardRef.current || !walletRef.current) return;

            const wrapperRect = wrapperRef.current.getBoundingClientRect();
            const cardRect = cardRef.current.getBoundingClientRect();
            const walletRect = walletRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const start = windowHeight * 0.5;
            setIsSticky(wrapperRect.top <= start);

            const cardCenter = cardRect.top + cardRect.height / 2;
            const walletCenter = walletRect.top + walletRect.height / 2;

            // Hide card when its center 
            setIsCardVisible(Math.abs(cardCenter - walletCenter) >= 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    return (
                <div className="relative container mx-auto pt-30" ref={wrapperRef}>
                    <Image
                        src={card_payment}
                        alt="card payment"
                        ref={cardRef}
                        className={`mx-auto pl-2 transition-transform duration-300 ease-linear ${isSticky ? 'sticky top-[30%]' : ''} ${isCardVisible ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <div className='pt-20'>
                        {
                            isCardVisible ? 
                            <Image src={wallet_no_card} alt="Wallet no card" ref={walletRef} className={`mx-auto w-[430px] h-[320px]`} /> 
                            : <Image src={wallet_has_card} alt="Wallet has card" ref={walletRef} className='mx-auto w-[430px] h-[320px]' />
                        }
                    </div>
                </div>
            )
};

export default ContentCard;