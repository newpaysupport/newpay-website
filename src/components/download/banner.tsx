"use client"
import appStore1 from '@/images/download/app-store 1.png'
import appStore from '@/images/download/apple-app-store.svg.svg'
import googleStore1 from '@/images/download/google-play-store 1.png'
import googleStore from '@/images/download/google-play-store.svg.svg'
import newpayMask from '@/images/download/newpay_square_mark.png'
import product from '@/images/download/product.png'
import productMobile from '@/images/download/product-mobile.png'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import toast from 'react-hot-toast'
import ToastCustom from '../common/toast'

const Banner = () => {

    const t = useTranslations("download.banner");

    const handleToast = () => {
        toast.custom(<ToastCustom type='warning' />)
    }


    return (
        <div className='bg-[#060606] pt-[120px]'>
            <div className='container mx-auto lg:px-[120px] px-4'>
                <div>
                    <p className='text-[#FF6910] text-xl font-semibold text-center opacity-0 fadeInUp-no-delay'>{t("heading")}</p>
                    <div className='textTitleClip text-[40px] lg:text-[72px] text-center font-semibold' >
                        <span>{t("title1")}</span> <br />
                        <div className='flex justify-center flex-wrap items-center gap-x-2'>
                            <span>{t("title2")}</span>
                            <figure className='min-w-[72px] w-[72px] h-[72px]'>
                                <Image src={newpayMask} alt='' />
                            </figure>
                            <span>{t("title3")}</span>
                        </div>
                    </div>
                    <p className='my-10 text-[#aeaeae] text-sm lg:text-lg font-medium text-center opacity-0 fadeInUp-delay-03'>
                        {t("desc1")} <br />
                        {t("desc2")}
                    </p>
                    <div className='flex items-center justify-center gap-x-4 lg:gap-x-6 opacity-0 fadeInUp-delay-06'>


                        <button
                            onClick={handleToast}
                            className='block lg:hidden cursor-pointer'>
                            <Image src={appStore1} alt='' className='object-contain' />

                        </button>

                        <button
                            onClick={handleToast}
                            className='block lg:hidden cursor-pointer'>
                            <Image src={googleStore1} alt='' className='object-contain' />
                        </button>

                        {/* desktop */}
                        <button
                            onClick={handleToast}
                            className='hover:bg-[#212121] btnCta transition-all ease-linear duration-300 lg:w-[287px] h-[84px] py-[10px] rounded-2xl hidden lg:flex items-center justify-center cursor-pointer'>
                            <Image src={appStore} alt='' className='object-contain' />

                        </button>

                        <button
                            onClick={handleToast}
                            className='hover:bg-[#212121] btnCta transition-all ease-linear duration-300 lg:w-[287px] h-[84px] py-[10px] rounded-2xl hidden lg:flex items-center justify-center cursor-pointer'>
                            <Image src={googleStore} alt='' className='' />
                        </button>
                    </div>
                </div>

                <figure className='flex mt-[40px]'>
                    <Image src={product} alt='' priority className='hidden lg:block' />
                    <Image src={productMobile} alt='' priority className='lg:hidden block w-full' />
                </figure>
            </div>
        </div>
    )
}

export default Banner
