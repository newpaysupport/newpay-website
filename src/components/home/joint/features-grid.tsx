import { joint as enBlog } from '@/i18n/messages/en.json';
import { joint as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from 'next-intl';
import Image from "next/image";

import bg_joint2 from '@/images/home/joint/bg_joint2.svg';

const FeaturesGrid = () => {

    const locale = useLocale();
    const joint = locale === 'en' ? enBlog : ziBlog;

    return (
        <div className="relative">
            <Image src={bg_joint2} alt="Why Choose NewPay" className="w-full" />
            <div className="absolute inset-0 text-center mt-30">
                <h1 className="text-4xl md:text-5xl text-[#FFF] font-bold">
                    {joint.featuresGrid.title}
                </h1>
                <p className="text-lg md:text-xl text-[#AEAEAE] mt-6 w-full max-w-3xl mx-auto px-4">
                    {joint.featuresGrid.description}
                </p>

                <div className="max-w-7xl mx-auto mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                        {joint.featuresGrid.features.map((feature, index) => {
                            const isLastInRow = index === 3 || index === 7;
                            const isBelowFirstRow = index > 3;

                            return (
                                <div
                                    key={index}
                                    className=
                                    {`
                                        p-[2px]
                                        ${!isLastInRow ? 'border-r border-r-[#565656]' : ''}
                                        ${!isBelowFirstRow ? 'border-b border-b-[#565656]' : ''}
                                    `}
                                >
                                    <div className=" rounded-md p-6 flex flex-col items-start justify-start">
                                        <div className="mb-4">
                                            {feature.icon ? (
                                                <Image src={feature.icon} alt={feature.title} className="object-contain" width={80} height={80} />
                                            ) : null}

                                        </div>
                                        <h3 className="text-white text-xl font-semibold mb-2 text-left w-[90%]">
                                            {feature.title}
                                        </h3>
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