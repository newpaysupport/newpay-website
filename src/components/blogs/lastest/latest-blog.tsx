"use client"

import card2 from '@/images/blog/card2.png';
import card3 from '@/images/blog/card3.png';
import card4 from '@/images/blog/card4.png';
import { useState } from "react";
import Card from "./card";
import { useLocale } from 'next-intl';
import { listBlogs } from '@/markdown';
import { MDXProps } from 'mdx/types';
import { Blogs } from '@/interfaces/blogs';
interface LatestProps {
    title: string;
    tags: string[]
}

const images = [card2, card3, card4]

const LatestBlog = ({ title, tags }: LatestProps) => {
    const [selectTag, setSelectTag] = useState(tags[0]);
    const locale = useLocale();
    type InsightsLocale = 'zi' | 'en';
    const insightsLocale = (locale === 'zi' || locale === 'en' ? locale : 'en') as InsightsLocale;

    const blogs: Blogs[] = Object.values(listBlogs)
        .map(item => item[insightsLocale])
        .flat()
        .filter((item): item is Blogs => typeof item.tag === 'string');



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
                    blogs.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                title={item.title.split('.')[1]}
                                tag={`media,${item.tag}`}
                                desc={item.desc}
                                slug={item.slug}
                                image={images[Math.floor(Math.random() * images.length)]}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LatestBlog
