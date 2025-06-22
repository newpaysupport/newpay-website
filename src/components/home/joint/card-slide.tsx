'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { joint as enBlog } from '@/i18n/messages/en.json';
import { joint as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';

const AutoSlideshow = () => {
    const locale = useLocale();
    const joint = locale === 'en' ? enBlog : ziBlog;
    const slides = joint.cardSlide.slides
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-30 w-full overflow-hidden bg-white relative">
            <h1 className="text-4xl md:text-6xl text-[#1B1B1B] font-semibold container mx-auto text-left">
                {joint.cardSlide.title}
            </h1>

            {/* overlay  */}
            <div style={{
                background: "linear-gradient(90deg, rgba(255, 255, 255, 1) 5%, rgba(255, 255, 255, 0) 100%)",
            }} className='absolute w-[120px] h-[450px] left-0 bottom-[12%] z-50'></div>
            <div style={{
                background: "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 5%, rgba(255, 255, 255, 1) 100%)"
            }} className='absolute w-[120px] h-[450px] right-0 bottom-[12%] z-50'></div>

            <div className="relative mt-20 flex justify-center items-center animation-slideshow gap-5">

                {[...slides, ...slides].map((slide, i) => (
                    <div
                        key={i}
                        className="slide-item md:w-[330px] md:h-[410px] w-[200px] h-[300px] rounded-3xl relative overflow-hidden flex-shrink-0"
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            width={330}
                            height={410}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                        <div className="absolute bottom-1 left-1 text-white p-2 flex flex-col gap-2">
                            {slide.subtitle && <h3
                                style={{
                                    background:
                                        'linear-gradient(0deg, rgba(174, 174, 174, 0.32) 0%, rgba(174, 174, 174, 0.32) 100%), rgba(255, 255, 255, 0.08)',
                                    backdropFilter: 'blur(20px)',
                                }}
                                className=" md:w-[95px] text-sm font-semibold py-2 px-4 rounded-full uppercase"
                            >
                                {slide.subtitle}
                            </h3>}
                            <h3
                                style={{
                                    background:
                                        'linear-gradient(0deg, rgba(174, 174, 174, 0.32) 0%, rgba(174, 174, 174, 0.32) 100%), rgba(255, 255, 255, 0.08)',
                                    backdropFilter: 'blur(20px)',
                                }}
                                className="text-sm font-semibold py-2 px-4 rounded-full uppercase"
                            >
                                {slide.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AutoSlideshow;
