import about_joint from '@/images/home/joint/about_joint.png';
import bg_about from '@/images/home/joint/bg_about.png';
import phone_icon from '@/images/home/joint/phone_icon.svg';

import { joint as enBlog } from '@/i18n/messages/en.json';
import { joint as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';


const About = () => {
    const locale = useLocale();
    const joint = locale === 'en' ? enBlog : ziBlog;
    const listFlag = joint.about.listFlag.map((item) => ({
        flag: item.flag,
        country: item.country,
    }));
    return (
        <>
            <div className="relative w-full h-[500px] md:h-[750px]">
                <div
                    style={{
                        backgroundImage: `url(${bg_about.src})`,
                    }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                >

                    <div className="absolute inset-0 flex flex-col mt-20 justify-start items-center text-center p-4">
                        <h1 className="text-4xl md:text-6xl text-[#FFF] font-semibold mb-4">{joint.about.title}</h1>
                        <p className="text-lg md:text-xl text-white/80 mt-6 w-full max-w-3xl mx-auto px-4 font-medium">
                            {joint.about.description}
                        </p>
                        <div className='mt-8 flex gap-3'>
                            {listFlag.map(item => {
                                return (
                                    <div key={item.country} className='rounded-full bg-[#FFF] py-2 pl-2 pr-4 flex gap-3'>
                                        <Image src={item.flag} alt='' width={32}
                                            height={32}
                                            className="object-contain" />
                                        <p className='text-lg font-medium text-[#060606]'>{item.country}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Image src={about_joint} alt='' className='absolute md:h-[640px] top-[60%] right-[8%] left-[8%] visible rounded-4xl max-w-7xl mx-auto object-cover object-center ' />
                    <Link href={`/${locale}/contact`}>
                        <button className='absolute bottom-[-40%] right-[10%] p-3 text-[#060606] bg-[#FFF] flex gap-4 items-center rounded-full group'>
                            <Image src={phone_icon} alt='message icon' className='h-12 w-12 group-hover:scale-105' />
                            <span className='text-2xl font-semibold pr-3'>{joint.about.buttonText}</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='bg-black h-[400px]'></div>
        </>
    )
}

export default About