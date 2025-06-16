import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import virual_card_dropdown from '@/images/header/virtual_card_dropdown.png';
import physicard_card_dropdown from '@/images/payment/img_card_black.png';
import arrow_right from '@/images/header/arrow_right.svg';

type LinkItem = {
    link: {
        href: string;
        label: string;
        dropdownItems?: Array<{
            title: string;
            href: string;
        }>;
    }
    locale?: string;
};
const PaymentDropdown = ({ link, locale }: LinkItem) => {
    return (
        <div
            style={{
                background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), rgba(6, 6, 6, 0.60)",
                backdropFilter: "blur(25px);"
            }}
            className="overflow-hidden">
            <div className="p-5 max-w-7xl">
                <div className="flex justify-center">
                    {/* Left sidebar with menu items */}
                    <div className="space-y-4 mr-16">
                        {link.dropdownItems?.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`block px-6 py-2 rounded-full transition-all hover:bg-[#FFFFFF]/8 group }`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="font-medium text-[#AEAEAE] group-hover:text-white transition-colors">
                                        {item.title}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Right side with visual cards */}
                    <div className="flex gap-4">
                        {/* Virtual Card */}
                        <div className="rounded-xl relative overflow-hidden cursor-pointer hover:scale-102 transition-transform">
                            <Image
                                src={virual_card_dropdown}
                                alt="Virtual Card"
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute bottom-0 px-3 py-5 flex justify-between w-full z-50">
                                <h1 className="text-sm font-semibold">Virtual Card</h1>
                                <Image
                                    src={arrow_right}
                                    alt="arrow right"
                                />
                            </div>
                            <div style={{
                                background: "linear-gradient(180deg, rgba(6, 6, 6, 0.00) 0%, #060606 100%)",
                                backdropFilter: "blur(2.6666667461395264px)"
                            }}
                                className="absolute bottom-0 right-0 left-0 h-[30%] opacity-70"></div>
                        </div>

                        {/* Physical Card */}
                        <div className="rounded-xl relative overflow-hidden cursor-pointer hover:scale-102 transition-transform">
                            <Image
                                src={physicard_card_dropdown}
                                alt="Physical Card"
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute bottom-0 px-3 py-5 flex justify-between w-full z-50">
                                <h1 className="text-sm font-semibold">Physical Card</h1>
                                <Image
                                    src={arrow_right}
                                    alt="arrow right"
                                />
                            </div>
                            <div style={{
                                background: "linear-gradient(180deg, rgba(6, 6, 6, 0.00) 0%, #060606 100%)",
                                backdropFilter: "blur(2.6666667461395264px)"
                            }}
                                className="absolute bottom-0 right-0 left-0 h-[30%] opacity-70"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentDropdown