import img_card_black from "@/images/payment/img_card_black.png"
import wifi from "@/images/payment/wifi.svg"
import time from "@/images/payment/time.svg"
import money from "@/images/payment/money.svg"
import Image from 'next/image'
import ToastCustom from "../common/toast"
import toast from "react-hot-toast"
import BoxWrapped from "../common/box-wrapped"

type PhysicalCardProps = {
    physicalItems: {
        title: string,
        subtitle: string
    }[],
    labelButton: string,
    id?: string
}
const PhysicalCard = ({ physicalItems, labelButton, id }: PhysicalCardProps) => {
    const handleToast = () => {
        toast.custom(<ToastCustom type='warning' />)
    }
    return (
        <BoxWrapped className="lg:px-30">
            {/* content Physical Card*/}
            <div id={id} className="flex justify-between lg:mt-10 mt-8 lg:flex-row flex-col px-6 lg:px-0">
                <div className="lg:w-[45%]">
                    <div className="my-4 p-6 bg-gray-100 rounded-2xl">
                        <Image src={wifi} alt="Wifi" />
                        <h2 className="lg:text-2xl text-lg font-semibold lg:mt-4 mt-6">{physicalItems[0].title}</h2>
                        <p className="lg:text-base text-sm text-gray-500 mt-2">{physicalItems[0].subtitle}</p>
                    </div>
                    <div className="mt-6 p-6 bg-gray-100 rounded-2xl">
                        <Image src={time} alt="Time" />
                        <h2 className="lg:text-2xl text-lg font-semibold lg:mt-4 mt-6">{physicalItems[1].title}</h2>
                        <p className="lg:text-base text-sm text-gray-500 mt-2">{physicalItems[1].subtitle}</p>
                    </div>
                    <div className="mt-6 p-6 bg-gray-100 rounded-2xl">
                        <Image src={money} alt="Time" />
                        <h2 className="lg:text-2xl text-lg font-semibold lg:mt-4 mt-6">{physicalItems[2].title}</h2>
                        <p className="lg:text-base text-sm text-gray-500 mt-2">{physicalItems[2].subtitle}</p>
                    </div>
                    <button onClick={handleToast} className="rounded-full lg:mt-12 mt-6 lg:py-4 lg:px-10 font-semibold px-6 py-3 text-lg text-white cursor-pointer bg-orange-500 hover:bg-orange-600">{labelButton}</button>
                </div>
                <div className="lg:w-[45%] mt-10 lg:mt-0 ">
                    <Image src={img_card_black} alt="Spend Crypto" width={500} height={400} className='lg:mt-4 lg:h-[560px]' />
                </div>
            </div>
        </BoxWrapped>
    )
}

export default PhysicalCard