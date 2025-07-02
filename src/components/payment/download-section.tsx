'use client'
import product_content_end from "@/images/payment/Product_Image.png";
import logo_payment from "@/images/payment/newpay_square_mark_payment.png";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import Link from "next/link";
import { useLocale } from 'next-intl';
const DownloadSection = () => {

    const t = useTranslations('downloadSection');
    const locale = useLocale();

    return (
        <section className="bg-[#060606]">
            <div className="bg-[#FFFFFF]/4 lg:py-20 xl:px-50 px-6 py-12 lg:rounded-[80px] rounded-[24px]">
                <div className="flex lg:flex-row flex-col-reverse lg:container mx-auto lg:gap-30 lg:justify-center items-center">
                    <Image src={product_content_end} alt="Gift Icon" width={540} height={540} className="w-full h-full lg:w-[540px] lg:h-[540px]" />
                    <div className='lg:p-0 p-6 lg:w-1/2 lg:text-left text-center lg:pb-0 pb-8'>
                        <Image src={logo_payment} alt="Gift Icon" width={100} height={100} className="w-16 h-16 lg:w-20 lg:h-20 lg:m-0 mx-auto" />
                        <h1 className="lg:text-5xl lg:leading-14 lg:text-left text-center text-2xl font-semibold pt-4 lg:pt-10  text-white">
                            {locale === 'en' ? (
                                <>
                                    Join NewPay.<br />
                                    Spend Safe & Smart
                                </>
                            ) : (
                                <>
                                    加入 NewPay.<br />
                                    开启安全精明的消费方式
                                </>
                            )}
                        </h1>

                        <Link href={`/${locale}/download`}>
                            <button
                                className="lg:text-lg rounded-2xl text-sm lg:mt-10 mt-4 px-4 py-3 lg:p-4 text-black cursor-pointer bg-white hover:bg-gray-100 font-semibold">
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
