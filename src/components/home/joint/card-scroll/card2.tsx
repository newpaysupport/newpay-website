import React from 'react'
import image_card2 from '@/images/home/joint/card-scroll/image_card2.png'
import { FaArrowRight } from "react-icons/fa";
import visa from '@/images/home/joint/card-scroll/visa.svg'
import materCard from '@/images/home/joint/card-scroll/image2018.png'
import { joint as enBlog } from '@/i18n/messages/en.json';
import { joint as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from "next/image"

const Card2 = () => {
    const locale = useLocale();
    const joint = locale === 'en' ? enBlog : ziBlog;

    const listText = [
        {
            number: "01.",
            text: "Tap. Pay. Go."
        },
        {
            number: "02.",
            text: "Widely Accepted. Globally Trusted."
        },
        {
            number: "03.",
            text: "Spend confidently - wherever you go, we’ve got your back."
        }
    ]

    return (
        <section className="bg-white p-10 flex items-center rounded-3xl min-h-screen">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-30">
                {/* Left Section: Text Content and Small Card */}
                <div className="flex flex-col justify-between gap-5">
                    <h2 className="md:w-[60%] text-4xl md:text-5xl font-semibold text-[#1B1B1B] mb-4 leading-tight">
                        VISA/MASTER Supported By
                    </h2>
                    <Image
                        src={image_card2}
                        alt="Person holding a card"
                        className="rounded-lg object-cover w-[480px] h-[450px]"
                    />
                </div>

                {/* Right Section: Large Image Card */}
                <div className="flex flex-col space-y-10 ">
                    <div>
                        <h1 className='text-[#666] text-3xl'>Supports Apple Pay & Google Pay</h1>
                        <div className='flex space-x-6 pt-4'>
                            <Image src={visa} alt='arrow right' />
                            <Image src={materCard} alt='arrow right' />
                        </div>
                    </div>
                    <div className='py-4'>
                        {listText.map((item, index) => {
                            return (
                                <p style={{
                                    borderBottom: `${index === listText.length - 1 ? "none" : "1px solid #D8D8D8"}`
                                }}
                                    className='text-[#666] text-2xl font-medium py-8'><span className='pr-12 text-[#FF6910]'>{item.number} </span> {item.text}</p>
                            )
                        })}
                    </div>
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
        </section >
    )
}

export default Card2