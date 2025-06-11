'use client'
import BoxWrapped from '@/components/common/box-wrapped'
import { TabCards } from '@/constants/tab-card'
import React, { useState } from 'react'
import VirtualCard from './virtual-card'
import PhysicCard from './physic-card'

const Consume = () => {

    const [tabActive, setTabActive] = useState(TabCards[0].id);


    const handleSetTabActive = (id: number) => {
        setTabActive(id);
    }

    return (
        <BoxWrapped className='py-20 bg-white min-h-[700px]'>
            <div>
                <div className='w-full lg:w-[573px] mx-auto'>
                    <p className='text-[#060606] font-semibold text-[60px] text-center -tracking-[2px] leading-normal'>
                        Consume easily <br /> Anytime, Anywhere
                    </p>
                    <p className='my-6 text-[#aeaeae] text-base font-medium -tracking-[0.24px] text-center'>With NewPay Your crypto further using virtual and physical cards
                        You can spend instantly without conversion or delay</p>

                    <div className='bg-[#f8f8f8] rounded-full w-full lg:w-[341px] h-[72px] p-1 flex mx-auto overflow-hidden'>
                        {TabCards.map((item, index) => {
                            return <div
                                key={index}
                                onClick={() => handleSetTabActive(item.id)}
                                className={`${item.id === tabActive ? "text-[#1b1b1b] bg-white shadow-tab-card-item rounded-full" : "text-[#AEAEAE] bg-[#f8f8f8]"} transition-all ease-linear duration-150 cursor-pointer flex-1 flex items-center justify-center text-xl font-semibold `}>
                                {item.name}
                            </div>
                        })}
                    </div>
                </div>

                <div className='mt-[64px] min-h-[350px]'>
                    {tabActive === 1 ? <VirtualCard /> : <PhysicCard />}
                </div>


            </div>
        </BoxWrapped>
    )
}

export default Consume
