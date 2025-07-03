import React from 'react'
import Image from "next/image"
import Link from 'next/link';
import image_card2 from '@/images/home/joint/card-scroll/image_card2.png'
import { FaArrowRight } from "react-icons/fa";
import phone from '@/images/home/joint/card-scroll/phone.png'
import cardContainer from '@/images/home/joint/card-scroll/CardContainer.svg'

type Card4Props = {
    locale: string;
    joint: {
        card4: {
            title: string;
            textCard : string;
            description : string;
        },
        card2: {
            textButtonCardLeft: string;
            textButtonCardRight: string;
        };
    };
    handleToast : () => void;
}
const Card4Mobile = ({joint, locale, handleToast} : Card4Props) => {
    return (
        <section className="bg-white py-12 px-6 rounded-3xl lg:hidden">
            <div className="flex flex-col gap-6">
                {/* Left Section: Text Content and Small Card */}
                <div className="flex flex-col justify-start items-start gap-6">
                    <h2 className="w-[80%] text-4xl font-semibold text-[#1B1B1B]">
                        {joint.card4.title}
                    </h2>
                    <Image
                        src={phone}
                        alt="Person holding a card"
                        className="rounded-3xl object-cover object-top w-full h-full"
                    />
                </div>
                {/* Right Section: Large Image Card */}
                <div className="flex flex-col items-end justify-between space-y-8">
                    <h1 className='text-[#666] text-lg font-medium text-left'>{joint.card4.description}</h1>
                    <div style={{
                        borderRadius: "24px",
                        background: "rgba(255, 105, 16, 0.08)"
                    }}
                        className='flex flex-col p-4 lg:w-[400px] items-end space-y-4'>
                        <div className='flex gap-4'>
                            <Image src={cardContainer} alt='' className='mx-auto w-[170px]' />
                            <p className='text-[#000000]/72 text-sm'>
                                {joint.card4.textCard}
                            </p>
                        </div>
                        <div className="flex gap-5 justify-center">
                            {/* Button Left */}
                            <button onClick={handleToast}
                                style={{
                                    border: "1px solid rgba(0, 0, 0, 0.16)"
                                }}
                                className="lg:w-[245px] bg-[#060606] font-semibold py-4 px-8 rounded-full cursor-pointer hover:scale-101">
                                <p className="text-sm text-white">{joint.card2.textButtonCardLeft}</p>

                            </button>

                            {/* Button Right */}
                            <Link href={`/${locale}/contact`}>
                                <button style={{
                                    border: "1px solid rgba(0, 0, 0, 0.16)",
                                }}
                                    className="lg:w-[254px] border border-white font-semibold py-4 px-8 rounded-full cursor-pointer hover:shadow-sm">
                                    <p className="flex justify-center items-center gap-2.5 text-sm">{joint.card2.textButtonCardRight}<FaArrowRight className="font-light animate-translateX" /></p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Card4Mobile