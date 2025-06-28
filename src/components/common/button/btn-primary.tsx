import { BtnVariant } from '@/interfaces';


interface BtnPrimaryProps {
    text: string;
    className?: string;
    onClick?: () => void;
    variant?: BtnVariant
}

const BtnPrimary = ({ text, className, onClick, variant }: BtnPrimaryProps) => {

    let defaultClass = '';

    if (variant === 'primary-lighter') {
        defaultClass = 'rounded-full bg-[#FF6910] py-4 flex items-center justify-center text-white text-sm lg:text-base font-semibold'
    }
    if (variant === 'surface-3') {
        defaultClass = 'rounded-full bg-[#212121] backdrop-blur-[20px] py-4 flex items-center justify-center text-white text-sm lg:text-base font-semibold'
    }


    return (
        <button className={`${className} ${defaultClass} w-full cursor-pointer transition-all ease-linear duration-150`} onClick={onClick}>{text}</button>
    )
}

export default BtnPrimary
