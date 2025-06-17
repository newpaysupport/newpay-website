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
};
const CompanyDropdown = ({ link, locale }: LinkItem) => {
    return (
        <div
            style={{
                background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), rgba(6, 6, 6, 0.60)",
                backdropFilter: "blur(50px)"
            }}
            className="overflow-hidden md:h-[300px]">
            <div className="px-45 pb-20 pt-5">
                <div className="flex">
                    {/* Left sidebar with menu items */}
                    <div className="space-y-4 mr-16">
                        {link.dropdownItems?.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`block px-6 py-2 rounded-full transition-all hover:bg-[#FFFFFF]/8 group }`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="font-normal text-sm text-[#AEAEAE] group-hover:text-white transition-colors">
                                        {item.title}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDropdown