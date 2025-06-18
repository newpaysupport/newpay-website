'use client'
import arrow_right from '@/images/contact/arrow_right.svg';
import image_contact from '@/images/contact/image_contact.png';
import letter from '@/images/contact/letter.svg';
import world from '@/images/contact/world.svg';

import Image from 'next/image';
const ContactScreen = () => {


    return (
        <div className="container mx-auto flex justify-center items-center mt-16">
            <div className="bg-white rounded-xl flex overflow-hidden">
                {/* Form Section */}


                {/* Image Section */}
                {/* <div className="hidden md:block w-1/2 relative rounded-2xl">
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
                        <Image src={arrow_right} alt="Contact Image" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-[320px] rounded-2xl">
                        <div className="w-full h-full bg-orange-blur absolute inset-0 z-0"></div>
                        <div className="relative z-10 flex items-end justify-end p-6 h-full rounded-2xl">
                            <div className="text-right text-white w-[65%] mb-6">
                                <h3 className="text-5xl font-semibold mb-6">Talk with the team</h3>
                                <p className="text-md font-normal">
                                    Work with NewPay to explore the world of payment together. Want to become our partners? Please give us a little details of yourself and we will be in touch soon!
                                </p>
                                <div className="text-sm mt-6 flex flex-row justify-end items-center gap-4">
                                    <p className='bg-black/10 p-3 rounded-sm flex justify-center items-center gap-3'>
                                        <Image src={world} alt="world Image" />
                                        Support Center
                                    </p>
                                    <p className='bg-black/10 p-3 rounded-sm flex justify-center items-center gap-3'>
                                        <Image src={letter} alt="world Image" />
                                        support@newpay.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default ContactScreen
