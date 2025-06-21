"use client"
import Image from 'next/image';
import CheckboxInput from './checkbox';
import NameInput from './name-input';
import NumberInput from './number-input';
import arrowRight from '@/images/contact/arrow_right.svg';
import { useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { ContactUsForm } from '@/interfaces/contact-form';
import { useTranslations } from 'next-intl';
import SelectInput from './select-input';







const ContactForm = () => {

    const [enabled, setEnabled] = useState(false);
    const t = useTranslations("contactUs");

    const schema = yup
        .object({
            firstName: yup.string().required(`${t("firstName")} ${t("isRequire")}`),
            lastName: yup.string().required(`${t("lastName")} ${t("isRequire")}`),
            email: yup.string().required(`${t("email")} ${t("isRequire")}`),
            companyName: yup.string().required(`${t("companyName")} ${t("isRequire")}`),
            companyWebsite: yup.string().required(`${t("companyWebsite")} ${t("isRequire")}`),
            message: yup.string().required(`${t("message")} ${t("isRequire")}`),
            typeCollaboration: yup.string().required(`${t("typeCollaboration")} ${t("isRequire")}`),
            phone: yup.string().required(`${t("phone")} ${t("isRequire")}`),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data: ContactUsForm, event: any) => {
        event.preventDefault()
    }

    return (
        <div className='grow relative'>
            <div>
                <h2 className="text-[#1b1b1b] text-[48px] font-semibold -tracking-[1.64px] mb-2">{t("title")}</h2>
                <p className="text-sm text-[#666] font-normal mb-10">
                    {t("desc")}
                </p>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <NameInput inputType='text' name="firstName" label={t("firstName")} type='name' placeholder={""} register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.firstName?.message}</p>
                        </div>
                        <div>
                            <NameInput inputType='text' name='lastName' label={t("lastName")} type='name' placeholder={""} register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.lastName?.message}</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <NameInput name='email' inputType='email' placeholder={t('email')} register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.email?.message}</p>
                        </div>
                        <div>
                            <NumberInput name="phone" placeholder={t("phone")} register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.phone?.message}</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <NameInput inputType='text' name='companyName' placeholder={t("companyName")} register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.companyName?.message}</p>
                        </div>
                        <div>
                            <NameInput inputType='text' name='companyWebsite' placeholder={t("companyWebsite")} register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.companyWebsite?.message}</p>
                        </div>
                    </div>

                    <div>
                        <SelectInput setValue={setValue} />
                        <p className='text-sm text-red-700 mt-1'>{errors.typeCollaboration?.message}</p>
                    </div>

                    <div>
                        <textarea {...register('message')} id="" placeholder={t("message")} className={`w-full p-4 rounded-[10px] bg-transparent border border-[rgba(216,216,216,0.64)] outline-none text-base font-medium text-[#0E121B] placeholder:text-[#aeaeae] placeholder:font-normal`} />
                        <p className='text-sm text-red-700 mt-1'>{errors.message?.message}</p>
                    </div>

                    <div className='flex items-center gap-4 pt-6'>
                        <CheckboxInput enabled={enabled} setEnabled={setEnabled} />
                        <p className='w-[340px] text-[#666] text-sm font-medium'>{t("checkBox")}</p>
                    </div>

                    <button disabled={!enabled} className='absolute bottom-10 right-[-100px] z-[10] h-20 box-border flex min-w-[267px] cursor-pointer group transition-all ease-in-out'>
                        <span style={{ borderRadius: '16px 0px 0px 16px' }} className='py-4 px-6 h-full box-border flex items-center bg-[#FF6910] text-white font-medium text-2xl group-hover:bg-[#ff5810]'>{t("submit")}</span>
                        <p style={{ borderRadius: '0px 16px 16px 0px' }} className='bg-white py-4 px-6 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5'>
                                <path d="M9.33203 22.6668L22.6654 9.3335" stroke="#1B1B1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.33203 9.3335H22.6654V22.6668" stroke="#1B1B1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </p>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
