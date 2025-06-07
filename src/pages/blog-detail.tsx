'use client';
import Image from 'next/image';
import { FaArrowLeft, FaFacebookF, FaRedditAlien, FaXTwitter } from 'react-icons/fa6';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { LuLink } from 'react-icons/lu';
import { MdOutlineTimer } from 'react-icons/md';
import { PiTelegramLogoBold } from 'react-icons/pi';
import { SiSinaweibo } from 'react-icons/si';

import Card from '@/components/card';
import { listCardData as enData } from '@/i18n/messages/en.json';
import logoAuthor from '../../public/Author.png';

const sliceCard = enData.slice(0, 3);

const blogSections = [
    {
        title: 'Facing Volatility with Innovation',
        paragraphs: [
            `In much of Latin America, managing money often means navigating uncertainty. From currency volatility, high transaction fees and limited access to global financial services, individuals and small businesses face daily challenges in maintaining economic stability.`,
            `In this context, crypto is gaining traction not as a trend, but as a tool. Across the region, people are adopting cryptocurrencies, especially stablecoins and digital payment solutions to solve real problems—preserving value during times of volatility, receiving payments from abroad, and accessing digital finance without relying on traditional banking systems.`,
            `This shift is especially noticeable in cross-border payments. Traditional channels can be costly and slow, often involving multiple intermediaries. In contrast, crypto offers near-instant transfers, lower fees, and greater accessibility—even for those without a formal bank account.`,
            `What we’re seeing in Latin America is not a speculative rush, but a pragmatic transition: from digital assets to real-world utility. From holding crypto to actively using them in daily life. And from barriers to empowerment—powered by technology, and catered to local needs.`,
        ],
    },
    {
        title: 'Why Crypto Adoption in LATAM Is Different',
        paragraphs: [
            `Crypto adoption in Latin America is shaped by real-world needs rather than market trends. Unlike regions where crypto is often viewed through the lens of speculation or investment, in LATAM, it serves a more grounded function: offering financial tools where traditional systems fall short.`,
        ],
        bullets: [
            'In countries with volatile exchange rates, crypto offers a more stable alternative for cross-border payments.',
            'Freelancers and remote workers use stablecoins to receive payments from clients abroad—often faster and with lower fees than traditional methods.',
            'Small businesses adopt crypto to access a broader customer base and reduce exposure to local currency fluctuations.',
            'For many without access to conventional banking, crypto wallets offer a first entry point into global commerce.',
        ],
        paragraphsAfterBullets: [
            `In this context, crypto isn’t just a new financial asset—it’s a practical solution for navigating regional challenges. Its adoption continues to grow, not through hype, but through daily utility.`,
        ],
    },
];


const BlogDetail = () => {

    return (
        <div className="container mx-auto px-4 py-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <FaArrowLeft className="text-orange-500" />
                <span className="text-orange-500 text-sm md:text-md">NewPay Blog</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 md:mt-16">
                <div className="w-full lg:w-[80%]">
                    {/* Main Content */}
                    <div className="w-full">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
                                Crypto in Latin America: From Digital Assets to Cross-Border Payments
                            </h1>

                            <div className="text-sm md:text-md flex flex-wrap gap-4 items-center text-gray-500 mb-8">
                                <p className="flex gap-2 items-center font-medium text-black">
                                    <Image src={logoAuthor} alt="Author" width={24} height={24} />
                                    NewPay
                                </p>
                                <span className="hidden md:inline">•</span>
                                <p className="flex gap-2 items-center">
                                    <HiOutlineCalendarDateRange /> June 5, 2025
                                </p>
                                <span className="hidden md:inline">•</span>
                                <p className="flex gap-2 items-center">
                                    <MdOutlineTimer /> 5 min read
                                </p>
                            </div>
                        </div>
                    </div>

                    {blogSections.map((section, index) => (
                        <div key={index} className="mb-12">
                            <h2 className="font-semibold text-lg md:text-xl mb-4">{section.title}</h2>
                            <div className="text-sm md:text-base flex flex-col gap-4 text-justify">
                                {section.paragraphs?.map((text, idx) => (
                                    <p key={idx}>{text}</p>
                                ))}
                                {section.bullets && (
                                    <ul className="list-disc pl-5 flex flex-col gap-3">
                                        {section.bullets.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {section.paragraphsAfterBullets?.map((text, idx) => (
                                    <p key={`after-${idx}`}>{text}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>


                {/* Sidebar Share Icons */}
                <div className="w-full lg:w-[20%] flex flex-col items-start gap-4">
                    <p className="text-base font-medium">Share this post</p>
                    <div className="flex flex-wrap gap-3 text-2xl text-gray-600">
                        <LuLink className="cursor-pointer hover:text-black" />
                        <FaXTwitter className="cursor-pointer hover:text-black" />
                        <PiTelegramLogoBold className="cursor-pointer hover:text-black" />
                        <FaFacebookF className="cursor-pointer hover:text-black" />
                        <SiSinaweibo className="cursor-pointer hover:text-black" />
                        <FaRedditAlien className="cursor-pointer hover:text-black" />
                    </div>
                </div>
            </div>


            {/* Related Posts */}
            <div className="mt-16">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Further Reading</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {sliceCard.map((card) => (
                        <Card
                            key={card.id}
                            title={card.title}
                            date={card.date}
                            readTime={card.readTime}
                            tags={card.tags}
                            image={card.image}
                            CardBg={true}
                        />
                    ))}
                </div>
            </div>
        </div >
    );
};

export default BlogDetail;



