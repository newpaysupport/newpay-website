import product_content_end from "@/images/payment/Product_Image.png";
import logo_payment from "@/images/payment/newpay_square_mark_payment.svg";
import Image from 'next/image';

type DownloadSectionProps = {
    downloadSection?: {
        title: string;
        buttonText: string;
    };
};

const DownloadSection = ({ downloadSection }: DownloadSectionProps) => {
    return (
        <section className="bg-[#060606]">
            <div style={{
                borderRadius: '80px',
                background: 'rgba(255, 255, 255, 0.04));'
            }}
                className="bg-gray-600/10 rounded-4xl py-16">
                <div className="flex md:flex-row flex-col max-w-7xl mx-auto gap-30 justify-center items-center">
                    <Image src={product_content_end} alt="Gift Icon" width={540} height={540} />
                    <div className='md:p-0 p-6 w-1/2'>
                        <Image src={logo_payment} alt="Gift Icon" width={100} height={100} className="w-16 h-16 md:w-20 md:h-20" />
                        <h1 className="md:text-5xl md:leading-14 text-2xl font-semibold pt-4 lg:pt-10 text-left text-white">
                            {downloadSection?.title}
                        </h1>
                        <button
                            className="md:text-md text-sm rounded-xl mt-6 md:py-3 md:px-4 md:text-sm p-4 text-black cursor-pointer bg-white hover:bg-gray-100 font-semibold">
                            {downloadSection?.buttonText}
                        </button>
                    </div>
                </div>
            </div >
        </section>
    )
}
export default DownloadSection
