"use client"
import { listBlogs } from "@/markdown";
import { MDXWrapper } from '@/MDXWrapper';
import { useLocale } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo } from "react";
import ShareSocial from './share-social';
import FurtherReading from "./further-reading";
import { defaultLocale } from "@/i18n/config";



const BlogDetailSlug = ({ slug }: { slug: string }) => {
    const locale = useLocale();
    type InsightsLocale = 'zi' | 'en';
    const insightsLocale = (locale === 'zi' || locale === 'en' ? locale : 'en') as InsightsLocale;
    const router = useRouter();
    const [id, category] = slug.split("-");




    const data = useMemo(() => {
        return Object.values(listBlogs)
            .map(item => item[insightsLocale])
            .flat()
            .filter(item => item.tag === category)
    }, [slug, category, locale])



    const blogDetail = useMemo(() => {
        const item = data
            .filter(item => item.id === Number(id))[0]
        return item;
    }, [locale, id])

    useEffect(() => {
        router.push(`?slug=${blogDetail.slug}&category=${`blog,${blogDetail.tag}`}`)
    }, [locale, blogDetail])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const previousBack = () => {
        router.back();
    }

    return (
        <div>
            <div className='py-[120px] container mx-auto'>
                <div onClick={previousBack} className='flex items-center gap-x-4 mb-12 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22.0002 12.0003C22.0002 12.5533 21.5532 13.0003 21.0002 13.0003H5.41422L10.7072 18.2933C11.0982 18.6842 11.0982 19.3163 10.7072 19.7073C10.5122 19.9023 10.2562 20.0003 10.0002 20.0003C9.74422 20.0003 9.48825 19.9023 9.29325 19.7073L2.29325 12.7073C1.90225 12.3163 1.90225 11.6842 2.29325 11.2933L9.29325 4.29325C9.68425 3.90225 10.3162 3.90225 10.7072 4.29325C11.0982 4.68425 11.0982 5.31631 10.7072 5.70731L5.41422 11.0003H21.0002C21.5532 11.0003 22.0002 11.4473 22.0002 12.0003Z" fill="#1B1B1B" />
                    </svg>
                    <span className='text-[#FF6910] text-base font-semibold -tracking-[0.24px]'>NewPay Blog</span>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[780px]'>
                        <MDXWrapper>
                            <blogDetail.content />
                        </MDXWrapper>
                    </div>
                    <ShareSocial />
                </div>
                <FurtherReading />
            </div>
        </div>
    )
}

export default BlogDetailSlug;
