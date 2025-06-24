'use client'
import product_content_end from "@/images/payment/Product_Image.png";
import logo_payment from "@/images/payment/newpay_square_mark_payment.svg";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import Link from "next/link";
import { useLocale } from 'next-intl';
const DownloadSection = () => {

    const t = useTranslations('downloadSection');
    const locale = useLocale();

    return (
        <section className="bg-[#060606]">
            <div className="bg-[#FFFFFF]/4 md:py-20 md:px-40 px-6 py-12 md:rounded-[80px] rounded-[24px]">
                <div className="flex md:flex-row flex-col-reverse max-w-7xl mx-auto md:gap-30 md:justify-center items-center">
                    <Image src={product_content_end} alt="Gift Icon" width={540} height={540} className="w-full h-full md:w-[540px] md:h-[540px]"/>
                    <div className='md:p-0 p-6 md:w-1/2 md:text-left text-center md:pb-0 pb-8'>
                        <Image src={logo_payment} alt="Gift Icon" width={100} height={100} className="w-16 h-16 md:w-20 md:h-20 md:m-0 mx-auto" />
                        <h1 className="md:text-5xl md:leading-14 text-2xl font-semibold pt-4 lg:pt-10 text-left text-white">
                            {t('title')}
                        </h1>
                        <Link href={`/${locale}/download`}>
                            <button
                                className="md:text-lg rounded-2xl text-sm md:mt-10 mt-4 px-4 py-3 md:p-4 text-black cursor-pointer bg-white hover:bg-gray-100 font-semibold">
                                {t('buttonText')}
                            </button>
                        </Link>
                    </div>
                </div>
            </div >
        </section>
    )
}
export default DownloadSection
