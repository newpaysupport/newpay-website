import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { FaLink } from 'react-icons/fa';

type CardProps = {
    title?: string;
    description?: string;
    date?: string;
    readTime?: string;
    tags?: string[];
    image?: string | StaticImageData;
    hasDescription?: boolean;
    CardBg: boolean;
}
const Card = ({title, date, readTime, tags, image, CardBg} : CardProps) => {
    return (
        <div className={`flex flex-col ${CardBg === false ? '' : 'hover:bg-orange-50 hover:border border-orange-100' } p-4 rounded-3xl group`}>
            <div className="w-full">
                <Image
                    src={image || '/images/spotlight.jpg'} // Default image if none provided
                    alt="Spotlight"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-full"
                />
            </div>
            <div className="w-full flex flex-col justify-between mt-4">
                <div> 
                    <p className="text-sm text-gray-500 mb-1 font-medium">{date} • {readTime}</p>
                    <h3 className="text-xl font-bold mb-3 leading-snug">
                        {title}
                    </h3>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs border border-gray-300 rounded-full px-4 py-2">{tags?.at(1)}</span>
                    <span className="text-xs border border-gray-300 rounded-full px-4 py-2">{tags?.at(0)}</span>
                    <FaLink className="text-gray-300 ml-auto group-hover:text-orange-200" />
                </div>

            </div>
        </div>
    )
}

export default Card