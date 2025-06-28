import React, { useState } from 'react'
import card2_img2 from '@/images/home/joint/card2_img2.png'
import card1_img1 from '@/images/home/joint/card1_img1.png'
import { FaArrowRight } from "react-icons/fa";
import arrowright from '@/images/home/joint/arrowright.svg'
import Image from "next/image"
import Link from 'next/link';


const CardContentMobile = ({ joint, locale }: { joint: any; locale: string }) => {
    return (
        < section className="bg-white py-12 px-6 flex items-center rounded-3xl lg:hidden" >
            <div className="mx-auto ">
                {/* Left Section: Text Content and Small Card */}
                <div className="flex flex-col justify-between space-y-6" >
                    <div className="">
                        <h2 className="text-[32px] font-semibold text-[#1B1B1B] mb-4 leading-tight">
                            {joint.cardContent.title}
                        </h2>
                        <p className="text-lg text-[#666] font-medium">
                            {joint.cardContent.description}
                        </p>
                    </div>
                    <div className="relative ">
                        <Image
                            src={card2_img2}
                            alt="Payment device being used"
                            className="rounded-3xl object-cover h-[380px]"
                        />
                        {/* Overlay card at the bottom */}
                        <div style={{
                            background: "rgba(255, 255, 255, 0.20)",
                            backdropFilter: "blur(12px)"
                        }}
                            className="absolute bottom-4 left-4 right-4 rounded-2xl p-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <span
                                    className="mr-3 rounded-full">
                                    <Image src={arrowright} alt='' className='w-12 h-12' />
                                </span>
                                <div>
                                    <p className="text-[#FFF] text-base font-medium"> {joint.cardContent.textCardRight.title}</p>
                                    <p className="text-[#D8D8D8] text-sm">{joint.cardContent.textCardRight.subtitle}</p>
                                </div>
                            </div>
                            <p className="text-[#FFF] font-semibold text-base">- 120.00 USDT</p>
                        </div>
                    </div>

                    <div
                        style={{ borderRadius: '20px' }}
                        className="bg-black p-3 text-white shadow-xl gap-4 flex mt-2">
                        <div>
                            <Image
                                src={card1_img1}
                                alt="Person holding a card"
                                width={200}
                                height={200}
                                className="rounded-2xl object-cover w-full h-full "
                            />
                        </div>
                        <div className="flex flex-col justify-between ">
                            <p className="text-sm mb-4">
                                {joint.cardContent.textCardLeft}
                            </p>
                            <Link href={`/${locale}/contact`}>
                                <button className="border border-white font-semibold py-3 px-6 rounded-full cursor-pointer text-sm group">
                                    <p className="flex justify-center items-center gap-3"> {joint.cardContent.textButtonCard} <FaArrowRight className="font-light group-hover:translate-x-1.5 transition ease-in-out animate-translateX" /></p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default CardContentMobile