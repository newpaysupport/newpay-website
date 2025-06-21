
import React from 'react'
import copyLink from '@/images/blog/slug/copy link.svg';
import copyLinkHover from '@/images/blog/slug/copy link (1).svg';
import twitter from '@/images/blog/slug/Twitter-X.svg';
import twitterHover from '@/images/blog/slug/Twitter-X (1).svg';
import telegram from '@/images/blog/slug/Telegram.svg';
import telegramHover from '@/images/blog/slug/Telegram (1).svg';
import facebook from '@/images/blog/slug/Facebook.svg';
import facebookHover from '@/images/blog/slug/Facebook (1).svg';
import weibo from '@/images/blog/slug/Weibo.svg';
import weiboHover from '@/images/blog/slug/Weibo (1).svg';
import reddit from '@/images/blog/slug/Reddit.svg';
import redditHover from '@/images/blog/slug/Reddit (1).svg';
import { FacebookShareButton, TwitterShareButton, TelegramShareButton, WeiboShareButton, RedditShareButton } from "react-share"

import Image, { StaticImageData } from 'next/image';
import { clipboardCopyText } from '@/components/utils/copy';
import toast from 'react-hot-toast';
import { usePathname, useSearchParams } from 'next/navigation';


const ShareSocial = ({ title }: { title: string }) => {

    const pathName = usePathname();
    const searchParams = useSearchParams();

    const slugParam = searchParams.get('slug');
    const categoryParam = searchParams.get('category');

    const shareUrl = `${process.env.NEXT_PUBLIC_HOST_URL}${pathName}?slug=${slugParam}&category=${categoryParam}`;

    const handleCopyLink = () => {
        clipboardCopyText(shareUrl);
        toast.success("Copy clipboard successfully")
    }

    return (
        <div className='w-full lg:w-[312px]'>
            <p className='text-[#1B1B1B] text-base font-medium mb-6'>{title}</p>
            <div className='flex items-center gap-x-6'>

                <figure onClick={handleCopyLink} className='group cursor-pointer'>
                    <Image src={copyLink} alt='' className='block group-hover:hidden group-hover:opacity-0 transition-all ease-linear duration-150' />
                    <Image src={copyLinkHover} alt='' className='hidden group-hover:block group-hover:opacity-100 transition-all ease-linear duration-150' />
                </figure>

                <TwitterShareButton url={shareUrl}>
                    <figure className='group cursor-pointer'>
                        <Image src={twitter} alt='' className='block group-hover:hidden group-hover:opacity-0 transition-all ease-linear duration-150' />
                        <Image src={twitterHover} alt='' className='hidden group-hover:block group-hover:opacity-100 transition-all ease-linear duration-150' />
                    </figure>
                </TwitterShareButton>

                <TelegramShareButton url={shareUrl}>
                    <figure className='group cursor-pointer'>
                        <Image src={telegram} alt='' className='block group-hover:hidden group-hover:opacity-0 transition-all ease-linear duration-150' />
                        <Image src={telegramHover} alt='' className='hidden group-hover:block group-hover:opacity-100 transition-all ease-linear duration-150' />
                    </figure>
                </TelegramShareButton>

                <FacebookShareButton url={shareUrl}>
                    <figure className='group cursor-pointer'>
                        <Image src={facebook} alt='' className='block group-hover:hidden group-hover:opacity-0 transition-all ease-linear duration-150' />
                        <Image src={facebookHover} alt='' className='hidden group-hover:block group-hover:opacity-100 transition-all ease-linear duration-150' />
                    </figure>
                </FacebookShareButton>

                <WeiboShareButton url={shareUrl}>
                    <figure className='group cursor-pointer'>
                        <Image src={weibo} alt='' className='block group-hover:hidden group-hover:opacity-0 transition-all ease-linear duration-150' />
                        <Image src={weiboHover} alt='' className='hidden group-hover:block group-hover:opacity-100 transition-all ease-linear duration-150' />
                    </figure>
                </WeiboShareButton>

                <RedditShareButton url={shareUrl}>
                    <figure className='group cursor-pointer'>
                        <Image src={reddit} alt='' className='block group-hover:hidden group-hover:opacity-0 transition-all ease-linear duration-150' />
                        <Image src={redditHover} alt='' className='hidden group-hover:block group-hover:opacity-100 transition-all ease-linear duration-150' />
                    </figure>
                </RedditShareButton>
            </div>
        </div>
    )
}

export default ShareSocial


