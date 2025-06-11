'use client'
import image_contact from '@/images/contact/image_contact.png';
import Image from 'next/image';
import { useState } from 'react';
const Contact = () => {
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
    <div className="container mx-auto flex justify-center items-center mt-16">
      <div className="bg-white rounded-xl flex overflow-hidden">
        {/* Form Section */}
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

        {/* Image Section */}
        <div className="hidden md:block w-1/2 relative rounded-2xl">
          <Image
            src={image_contact}
            alt="Support Team"
            className="object-cover w-full h-full rounded-2xl"
            width={0}
            height={0}
          />

          <div className='absolute flex justify-center items-center rounded-2xl -left-35 bottom-5 z-50'>
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 h-[60px] rounded-l-2xl">
              Submit Now
            </button>
            <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H51.2C63.1991 0 69.1987 0 73.4046 3.05573C74.7629 4.0426 75.9574 5.23712 76.9443 6.59544C80 10.8013 80 16.8009 80 28.8V51.2C80 63.1991 80 69.1987 76.9443 73.4046C75.9574 74.7629 74.7629 75.9574 73.4046 76.9443C69.1987 80 63.1991 80 51.2 80H0V0Z" fill="white" />
              <path d="M33.332 46.6668L46.6654 33.3335" stroke="#1B1B1B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33.332 33.3335H46.6654V46.6668" stroke="#1B1B1B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          {/* Gradient + Blur Background */}
          <div className="absolute bottom-0 left-0 right-0 h-[320px] rounded-2xl">
            <div className="w-full h-full bg-orange-blur absolute inset-0 z-0"></div>

            {/* Content overlay */}
            <div className="relative z-10 flex items-end justify-end p-6 h-full rounded-2xl">
              <div className="text-right text-white w-[65%] mb-6">
                <h3 className="text-5xl font-semibold mb-6">Talk with the team</h3>
                <p className="text-md font-normal">
                  Work with NewPay to explore the world of payment together. Want to become our partners? Please give us a little details of yourself and we will be in touch soon!
                </p>
                <div className="text-sm mt-6 flex flex-row justify-end items-center gap-4">
                  <p className='bg-black/10 p-3 rounded-sm flex justify-center items-center gap-3'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.9987 18.3332C5.39633 18.3332 1.66537 14.6022 1.66537 9.99984C1.66537 5.39746 5.39633 1.6665 9.9987 1.6665C14.6011 1.6665 18.332 5.39746 18.332 9.99984C18.332 14.6022 14.6011 18.3332 9.9987 18.3332Z" stroke="white" />
                      <path d="M13.3333 2.5H12.5C14.125 7.36667 14.125 12.6333 12.5 17.5H13.3333" stroke="white" />
                      <path d="M7.5 2.5C5.875 7.36667 5.875 12.6333 7.5 17.5" stroke="white" />
                      <path d="M17.5 13.3333V12.5C12.6333 14.125 7.36667 14.125 2.5 12.5V13.3333" />
                      <path d="M17.5 7.5C12.6333 5.875 7.36667 5.875 2.5 7.5" stroke="white" />
                    </svg>

                    Support Center
                  </p>
                  <p className='bg-black/10 p-3 rounded-sm flex justify-center items-center gap-3'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.83203 17.0832H14.1654C16.6654 17.0832 18.332 15.8332 18.332 12.9165V7.08317C18.332 4.1665 16.6654 2.9165 14.1654 2.9165H5.83203C3.33203 2.9165 1.66536 4.1665 1.66536 7.08317V12.9165C1.66536 15.8332 3.33203 17.0832 5.83203 17.0832Z" stroke="white" />
                      <path d="M5.83464 7.5L8.44297 9.58333C9.30131 10.2667 10.7096 10.2667 11.568 9.58333L14.168 7.5" stroke="white" />
                    </svg>

                    support@newpay.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Contact