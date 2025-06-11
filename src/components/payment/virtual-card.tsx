import img_content1 from "@/images/payment/Img_content1.png";
import two_arrow from "@/images/payment/two_arrow.svg";
import wallet from "@/images/payment/wallet.svg";
import Image from "next/image";

type VirtualCardProps = {
    virtualItems: {
        title: string;
        subtitle: string;
    }[],
    labelButton: string;
}
const VirtualCard = ({ virtualItems, labelButton }: VirtualCardProps) => {
    return (
        <>
            {/* content Virtual Card*/}
            <div className="flex justify-between items-center mt-10 mx-auto container w-[80%] md:flex-row flex-col">
                <div className="md:w-[45%]">
                    <div className="my-4 p-6 bg-gray-100 rounded-2xl">
                        <Image src={two_arrow} alt="Virtual Card Icon" />
                        <h2 className="md:text-2xl font-semibold mt-4">{virtualItems[0].title}</h2>
                        <p className="md:text-md text-sm text-gray-500 mt-2">{virtualItems[0].subtitle}</p>
                    </div>
                    <div className="mt-6 p-6 bg-gray-100 rounded-2xl">
                        <Image src={wallet} alt="Virtual Card Icon" />

                        <h2 className="md:text-2xl font-semibold mt-4">{virtualItems[1].title}</h2>
                        <p className="md:text-md text-sm text-gray-500 mt-2">{virtualItems[1].subtitle}</p>
                    </div>
                    <button className="rounded-full mt-6 md:py-3 md:px-4 md:text-sm p-4 text-xs text-white cursor-pointer bg-orange-500 hover:bg-orange-600">{labelButton}</button>
                </div>
                <div className="md:w-[45%] mt-10 md:mt-0">
                    <Image src={img_content1} alt="Spend Crypto" width={500} height={300} />
                </div>
            </div>
        </>
    )
}

export default VirtualCard