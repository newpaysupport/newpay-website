"use client"
import Image from 'next/image';

type CardSlideMobileProps = {
    slides: {
        image: string;
        title: string;
        subtitle?: string;
    }[];
    joint: {
        cardSlide: {
            title: string;
        };
    };
};

const CardSlideMobile = ({ slides, joint }: CardSlideMobileProps) => {
    return (
        <div className="py-16 w-full overflow-hidden bg-white relative md:hidden">
            {/* Title */}
            <h1 className="text-[32px]  text-[#1B1B1B] font-semibold container mx-auto px-4 text-left">
                {joint.cardSlide.title}
            </h1>

            {/* Overlay Left */}
            <div
                style={{
                    background: "linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.00) 100%)"

                }}
                className="absolute w-[60px] h-[450px] left-0 bottom-[6%] z-30"
            ></div>

            {/* Overlay Right */}
            <div
                style={{
                    background: "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.80) 100%)"
                }}
                className="absolute w-[60px] h-[450px] right-0 bottom-[6%] z-30"
            ></div>

            {/* Slide container */}
            <div className="relative mt-12">
                <div className="flex gap-5 overflow-hidden px-4 animation-slideshow">
                    {[...slides, ...slides].map((slide, i) => (
                        <div
                            key={i}
                            className="w-[330px] h-[410px] rounded-3xl relative overflow-hidden flex-shrink-0"
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={330}
                                height={410}
                                className="w-full h-full object-cover rounded-3xl"
                            />
                            <div className="absolute bottom-1 left-1 text-white p-2 flex flex-col gap-2">
                                {slide.subtitle && (
                                    <h3
                                        style={{
                                            background:
                                                'linear-gradient(0deg, rgba(174, 174, 174, 0.32) 0%, rgba(174, 174, 174, 0.32) 100%), rgba(255, 255, 255, 0.08)',
                                            backdropFilter: 'blur(20px)',
                                        }}
                                        className="w-fit text-base font-semibold py-2 px-4 rounded-full uppercase"
                                    >
                                        {slide.subtitle}
                                    </h3>
                                )}
                                <h3
                                    style={{
                                        background:
                                            'linear-gradient(0deg, rgba(174, 174, 174, 0.32) 0%, rgba(174, 174, 174, 0.32) 100%), rgba(255, 255, 255, 0.08)',
                                        backdropFilter: 'blur(20px)',
                                    }}
                                    className="w-fit text-base font-semibold py-2 px-4 rounded-full uppercase"
                                >
                                    {slide.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardSlideMobile