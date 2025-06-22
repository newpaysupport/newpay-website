'use client'
import { ContactUsForm } from '@/interfaces/contact-form';
import React, { useState } from 'react'
import { Control, UseFormRegister, useWatch } from 'react-hook-form';


interface NameInputProps {
    onNameChange?: (firstName: string, lastName: string) => void;
    label?: string;
    name: "email" | "firstName" | "lastName" | "companyName" | "companyWebsite" | "message" | "phone";
    type?: 'name' | 'normal';
    inputType: string;
    placeholder: string;
    register: UseFormRegister<ContactUsForm>
}


const NameInput = ({ label, name, type = 'normal', placeholder, register, inputType, control }: NameInputProps & { control: Control<ContactUsForm> }) => {

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

    const isAbove = (focused === name || hasValue)

    const classAbove = isAbove ? "left-4 top-[-22%] bg-white" : " top-[16px]";
    const classSpanOnFocusInput = focused === name ? "text-[#FF6910]" : "text-[#aeaeae]";
    const classContainerOnFocusInput = focused === name ? "border-[#FF6910] border-[1.5px]" : "border-[rgba(216,216,216,0.64)]";

    return (
        <div className={`${classContainerOnFocusInput} h-[56px] flex-1 relative bg-white rounded-[10px] border p-4 transition-colors outline-none`}>
            <span className={`${classAbove} ${classSpanOnFocusInput} text-sm absolute capitalize font-medium pointer-events-none`}
                style={{
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                {label}
            </span>
            <input
                type={inputType}
                {...register(name)}
                onFocus={() => handleFocus()}
                onBlur={() => setFocused(null)}
                placeholder={placeholder}
                className={`w-full bg-transparent border-0 outline-none text-sm font-medium text-[#0E121B] bg-none placeholder:text-[#aeaeae] placeholder:font-normal`}
            />
        </div>
    )
}

export default NameInput
