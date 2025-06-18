import React from 'react'
import china from '@/images/china.png'
import Image from 'next/image';
import { UseFormRegister } from 'react-hook-form';
import { ContactUsForm } from '@/interfaces/contact-form';

interface NameInputProps {
    onNameChange?: (firstName: string, lastName: string) => void;
    label?: string;
    name: "firstName" | "lastName" | "email" | "companyName" | "companyWebsite" | "message" | "phone";
    type?: 'name' | 'normal';
    placeholder: string;
    register: UseFormRegister<ContactUsForm>
}


const NumberInput = ({ label, name, type = 'normal', placeholder, register }: NameInputProps) => {
    return (
        <div className={`border-[rgba(216,216,216,0.64)] h-[56px] flex gap-4 relative bg-white rounded-[10px] border p-4 transition-colors outline-none`}>
            <div className='flex items-center gap-2'>
                <Image width={24} height={24} src={china} alt='' />
                <span>+86</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#AEAEAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <input
                type="text"
                {...register(name)}
                // value={first}
                // onChange={(e) => handleFirstChange(e.target.value)}
                placeholder={placeholder}
                className={`w-full bg-transparent border-0 outline-none text-base font-medium text-[#0E121B] placeholder:text-[#aeaeae] placeholder:font-normal`}
            />
        </div>
    )
}

export default NumberInput
