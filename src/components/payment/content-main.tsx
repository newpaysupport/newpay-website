import world from "@/images/payment/content-main/world.png";

import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from 'next/image';

import aliexpress from "@/images/payment/content-main/aliexpress.svg";
import facebook from "@/images/payment/content-main/facebook.svg";
import netflix from "@/images/payment/content-main/netflix.svg";
import spotify from "@/images/payment/content-main/spotify.svg";
import tiktok from "@/images/payment/content-main/tiktok.svg";
import youtube from "@/images/payment/content-main/youtube.svg";
import bitcoin from "@/images/payment/content-main/bitcoin.svg";
import eth from "@/images/payment/content-main/eth.svg";
import solana from "@/images/payment/content-main/solana.svg";
import tether from "@/images/payment/content-main/tether.svg";
import usd from "@/images/payment/content-main/usd.svg";

const ContentMain = () => {
    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;

    {/* Content Section 2*/ }
    const contentSection2 = payment.contentSection2;
    const listImage = [
        netflix, tiktok, spotify, youtube, facebook, aliexpress
    ]
    return (
        <div className="mt-30 container mx-auto overflow-hidden">
            <h1 className="md:text-6xl text-2xl font-semibold text-center pt-10">{contentSection2.title}</h1>
            <p className="md:text-md text-sm text-center text-gray-500 mt-4 mx-auto">{contentSection2.description}</p>
            <div className="mx-auto mt-10 relative">
                <Image src={world} alt="world" className="mx-auto" />

                <Image src={bitcoin} alt="bitcoin" style={{
                    borderRadius: "999px",
                    background: "#FFF",
                }} className="animate-bitcoin absolute top-[14%] left-[26%]" />

                <Image src={eth} alt="eth" className="animate-eth absolute top-[8%] left-[43%]" />

                <Image src={usd} alt="usd" style={{
                    borderRadius: "999px",
                    background: "#FFF",
                }} className="animate-usd absolute top-[18%] right-[28%]" />

                <Image src={tether} alt="tether" style={{
                    borderRadius: "999px",
                    background: "#FFF",
                }} className="animate-tether absolute top-[57%] left-[30%]" />


                <Image src={solana} alt="solana" style={{
                    borderRadius: "999px",
                    background: "#FFF",
                }} className="animate-solana absolute top-[52%] right-[22%]" />
            </div>


            <div className="mx-auto mt-10 relative" >
                <div className='flex gap-8 justify-center animation-slideshow'>
                    {[...listImage, ...listImage].map((image, index) => {
                        return (
                            <Image src={image} alt="Netflix" />
                        )
                    })}
                </div>
                <div style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
                    backdropFilter: "blur(8px)"
                }} className='absolute left-0 top-0 bottom-0 md:w-[80px]'></div>
                <div style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
                    backdropFilter: "blur(8px)"
                }} className='absolute right-0 top-0 bottom-0 md:w-[80px]'></div>
            </div>
        </div>
    )
}

export default ContentMain