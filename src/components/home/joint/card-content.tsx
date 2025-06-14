import React from 'react'
import card2_img2 from '@/images/home/joint/card2_img2.png'
import card1_img1 from '@/images/home/joint/card1_img1.png'
import { FaArrowRight } from "react-icons/fa";
import arrowright from '@/images/home/giftcard/arrowright.svg'
import Image from "next/image"

const CardContent = () => {
    return (
        <section className="bg-white p-16 flex items-center rounded-3xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-30">
                {/* Left Section: Text Content and Small Card */}
                <div className="flex flex-col justify-between space-y-10">
                    <div className="pl-32">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#1B1B1B] mb-4 leading-tight">
                            All-in-One <br /> Spending Coverage
                        </h2>
                        <p className="text-3xl text-[#666] mb-6 font-medium">
                            Flexible Virtual & <br /> Physical Card Issuance
                        </p>
                    </div>

                    <div className="bg-black rounded-2xl p-6 lg:p-8 text-white max-w-xl gap-10 shadow-xl flex">
                        <Image
                            src={card1_img1}
                            alt="Person holding a card"
                            width={200}
                            height={200}
                            className="rounded-lg object-cover w-[200px] h-[200px]"
                        />
                        <div className="flex flex-col justify-between">
                            <p className="text-md">
                                Seamlessly manage every payment, from daily purchases to international subscriptions.
                            </p>
                            <button className="border border-white font-semibold py-3 px-6 rounded-3xl cursor-pointer">
                                <p className="flex justify-center items-center gap-3">Contact Us <FaArrowRight className="font-light" /></p>

                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section: Large Image Card */}
                <div className="relative ">
                    <Image
                        src={card2_img2}
                        alt="Payment device being used"
                        className="rounded-3xl h-full object-cover object-center"
                    />
                    <div style={{
                        background: "linear-gradient(180deg, rgba(6, 6, 6, 0.00) 0%, rgba(6, 6, 6, 0.50) 100%)",
                        backdropFilter: "blur(20px)",
                        mixBlendMode: 'color',
                        borderRadius: '24px 24px 24px 24px'
                    }} className="absolute bottom-0 left-0 right-0 h-[40%] opacity-30"></div>

                    {/* Overlay card at the bottom */}
                    <div style={{
                        background: "rgba(255, 255, 255, 0.20)",
                        backdropFilter: "blur(12px)"
                    }}
                        className="absolute bottom-6 left-6 right-6 rounded-3xl p-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <span style={{
                                transform: "rotate(-50deg)",
                            }}
                                className="bg-gray-100 p-3 rounded-full mr-3">
                                <Image src={arrowright} alt='' />
                            </span>
                            <div>
                                <p className="text-[#FFF] text-xl font-semibold">Send</p>
                                <p className="text-[#D8D8D8] text-lg">Dinner</p>
                            </div>
                        </div>
                        <p className="text-[#FFF] font-semibold text-xl">- 120.00 USDT</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default CardContent