"use client"
import Image from 'next/image';
import CheckboxInput from './checkbox';
import NameInput from './name-input';
import NumberInput from './number-input';
import arrowRight from '@/images/contact/arrow_right.svg';
import { useState, useEffect, useMemo } from 'react';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { ContactUsForm, ContactUsFormType } from '@/interfaces/contact-form';
import { useTranslations } from 'next-intl';
import SelectInput from './select-input';
import TextArea from './text-area';
import { useForm as useFormspree } from '@formspree/react';
import toast from 'react-hot-toast';
import ToastCustom from '../common/toast';

const ContactForm = () => {
    const [enabled, setEnabled] = useState(false);
    const t = useTranslations("contactUs");

    // Formspree hook
    const [state, handleFormspreeSubmit] = useFormspree("mzzgwjqq");
    const [isSubmit, setIsSubmit] = useState(false);
    const [typeSelected, setTypeSelected] = useState("");

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
        formState: { errors, isValid },
        setValue,
        control,
        watch,
        setError,
        reset,
    } = useForm<ContactUsFormType>({
        resolver: yupResolver(schema),
        mode: "onChange"
    })

    const onSubmit = async (data: ContactUsForm) => {
        // Create a form data object for Formspree
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value?.toString() || '');
        });

        // Submit to Formspree
        try {
            setIsSubmit(true)
            await fetch(process.env.NEXT_PUBLIC_FORM_ID as string, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            setIsSubmit(false);
            reset();
            setTypeSelected("")
            toast.custom(<ToastCustom type='success' />)
        } catch (error) {
            console.error('Form submission error:', error);
            toast.custom(<ToastCustom type='error' />);
        }
    };

    // Handle Formspree errors
    useEffect(() => {
        if (state.errors) {
            // Simple error handling - just show a toast for any errors
            toast.custom(<ToastCustom type='error' />);
        }
    }, [state.errors]);

    const isDisabled = useMemo(() => {
        return !isValid || Object.keys(errors).length > 0 || isSubmit
    }, [isSubmit, isValid, errors]);

    return (
        <div className='w-full lg:grow relative'>
            <div>
                <h2 className="text-[#1b1b1b] text-[32px] lg:text-[48px] font-semibold -tracking-[1.64px] mb-2">{t("title")}</h2>
                <p className="text-sm text-[#666] font-normal mb-10">
                    {t("desc")}
                </p>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <NameInput control={control} inputType='text' name="firstName" label={t("firstName")} type='name' placeholder={""} register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.firstName?.message}</p>
                        </div>
                        <div>
                            <NameInput control={control} inputType='text' name='lastName' label={t("lastName")} type='name' placeholder={""} register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.lastName?.message}</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <NameInput control={control} name='email' inputType='email' label={t('email')} placeholder='' register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.email?.message}</p>
                        </div>
                        <div>
                            <NumberInput name="phone" label={t('phone')} placeholder='' register={register} control={control} />
                            <p className='text-sm text-red-700 mt-1'>{errors.phone?.message}</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <NameInput control={control} inputType='text' name='companyName' label={t('companyName')} placeholder='' register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.companyName?.message}</p>
                        </div>
                        <div>
                            <NameInput control={control} inputType='text' name='companyWebsite' label={t('companyWebsite')} placeholder='' register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.companyWebsite?.message}</p>
                        </div>
                    </div>

                    <div>
                        <SelectInput setValue={setValue} setTypeSelected={setTypeSelected} typeSelected={typeSelected} />
                        <p className='text-sm text-red-700 mt-1'>{errors.typeCollaboration?.message}</p>
                    </div>

                    <div>
                        <TextArea control={control} inputType='text' name='message' label={t('message')} placeholder='' register={register} />
                        <p className='text-sm text-red-700 mt-1'>{errors.message?.message}</p>
                    </div>

                    <div className='flex items-center gap-4 mt-8'>
                        <CheckboxInput enabled={enabled} setEnabled={setEnabled} />
                        <p className='w-[340px] md:w-full xl:w-[340px] text-[#666] text-sm font-medium'>{t("checkBox")}</p>
                    </div>

                    {/* Display root errors */}
                    {errors.root && (
                        <p className='text-sm text-red-700 mt-1'>{errors.root.message}</p>
                    )}

                    <button
                        type="submit"
                        disabled={isDisabled}
                        className={`${isDisabled && "opacity-50"} absolute bottom-3 right-[-100px] z-[10] h-20 box-border hidden xl:flex cursor-pointer group transition-all ease-in-out`}
                    >
                        <span style={{ borderRadius: '16px 0px 0px 16px' }} className='py-4 px-6 h-full box-border flex items-center bg-[#FF6910] text-white font-medium text-2xl group-hover:bg-[#ff5810]'>
                            {!isSubmit ? t('submitText') : t("submit")}
                        </span>
                        <p style={{ borderRadius: '0px 16px 16px 0px' }} className='bg-white py-4 px-6 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5'>
                                <path d="M9.33203 22.6668L22.6654 9.3335" stroke="#1B1B1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.33203 9.3335H22.6654V22.6668" stroke="#1B1B1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </p>
                    </button>

                    <div className='block xl:hidden'>
                        <button
                            type="submit"
                            disabled={isDisabled}
                            className={`${isDisabled && "opacity-50"} flex justify-center items-center bg-[#FF6910] w-full rounded-2xl py-4 lg:hidden `}
                        >
                            <span className='h-full bg-[#FF6910] text-white font-medium text-lg mr-3'>
                                {!isSubmit ? t('submitText') : t("submit")}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M7.5 17L17.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.5 7H17.5V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
