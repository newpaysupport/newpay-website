import React from 'react'
import Image from 'next/image';

import giftcard from '@/video/home/bg_giftcard.gif';
import icon_gift from '@/images/home/giftcard/icon_gift.svg';
import arrow_left from '@/images/home/giftcard/arrow_left.svg';
import arrow_right from '@/images/home/giftcard/arrow_right.svg';

const VideoBackground = () => {
    return (
        <div className='container mx-auto relative'>
            {/* title */}
            <h1 style={{
                background: "linear-gradient(90deg, #FFF 0.13%, rgba(255, 255, 255, 0.00) 128.16%)",
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: "transparent"
            }} className='text-6xl font-semibold text-center w-[40%] mx-auto'>
                NewPay Gift Card Share the Joy
            </h1>
            <p className='text-[#848484] text-center mt-4'>
                Creative Gift Cards – Thoughtful gifts for friends, clients, and family
            </p>
            {/* video */}
            <div className='relative'>
                <img
                    src={giftcard.src}
                    alt="Gift card background"
                    className="w-full object-cover object-center mt-8 rounded-3xl"
                />
                {/*overlay #FF6910 */}
                <div className="absolute inset-0 bg-[#FF7510] opacity-100 mix-blend-color" />
            </div>

            {/* content right */}
            <div style={{
                background: "rgba(255, 255, 255, 0.04))",
                backdropFilter: "blur(20px)"
            }}
                className='absolute right-[10%] bottom-[10%] flex flex-col gap-5 w-[360px] p-6 rounded-3xl'
            >
                <h1 className='text-2xl text-white mb-4'>
                    Creative Gift Cards – Thoughtful gifts for friends, clients, and family
                </h1>

                <div style={{
                    background: "rgba(255, 255, 255, 0.04)"
                }}
                    className="flex items-center justify-between  text-white rounded-2xl p-2 sm:p-3 md:p-4 shadow-md w-full max-w-xs">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <Image src={icon_gift} alt="Gift Icon" />
                        </div>
                        <div>
                            <p className="text-xs text-white">Reward</p>
                            <p className="text-xs text-[#979797]">Free Gift</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-semibold">20.68 USDT</p>
                    </div>
                </div>
                <div style={{
                    background: "rgba(255, 255, 255, 0.04)"
                }}
                    className="flex items-center justify-between  text-white rounded-2xl p-2 sm:p-3 md:p-4 shadow-md w-full max-w-xs">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <Image src={arrow_left} alt="Gift Icon" />
                        </div>
                        <div>
                            <p className="text-xs text-white">Receive</p>
                            <p className="text-xs text-[#979797]">Split travel costs</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-semibold">488.00 USDT</p>
                    </div>
                </div>

                <div style={{
                    background: "rgba(255, 255, 255, 0.04)"
                }}
                    className="flex items-center justify-between  text-white rounded-2xl p-2 sm:p-3 md:p-4 shadow-md w-full max-w-xs">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <Image src={arrow_right} alt="Gift Icon" />
                        </div>
                        <div>
                            <p className="text-xs text-white">Send</p>
                            <p className="text-xs text-[#979797]">Happy Birthday</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-semibold">– 50.50 USDT</p>
                    </div>
                </div>
                <button className='text-white bg-[#FF6910] text-md p-4 rounded-full cursor-pointer'>Free Gift on Signup</button>
            </div>
        </div>
    )
}

export default VideoBackground