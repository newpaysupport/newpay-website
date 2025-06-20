"use client"
import React, { useState } from 'react'

interface LatestProps {
    title: string;
}

const tags = ["all", "announcements", "insights", "media", "trends"];

const LatestBlog = ({ title }: LatestProps) => {

    const [selectTag, setSelectTag] = useState('all');


    const handleClickTag = (tag: string) => {
        if (tag !== selectTag) {
            setSelectTag(tag)
        }
    }

    return (
        <div className='container mx-auto py-12'>
            <div className='w-full lg:w-[1200px] mx-auto'>
                <h2 className={`text-[40px] text-[#1b1b1b] font-semibold -tracking-[0.64px] mb-6 text-center`}>{title}</h2>
                <div className="flex gap-2 my-6 justify-center">
                    {tags.map((tag, index) => (
                        <p
                            onClick={() => handleClickTag(tag)}
                            key={index}
                            className={`${selectTag === tag ? 'bg-[#212121] text-white' : 'hover:bg-[#212121] hover:text-white bg-black/10'} transition-all ease-linear duration-150 capitalize rounded-full px-4 py-2 cursor-pointer`}
                        >
                            <span className='text-sm font-medium'>{tag}</span>
                        </p>
                    ))}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default LatestBlog
