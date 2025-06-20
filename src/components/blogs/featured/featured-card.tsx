import Image, { StaticImageData } from 'next/image';
import React from 'react'


interface FeaturedCardProps {
    title: string;
    desc?: string;
    tag: string[];
    image: string | StaticImageData;
    className?: string;
}

const FeaturedCard = ({ title, desc, tag, image, className }: FeaturedCardProps) => {
    return (
        <div className={`${className} p-4 border border-[#d8d8d8] rounded-4xl h-full group cursor-pointer overflow-hidden`}>
            <figure className='min-h-[194px] min-w-[260px] rounded-[12px] overflow-hidden'>
                <Image src={image} alt='image' className='group-hover:scale-125 transition-all ease-linear duration-200' />
            </figure>

            <div className='py-4'>
                <h3 className='group-hover:text-[#666] text-[#1b1b1b] font-semibold text-base'>{title}</h3>
                <p>{desc}</p>
                <div className='flex items-center gap-3 mt-4'>
                    {tag.map((item, index) => {
                        return (
                            <p key={index} className='py-2 px-4 border border-[#d8d8d8] rounded-full w-fit capitalize text-[#1b1b1b] font-medium text-sm'>{item}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard
