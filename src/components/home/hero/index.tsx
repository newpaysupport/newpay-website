import BoxWrapped from '@/components/common/box-wrapped'
import BtnPrimary from '@/components/common/button/btn-primary'
import card from '@/images/home/hero/card.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='w-full h-[800px] overflow-y-hidden relative'>
            <video src={'/videos/home/prism-coin.mp4'} className='w-full object-cover object-center' loop={true} autoPlay={true} muted={true} preload='true' />
            <BoxWrapped className='absolute w-full lg:w-[806px] top-20 left-1/2 -translate-x-1/2'>
                <div>
                    <p
                        style={{
                            background: "linear-gradient(90deg, #FFF 0.13%, rgba(255, 255, 255, 0.00) 128.16%)",
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: "transparent"
                        }} className='text-[48px] font-semibold text-center w-full lg:w-[470px] -tracking-[1.64px] mx-auto'>
                        Easy to use, Safe and Cost-effective
                    </p>
                    <p className='text-[#848484] text-base font-medium -tracking-[0.24px] text-center mb-8'>NewPay allow you to connect your crypto assets in real life!</p>

                    <div className='flex items-center justify-center gap-x-4'>
                        <BtnPrimary text='Get the app' variant={'primary-lighter'} />
                        <BtnPrimary text='Create an account' variant={'surface-3'} />
                    </div>

                    <figure className='lg:mt-20 mx-auto w-fit cursor-pointer'>
                        <Image src={card} alt='card' />
                    </figure>
                </div>
            </BoxWrapped>
        </div>
    )
}

export default Hero
