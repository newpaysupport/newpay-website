import arrowright from '@/images/home/joint/arrowright.svg';
import card1_img1 from '@/images/home/joint/card1_img1.png';
import card2_img2 from '@/images/home/joint/card2_img2.png';
import { FaArrowRight } from "react-icons/fa";

import { joint as enBlog } from '@/i18n/messages/en.json';
import { joint as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from "next/image";
import Link from 'next/link';
import CardContentMobile from './card-content-mobile';

const CardContent = () => {
    const locale = useLocale();
    const joint = locale === 'en' ? enBlog : ziBlog;

    return (
        <>
            {/* mobile */}
            <CardContentMobile joint={joint} locale={locale} />
            {/* desktop */}
            <section className="bg-white p-16 lg:flex items-center rounded-3xl min-h-screen hidden" >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-30">
                    {/* Left Section: Text Content and Small Card */}
                    <div className="flex flex-col justify-between space-y-10">
                        <div className="pl-32">
                            <h2 className="text-4xl lg:text-5xl font-semibold text-[#1B1B1B] mb-4 leading-tight">
                                {joint.cardContent.title}
                            </h2>
                            <p className="text-3xl text-[#666] mb-6 font-medium">
                                {joint.cardContent.description}
                            </p>
                        </div>

                        <div
                            style={{ borderRadius: '20px' }}
                            className="bg-black p-4 text-white max-w-xl gap-4 shadow-xl flex">
                            <Image
                                src={card1_img1}
                                alt="Person holding a card"
                                width={200}
                                height={200}
                                className="rounded-2xl object-cover w-[200px] h-[200px]"
                            />
                            <div className="flex flex-col justify-between mx-4">
                                <p className="text-lg">
                                    {joint.cardContent.textCardLeft}
                                </p>
                                <Link href={`/${locale}/contact`}>
                                    <button className="border border-white font-semibold py-3 px-6 rounded-full cursor-pointer lg:w-[220px] lg:h-[56px] group">
                                        <p className="flex justify-center items-center gap-3"> {joint.cardContent.textButtonCard} <FaArrowRight className="font-light group-hover:translate-x-1.5 transition ease-in-out animate-translateX" /></p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Right Section: Large Image Card */}
                    <div className="relative ">
                        <Image
                            src={card2_img2}
                            alt="Payment device being used"
                            className="rounded-3xl object-cover lg:w-[600px] lg:h-[600px]"
                        />
                        {/* Overlay card at the bottom */}
                        <div style={{
                            background: "rgba(255, 255, 255, 0.20)",
                            backdropFilter: "blur(12px)"
                        }}
                            className="absolute bottom-6 left-6 right-6 rounded-3xl p-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <span
                                    className=" p-3 rounded-full mr-3">
                                    <Image src={arrowright} alt='' className='w-12 h-12' />
                                </span>
                                <div>
                                    <p className="text-[#FFF] text-xl font-semibold"> {joint.cardContent.textCardRight.title}</p>
                                    <p className="text-[#D8D8D8] text-lg">{joint.cardContent.textCardRight.subtitle}</p>
                                </div>
                            </div>
                            <p className="text-[#FFF] font-semibold text-xl">- 120.00 USDT</p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default CardContent


