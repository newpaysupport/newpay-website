import world from "@/images/payment/content-main/world.png";

import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from 'next/image';

import aliexpress from "@/images/payment/content-main/aliexpress.svg";
import bitcoin from "@/images/payment/content-main/bitcoin.svg";
import eth from "@/images/payment/content-main/eth.svg";
import facebook from "@/images/payment/content-main/facebook.svg";
import netflix from "@/images/payment/content-main/netflix.svg";
import solana from "@/images/payment/content-main/solana.svg";
import spotify from "@/images/payment/content-main/spotify.svg";
import tether from "@/images/payment/content-main/tether.svg";
import tiktok from "@/images/payment/content-main/tiktok.svg";
import usd from "@/images/payment/content-main/usd.svg";
import youtube from "@/images/payment/content-main/youtube.svg";

const ContentMain = () => {
    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;

    {/* Content Section 2*/ }
    const contentSection2 = payment.contentSection2;
    const listImage = [
        netflix, tiktok, spotify, youtube, facebook, aliexpress
    ]
    return (
        <div className="md:mt-30 mt-12 md:container md:mx-auto overflow-hidden">
            <h1 className="md:text-6xl text-[32px] text-[#1B1B1B] font-semibold text-center md:pt-10 pt-12 px-6 md:px-0">{contentSection2.title}</h1>
            <p className="md:text-lg text-sm font-medium text-center text-[#666] mt-4 mx-auto px-6 md:px-0">{contentSection2.description}</p>
            <div className="mx-auto mt-10 relative">
                <Image src={world} alt="world" className="mx-auto" />

                <Image src={bitcoin} alt="bitcoin" style={{
                    borderRadius: "999px",
                    background: "#FFF",
                    boxShadow: "0px 8px 30px -2px #F7931A, 0.5px 0.5px 1px 0px rgba(255, 255, 255, 0.32) inset, 0px -0.5px 1px 0px rgba(0, 0, 0, 0.25) inset"
                }} className="animate-bitcoin absolute top-[14%] md:left-[26%] left-[20%] md:w-[50px] md:h-[50px] w-[18px] h-[18px]" />

                <Image src={eth} alt="eth" className="animate-eth absolute top-[8%] left-[43%] md:w-[100px] md:h-[100px] w-[36px] h-[36px]" />

                <Image src={usd} alt="usd" style={{
                    borderRadius: "999px",
                    background: "#FFF",
                    boxShadow: "0px 8px 30px -2px #2883E6, 0px 0.5px 1px 0px rgba(255, 255, 255, 0.32) inset, 0px -0.5px 1px 0px rgba(0, 0, 0, 0.25) inset"
                }} className="animate-usd absolute top-[18%] right-[28%] md:w-[50px] md:h-[50px] w-[18px] h-[18px]" />

                <Image src={tether} alt="tether" style={{
                    borderRadius: "999px",
                    background: "#FFF",
                    boxShadow: "0px 8px 30px -2px #43C19F, 0.5px 0.5px 1px 0px rgba(255, 255, 255, 0.32) inset, 0px -0.5px 1px 0px rgba(0, 0, 0, 0.25) inset"
                }} className="animate-tether absolute top-[57%] md:left-[30%] left-[25%] md:w-[50px] md:h-[50px] w-[18px] h-[18px]" />


                <Image src={solana} alt="solana" style={{
                    borderRadius: "999px",
                    background: "#FFF",
                    boxShadow: "0.5px 0.5px 1px 0px rgba(255, 255, 255, 0.32) inset, 0px -0.5px 1px 0px rgba(0, 0, 0, 0.25) inset, 0px 8px 30px -2px #A953EA"
                }} className="animate-solana absolute top-[52%] md:right-[22%] right-[18%] md:w-[50px] md:h-[50px] w-[18px] h-[18px]" />
            </div>


            <div className="mx-auto mt-10 relative" >
                <div className='flex gap-8 justify-center animation-slideshow'>
                    {[...listImage, ...listImage, ...listImage].map((image, index) => {
                        return (
                            <Image src={image} alt="Netflix" key={index} className="md:w-full md:h-full w-[80px] h-[40px]"/>
                        )
                    })}
                </div>
                <div style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
                    backdropFilter: "blur(4px)"
                }} className='absolute left-0 top-0 bottom-0 md:w-[80px] w-[40px]'></div>
                <div style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
                    backdropFilter: "blur(4px)"
                }} className='absolute right-0 top-0 bottom-0 md:w-[80px] w-[40px]'></div>
            </div>
        </div>
    )
}

export default ContentMain