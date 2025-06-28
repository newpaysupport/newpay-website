import ToastCustom from '@/components/common/toast';
import { joint as enBlog } from '@/i18n/messages/en.json';
import { joint as ziBlog } from '@/i18n/messages/zi.json';
import cardContainer from '@/images/home/joint/card-scroll/CardContainer.svg';
import phone from '@/images/home/joint/card-scroll/phone.png';
import { useLocale } from 'next-intl';
import Image from "next/image";
import Link from 'next/link';
import toast from 'react-hot-toast';
import { FaArrowRight } from "react-icons/fa";
import Card4Mobile from './card4-mobile';

const Card4 = () => {
    const locale = useLocale();
    const joint = locale === 'en' ? enBlog : ziBlog;
    const handleToast = () => {
        toast.custom(<ToastCustom type='warning' />)
    }
    return (
        <>
            {/* mobile */}
            <Card4Mobile joint={joint} locale={locale} handleToast={handleToast} />
            {/* desktop */}
            <section className="bg-white p-10 lg:flex items-center rounded-3xl min-h-screen hidden">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 ">
                    {/* Left Section: Text Content and Small Card */}
                    <div className="flex flex-col justify-between items-center gap-10">
                        <h2 className="lg:w-[60%] text-4xl lg:text-5xl font-semibold text-[#1B1B1B] mb-4 leading-tight">
                            {joint.card4.title}
                        </h2>
                        <Image
                            src={phone}
                            alt="Person holding a card"
                            className="rounded-lg object-cover"
                        />
                    </div>
                    {/* Right Section: Large Image Card */}
                    <div className="flex flex-col items-end justify-between">
                        <h1 className='text-[#666] text-3xl font-medium text-left w-[80%]'>{joint.card4.description}</h1>
                        <div style={{
                            borderRadius: "24px",
                            background: "rgba(255, 105, 16, 0.08)"
                        }}
                            className='flex flex-col space-y-8 p-8 lg:w-[400px] items-end'>
                            <Image src={cardContainer} alt='' className='mx-auto lg:w-[337px] lg:h-[160px]' />
                            <p className='text-[#000000]/72'>
                                {joint.card4.textCard}
                            </p>
                            <div className="flex gap-2 mx-auto">
                                {/* Button Left */}
                                <button onClick={handleToast}
                                    style={{
                                        border: "1px solid rgba(0, 0, 0, 0.16)"
                                    }}
                                    className="bg-[#060606] font-semibold py-4 px-6  rounded-full cursor-pointer hover:scale-101">
                                    <p className="text-md text-white">{joint.card2.textButtonCardLeft}</p>

                                </button>

                                {/* Button Right */}
                                <Link href={`/${locale}/contact`}>
                                    <button style={{
                                        border: "1px solid rgba(0, 0, 0, 0.16)",
                                    }}
                                        className="border border-white font-semibold py-4 px-6 rounded-full cursor-pointer hover:shadow-sm">
                                        <p className="flex justify-center items-center gap-3 text-md">{joint.card2.textButtonCardRight}<FaArrowRight className="font-light animate-translateX" /></p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default Card4