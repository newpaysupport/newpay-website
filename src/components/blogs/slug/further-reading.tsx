import { Blogs } from '@/interfaces/blogs';
import { listBlogs } from '@/markdown';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import Card from '../lastest/card';

import card2 from '@/images/blog/card2.png';
import card3 from '@/images/blog/card3.png';
import card4 from '@/images/blog/card4.png';

const images = [card2, card3, card4]

const FurtherReading = () => {

    const locale = useLocale();
    type InsightsLocale = 'zi' | 'en';
    const insightsLocale = (locale === 'zi' || locale === 'en' ? locale : 'en') as InsightsLocale;
    const blogs: Blogs[] = Object.values(listBlogs)
        .map(item => item[insightsLocale])
        .flat()
        .filter((item): item is Blogs => typeof item.tag === 'string');
    const [randomBlogs, setRandomBlogs] = useState<Blogs[]>([]);

    useEffect(() => {
        let result = [];
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * blogs.length);
            result.push(blogs[randomIndex])
        }

        setRandomBlogs(result);
    }, [])


    return (
        <div className='container mx-auto'>
            <h2 className={`text-[32px] text-[#1b1b1b] font-semibold -tracking-[0.64px] text-left`}>Further Reading</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mt-6'>
                {
                    randomBlogs?.map((item, index) => {
                        return (
                            <Card
                                id={item.id}
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

export default FurtherReading;
