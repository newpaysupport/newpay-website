import React from 'react'
import image_card2 from '@/images/home/joint/card-scroll/image_card2.png'
import { FaArrowRight } from "react-icons/fa";
import phone from '@/images/home/joint/card-scroll/phone.png'
import cardContainer from '@/images/home/joint/card-scroll/CardContainer.svg'
import { joint as enBlog } from '@/i18n/messages/en.json';
import { joint as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from "next/image"

const Card4 = () => {
    const locale = useLocale();
    const joint = locale === 'en' ? enBlog : ziBlog;

    return (
        <section className="bg-white p-10 flex items-center rounded-3xl">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 ">
                {/* Left Section: Text Content and Small Card */}
                <div className="flex flex-col justify-between gap-5">
                    <h2 className="md:w-[60%] text-4xl md:text-5xl font-semibold text-[#1B1B1B] mb-4 leading-tight">
                        Virtual & Physical Cards
                    </h2>
                    <Image
                        src={phone}
                        alt="Person holding a card"
                        className="rounded-lg object-cover"
                    />
                </div>

                {/* Right Section: Large Image Card */}
                <div className="flex flex-col justify-between">
                    <h1 className='text-[#666] text-3xl font-medium'>Co-Branded, Payroll, Benefit, and Business Gift Cards</h1>
                    <div style={{
                        borderRadius: "24px",
                        background: "rgba(255, 105, 16, 0.08)"
                    }}
                        className='flex flex-col space-y-8 p-8 ml-40'>
                        <Image src={cardContainer} alt='' className='mx-auto' />
                        <p className='text-[#000000]/72'>
                            Issue instantly usable virtual cards for online spending, or get sleek physical cards for in-store purchases and daily use.
                        </p>
                        <div className='flex gap-2'>
                            <button style={{
                                border: "1px solid rgba(0, 0, 0, 0.16)"
                            }}
                                className="bg-[#060606] font-semibold py-4 px-12 rounded-full cursor-pointer">
                                <p className="text-md text-white">Explore Now</p>

                            </button>
                            <button style={{
                                border: "1px solid rgba(0, 0, 0, 0.16)"
                            }}
                                className="border border-white font-semibold py-4 px-12 rounded-full cursor-pointer">
                                <p className="flex justify-center items-center gap-3 text-md">Contact us  <FaArrowRight className="font-light" /></p>

                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </section >
    )
}

export default Card4