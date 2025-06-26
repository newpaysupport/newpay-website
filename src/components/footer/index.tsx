'use client'
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
import { usePathname } from 'next/navigation';
import toast from 'react-hot-toast';
import { useTranslations } from 'use-intl';
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
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1]

    const handleToastComingSoon = () => {
        toast.custom(<ToastCustom type='warning' />)
    }

    return (
        <div className='bg-[#060606] lg:p-20 px-4 py-12'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row lg:justify-between'>
                    <div>
                        <Link href={'/'} className='flex items-center gap-x-2 cursor-pointer'>
                            <Image src={logoMark} alt='logo mark' />
                            <Image src={logoNewpay} alt='logo mark' />
                        </Link>
                        <div className='flex items-center gap-x-2 cursor-pointer mt-8 mb-12 lg:mb-20'>
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
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-12 lg:mt-0'>
                        {t.raw('information').map((menu: FooterItem, index: number) => {
                            return <div key={index}>
                                <p className='text-white text-sm font-semibold mb-6'>{menu.title}</p>
                                <ul>
                                    {menu.items.map((item, index) => {
                                        return <li key={index} className='mb-2'>
                                            <Link href={`/${currentLocale}${item.link}`} className='text-[#848484] text-sm font-semibold block'>
                                                {item.label}
                                            </Link>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        })}
                    </div>
                </div>

                <p className='newpayFooterText text-[75px] sm:text-[96px] lg:text-[200px] xl:text-[260px] 2xl:text-[312px] font-bold -tracking-[7px] uppercase text-center'>NewPay</p>

                <div className='text-[#848484] text-sm lg:text-base font-normal -tracking-[0.24px] flex flex-col-reverse md:flex-row items-center justify-between pt-10 border-t-[1px] border-white/8'>
                    <span className='text-xs mt-2 md:mt-0'>{t('copyright')}</span>
                    <Link target='_blank' href={`https://newpay-doc-en.gitbook.io/newpay-docs-en/commission-policy`}>{t('terms')}</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
