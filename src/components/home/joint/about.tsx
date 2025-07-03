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
                    {/* mobile */}
                    <>
                        <div className="absolute inset-0 flex flex-col mt-20 justify-start items-center text-center gap-4 px-4 md:hidden">
                            <h1 className="text-[32px] text-[#FFF] font-semibold">{joint.about.title}</h1>
                            <p className="text-sm text-white/80 mx-auto font-medium">
                                {joint.about.description}
                            </p>
                            <div className='mt-2 flex gap-1 flex-wrap justify-center'>
                                {listFlag.map(item => {
                                    return (
                                        <div key={item.country} className='rounded-full bg-[#FFF] p-2 flex items-center gap-1'>
                                            <Image src={item.flag} alt='' width={32}
                                                height={32}
                                                className="object-contain w-[24px] h-[24px]" />
                                            <p className='text-xs font-medium text-[#060606]'>{item.country}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <Image src={about_joint} alt='' className='absolute rounded-3xl bottom-[-45%] left-1/2 transform -translate-x-1/2 object-cover object-center h-[400px] w-[400px] md:hidden' />
                        <Link href={`/${locale}/contact`}>
                            <button className='absolute bottom-[-42%] right-[10%] p-2 text-[#060606] bg-[#FFF] flex gap-2 items-center rounded-full group md:hidden'>
                                <Image src={phone_icon} alt='message icon' className='h-8 w-8 group-hover:scale-105' />
                                <span className='text-sm font-semibold pr-1.5'>{joint.about.buttonText}</span>
                            </button>
                        </Link>

                        {/* desktop */}
                        <div className="absolute inset-0 md:flex flex-col mt-20 justify-start items-center text-center p-4 hidden">
                            <h1 className="text-4xl md:text-6xl text-[#FFF] font-semibold mb-4">{joint.about.title}</h1>
                            <p className="text-lg md:text-xl text-white/80 mt-6 w-full max-w-3xl mx-auto px-4 font-medium">
                                {locale === 'en' ?
                                    <>
                                        NewPay is dedicated to helping you spend and grow your crypto assets. <br />
                                        Founded in 2022, with offices in Hong Kong, Singapore, Malaysia, and Japan.
                                    </>
                                    : <>
                                        NewPay 致力于帮助你消费并增值加密资产。<br />成立于 2022 年，在香港、新加坡、马来西亚及日本设有办公室
                                    </>}
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

                        <Image src={about_joint} alt='' className='absolute lg:h-[640px] xl:w-[1200px] top-[60%] left-1/2 -translate-x-1/2 visible rounded-4xl mx-auto object-cover object-center hidden md:block' />
                        <Link href={`/${locale}/contact`}>
                            <button className='absolute xl:bottom-[-40%] left-3/4 -translate-x-1/3 p-3 text-[#060606] bg-[#FFF] md:flex gap-4 items-center rounded-full group hidden'>
                                <Image src={phone_icon} alt='message icon' className='h-12 w-12 group-hover:scale-105' />
                                <span className='text-2xl font-semibold pr-3'>{joint.about.buttonText}</span>
                            </button>
                        </Link>
                    </>
                </div>
            </div>
            <div className='bg-black md:h-[400px] h-[300px]'></div>
        </>
    )
}
export default About