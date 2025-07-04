"use client"
import React from 'react'
import x from '@/images/toast/x.svg'
import iconSuccess from '@/images/toast/success.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';

interface ToastCustomProps {
    type: 'success' | 'warning' | 'error';
    desc?: string;
    toastId?: string;
}


const ToastCustom = ({ type, desc, toastId }: ToastCustomProps) => {

    const t = useTranslations("toast");

    // check type => title

    const handleCloseToast = () => {
        toast.dismiss();
    }

    return (
        <div className='toast-animation bg-[#131313] border-[0.5px] border-white/8 rounded-[12px] p-4 min-w-[203px] flex space-x-[20px] items-center justify-between'>
            <figure className='w-10 h-10 min-w-10 flex items-center justify-center'>
                {type === 'warning' ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.56786 13.4947C6.12859 14.2075 7.00946 14.6668 8 14.6668C8.99055 14.6668 9.87142 14.2075 10.4321 13.4947C8.81762 13.7135 7.18238 13.7135 5.56786 13.4947Z" fill="#FF6800" />
                    <path d="M12.4994 6.00016V6.46956C12.4994 7.03289 12.6602 7.58361 12.9615 8.05233L13.6998 9.20093C14.3741 10.2501 13.8593 11.6761 12.6864 12.0079C9.61817 12.8758 6.38183 12.8758 3.31357 12.0079C2.1407 11.6761 1.62588 10.2501 2.30024 9.20093L3.03853 8.05233C3.33981 7.58361 3.50058 7.03289 3.50058 6.46956V6.00016C3.50058 3.42283 5.51504 1.3335 8 1.3335C10.485 1.3335 12.4994 3.42283 12.4994 6.00016Z" fill="#FF6800" />
                </svg> : <Image src={iconSuccess} alt='' />}
            </figure>
            <span className='text-white text-sm font-medium'>{type === 'warning' ? t("title") : t("success")}</span>
            <figure className='w-6 h-6 min-w-6 cursor-pointer' onClick={handleCloseToast} >
                <Image src={x} alt='' className='w-full h-full' />
            </figure>
        </div>
    )
}

export default ToastCustom
