import React from 'react'
import newpayMask from '@/images/download/newpay_square_mark.png'
import Image from 'next/image'

const Banner = () => {
    return (
        <div className='bg-[#060606] pt-[120px]'>
            <div className='container mx-auto'>
                <p className='text-[#FF6910] text-xl font-semibold text-center'>NewPay App</p>
                <p className=''>
                    <span>Download</span> <br />
                    <p>
                        <span>for</span>
                        <Image src={newpayMask} alt='' />
                        <span>mobile app</span>
                    </p>
                </p>
                <p>
                    Accessible crypto wallet for everyone, everywhere. <br />
                    Let’s embrace the future with cryptocurrency payments via NewPay!
                </p>
                <div>
                    <button>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner
