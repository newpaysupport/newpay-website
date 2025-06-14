'use client';

import slide1 from '@/images/home/joint/slide1.png';
import slide2 from '@/images/home/joint/slide2.png';
import slide3 from '@/images/home/joint/slide3.png';
import slide4 from '@/images/home/joint/slide4.png';
import slide5 from '@/images/home/joint/slide5.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
    { title: 'INTERACTIVE MEDIA', image: slide1 },
    { title: 'VIDEO ENTERTAINMENT', image: slide2 },
    { title: 'E-COMMERCE SHOPPING', image: slide3 },
    { title: 'IT SERVICES', image: slide4 },
    { title: 'ANOTHER SLIDE', image: slide5 },
];

const AutoSlideshow = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-20 w-full overflow-hidden bg-white">
            <h1 className="text-4xl md:text-6xl text-[#1B1B1B] font-semibold max-w-7xl mx-auto text-left">
                Industry Coverage
            </h1>

            <div className="relative mt-30 mb-10 flex justify-center items-center">
                {/* overlay  */}
                <div style={{
                    background: "linear-gradient(90deg, rgba(255, 255, 255, 1) 5%, rgba(255, 255, 255, 0) 100%)",
                }} className='absolute w-[120px] h-[450px] left-0 bottom-0 z-50'></div>
                <div style={{
                    background: "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 5%, rgba(255, 255, 255, 1) 100%)"
                }} className='absolute w-[120px] h-[450px] right-0 bottom-0 z-50'></div>

                {[-2, -1, 0, 1, 2].map((offset, i) => {
                    const index = (current + offset + slides.length) % slides.length;
                    //apply style index
                    let style = 'scale-90 opacity-60 z-0';
                    if (offset === 0) style = 'scale-120 opacity-100 z-30 mx-10';
                    else if (Math.abs(offset) === 1) style = 'scale--100 opacity-90 z-20 ';
                    else if (Math.abs(offset) === 2) style = 'scale-90 opacity-80 z-10 ';
                    return (
                        <div
                            key={i}
                            className={`transition-all duration-700 ease-in-out transform  ${style} md:w-[330px] md:h-[410px] rounded-3xl relative overflow-hidden`}
                        >
                            <Image
                                src={slides[index].image}
                                alt={slides[index].title}
                                width={330}
                                height={410}
                                className="w-full h-full object-cover rounded-3xl"
                            />
                            <div className="absolute bottom-1 left-1 text-white p-2">
                                <h3
                                    style={{
                                        background:
                                            'linear-gradient(0deg, rgba(174, 174, 174, 0.32) 0%, rgba(174, 174, 174, 0.32) 100%), rgba(255, 255, 255, 0.08)',
                                        backdropFilter: 'blur(20px)',
                                    }}
                                    className="text-sm font-semibold py-2 px-4 rounded-full uppercase"
                                >
                                    {slides[index].title}
                                </h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AutoSlideshow;
