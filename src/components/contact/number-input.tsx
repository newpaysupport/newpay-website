import React, { useState } from 'react'
import china from '@/images/china.png'
import Image from 'next/image';
import { Control, UseFormRegister, useWatch } from 'react-hook-form';
import { ContactUsForm } from '@/interfaces/contact-form';

interface NameInputProps {
    onNameChange?: (firstName: string, lastName: string) => void;
    label?: string;
    name: "firstName" | "lastName" | "email" | "companyName" | "companyWebsite" | "message" | "phone";
    type?: 'name' | 'normal';
    placeholder: string;
    register: UseFormRegister<ContactUsForm>
}


const NumberInput = ({ label, name, type = 'normal', placeholder, register, control }: NameInputProps & { control: Control<ContactUsForm> }) => {

    const [focused, setFocused] = useState<string | null>(null);

    const handleFocus = () => {
        if (!label) return;
        setFocused(name)
    }
    const fieldValue = useWatch({
        control,
        name,
    });

    const hasValue = fieldValue && fieldValue.trim() !== '';

    const isAbove = (focused === name || hasValue);

    const classAbove = isAbove ? "left-4 top-[-22%] bg-white" : "left-[116px] top-[16px]";
    const classSpanOnFocusInput = focused === name ? "text-[#FF6910]" : "text-[#aeaeae]";
    const classContainerOnFocusInput = focused === name ? "border-[#FF6910] border-[1.5px]" : "border-[rgba(216,216,216,0.64)]";

    return (
        <div className={`${classContainerOnFocusInput} h-[56px] flex relative bg-white rounded-[10px] border px-4 py-3 transition-colors outline-none`}>

            <span className={`${classAbove} ${classSpanOnFocusInput} text-sm absolute capitalize font-medium pointer-events-none`}
                style={{
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                {label}
            </span>

            <div className='flex items-center gap-2 pr-3 border-r-[1px] border-[rgba(216,216,216,0.64)]'>
                <Image width={24} height={24} src={china} alt='' />
                <span>+86</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#AEAEAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <input
                type="text"
                {...register(name)}
                onFocus={() => handleFocus()}
                onBlur={() => setFocused(null)}
                placeholder={placeholder}
                className={`w-full pl-4 bg-transparent border-0 outline-none text-base font-medium text-[#0E121B] placeholder:text-[#aeaeae] placeholder:font-normal`}
            />
        </div>
    )
}

export default NumberInput
