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
    isScrolled?: boolean;
};

const CompanyDropdown = ({ link, locale, isBlogAndContact, isScrolled }: LinkItem) => {

    const getHeaderStyles = () => {
        if (isBlogAndContact) {
            return {
                background: "white",
                color: "black",
                fontWeight: '600',
                zIndex: 50
            };
        }
        return {
            background: "#060606"
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
                            if (isBlogAndContact && item.title === 'Discover NewPay') {
                                style = 'text-[#AEAEAE]'
                            } else if (!isBlogAndContact && item.title === 'Discover NewPay') {
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
                </div>
            </div>
        </div>
    )
}

export default CompanyDropdown