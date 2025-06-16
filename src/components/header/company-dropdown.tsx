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
                backdropFilter: "blur(25px)"
            }}
            className="overflow-hidden">
            <div className="p-5">
                <div className="flex w-[170px]">
                    {/* Left sidebar with menu items */}
                    <div className="space-y-4">
                        {link.dropdownItems?.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`block px-6 py-2 rounded-full transition-all hover:bg-[#FFFFFF]/8 group }`}
                            >
                                <div className="font-semibold text-sm text-[#AEAEAE] group-hover:text-white transition-colors text-center">
                                    {item.title}
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