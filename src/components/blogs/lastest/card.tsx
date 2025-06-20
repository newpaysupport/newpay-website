'use client';

import Image, { StaticImageData } from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { FaLink } from 'react-icons/fa';
import link from '@/images/blog/link.svg';
import link_hover from '@/images/blog/link_hover.svg';

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
            className={`flex flex-col rounded-[28px] group cursor-pointer md:w-[385px] md:h-[380px] mb-10 p-3 hover:border border-[#FF6910]/16 hover:bg-[#FF6910]/4`}
        >
            <div className="w-full h-full relative">
                <Image
                    src={image}
                    alt="Spotlight"
                    className="rounded-2xl w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                />

                {/* Hover overlay content */}
                <div className="pt-5 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                    <h3 className="text-base font-semibold text-[#1B1B1B] mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 break-words">{slug}</p>
                </div>
            </div>
            <div className="w-full flex flex-col justify-between mt-4">
                <div>
                    <h3 className="text-md font-semibold mb-3 group-hover:opacity-0">
                        {title}
                    </h3>
                </div>
                <div className="flex items-center justify-between relative">
                    <div className='flex items-center gap-3 mt-4'>
                        {tag.map((item, index) => {
                            return (
                                <p key={index} className='py-2 px-4 border border-[#d8d8d8] rounded-full w-fit capitalize text-[#1b1b1b] font-medium text-sm'>{item}</p>
                            )
                        })}
                    </div>
                    <div>
                        <Image src={link} alt='link' className="absolute right-2 bottom-2 w-[26px] h-[26px] text-gray-300 opacity-100 group-hover:opacity-0" />
                        <Image src={link_hover} alt='link' className="absolute right-2 bottom-2 w-[26px] h-[26px] text-gray-300 opacity-0 group-hover:opacity-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
