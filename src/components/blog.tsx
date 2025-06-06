'use client'
import { listCardData as enData, tags as enTags } from '@/i18n/messages/en.json';
import { listCardData as ziData, tags as ziTags } from '@/i18n/messages/zi.json';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import image2 from '../../public/image(1).png';
import image1 from '../../public/image.png';
import blog_logo from '../../public/image1991.png';
import Card from './card';

const Blog = () => {
    const locale = useLocale();
    const t = useTranslations('blog');

    const listCardData = locale === 'en' ? enData : ziData;
    const tags = locale === 'en' ? enTags : ziTags;

    return (
        <div className='mt-6'>
            {/* Header Section */}
            <div className='flex flex-col justify-center items-center'>
                <Image src={blog_logo} alt="Blog Logo" />
                <h1 className='text-5xl font-semibold text-center'><span style={{ color: '#FF6910' }}>NewPay</span> {t('title')}</h1>
                <p className='text-center text-gray-500 mt-5'>{t('subtitle')}</p>
                <div className="mt-5 flex items-center h-12 w-[320px] text-sm text-gray-500 bg-white border border-gray-500/30 rounded-full ">
                    <button type="button" className="h-full px-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.707 18.293L15.168 13.754C16.311 12.306 17 10.483 17 8.5C17 3.813 13.187 0 8.5 0C3.813 0 0 3.813 0 8.5C0 13.187 3.813 17 8.5 17C10.484 17 12.306 16.312 13.754 15.168L18.293 19.707C18.488 19.902 18.744 20 19 20C19.256 20 19.512 19.902 19.707 19.707C20.098 19.316 20.098 18.684 19.707 18.293ZM2 8.5C2 4.916 4.916 2 8.5 2C12.084 2 15 4.916 15 8.5C15 12.084 12.084 15 8.5 15C4.916 15 2 12.084 2 8.5Z" fill="#1B1B1B" />
                        </svg>
                    </button>
                    <input className="outline-none bg-transparent h-full w-full" type="text" placeholder={t('searchPlaceholder')} />
                </div>
            </div>

            {/* Card Section */}
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-12">
                <h2 className="text-4xl font-semibold mb-6">{t('featuredArticle')}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Featured Left Article */}
                    <Card title={listCardData[0].title} date={listCardData[0].date} readTime={listCardData[0].readTime} tags={listCardData[0].tags} image={listCardData[0].image} CardBg={false} />

                    {/* Side Articles */}
                    <div className="flex flex-col gap-4 h-full">
                        {/* Article 1 */}
                        <div className="flex gap-4 p-4 border border-gray-300 rounded-xl shadow-sm bg-white h-[48%]">
                            <div className="w-[50%] h-[100%] relative">
                                <Image
                                    src={image1}
                                    alt="Article 1"
                                    fill
                                    className="rounded-md object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-5 w-[50%]">
                                <p className="text-sm text-gray-500">{listCardData[1].date} • {listCardData[1].readTime}</p>
                                <p className="text-sm font-medium">
                                    {listCardData[1].title}
                                </p>
                                <div className="flex gap-2 mt-2">
                                    {listCardData[1].tags.map((tag) => (
                                        <span key={tag} className="text-xs border border-gray-400 rounded-full px-4 py-2">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Article 2 */}
                        <div className="flex gap-4 p-4 border border-gray-300 rounded-xl shadow-sm bg-white h-[48%]">
                            <div className="w-[50%] h-[100%] relative">
                                <Image
                                    src={image2}
                                    alt="Article 2"
                                    fill
                                    className="rounded-md object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-5 w-[50%]">
                                <p className="text-sm text-gray-500">{listCardData[2].date} • {listCardData[2].readTime}</p>
                                <p className="text-sm font-medium">
                                    {listCardData[2].title}
                                </p>
                                <div className="flex gap-2 mt-2">
                                    {listCardData[2].tags.map((tag) => (
                                        <span key={tag} className="text-xs border border-gray-400 rounded-full px-4 py-2">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* All Articles Section */}
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 my-12">
                <h2 className="text-5xl font-semibold text-center mb-6">{t('latestBlog')}</h2>
                <div className="flex gap-2 my-6 justify-center">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs rounded-full px-4 py-2 hover:bg-black hover:text-white cursor-pointer bg-gray-200 font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {listCardData.map((card) => (
                        <Card
                            key={card.id}
                            title={card.title}
                            date={card.date}
                            readTime={card.readTime}
                            tags={card.tags}
                            image={card.image}
                            CardBg={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog