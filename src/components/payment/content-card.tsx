'use client';
import insert_wallet_no_card from "@/images/payment/content-card/Group_14.svg";
import card_payment from "@/images/payment/content-card/card_payment.svg";
import wallet_no_card from "@/images/payment/content-card/wallet_no_card.svg";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ContentCard = () => {
    const [isSticky, setIsSticky] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLImageElement>(null);
    const walletRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleScroll = () => {
            if (!wrapperRef.current || !cardRef.current || !walletRef.current) return;
            const wrapperRect = wrapperRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const start = windowHeight * 0.5;
            setIsSticky(wrapperRect.top <= start);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);
    return (
        <div className="relative container mx-auto pt-30" ref={wrapperRef}>
            <Image src={card_payment} alt="card payment" ref={cardRef} className={`mx-auto pl-2.5 transition-transform duration-300 ease-linear z-2 ${isSticky ? 'sticky top-[30%]' : ''}`} />
            <div className='pt-20 transition-transform duration-300 ease-linear'>
                <div className='relative w-[430px] h-[320px] mx-auto' ref={walletRef}>
                    <Image src={wallet_no_card} alt="Wallet no card" className={`mx-auto z-1 `} />
                    <Image src={insert_wallet_no_card} alt="Wallet no card" className={`absolute bottom-2 right-0 left-2 z-3`} />
                </div>
            </div>
        </div>
    )
};
export default ContentCard;

