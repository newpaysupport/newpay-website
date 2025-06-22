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
            <div style={{            
                borderRadius: '80px'}}
                className="bg-[#FFFFFF]/4 py-20 px-40">
                <div className="flex md:flex-row flex-col max-w-7xl mx-auto gap-30 justify-center items-center">
                    <Image src={product_content_end} alt="Gift Icon" width={540} height={540} />
                    <div className='md:p-0 p-6 w-1/2'>
                        <Image src={logo_payment} alt="Gift Icon" width={100} height={100} className="w-16 h-16 md:w-20 md:h-20" />
                        <h1 className="md:text-5xl md:leading-14 text-2xl font-semibold pt-4 lg:pt-10 text-left text-white">
                            {t('title')}
                        </h1>
                        <Link href={`/${locale}/download`}>
                            <button
                                className="md:text-lg rounded-2xl mt-10 p-4 text-black cursor-pointer bg-white hover:bg-gray-100 font-semibold">
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
