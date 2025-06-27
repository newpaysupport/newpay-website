"use client"

import card2 from '@/images/blog/card2.png';
import card3 from '@/images/blog/card3.png';
import card4 from '@/images/blog/card4.png';
import { useEffect, useMemo, useState } from "react";
import Card from "./card";
import { useLocale } from 'next-intl';
import { listBlogs } from '@/markdown';
import { MDXProps } from 'mdx/types';
import { Blogs } from '@/interfaces/blogs';
import { objectConvertTagLanguage } from '@/constants/convert-object-language';
import { useBreakpointFlags } from '@/hooks/useBreakpointFlags';
interface LatestProps {
    title: string;
    tags: string[];
    blogTag: string;
    blogs: Blogs[];
    insightsLocale: 'zi' | 'en';
}

const images = [card2, card3, card4]


const LatestBlog = ({ title, tags, blogTag, blogs, insightsLocale }: LatestProps) => {
    const [selectTag, setSelectTag] = useState(tags[0]);
    const { isSm, isMd } = useBreakpointFlags();
    const [listBlogsFiltered, setListBlogsFiltered] = useState<Blogs[]>();




    useEffect(() => {
        if (!blogs.length) setListBlogsFiltered([]);

        if (selectTag === tags[0]) {
            const list = (!isMd && !isSm) ? blogs : blogs.slice(0, 4);
            setListBlogsFiltered(list);
            return;
        }
        const filteredBlogs = blogs.filter((item) => item.tag === selectTag);
        setListBlogsFiltered(filteredBlogs.slice(0, 4));
    }, [isMd, selectTag, isSm]);


    const handleClickTag = (tag: string) => {
        if (tag !== selectTag) {
            setSelectTag(tag)
        }
    }

    const listFilter = useMemo(() => {
        if (selectTag === tags[0]) {
            return blogs;
        } else {
            return blogs.filter((item) => item.tag === selectTag);
        }
    }, [selectTag])

    const handleLoadMore = () => {
        if (!isMd && !isSm) return;
        if (listBlogsFiltered && listBlogsFiltered.length >= listFilter.length) return;

        setListBlogsFiltered((prev) => {
            const safePrev = prev ?? [];
            if (safePrev.length === listFilter.length) return safePrev;
            return [
                ...safePrev,
                ...listFilter.slice(safePrev.length, safePrev.length + 4)
            ];
        })

    }

    const isLoadMoreVisible = useMemo(() => {
        if (!isMd && !isSm) return false;
        if (listBlogsFiltered && listBlogsFiltered.length >= listFilter.length) return false;
        return true;
    }, [listBlogsFiltered, listFilter, isMd, isSm]);


    return (
        <div className='container mx-auto pt-12 pb-20 overflow-x-auto'>
            <h2 className={`text-2xl lg:text-[40px] text-[#1b1b1b] font-semibold -tracking-[0.64px] text-center`}>{title}</h2>
            <div className='w-full overflow-auto pl-4 my-8'>
                <div className="flex w-[460px] mx-auto gap-2 pb-4">
                    {tags.map((tag, index) => (
                        <p
                            onClick={() => handleClickTag(tag)}
                            key={index}
                            className={`${selectTag === tag ? 'bg-[#212121] text-white' : 'hover:bg-black/10 bg-[#f8f8f8] text-[#1b1b1b]'} transition-all ease-linear duration-150 capitalize rounded-full px-4 py-2 cursor-pointer`}
                        >
                            <span className='text-sm font-medium'>{tag}</span>
                        </p>
                    ))}
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 px-4'>
                {
                    listBlogsFiltered?.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                title={item.title.split('.')[1]}
                                tag={`${blogTag},${item.tag}`}
                                tagShow={`${blogTag},${objectConvertTagLanguage[insightsLocale][item.tag as 'insights' | 'media' | 'trends']}`}
                                desc={item.desc}
                                slug={item.slug}
                                id={item.id}
                                image={images[Math.min(
                                    Math.floor(Math.random() * images.length),
                                    images.length - 1
                                )]}
                            />
                        )
                    })
                }
            </div>
            {isLoadMoreVisible && <div onClick={handleLoadMore} className='w-full flex lg:hidden justify-center mt-12'>
                <button className='cursor-pointer rounded-full px-12 py-5 border border-[#D8D8D8] text-lg font-semibold text-[#1B1B1B]'>Load more</button>
            </div>}
        </div>
    )
}

export default LatestBlog
