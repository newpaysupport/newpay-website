import Image, { StaticImageData } from 'next/image';
import React from 'react'
import link from '@/images/blog/link.svg';
import link_hover from '@/images/blog/link_hover.svg';

interface FeaturedCardProps {
    title: string;
    desc?: string;
    tag: string[];
    image: string | StaticImageData;
    className?: string;
    index: number;
}

const FeaturedCard = ({ title, desc, tag, image, className, index }: FeaturedCardProps) => {
    return (
        <div className={`${className} p-4 border border-[#d8d8d8] rounded-4xl h-full group cursor-pointer overflow-hidden`}>
            <figure className={`lg:min-h-[194px] lg:min-w-[260px] rounded-[12px] overflow-hidden ${index === 0 ? "aspect-[2/1]" : "min-w-[160px] h-[124px]"}`}>
                <Image src={image} alt='image' className='group-hover:[transform:scale(1.25)] transition-all ease-linear duration-200 w-full h-full' />
            </figure>

            <div className='py-4'>
                <h3 className='group-hover:text-[#666] text-[#1b1b1b] font-semibold text-base line-clamp-2 lg:line-clamp-none'>{title}</h3>
                <p>{desc}</p>
                <div className='flex  items-center w-full justify-between  mt-4'>
                    <div className='flex  items-center gap-3'>
                        {tag.map((item, index) => {
                            return (
                                <p key={index} className='py-2 px-4 border border-[#d8d8d8] rounded-full w-fit capitalize text-[#1b1b1b] font-medium text-sm'>{item}</p>
                            )
                        })}
                    </div>
                    <div className='hidden md:block'>
                        <Image src={link} alt='link' className="w-[26px] h-[26px] text-gray-300 opacity-100 group-hover:opacity-0 block group-hover:hidden" />
                        <Image src={link_hover} alt='link' className="w-[26px] h-[26px] text-gray-300 opacity-0 group-hover:opacity-100 hidden group-hover:block" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeaturedCard
