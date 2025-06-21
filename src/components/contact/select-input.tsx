"use client"
import { ContactUsForm } from '@/interfaces/contact-form'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'


const CollaborationTypes = [
    {
        value: "General Inquiries",
        id: 1
    },
    {
        value: "Affiliate Program",
        id: 2
    },
    {
        value: "Partnerships",
        id: 3
    },
    {
        value: "Careers",
        id: 4
    },
]

interface SelectInputProps {
    setValue: UseFormSetValue<ContactUsForm>
}


const SelectInput = ({ setValue }: SelectInputProps) => {

    const [open, setOpen] = useState(false);
    const [typeSelected, setTypeSelected] = useState("");
    const t = useTranslations("contactUs")

    const handleOpen = () => {
        setOpen(!open);
    }


    const handleSetTypeSelected = (value: string) => {
        setTypeSelected(value);
        setValue('typeCollaboration', value);
        handleOpen();
    }

    return (
        <div className='relative'>
            <div onClick={handleOpen} className='border-[rgba(216,216,216,0.64)] cursor-pointer h-[56px] flex justify-between gap-4 relative bg-white rounded-[10px] border p-4 transition-colors outline-none'>
                <p className={`${typeSelected ? "text-[#0E121B]" : "text-[#aeaeae]"} text-base font-normal`}>{typeSelected ? typeSelected : t("typeCollaboration")}</p>
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="#AEAEAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </figure>
            </div>

            {open && <>

                <div style={{ boxShadow: "0px 12px 40px -2px rgba(0, 0, 0, 0.12)" }} className='absolute w-full h-[170px] left-0 top-[66px] z-[20] p-1 bg-white border border-[rgba(216,216,216,0.64)] rounded-2xl'>
                    {CollaborationTypes.map((item, index) => {
                        return <div key={index} onClick={() => handleSetTypeSelected(item.value)} className='p-2 cursor-pointer hover:bg-black/4 rounded'>
                            {item.value}
                        </div>
                    })}
                </div>

            </>}
        </div>
    )
}

export default SelectInput
