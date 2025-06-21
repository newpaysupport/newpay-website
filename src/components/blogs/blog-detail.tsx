'use client';
import Card from '@/components/blogs/lastest/card';
import { blog as enBlog } from '@/i18n/messages/en.json';
import { blog as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { FaArrowLeft, FaFacebookF, FaRedditAlien, FaXTwitter } from 'react-icons/fa6';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { LuLink } from 'react-icons/lu';
import { MdOutlineTimer } from 'react-icons/md';
import { PiTelegramLogoBold } from 'react-icons/pi';
import { SiSinaweibo } from 'react-icons/si';
import logoAuthor from '@/images/blog/Author.png';

interface BlogDetailProps {
    id: number | string;
}

const BlogDetail = ({ id }: BlogDetailProps) => {
    const locale = useLocale();
    const t = useTranslations('blog');
    const router = useRouter();
    const params = useParams();

    const blogData = locale === 'en' ? enBlog : ziBlog;
    const listCardData = blogData.listCardData;

    // find the current blog post by id
    const currentBlog = listCardData.find(blog => blog.id === Number(id));

    // get related posts excluding the current one, limiting to 3
    const relatedPosts = listCardData.filter(blog => blog.id !== Number(id)).slice(0, 3);

    // handle back to blog list
    const handleBackToBlog = () => {
        router.push(`/${locale}`);
    };

    if (!currentBlog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <FaArrowLeft className="text-orange-500" />
                <span
                    onClick={handleBackToBlog}
                    className="text-orange-500 text-sm md:text-md cursor-pointer hover:text-orange-600"
                >
                    NewPay Blog
                </span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 md:mt-16">
                <div className="w-full lg:w-[80%]">
                    {/* Main Content */}
                    <div className="w-full">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
                                {currentBlog.title}
                            </h1>

                            <div className="text-sm md:text-md flex flex-wrap gap-4 items-center text-gray-500 mb-8">
                                <p className="flex gap-2 items-center font-medium text-black">
                                    <Image src={logoAuthor} alt="Author" width={24} height={24} />
                                    NewPay
                                </p>
                                <span className="hidden md:inline">•</span>
                                <p className="flex gap-2 items-center">
                                    <HiOutlineCalendarDateRange /> {currentBlog.date}
                                </p>
                                <span className="hidden md:inline">•</span>
                                <p className="flex gap-2 items-center">
                                    <MdOutlineTimer /> {currentBlog.readTime}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Blog Content */}
                    {currentBlog.blogSections?.map((section, index) => (
                        <div key={index} className="mb-12">
                            <h2 className="font-semibold text-lg md:text-xl mb-4">{section.title}</h2>
                            <div className="text-sm md:text-base flex flex-col gap-4 text-justify">
                                {section.paragraphs?.map((text, idx) => (
                                    <p key={idx}>{text}</p>
                                ))}
                                {section.bullets && (
                                    <ul className="list-disc pl-5 flex flex-col gap-3">
                                        {section.bullets.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {section.paragraphsAfterBullets?.map((text, idx) => (
                                    <p key={`after-${idx}`}>{text}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar Share Icons */}
                <div className="w-full lg:w-[20%] flex flex-col items-start gap-4">
                    <p className="text-base font-medium">{locale === 'en' ? 'Share this post' : '分享这篇文章'}</p>
                    <div className="flex flex-wrap gap-3 text-2xl text-gray-600">
                        <LuLink className="cursor-pointer hover:text-black" />
                        <FaXTwitter className="cursor-pointer hover:text-black" />
                        <PiTelegramLogoBold className="cursor-pointer hover:text-black" />
                        <FaFacebookF className="cursor-pointer hover:text-black" />
                        <SiSinaweibo className="cursor-pointer hover:text-black" />
                        <FaRedditAlien className="cursor-pointer hover:text-black" />
                    </div>
                </div>
            </div>

            {/* Related Posts */}
            {/* <div className="mt-16">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    {locale === 'en' ? 'Further Reading' : '进一步阅读'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {relatedPosts.map((card) => (
                        <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            date={card.date}
                            readTime={card.readTime}
                            tags={card.tags}
                            image={card.image}
                            CardBg={true}
                        />
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default BlogDetail;



