import arrow_right from '@/images/header/arrow_right.svg';
import virual_card_dropdown from '@/images/header/virtual_card_dropdown.png';
import physicard_card_dropdown from '@/images/payment/img_card_black.png';
import Image from 'next/image';
import Link from 'next/link';

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
    isBlogAndContact?: boolean;
};

const PaymentDropdown = ({ link, locale, isBlogAndContact }: LinkItem) => {

    const getHeaderStyles = () => {
        if (isBlogAndContact) {
            return {
                background: "white",
                color: "black",
                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                fontWeight: '600',
                zIndex: 50
            };
        }
        return {
            background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), rgba(6, 6, 6, 0.60)",
            backdropFilter: "blur(50px)"
        };
    }

    return (
        <div
            style={getHeaderStyles()}
            className="overflow-hidden md:h-[300px]">
            <div className="px-45 pb-20 pt-5">
                <div className="flex">
                    {/* Left sidebar with menu items */}
                    <div className="space-y-4 mr-16">
                        {link.dropdownItems?.map((item, index) => {
                            let style = ''
                            let hover = ''
                            if (isBlogAndContact && item.title === 'Payment') {
                                style = 'text-[#AEAEAE]'
                            } else if (!isBlogAndContact && item.title === 'Payment') {
                                style = 'text-[#AEAEAE]'
                            } else if (isBlogAndContact) {
                                hover = "hover:bg-[#000000]/10"
                            } else if (!isBlogAndContact) {
                                hover = "hover:bg-[#FFFFFF]/8"
                            }
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`block px-6 py-2 rounded-full transition-all ${hover} group`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`${style} text-sm  transition-colors`}>
                                            {item.title}
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                    {/* Right side with visual cards */}
                    <div className="flex gap-4">
                        {/* Virtual Card */}
                        <Link href={`/${locale}/payment`}>
                            <div className="rounded-xl relative overflow-hidden cursor-pointer hover:scale-102 transition-transform">
                                <Image
                                    src={virual_card_dropdown}
                                    alt="Virtual Card"
                                    className="w-[200px] h-[200px] object-cover rounded-xl"
                                />
                                <div className="absolute bottom-0 px-3 py-5 flex justify-between w-full z-50">
                                    <h1 className="text-sm font-semibold text-white">Virtual Card</h1>
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
                        </Link>

                        {/* Physical Card */}
                        <Link href={`/${locale}/payment`}>
                            <div className="rounded-xl relative overflow-hidden cursor-pointer hover:scale-102 transition-transform">
                                <Image
                                    src={physicard_card_dropdown}
                                    alt="Physical Card"
                                    className="w-[200px] h-[200px] object-cover rounded-xl"
                                />
                                <div className="absolute bottom-0 px-3 py-5 flex justify-between w-full z-50">
                                    <h1 className="text-sm font-semibold text-white">Physical Card</h1>
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
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentDropdown