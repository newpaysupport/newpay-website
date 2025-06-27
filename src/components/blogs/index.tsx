'use client'
import blog_logo from '@/images/blog/image 1991.png';
import search from '@/images/blog/search.svg';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import FeaturedArticles from './featured/featured-articles';
import LatestBlog from './lastest/latest-blog';
import { listBlogs } from '@/markdown';
import { Blogs } from '@/interfaces/blogs';


const BlogScreen = () => {
    const t = useTranslations('blog');
    const locale = useLocale();

    type InsightsLocale = 'zi' | 'en';
    const insightsLocale = (locale === 'zi' || locale === 'en' ? locale : 'en') as InsightsLocale;
    const blogs: Blogs[] = Object.values(listBlogs)
        .map(item => item[insightsLocale])
        .flat()
        .filter((item): item is Blogs => typeof item.tag === 'string');

    return (
        <div className='pt-[128px] container mx-auto'>
            {/* Header Section */}
            <div className='flex flex-col justify-center items-center px-4 lg:px-0'>
                <Image src={blog_logo} alt="Blog Logo" className='w-20 h-20' />
                <h1 className='text-[32px] lg:text-[60px] font-semibold text-center'><span className='text-[#FF6910]'>NewPay</span> {t('title')}</h1>
                <p className='text-center text-[#666666] mt-5 text-sm font-medium'>{t('subtitle')}</p>
                <div className="mt-10 flex items-center h-[56px] w-[320px] bg-[#f8f8f8] border border-[#d8d8d8] rounded-full ">
                    <button type="button" className="h-full px-3">
                        <Image src={search} alt="Search Icon" width={20} height={20} />
                    </button>
                    <input className="outline-none bg-transparent h-full w-full placeholder:text-[#aeaeae] text-black text-base font-medium" type="text" placeholder={t('searchPlaceholder')} />
                </div>
            </div>
            <FeaturedArticles
                featuredArticle={t("featuredArticle")}
                blogs={blogs.slice(0, 3)}
                insightsLocale={insightsLocale}
                blogTitle={t('title')}
                blogTag={t('title')}

            />
            <LatestBlog
                title={t('latestBlog')}
                tags={t.raw('tags')}
                blogTag={t('title')}
                blogs={blogs}
                insightsLocale={insightsLocale}
            />
        </div>
    )
}

export default BlogScreen
