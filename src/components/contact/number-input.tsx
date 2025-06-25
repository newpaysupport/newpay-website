import React, { useMemo, useState } from 'react'
import china from '@/images/china.png'
import Image from 'next/image';
import { Control, UseFormRegister, useWatch } from 'react-hook-form';
import { ContactUsForm } from '@/interfaces/contact-form';
import searchNormal from "@/images/contact/search-normal.svg";
import { countryCode } from '@/constants/country-code';

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
    const [isOpenNation, setIsOpenNation] = useState(false);
    const [nationSelected, setNationSelected] = useState<{ code: string; country: string; flag: string }>({ code: "", country: "", flag: "" });

    const handleFocus = () => {
        if (!label) return;
        setFocused(name)
    }
    const fieldValue = useWatch({
        control,
        name,
    });

    const handleSetOpenNation = () => {
        setIsOpenNation(!isOpenNation);
    }
    const handleNationSelect = (country: { code: string; country: string; flag: string }) => {
        setNationSelected(country);
        setIsOpenNation(false);
    }

    const hasValue = fieldValue && fieldValue.trim() !== '';

    const isAbove = (focused === name || hasValue);

    const classAbove = isAbove ? "left-4 top-[-22%] bg-white" : "left-[116px] top-[16px]";
    const classSpanOnFocusInput = focused === name ? "text-[#FF6910]" : "text-[#aeaeae]";
    const classContainerOnFocusInput = focused === name ? "border-[#FF6910] border-[1.5px]" : "border-[rgba(216,216,216,0.64)]";

    return (
        <div className={`${classContainerOnFocusInput} h-[56px] flex relative bg-white rounded-[10px] border transition-colors outline-none`}>

            <span className={`${classAbove} ${classSpanOnFocusInput} text-sm absolute capitalize font-medium pointer-events-none`}
                style={{
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                {label}
            </span>

            <div onClick={handleSetOpenNation} className='cursor-pointer flex items-center gap-2 px-3 border-r-[1px] border-[rgba(216,216,216,0.64)]'>
                <Image width={24} height={24} loader={() => nationSelected.flag} src={nationSelected.flag} alt='' />
                <span>{nationSelected.code}</span>
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

            <DropDownNation isOpenNation={isOpenNation} handleNationSelect={handleNationSelect} />
        </div>
    )
}

export default NumberInput

const DropDownNation = ({ isOpenNation, handleNationSelect }:
    {
        isOpenNation: boolean;
        handleNationSelect: (country: { code: string; country: string; flag: string }) => void
    }) => {


    const [filter, setFilter] = useState('');

    const filteredCountries = useMemo(() => {
        return countryCode.filter(item => item.code.toLowerCase().includes(filter.toLowerCase()) || item.country.toLowerCase().includes(filter.toLowerCase()));
    }, [filter]);




    return (
        <div className={`absolute top-[56px] z-[1000] left-0 w-full bg-white border border-[rgba(216,216,216,0.64)] shadow-[0_12px_40px_-2px_rgba(0,0,0,0.12)] rounded-2xl py-6 px-4 ${isOpenNation ? 'block' : 'hidden'}`}>

            <div className='flex items-center gap-2 mb-4 p-3 bg-[#f7f8fa] rounded-full'>
                <Image src={searchNormal} alt='Search' />
                <input
                    type="text"
                    placeholder='Search country'
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className='w-full border-0 outline-none text-sm font-medium text-[#1b1b1b] placeholder:text-[#666] placeholder:font-normal'
                />
            </div>

            <ul className='p-2 h-[230px] overflow-y-scroll'>
                {filteredCountries.map((item, index) => {
                    return (
                        <li onClick={() => handleNationSelect(item)} key={index} className='p-3 w-full flex rounded-[12px] hover:bg-black/8 items-center gap-x-4  cursor-pointer'>
                            <Image loader={() => item.flag} src={item.flag} alt={""} width={24} height={24} />
                            <span className='text-[#666] text-sm font-medium'>{item.code}</span>
                            <span className='text-sm font-medium text-[#1b1b1b]'>{item.country}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
