'use client';

import { joint as enBlog } from '@/i18n/messages/en.json';
import { joint as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import bg_joint2 from '@/images/home/joint/bg_joint2.svg';
import { Easing, Variants } from 'motion/react';

const FeaturesGrid = () => {
    const locale = useLocale();
    const joint = locale === 'en' ? enBlog : ziBlog;
    const gridRef = useRef(null);
    const isInView = useInView(gridRef, { once: true, amount: 0.3 });

    const iconVariants: Variants = {
        hidden: { opacity: 0, x: -20, scale: 0.8 },
        visible: (index: number) => ({
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: 'easeOut',
            delay: index * 0.2,
          },
        }),
      };

    return (
        <div className="relative">
            <Image src={bg_joint2} alt="Why Choose NewPay" className="w-full" />
            <div className="absolute inset-0 text-center mt-30">
                <h1 className="text-4xl md:text-5xl text-[#FFF] font-semibold">
                    {joint.featuresGrid.title}
                </h1>
                <p className="text-lg md:text-xl text-[#AEAEAE] mt-6 w-full max-w-3xl mx-auto px-4">
                    {joint.featuresGrid.description}
                </p>

                <div ref={gridRef} className="max-w-7xl mx-auto mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                        {joint.featuresGrid.features.map((feature, index) => {
                            const isLastInRow = index === 3 || index === 7;
                            const isBelowFirstRow = index > 3;

                            return (
                                <div
                                    key={index}
                                    className={`
                    p-[2px]
                    ${!isLastInRow ? 'border-r border-[#565656]' : ''}
                    ${!isBelowFirstRow ? 'border-b border-[#565656]' : ''}
                  `}
                                >
                                    <div className="rounded-md p-6 flex flex-col items-start justify-start">
                                        <div className="mb-4">
                                            {feature.icon ? (
                                                <motion.div
                                                    custom={index}
                                                    initial="hidden"
                                                    animate={isInView ? 'visible' : 'hidden'}
                                                    variants={iconVariants}
                                                >
                                                    <Image
                                                        src={feature.icon}
                                                        alt={feature.title}
                                                        className="object-contain"
                                                        width={80}
                                                        height={80}
                                                    />
                                                    <h3 className="text-white text-xl font-semibold mb-2 text-left w-[90%]">
                                                        {feature.title}
                                                    </h3>
                                                </motion.div>
                                            ) : null}
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesGrid;