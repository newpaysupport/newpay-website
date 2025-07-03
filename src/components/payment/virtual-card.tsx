import img_content1 from "@/images/payment/Img_content1.png";
import two_arrow from "@/images/payment/two_arrow.svg";
import wallet from "@/images/payment/wallet.svg";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from 'motion/react';
import AnimationFade from "../animation/animation-fade";
import ToastCustom from "../common/toast";
import toast from "react-hot-toast";
import BoxWrapped from "../common/box-wrapped";

type VirtualCardProps = {
    virtualItems: {
        title: string;
        subtitle: string;
    }[],
    labelButton: string;
    id?: string;
}
const VirtualCard = ({ virtualItems, labelButton, id }: VirtualCardProps) => {
    const handleToast = () => {
        toast.custom(<ToastCustom type='warning' />)
    }
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    return (
        <BoxWrapped className="lg:px-30">
            {/* content Virtual Card*/}
            <div id={id} className="flex justify-between lg:items-start lg:mt-10 mt-8 lg:flex-row flex-col px-6 lg:px-0">
                    <div className="lg:w-[45%]">
                        <div className="my-4 p-6 bg-gray-100 rounded-2xl">
                            <Image src={two_arrow} alt="Virtual Card Icon" />
                            <h2 className="lg:text-2xl text-lg font-semibold lg:mt-4 mt-6">{virtualItems[0].title}</h2>
                            <p className="lg:text-base text-sm text-gray-500 mt-2 lg:w-full w-[60%]">{virtualItems[0].subtitle}</p>
                        </div>
                        <div className="mt-6 p-6 bg-gray-100 rounded-2xl">
                            <Image src={wallet} alt="Virtual Card Icon" />

                            <h2 className="lg:text-2xl text-lg font-semibold lg:mt-4 mt-6">{virtualItems[1].title}</h2>
                            <p className="lg:text-base text-sm text-gray-500 mt-2 lg:w-full w-[60%]">{virtualItems[1].subtitle}</p>
                        </div>
                        <button onClick={handleToast} className="rounded-full lg:mt-12 mt-6 lg:py-4 lg:px-10 font-semibold px-6 py-3 text-lg text-white cursor-pointer bg-orange-500 hover:bg-orange-600">{labelButton}</button>
                    </div>
                    <div className="lg:w-[45%] mt-10 lg:mt-4">
                        <Image src={img_content1} alt="Spend Crypto" width={500} height={300} />
                    </div>
            </div>
        </BoxWrapped>
    )
}

export default VirtualCard