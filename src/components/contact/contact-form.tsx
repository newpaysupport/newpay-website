"use client"
import React, { useState } from 'react'

const ContactForm = () => {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        type: '',
        message: '',
        noMarketing: false,
    });


    const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(form);
    };


    return (
        <div>
            <div className="w-full md:w-1/2 p-8">
                <h2 className="text-5xl font-semibold mb-2">Contact Us</h2>
                <p className="text-sm text-gray-400 mb-6">
                    We handle all law enforcement requests from any jurisdiction in strict compliance with our Terms & Conditions, Privacy Policy, and all relevant laws and regulations.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex gap-4">
                        <input name="firstName" onChange={handleChange} value={form.firstName} placeholder="First Name" className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500" />
                        <input name="lastName" onChange={handleChange} value={form.lastName} placeholder="Last Name" className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500" />
                    </div>

                    <div className='flex gap-4'>
                        <input name="email" type="email" onChange={handleChange} value={form.email} placeholder="Your Work Email" className="w-1/2 p-3 border-gray-300 border rounded focus:outline-none focus:border-orange-500" />

                        <div className="flex gap-2 w-1/2">
                            <select className=" w-1/3 p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500">
                                <option value="+86">+86</option>
                            </select>
                            <input name="phone" onChange={handleChange} value={form.phone} placeholder="Phone Number" className="p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500" />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <input name="company" onChange={handleChange} value={form.company} placeholder="Company Name" className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500" />
                        <input name="website" onChange={handleChange} value={form.website} placeholder="Company Website" className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500" />
                    </div>

                    <select name="type" onChange={() => handleChange} value={form.type} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500">
                        <option>Collaboration Type</option>
                        <option value="partnership">Partnership</option>
                        <option value="support">Support</option>
                    </select>

                    <textarea name="message" onChange={() => handleChange} value={form.message} placeholder="Message..." className="w-full p-3 border border-gray-300 rounded h-30 focus:outline-none focus:border-orange-500"></textarea>

                    <label className="flex items-center gap-3 text-sm w-[70%] font-medium text-gray-600">
                        <input type="checkbox" name="noMarketing" checked={form.noMarketing} onChange={handleChange} className='w-[30px] h-[30px] border-gray-300 focus:outline-none focus:bg-orange-500' />
                        If you do not wish to receive marketing and promotional materials from NewPay, please check the box.
                    </label>

                </form>
            </div>
        </div>
    )
}

export default ContactForm
