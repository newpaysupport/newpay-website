import img_card_black from "@/images/payment/img_card_black.png"
import wifi from "@/images/payment/wifi.svg"
import time from "@/images/payment/time.svg"
import money from "@/images/payment/money.svg"
import Image from 'next/image'

type PhysicalCardProps = {
    physicalItems: {
        title: string,
        subtitle: string
    }[],
    labelButton: string
}
const PhysicalCard = ({ physicalItems, labelButton }: PhysicalCardProps) => {
    return (
        <>
            {/* content Physical Card*/}
            <div className="flex justify-between  mt-10 mx-auto container w-[80%] md:flex-row flex-col">
                <div className="md:w-[45%]">
                    <div className="my-4 p-6 bg-gray-100 rounded-2xl">
                        <Image src={wifi} alt="Wifi" />
                        <h2 className="md:text-2xl font-semibold mt-4">{physicalItems[0].title}</h2>
                        <p className="md:text-md text-gray-500 mt-2">{physicalItems[0].subtitle}</p>
                    </div>
                    <div className="mt-6 p-6 bg-gray-100 rounded-2xl">
                        <Image src={time} alt="Time" />
                        <h2 className="md:text-2xl font-semibold mt-4">{physicalItems[1].title}</h2>
                        <p className="md:text-md text-gray-500 mt-2">{physicalItems[1].subtitle}</p>
                    </div>
                    <div className="mt-6 p-6 bg-gray-100 rounded-2xl">
                        <Image src={money} alt="Time" />
                        <h2 className="md:text-2xl font-semibold mt-4">{physicalItems[2].title}</h2>
                        <p className="md:text-md text-gray-500 mt-2">{physicalItems[2].subtitle}</p>
                    </div>
                    <button className="rounded-full mt-6 md:py-4 md:px-10 font-semibold p-4 text-md text-white cursor-pointer bg-orange-500 hover:bg-orange-600">{labelButton}</button>
                </div>
                <div className="md:w-[45%] mt-10 md:mt-0">
                    <Image src={img_card_black} alt="Spend Crypto" width={500} height={400} className='md:mt-4 md:h-[560px]' />
                </div>
            </div>
        </>
    )
}

export default PhysicalCard