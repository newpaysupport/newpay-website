'use client';

import Image, { StaticImageData } from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { FaLink } from 'react-icons/fa';

type CardProps = {
    id?: number | string;
    title?: string;
    description?: string;
    date?: string;
    readTime?: string;
    tags?: string[];
    image?: string | StaticImageData;
    hasDescription?: boolean;
    CardBg: boolean;
};

const Card = ({ id, title, date, readTime, tags, image, CardBg }: CardProps) => {
    const router = useRouter();
    const params = useParams();
    const locale = params.locale as string;

    const handleClick = () => {
        if (id) {
            router.push(`/${locale}/blog-detail/${id}`);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`flex flex-col ${CardBg ? 'hover:bg-orange-50 hover:border border-orange-100 p-3' : ''} rounded-3xl group cursor-pointer`}
        >
            <div className="w-full h-full">
                <Image
                    src={image || '/images/spotlight.jpg'}
                    alt="Spotlight"
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-full"
                />
            </div>
            <div className="w-full flex flex-col justify-between mt-4">
                <div>
                    <p className="text-sm text-gray-500 mb-1 font-medium">
                        {date} • {readTime}
                    </p>
                    <h3 className="text-md font-semibold mb-3">
                        {title}
                    </h3>
                </div>
                <div className="flex items-center gap-2">
                    <span className="cursor-pointer text-sm font-medium border border-gray-300 rounded-full px-4 py-2">
                        {tags?.[1]}
                    </span>
                    <span className="cursor-pointer text-sm font-medium border border-gray-300 rounded-full px-4 py-2">
                        {tags?.[0]}
                    </span>
                    <FaLink className="text-gray-300 ml-auto group-hover:text-orange-200" />
                </div>
            </div>
        </div>
    );
};

export default Card;
