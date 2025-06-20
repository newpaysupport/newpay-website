"use client"

import card2 from '@/images/blog/card2.png';
import card3 from '@/images/blog/card3.png';
import card4 from '@/images/blog/card4.png';
import { useState } from "react";
import Card from "./card";
interface LatestProps {
    title: string;
}

const listBlog = [
    {
        title: 'NewPay Joins Circle Payment Network to Power Crypto-to-Fiat Cross-Border Payments',
        tag: ['Media', 'Blog'],
        image: card2,
        slug: 'In much of Latin America, managing money often means navigating uncertainty. From currency volatility, high transaction fees and limited access to global financial services, individuals and small businesses face daily challenges in maintaining economic stability.'
    },
    {
        title: 'NewPay Joins Circle Payment Network to Power Crypto-to-Fiat Cross-Border Payments',
        tag: ['Media', 'Blog'],
        image: card3,
        slug: 'In much of Latin America, managing money often means navigating uncertainty. From currency volatility, high transaction fees and limited access to global financial services, individuals and small businesses face daily challenges in maintaining economic stability.'
    },
    {
        title: 'NewPay Joins Circle Payment Network to Power Crypto-to-Fiat Cross-Border Payments',
        tag: ['Media', 'Blog'],
        image: card4,
        slug: 'In much of Latin America, managing money often means navigating uncertainty. From currency volatility, high transaction fees and limited access to global financial services, individuals and small businesses face daily challenges in maintaining economic stability.'
    },
    {
        title: 'NewPay Joins Circle Payment Network to Power Crypto-to-Fiat Cross-Border Payments',
        tag: ['Media', 'Blog'],
        image: card2,
        slug: 'In much of Latin America, managing money often means navigating uncertainty. From currency volatility, high transaction fees and limited access to global financial services, individuals and small businesses face daily challenges in maintaining economic stability.'
    },
    {
        title: 'NewPay Joins Circle Payment Network to Power Crypto-to-Fiat Cross-Border Payments',
        tag: ['Media', 'Blog'],
        image: card3,
        slug: 'In much of Latin America, managing money often means navigating uncertainty. From currency volatility, high transaction fees and limited access to global financial services, individuals and small businesses face daily challenges in maintaining economic stability.'
    },
    {
        title: 'NewPay Joins Circle Payment Network to Power Crypto-to-Fiat Cross-Border Payments',
        tag: ['Media', 'Blog'],
        image: card4,
        slug: 'In much of Latin America, managing money often means navigating uncertainty. From currency volatility, high transaction fees and limited access to global financial services, individuals and small businesses face daily challenges in maintaining economic stability.'
    }
]

const tags = ["all", "announcements", "insights", "media", "trends"];

const LatestBlog = ({ title }: LatestProps) => {
    const [selectTag, setSelectTag] = useState('all');

    const filteredBlogs =
        selectTag === 'all'
            ? listBlog
            : listBlog.filter(blog =>
                blog.tag.some(t => t.toLowerCase() === selectTag.toLowerCase())
            );

    const handleClickTag = (tag: string) => {
        if (tag !== selectTag) {
            setSelectTag(tag)
        }
    }
    return (
        <div className='container mx-auto pt-12'>
            <h2 className={`text-[40px] text-[#1b1b1b] font-semibold -tracking-[0.64px] text-center`}>{title}</h2>
            <div className="flex gap-2 my-8 justify-center">
                {tags.map((tag, index) => (
                    <p
                        onClick={() => handleClickTag(tag)}
                        key={index}
                        className={`${selectTag === tag ? 'bg-[#212121] text-white' : 'hover:bg-[#212121] hover:text-white bg-black/10'} transition-all ease-linear duration-150 capitalize rounded-full px-4 py-2 cursor-pointer`}
                    >
                        <span className='text-sm font-medium'>{tag}</span>
                    </p>
                ))}
            </div>
            <div className='flex mx-auto gap-5 items-center justify-center flex-wrap'>
                {
                    filteredBlogs.map((item, index) => {
                        return (
                            <Card key={index} title={item.title} tag={item.tag} slug={item.slug} image={item.image} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LatestBlog
