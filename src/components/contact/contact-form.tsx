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




const schema = yup
    .object({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().required('Email is required'),
        companyName: yup.string().required('Company name is required'),
        companyWebsite: yup.string().required('Company website is required'),
        message: yup.string().required('Message is required'),
        phone: yup.string().required('Phone is required'),
    })
    .required()


const ContactForm = () => {

    const [enabled, setEnabled] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    console.log('errors', errors)
    const onSubmit = (data: ContactUsForm, event: any) => {
        event.preventDefault()
    }

    return (
        <div className='grow relative'>
            <div className="p-8">
                <h2 className="text-[#1b1b1b] text-[48px] font-semibold -tracking-[1.64px] mb-2">Contact Us</h2>
                <p className="text-sm text-[#666] font-normal mb-6">
                    We handle all law enforcement requests from any jurisdiction in strict compliance with our Terms & Conditions, Privacy Policy, and all relevant laws and regulations.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <NameInput inputType='text' name="firstName" label='First Name' type='name' placeholder='First Name' register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.firstName?.message}</p>
                        </div>
                        <div>
                            <NameInput inputType='text' name='lastName' label='Last Name' type='name' placeholder='Last Name' register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.lastName?.message}</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <NameInput name='email' inputType='email' placeholder='Your Work Email' register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.email?.message}</p>
                        </div>
                        <div>
                            <NumberInput name="phone" placeholder="Phone Number" register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.phone?.message}</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <NameInput inputType='text' name='companyName' placeholder='Company Name' register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.companyName?.message}</p>
                        </div>
                        <div>
                            <NameInput inputType='text' name='companyWebsite' placeholder='Company Website' register={register} />
                            <p className='text-sm text-red-700 mt-1'>{errors.companyWebsite?.message}</p>
                        </div>
                    </div>

                    <div>
                        <textarea {...register('message')} id="" placeholder='Message' className={`w-full p-4 rounded-[10px] bg-transparent border border-[rgba(216,216,216,0.64)] outline-none text-base font-medium text-[#0E121B] placeholder:text-[#aeaeae] placeholder:font-normal`} />
                        <p className='text-sm text-red-700 mt-1'>{errors.message?.message}</p>
                    </div>

                    <div className='flex items-center gap-4'>
                        <CheckboxInput enabled={enabled} setEnabled={setEnabled} />
                        <p className='w-[384px] text-[#666] text-sm font-medium'>If you do not wish to receive marketing and promotional materials from NewPay, please check the box.</p>
                    </div>

                    <button disabled={!enabled} className='absolute bottom-10 right-[-100px] z-[10] h-20 box-border flex w-[267px] cursor-pointer'>
                        <span style={{ borderRadius: '16px 0px 0px 16px' }} className='py-4 px-6 h-full box-border flex items-center bg-[#FF6910] text-white font-medium text-2xl'>Submit Now</span>
                        <p style={{ borderRadius: '0px 16px 16px 0px' }} className='bg-white py-4 px-6 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
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
