'use client'
import blog_logo from '@/images/blog/image1991.png';
import search from '@/images/blog/search.svg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import FeaturedArticles from './featured/featured-articles';
import LatestBlog from './lastest/latest-blog';


const BlogScreen = () => {
    const t = useTranslations('blog');

    return (
        <div className='pt-[128px] container mx-auto'>
            {/* Header Section */}
            <div className='flex flex-col justify-center items-center'>
                <Image src={blog_logo} alt="Blog Logo" />
                <h1 className='text-5xl font-semibold text-center'><span style={{ color: '#FF6910' }}>NewPay</span> {t('title')}</h1>
                <p className='text-center text-gray-500 mt-5 text-md'>{t('subtitle')}</p>
                <div className="mt-5 flex items-center h-12 w-[320px] text-sm text-gray-500 bg-white border border-gray-500/30 rounded-full ">
                    <button type="button" className="h-full px-3">
                        <Image src={search} alt="Search Icon" width={20} height={20} />
                    </button>
                    <input className="outline-none bg-transparent h-full w-full" type="text" placeholder={t('searchPlaceholder')} />
                </div>
            </div>
            <FeaturedArticles featuredArticle={t("featuredArticle")} />
            <LatestBlog
                title={t('latestBlog')}
            />
            <div className='w-full flex justify-center py-20'>
                <button className='cursor-pointer rounded-full px-12 py-5 border border-[#D8D8D8] text-lg font-semibold text-[#1B1B1B]'>Load more</button>
            </div>
        </div>
    )
}

export default BlogScreen
