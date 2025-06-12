import step1 from '@/images/home/open-account/1.png';
import step2 from '@/images/home/open-account/2.png';
import step3 from '@/images/home/open-account/3.png';
import step4 from '@/images/home/open-account/4.png';
import step5 from '@/images/home/open-account/5.png';
import Image from 'next/image';



const stepAccount = [
    {
        step: 1,
        title: 'Spend crypto like fiat',
        description: 'No need for fiat conversion, use crypto directly for everyday purchases (shopping, dining, subscriptions, etc.).',
        image: step1,
    },
    {
        step: 2,
        title: 'Worldwide Acceptance',
        description: 'Support Apple Pay, card withdrawals, and transactions at millions of locations worldwide.',
        image: step2,
    },
    {
        step: 3,
        title: 'Instant Transactions',
        description: 'Send, receive, and complete crypto-to-fiat transactions, whether P2P or global payments.',
        image: step3,
    },
    {
        step: 4,
        title: 'Gift Card',
        description: 'Easily send value and crypto gifts to friends, celebrations, or just because — no conversion fees.',
        image: step4,
    },
    {
        step: 5,
        title: 'Referral Rewards',
        description: 'Earn bonus rewards (up to 50%) in credits with our easy-to-use invite program.',
        image: step5,
    },
];



const OpenAccount = () => {
    return (
        <div className="bg-[#060606] py-20 px-[120px]">
            <div className='container mx-auto'>
                <h3 className='text-white text-[48px] font-semibold'>Open your NewPay Account</h3>
                <p className='text-[#aeaeae] text-lg font-normal mt-6 mb-20'>Just 4 steps to start – Global transparent spending, physical card ATM access, full security</p>
                <div className='flex items-start justify-between'>
                    <div className='flex gap-x-12'>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                            <p className='text-white text-[60px] font-medium'>{stepAccount[0].title}</p>
                            <p className='text-[#aeaeae] text-xl font-medium'>{stepAccount[0].description}</p>
                        </div>
                    </div>
                    <div>
                        <Image src={stepAccount[0].image} alt='image' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenAccount
