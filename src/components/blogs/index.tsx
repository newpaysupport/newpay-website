'use client'
import blog_logo from '@/images/blog/image 1991.png';
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
                <Image src={blog_logo} alt="Blog Logo" className='w-20 h-20' />
                <h1 className='text-[60px] font-semibold text-center'><span className='text-[#FF6910]'>NewPay</span> {t('title')}</h1>
                <p className='text-center text-[#666666] mt-5 text-md font-medium'>{t('subtitle')}</p>
                <div className="mt-10 flex items-center h-[56px] w-[320px] bg-[#f8f8f8] border border-[#d8d8d8] rounded-full ">
                    <button type="button" className="h-full px-3">
                        <Image src={search} alt="Search Icon" width={20} height={20} />
                    </button>
                    <input className="outline-none bg-transparent h-full w-full placeholder:text-[#aeaeae] text-black text-base font-medium" type="text" placeholder={t('searchPlaceholder')} />
                </div>
            </div>
            <FeaturedArticles featuredArticle={t("featuredArticle")} />
            <LatestBlog
                title={t('latestBlog')}
                tags={t.raw('tags')}
                blogTag={t('title')}
            />
            <div className='w-full flex justify-center py-20'>
                <button className='cursor-pointer rounded-full px-12 py-5 border border-[#D8D8D8] text-lg font-semibold text-[#1B1B1B]'>Load more</button>
            </div>
        </div>
    )
}

export default BlogScreen
