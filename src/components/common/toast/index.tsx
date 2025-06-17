"use client"
import React from 'react'
import warning from '@/images/toast/warning.svg'
import x from '@/images/toast/x.svg'

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
            <figure className='w-10 h-10 min-w-10'>
                <Image src={warning} alt='' className='w-full h-full' />
            </figure>
            <span className='text-white text-sm font-medium'>{t("title")}</span>
            <figure className='w-6 h-6 min-w-6 cursor-pointer' onClick={handleCloseToast} >
                <Image src={x} alt='' className='w-full h-full' />
            </figure>
        </div>
    )
}

export default ToastCustom
