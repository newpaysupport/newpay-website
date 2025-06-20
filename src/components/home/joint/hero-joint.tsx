'use client';
import Image from 'next/image';

import bg_joint from '@/images/home/joint/bg_homejoint.svg';
import img_bg_joint1 from '@/images/home/joint/img_bg_joint1.svg';
import img_bg_joint2 from '@/images/home/joint/img_bg_joint2.svg';
import img_bg_joint3 from '@/images/home/joint/img_bg_joint3.svg';
import img_bg_joint4 from '@/images/home/joint/img_bg_joint4.svg';
import img_bg_joint1_cn from '@/images/home/joint/img_bg_joint1_cn.svg';
import img_bg_joint2_cn from '@/images/home/joint/img_bg_joint2_cn.svg';
import img_bg_joint4_cn from '@/images/home/joint/img_bg_joint4_cn.svg';
import { joint as enBlog } from '@/i18n/messages/en.json';
import { joint as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Link from 'next/link';


const HeroJoint = () => {
    const locale = useLocale();
    const joint = locale === 'en' ? enBlog : ziBlog;

    const jointImages = {
        img1: locale === 'en' ? img_bg_joint1 : img_bg_joint1_cn,
        img2: locale === 'en' ? img_bg_joint2 : img_bg_joint2_cn,
        img4: locale === 'en' ? img_bg_joint4 : img_bg_joint4_cn,
    };


    return (
        <div className="relative w-full h-[800px] overflow-hidden">
            {/* Background Image Container */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bg_joint.src})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                {/* Overlay image*/}
                <div
                    style={{
                        background: "linear-gradient(180deg, rgba(6, 6, 6, 0.00) 0%, #060606 95.32%)",
                        mixBlendMode: "multiply",
                    }}
                    className="absolute inset-0"
                ></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex justify-start items-start  text-white p-4">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-5 items-center pt-[5%] pb-[5%]">
                    {/* Left Images Column */}
                    <div className="flex flex-col gap-10 md:gap-60 items-start mb-8 lg:mb-0">
                        <Image src={jointImages.img1} alt="Joint Image 1" width={0} height={0} className='fadeInUp-no-delay w-full h-full' />
                        <Image src={jointImages.img2} alt="Joint Image 3" width={0} height={0} className='fadeInUp-no-delay w-full h-full' />
                    </div>

                    {/* Center Text Content */}
                    <div className="text-center w-[50%] mt-5 px-4">
                        <h1
                            style={{
                                background: "linear-gradient(94deg, #FFF 26.92%, rgba(255, 255, 255, 0.00) 116.96%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            className="text-4xl md:text-6xl font-semibold mb-4 leading-tight fadeInUp-no-delay"
                        >
                            {joint.hero.title}
                        </h1>
                        <p className="max-w-xl mx-auto text-[#AEAEAE] text-md mb-8 fadeInUp-delay-03">
                            {joint.hero.description}
                        </p>
                        <Link href={`/${locale}/contact`}>
                            <button className="bg-[#FF6910] font-semibold cursor-pointer text-white px-15 py-3 md:h-[55px] md:w-[240px] rounded-full text-md hover:bg-[#e65c00] transition-colors fadeInUp-delay-03">
                                {joint.hero.buttonText}
                            </button>
                        </Link>
                    </div>

                    {/* Right Images Column */}
                    <div className="flex flex-col gap-10 md:gap-60 items-end mt-8 lg:mt-0">
                        <Image src={img_bg_joint3} alt="Joint Image 2" width={0} height={0} className='fadeInUp-no-delay w-full h-full' />
                        <Image src={jointImages.img4} alt="Joint Image 4" width={0} height={0} className='fadeInUp-no-delay w-full h-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroJoint;