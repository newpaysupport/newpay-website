import React from 'react'
import image1 from "@/images/blog/Frame2147226727.png"
import image2 from "@/images/blog/image.png"
import image3 from "@/images/blog/image(1).png"
import FeaturedCard from './featured-card';


interface FeaturedArticlesProps {
    featuredArticle: string;
}

const images = [image1, image2, image3]


const FeaturedArticles = ({ featuredArticle }: FeaturedArticlesProps) => {
    return (
        <div className='container mx-auto lg:py-12 px-4 lg:px-0'>
            <div className='w-full lg:w-[1200px] mx-auto'>
                <h2 className={`text-2xl lg:text-[40px] text-[#1b1b1b] font-semibold -tracking-[0.64px] mb-6`}>{featuredArticle}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {images.map((item, index) => {
                        return (
                            <div key={index} className={`col-span-1 ${index === 0 ? "row-span-2" : "row-span-1"}`}>
                                <FeaturedCard
                                    index={index}
                                    title='Futureverse’s co-founder: "If you’re not in the metaverse already, you’re probably not part of society"'
                                    tag={["blog", "media"]}
                                    image={item}
                                    className={`flex gap-x-6 ${index === 0 ? "flex-col" : "flex-row"}`}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FeaturedArticles
