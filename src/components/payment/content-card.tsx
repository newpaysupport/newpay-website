import React from 'react'
import Image from 'next/image';
import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';

import card_payment from "@/images/payment/Front.png";
import wallet from "@/images/payment/WALLET.png";

const ContentCard = () => {
    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;
    return (
        <div className="container mx-auto pt-30">
            <div>
                <Image src={card_payment} alt="card payment" className='md:w-[390px] md:h-[245px] mx-auto'/>
            </div>
            <div className='pt-20'>
                <Image src={wallet} alt="Wallet" className='mx-auto'/>
            </div>
        </div>
    )
}

export default ContentCard