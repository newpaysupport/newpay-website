'use client';

import slide1 from '@/images/home/joint/slide1.png';
import slide2 from '@/images/home/joint/slide2.png';
import slide3 from '@/images/home/joint/slide3.png';
import slide4 from '@/images/home/joint/slide4.png';
import slide5 from '@/images/home/joint/slide5.png';
import Image from 'next/image';

const slides = [
    { title: 'INTERACTIVE MEDIA', image: slide1 },
    { title: 'VIDEO ENTERTAINMENT', image: slide2 },
    { title: 'E-COMMERCE SHOPPING', image: slide3 },
    { title: 'IT SERVICES', image: slide4 },
    { title: 'ANOTHER SLIDE', image: slide5 },
];

const AutoSlideshow = () => {
    return (
        <div className="py-20 w-full max-w-full overflow-hidden bg-white">
            <h1 className="text-4xl md:text-6xl text-[#1B1B1B] font-semibold max-w-7xl mx-auto text-left">
                Industry Coverage
            </h1>
            <div className="slideshow-container w-full overflow-hidden mt-20 mx-auto">
                <div className="slideshow-track flex w-[calc((400px+30px)*10)] animate-slide">
                    {slides.concat(slides).map((slide, index) => (
                        <div
                            key={index}
                            className="slide flex-none relative mr-[30px] md:w-[330px] md:h-[410px] w-[200px] h-[183px]"
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover rounded-3xl"
                                width={330}
                                height={412}
                                priority={index === 0}
                            />
                            <div className="absolute bottom-1 left-1 text-white p-2">
                                <h3
                                    style={{
                                        background:
                                            'linear-gradient(0deg, rgba(174, 174, 174, 0.32) 0%, rgba(174, 174, 174, 0.32) 100%), rgba(255, 255, 255, 0.08)',
                                        backdropFilter: 'blur(20px)',
                                    }}
                                    className="text-md font-semibold py-2 px-4 rounded-full uppercase"
                                >
                                    {slide.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AutoSlideshow;