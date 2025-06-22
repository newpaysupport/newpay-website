import React from 'react'
import image_card2 from '@/images/home/joint/card-scroll/image_card2.png'
import { FaArrowRight } from "react-icons/fa";
import visa from '@/images/home/joint/card-scroll/visa.svg'
import materCard from '@/images/home/joint/card-scroll/image2018.png'
import { joint as enBlog } from '@/i18n/messages/en.json';
import { joint as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from "next/image"
import Link from 'next/link';
import ToastCustom from '@/components/common/toast';
import toast from 'react-hot-toast';

const Card2 = () => {
    const locale = useLocale();
    const joint = locale === 'en' ? enBlog : ziBlog;

    const listText = joint.card2.listText;
    const handleToast = () => {
        toast.custom(<ToastCustom type='warning' />)
    }

    return (
        <section className="bg-white pt-20 flex items-center rounded-3xl container mx-auto">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-30">
                {/* Left Section: Text Content and Small Card */}
                <div className="flex flex-col justify-between gap-10 items-end">
                    <h2 className="md:w-[66%] text-4xl md:text-5xl font-semibold text-[#1B1B1B] mb-4 leading-tight">
                        {joint.card2.title}
                    </h2>
                    <Image
                        src={image_card2}
                        alt="Person holding a card"
                        className="rounded-lg object-cover"
                    />
                </div>

                {/* Right Section: Large Image Card */}
                <div className="flex flex-col space-y-10 ">
                    <div>
                        <h1 style={{ fontSize: '32px' }} className='text-[#666] font-medium md:w-[70%]'>{joint.card2.description}</h1>
                        <div className='flex space-x-6 pt-4'>
                            <Image src={visa} alt='arrow right' />
                            <Image src={materCard} alt='arrow right' />
                        </div>
                    </div>
                    <div className=''>
                        {listText.map((item, index) => {
                            return (
                                <div key={item.text}
                                    style={{
                                        borderBottom: `${index === listText.length - 1 ? "none" : "1px solid #D8D8D8"}`
                                    }}
                                    className='flex items-center text-[#666] text-2xl font-medium py-8 '>
                                    <p className='pr-12 text-[#FF6910]'>{item.number} </p>
                                    <p> {item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex gap-2">
                        {/* Button Left */}
                        <button onClick={handleToast}
                            style={{
                                border: "1px solid rgba(0, 0, 0, 0.16)"
                            }}
                            className="md:w-[245px] bg-[#060606] font-semibold py-4 px-12 rounded-full cursor-pointer hover:scale-101">
                            <p className="text-md text-white">{joint.card2.textButtonCardLeft}</p>

                        </button>

                        {/* Button Right */}
                        <Link href={`/${locale}/contact`}>
                            <button style={{
                                border: "1px solid rgba(0, 0, 0, 0.16)",
                            }}
                                className="md:w-[254px] border border-white font-semibold py-4 px-12 rounded-full cursor-pointer hover:shadow-sm">
                                <p className="flex justify-center items-center gap-2.5 text-md">{joint.card2.textButtonCardRight}<FaArrowRight className="font-light animate-translateX" /></p>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Card2