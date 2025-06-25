import img_content1 from "@/images/payment/Img_content1.png";
import two_arrow from "@/images/payment/two_arrow.svg";
import wallet from "@/images/payment/wallet.svg";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from 'motion/react';
import AnimationFade from "../animation/animation-fade";
import ToastCustom from "../common/toast";
import toast from "react-hot-toast";

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
    const isLeftInView = useInView(leftRef, { once: true, amount: 0.5 });
    const isRightInView = useInView(rightRef, { once: true, amount: 0.5 });
    return (
        <>
            {/* content Virtual Card*/}
            <div id={id} className="flex justify-between items-center mt-10 mx-auto container w-[80%] md:flex-row flex-col">
                <AnimationFade inView={isLeftInView} direction="left" className="md:w-[45%]">
                    <div ref={leftRef}>
                        <div className="my-4 p-6 bg-gray-100 rounded-2xl">
                            <Image src={two_arrow} alt="Virtual Card Icon" />
                            <h2 className="md:text-2xl font-semibold mt-4">{virtualItems[0].title}</h2>
                            <p className="md:text-md text-gray-500 mt-2">{virtualItems[0].subtitle}</p>
                        </div>
                        <div className="mt-6 p-6 bg-gray-100 rounded-2xl">
                            <Image src={wallet} alt="Virtual Card Icon" />

                            <h2 className="md:text-2xl font-semibold mt-4">{virtualItems[1].title}</h2>
                            <p className="md:text-md text-gray-500 mt-2">{virtualItems[1].subtitle}</p>
                        </div>
                        <button onClick={handleToast} className="rounded-full mt-12 md:py-4 md:px-10 font-semibold p-4 text-md text-white cursor-pointer bg-orange-500 hover:bg-orange-600">{labelButton}</button>
                    </div>
                </AnimationFade>
                <AnimationFade  inView={isRightInView} direction="right" className="md:w-[45%] mt-10 md:mt-0">
                    <div ref={rightRef}>
                        <Image src={img_content1} alt="Spend Crypto" width={500} height={300} />
                    </div>
                </AnimationFade>
            </div>
        </>
    )
}

export default VirtualCard