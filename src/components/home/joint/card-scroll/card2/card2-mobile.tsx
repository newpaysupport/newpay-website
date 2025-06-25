import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import materCard from '@/images/home/joint/card-scroll/image2018.png';
import image_card2 from '@/images/home/joint/card-scroll/image_card2.png';
import visa from '@/images/home/joint/card-scroll/visa.svg';
import { FaArrowRight } from "react-icons/fa";

type Card2 = {
    joint: {
        card2: {
            title: string;
            description: string;
            textButtonCardLeft: string;
            textButtonCardRight: string;
            listText: Array<{
                number: string;
                text: string;
            }>;
        };
    };
    listText: Array<{
        number: string;
        text: string;
    }>;
    locale: string;
    handleToast: () => void;
}

const Card2Mobile = ({joint, listText, locale, handleToast } : Card2) => {
    return (
        <section className="bg-white py-12 px-6 flex items-center rounded-3xl container mx-auto md:hidden">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Section: Text Content and Small Card */}
                <div className="flex flex-col justify-between gap-6 items-end">
                    <h2 className="text-[32px] font-semibold text-[#1B1B1B]">
                        {joint.card2.title}
                    </h2>
                    <Image
                        src={image_card2}
                        alt="Person holding a card"
                        className="rounded-lg object-cover h-[280px] object-top"
                    />
                </div>

                {/* Right Section: Large Image Card */}
                <div className="flex flex-col ">
                    <div className='flex justify-between items-center'>
                        <h1 className='text-lg text-[#666] font-medium w-[60%]'>{joint.card2.description}</h1>
                        <div className='flex space-x-5'>
                            <div>
                                <Image src={visa} alt='arrow right' className='w-[70px] h-full' />
                            </div>
                            <div>
                                <Image src={materCard} alt='arrow right' className='w-[50px] h-full' />
                            </div>
                        </div>
                    </div>
                    <div className='pt-4'>
                        {listText.map((item, index) => {
                            return (
                                <div key={item.text}
                                    style={{
                                        borderBottom: `${index === listText.length - 1 ? "none" : "1px solid #D8D8D8"}`
                                    }}
                                    className='flex items-center text-[#666] text-base font-medium py-3 '>
                                    <p className='pr-12 text-[#FF6910]'>{item.number} </p>
                                    <p> {item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="pt-6 flex justify-center gap-5">
                        {/* Button Left */}
                        <button onClick={handleToast}
                            style={{
                                border: "1px solid rgba(0, 0, 0, 0.16)"
                            }}
                            className="md:w-[245px] bg-[#060606] font-semibold py-4 px-10 rounded-full cursor-pointer hover:scale-101">
                            <p className="text-sm text-white">{joint.card2.textButtonCardLeft}</p>

                        </button>
                        {/* Button Right */}
                        <Link href={`/${locale}/contact`}>
                            <button style={{
                                border: "1px solid rgba(0, 0, 0, 0.16)",
                            }}
                                className="md:w-[254px] border border-white font-semibold py-4 px-10 rounded-full cursor-pointer hover:shadow-sm">
                                <p className="flex justify-center items-center gap-2.5 text-sm">{joint.card2.textButtonCardRight}<FaArrowRight className="font-light animate-translateX" /></p>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Card2Mobile