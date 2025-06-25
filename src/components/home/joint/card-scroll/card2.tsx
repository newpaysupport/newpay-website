import ToastCustom from '@/components/common/toast';
import { joint as enBlog } from '@/i18n/messages/en.json';
import { joint as ziBlog } from '@/i18n/messages/zi.json';
import materCard from '@/images/home/joint/card-scroll/image2018.png';
import image_card2 from '@/images/home/joint/card-scroll/image_card2.png';
import visa from '@/images/home/joint/card-scroll/visa.svg';
import { useLocale } from 'next-intl';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowRight } from "react-icons/fa";

const Card2 = () => {
    const [isMobile, setIsMobile] = useState(false);
    const locale = useLocale();
    const joint = locale === 'en' ? enBlog : ziBlog;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const listText = joint.card2.listText;
    const handleToast = () => {
        toast.custom(<ToastCustom type='warning' />)
    }

    return (
        <>
            {isMobile ? (
                //mobile
                <section className="bg-white py-12 px-6 flex items-center rounded-3xl container mx-auto">
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
            ) : (
                //desktop
                <section className="bg-white pt-20 flex items-center rounded-3xl container mx-auto">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-30">
                        {/* Left Section: Text Content and Small Card */}
                        <div className="flex flex-col justify-between gap-10 items-end">
                            <h2 className="pl-[32%] text-4xl md:text-5xl font-semibold text-[#1B1B1B] mb-4 leading-tight">
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
            )}
        </>
    )
}
export default Card2