'use client';

import Image, { StaticImageData } from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { FaLink } from 'react-icons/fa';

type CardProps = {
    title: string;
    tag: string[];
    image: string | StaticImageData;
    slug: string;
};

const Card = ({ title, tag, image, slug }: CardProps) => {
    // const router = useRouter();
    // const params = useParams();
    // const locale = params.locale as string;

    // const handleClick = () => {
    //     if (id) {
    //         router.push(`/${locale}/blog-detail/${id}`);
    //     }
    // };

    return (
        <div
            className={`flex flex-col rounded-3xl group cursor-pointer`}
        >
            <div className="w-full h-full">
                <Image
                    src={image}
                    alt="Spotlight"
                    className="rounded-lg w-full h-full"
                />
            </div>
            <div className="w-full flex flex-col justify-between mt-4">
                <div>
                    <h3 className="text-md font-semibold mb-3">
                        {title}
                    </h3>
                </div>
                <div className="flex items-center gap-2">
                    <div className='flex items-center gap-3 mt-4'>
                        {tag.map((item, index) => {
                            return (
                                <p key={index} className='py-2 px-4 border border-[#d8d8d8] rounded-full w-fit capitalize text-[#1b1b1b] font-medium text-sm'>{item}</p>
                            )
                        })}
                    </div>
                    <FaLink className="text-gray-300 ml-auto group-hover:text-orange-200" />
                </div>
            </div>
        </div>
    );
};

export default Card;
