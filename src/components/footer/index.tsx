'use client'
import Discord from '@/icons/Discord.svg';
import Facebook from '@/icons/Facebook.svg';
import insta from '@/icons/insta.svg';
import Linkedin from '@/icons/Linkedin.svg';
import Telegram from '@/icons/Telegram.svg';
import twitter from '@/icons/Twitter-X.svg';
import appStore from '@/images/footer/app-store.svg';
import ggplay from '@/images/footer/gg-play.svg';
import logoNewpay from '@/images/footer/newpay.svg';
import logoMark from '@/images/footer/newpay_mark.svg';

import { FooterItem } from '@/interfaces/footer';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useLocale, useTranslations } from 'use-intl';
import ToastCustom from '../common/toast';


const socials = [
    {
        link: "http://x.com/NewPayOrg",
        icon: twitter
    },
    {
        link: "http://t.me/newpayistheway",
        icon: Telegram
    },
    // {
    //     link: "#",
    //     icon: Discord
    // },
    {
        link: "https://www.facebook.com/people/NewPay/61576781240841",
        icon: Facebook
    },
    {
        link: "https://www.instagram.com/newpayofficial",
        icon: insta
    },
    {
        link: "http://linkedin.com/company/newpayucard",
        icon: Linkedin
    }
]
const Footer = () => {

    const t = useTranslations("footer");
    const locale = useLocale();

    const handleToastComingSoon = () => {
        toast.custom(<ToastCustom type='warning' />)
    }

    return (
        <div className='bg-[#060606] p-20'>
            <div className='container mx-auto'>
                <div className='flex justify-between'>
                    <div>
                        <Link href={'/'} className='flex items-center gap-x-2 cursor-pointer'>
                            <Image src={logoMark} alt='logo mark' />
                            <Image src={logoNewpay} alt='logo mark' />
                        </Link>
                        <div className='flex items-center gap-x-2 cursor-pointer mt-8 mb-20'>
                            <Image onClick={handleToastComingSoon} src={appStore} alt='logo' />
                            <Image onClick={handleToastComingSoon} src={ggplay} alt='logo' />
                        </div>
                        <div className='flex items-center gap-x-8 cursor-pointer'>
                            {socials.map((item, index) => {
                                return (
                                    <Link key={index} className='' href={item.link} target='_blank'>
                                        <figure>
                                            <Image src={item.icon} alt={`NewPay icon`} />
                                        </figure>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10'>
                        {t.raw('information').map((menu: FooterItem, index: number) => {
                            return <div key={index}>
                                <h4 className='text-white text-sm font-semibold mb-6'>{menu.title}</h4>
                                <ul>
                                    {menu.items.map((item, index) => {
                                        return <Link href={`${item.link}`} key={index} className='mb-2 block'>
                                            <li className='text-[#848484] text-sm font-semibold'>{item.label}</li>
                                        </Link>
                                    })}
                                </ul>
                            </div>
                        })}
                    </div>
                </div>

                <p className='newpayFooterText lg:text-[300px] 2xl:text-[312px] font-bold -tracking-[7px] uppercase text-center'>NewPay</p>

                <div className='text-[#848484] text-base font-normal -tracking-[0.24px] flex items-center justify-between pt-10 border-t-[1px] border-white/8'>
                    <span>{t('copyright')}</span>
                    <Link href={`${locale}/term`}>{t('terms')}</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
