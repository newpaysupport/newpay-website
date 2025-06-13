import Image from 'next/image';

// Nhập các hình ảnh
import bg_joint from '@/images/home/joint/bg_homejoint.svg'; // Ảnh nền chính
import img_bg_joint1 from '@/images/home/joint/img_bg_joint1.svg';
import img_bg_joint2 from '@/images/home/joint/img_bg_joint2.svg';
import img_bg_joint3 from '@/images/home/joint/img_bg_joint3.svg';
import img_bg_joint4 from '@/images/home/joint/img_bg_joint4.svg';

const HeroJoint = () => {
    return (
        <div className="relative w-full h-[800px] overflow-hidden">
            {/* Background Image Container */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bg_joint.src})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                {/* Overlay image*/}
                <div
                    style={{
                        background: "linear-gradient(180deg, rgba(6, 6, 6, 0.00) 0%, #060606 95.32%)",
                        mixBlendMode: "multiply",
                    }}
                    className="absolute inset-0"
                ></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex justify-start items-start  text-white p-4">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-5 items-center pt-[8%] pb-[5%]">
                    {/* Left Images Column */}
                    <div className="flex flex-col gap-10 md:gap-60 items-start  mb-8 lg:mb-0">
                        <Image src={img_bg_joint1} alt="Joint Image 1" />
                        <Image src={img_bg_joint2} alt="Joint Image 3" />
                    </div>

                    {/* Center Text Content */}
                    <div className="text-center w-[50%] mt-5 px-4">
                        <h1
                            style={{
                                background: "linear-gradient(94deg, #FFF 26.92%, rgba(255, 255, 255, 0.00) 116.96%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            className="text-4xl md:text-6xl font-semibold mb-4 leading-tight"
                        >
                            NewPay – A New Way to Spend Your Crypto
                        </h1>
                        <p className="max-w-xl mx-auto text-[#AEAEAE] text-md mb-8">
                            Accepted at 100M+ merchants worldwide – supporting travel, gaming, subscriptions, online shopping, entertainment, and more.
                        </p>
                        <button className="bg-[#FF6910] cursor-pointer text-white px-15 py-3 rounded-full text-md hover:bg-[#e65c00] transition-colors">
                            Contact us
                        </button>
                    </div>

                    {/* Right Images Column */}
                    <div className="flex flex-col gap-10 md:gap-60 items-end mt-8 lg:mt-0">
                        <Image src={img_bg_joint3} alt="Joint Image 2" />
                        <Image src={img_bg_joint4} alt="Joint Image 4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroJoint;