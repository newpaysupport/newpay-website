import Image from "next/image";


import iso from '@/icons/iso.svg';
import kyc from '@/icons/kyc.svg';
import licensed from '@/icons/licensed.svg';
import mastercard from '@/icons/mastercard.svg';
import merchant from '@/icons/merchant.svg';
import risk_control from '@/icons/risk-control.svg';
import supplier from '@/icons/supplier.svg';
import visa from '@/icons/visa.svg';
import bg_joint2 from '@/images/home/joint/bg_joint2.svg';

const FeaturesGrid = () => {
    const features = [
        {
            iconSrc: mastercard,
            title: 'Mastercard Virtual Card Supported',
        },
        {
            iconSrc: visa,
            title: 'VISA Virtual Card Supported',
        },
        {
            iconSrc: merchant,
            title: 'Accepted by Over 100M+ Merchants',
        },
        {
            iconSrc: kyc,
            title: 'Robust KYC Verification Mechanism',
        },
        {
            iconSrc: risk_control,
            title: 'Powerful Risk Control System',
        },
        {
            iconSrc: licensed,
            title: 'Fully Licensed & Registered',
        },
        {
            iconSrc: iso,
            title: 'Compliant with Top Regulatory Standards',
        },
        {
            iconSrc: supplier,
            title: 'Supported by Robust Supplier Systems',
        },
    ];

    return (
        <div className="relative">
            <Image src={bg_joint2} alt="Why Choose NewPay" className="w-full" />
            <div className="absolute inset-0 text-center mt-30">
                <h1 className="text-4xl md:text-5xl text-[#FFF] font-bold">
                    Why Choose NewPay
                </h1>
                <p className="text-lg md:text-xl text-[#AEAEAE] mt-6 w-full max-w-3xl mx-auto px-4">
                    With NewPay, use your crypto for payments anytime, track spending
                    transparently, and enjoy real-time exchange rates across all scenarios.
                    Our gift card system is designed for joyful sharing with your loved
                    ones.
                </p>

                <div className="max-w-7xl mx-auto mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                        {features.map((feature, index) => {
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
                                            <Image
                                                src={feature.iconSrc}
                                                alt={feature.title}
                                                className="object-contain"
                                            />
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