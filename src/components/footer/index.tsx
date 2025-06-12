import React from 'react'
import twitter from '@/icons/Twitter-X.svg';
import Telegram from '@/icons/Telegram.svg';
import Discord from '@/icons/Discord.svg';
import Facebook from '@/icons/Facebook.svg';
import insta from '@/icons/insta.svg';
import Linkedin from '@/icons/Linkedin.svg';
import logoMark from '@/images/footer/newpay_mark.svg';
import logoNewpay from '@/images/footer/newpay.svg';
import appStore from '@/images/footer/app-store.png';
import ggplay from '@/images/footer/ggplay.png';

import Image from 'next/image';
import Link from 'next/link';


const socials = [
    {
        link: "#",
        icon: twitter
    },
    {
        link: "#",
        icon: Telegram
    },
    {
        link: "#",
        icon: Discord
    },
    {
        link: "#",
        icon: Facebook
    },
    {
        link: "#",
        icon: insta
    },
    {
        link: "#",
        icon: Linkedin
    }
]

const footerMenus = [
    {
        "title": "Discover",
        "items": [
            { "label": "Joint", "link": "" },
            { "label": "Personal", "link": "" }
        ]
    },
    {
        "title": "Payment",
        "items": [
            { "label": "Card", "link": "" }
        ]
    },
    {
        "title": "Wallet",
        "items": [
            { "label": "Secure Custodian", "link": "" }
        ]
    },
    {
        "title": "Company",
        "items": [
            { "label": "About NewPay", "link": "" },
            { "label": "Blog", "link": "" }
        ]
    },
    {
        "title": "Support",
        "items": [
            { "label": "Contact Us", "link": "" },
            { "label": "FAQ", "link": "" },
            { "label": "Download App", "link": "" }
        ]
    }
]
const Footer = () => {
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
                            <Image src={appStore} alt='logo' />
                            <Image src={ggplay} alt='logo' />
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
                        {footerMenus.map((menu, index) => {
                            return <div key={index}>
                                <h4 className='text-white text-sm font-semibold mb-6'>{menu.title}</h4>
                                <ul>
                                    {menu.items.map((item, index) => {
                                        return <Link href={item.link} key={index} className='mb-2 block'>
                                            <li className='text-[#848484] text-sm font-semibold'>{item.label}</li>
                                        </Link>
                                    })}
                                </ul>
                            </div>
                        })}
                    </div>
                </div>

                <p className='newpayFooterText lg:text-[312px] font-bold -tracking-[7px] uppercase text-center'>NewPay</p>

                <div className='text-[#848484] text-base font-normal -tracking-[0.24px] flex items-center justify-between pt-10 border-t-[1px] border-white/8'>
                    <span>Copyright @ 2025 NewPay. All right reserved</span>
                    <Link href={''}>Terms & Condition</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
