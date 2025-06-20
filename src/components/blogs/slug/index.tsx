"use client"
import { useLocale } from 'next-intl';
import { listBlogs } from "@/markdown";
import React, { useMemo } from "react";
import { MDXWrapper } from '@/MDXWrapper';



const BlogDetailSlug = ({ slug }: { slug: string }) => {

    const locale = useLocale();
    type InsightsLocale = 'zi' | 'en';
    const insightsLocale = (locale === 'zi' || locale === 'en' ? locale : 'en') as InsightsLocale;

    const blogDetail = useMemo(() => {
        return Object.values(listBlogs)
            .map(item => item[insightsLocale])
            .flat()
            .filter(item => 'slug' in item && item.slug === slug)[0]
    }, [slug])

    return (
        <div>
            <div className='py-[120px] container mx-auto'>
                <div className='w-[780px]'>
                    <MDXWrapper>
                        <blogDetail.content />
                    </MDXWrapper>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailSlug;
