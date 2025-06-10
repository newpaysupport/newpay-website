import card_container from "@/images/Card_Container.png"
import card_payment from "@/images/Front.png"
import img_content1 from "@/images/Img_content1.png"
import product_content_end from "@/images/Product_Image.png"
import social from "@/images/Social_Media.png"
import wallet from "@/images/WALLET.png"
import world from "@/images/World.png"
import bg_content3 from "@/images/bg_content3.png"
import icon_gift from "@/images/didi.png"
import icon_arrow from "@/images/didi_arrow.png"
import hero_payment from "@/images/hero_payment.png"
import img_share from "@/images/img_share_happy.png"
import message from "@/images/message.png"
import logo_payment from "@/images/newpay_square_mark_payment.png"
import Image from "next/image"

// FAQ
const faqItems = [
    {
        question: 'How do I open a personal account?',
        answer: 'Opening a personal account is easy. Visit our sign-up page and follow the instructions. You\'ll need to provide basic information and complete identity verification.',
    },
    {
        question: 'How long does it take for funds to arrive in my account?',
        answer: 'Typically, funds arrive within 1-3 business days, depending on the sending institution and method. Instant transfers may be available for certain regions.',
    },
    {
        question: 'What fees does NewPay charge?',
        answer: 'NewPay offers competitive fees, with many basic transactions being free. Detailed fee schedules are available on our website\'s pricing page.',
    },
    {
        question: 'Does NewPay offer virtual or physical cards?',
        answer: 'Yes, NewPay offers both virtual and physical cards. You can easily order them through your account dashboard.',
    },
    {
        question: 'Why choose NewPay?',
        answer: 'NewPay provides a secure, user-friendly platform with fast transactions, excellent customer support, and innovative financial tools.',
    },
];

const Payment = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative">
                {/* background and content background */}
                <Image src={hero_payment} alt="background" width={0} height={0} className="object-cover md:w-full md:h-full h-[1000px]" />
                <p className="md:text-sm md:w-[20%] w-[50%] text-xs text-gray-600 text-right absolute top-[30%] bottom-[60%] right-[12%]">Accessible crypto wallet for everyone, everywhere. Let’s embrace the future with cryptocurrency payments via NewPay!</p>
                <div className="absolute md:right-[9.2%] bottom-[24%]">
                    <Image src={card_container} alt="background" width={0} height={0} />
                </div>
                <div className="absolute md:w-[25%] w-[50%] top-[30%] bottom-[60%] left-[12%]">
                    <Image src={logo_payment} alt="background" width={0} height={0} className="w-12 h-12 mb-10" />
                    <h1 className="md:text-5xl md:my-6 md:leading-14 text-xl my-4 text-white leading-8">Your All-in-One Crypto Payment Solution</h1>
                    <button className="rounded-full md:py-3 md:px-4 md:text-sm p-2 text-xs text-white cursor-pointer bg-orange-500 hover:bg-orange-600">Get your card now</button>
                </div>
            </div>
            {/* Content Section*/}
            <div className="bg-black">

                {/* Content Section 1*/}
                <div className="bg-white rounded-4xl pb-10">
                    {/* title and button */}
                    <div>
                        <h1 className="md:text-6xl text-xl font-semibold text-center pt-10">Spend Crypto Like Fiat</h1>
                        <p className="md:w-1/4 text-sm text-center text-gray-500 mt-4 mx-auto">Swift, seamless, secure: Transform your crypto into everyday purchases with NewPay</p>
                        {/* two button */}
                        <div className="w-fit mx-auto text-md mt-8">
                            <button className="bg-black text-white font-semibold py-3 px-7 rounded-full mx-2 cursor-pointer">Virtual Card</button>
                            <button className="bg-white text-gray-800 font-semibold border border-gray-300 py-3 px-7 rounded-full mx-2 cursor-pointer">Physical Card</button>
                        </div>
                    </div>

                    {/* content Virtual Card*/}
                    <div className="flex justify-between items-center mt-10 mx-auto container w-[80%] md:flex-row flex-col">
                        <div className="md:w-[45%]">
                            <div className="my-4 p-6 bg-gray-100 rounded-2xl">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44.3937 19.1139C44.3948 19.2929 44.3605 19.4703 44.2928 19.636C44.2251 19.8017 44.1254 19.9524 43.9993 20.0795L35.8393 28.2395C35.7123 28.3655 35.5616 28.4653 35.3959 28.5329C35.2302 28.6006 35.0527 28.6349 34.8737 28.6339C34.6969 28.6361 34.5214 28.6037 34.3569 28.5387C34.1064 28.4358 33.8924 28.2604 33.7421 28.0351C33.5919 27.8098 33.5124 27.5447 33.5137 27.2739V23.1939H21.2738C20.9131 23.1939 20.5671 23.0506 20.3121 22.7956C20.057 22.5405 19.9138 22.1946 19.9138 21.8339V16.3939C19.9138 16.0332 20.057 15.6873 20.3121 15.4322C20.5671 15.1772 20.9131 15.0339 21.2738 15.0339H33.5137V10.9539C33.5149 10.6849 33.5957 10.4223 33.7461 10.1993C33.8965 9.9763 34.1096 9.80288 34.3585 9.70098C34.6074 9.59908 34.881 9.57329 35.1446 9.62685C35.4081 9.68041 35.6499 9.81093 35.8393 10.0019L43.9993 18.1619C44.2506 18.4152 44.3922 18.7571 44.3937 19.1139ZM26.7137 25.9139H14.4738V21.8339C14.4724 21.5654 14.3916 21.3033 14.2416 21.0806C14.0915 20.858 13.8789 20.6847 13.6306 20.5827C13.3829 20.4785 13.1099 20.4501 12.8461 20.5009C12.5823 20.5518 12.3394 20.6796 12.1482 20.8683L3.98817 29.0283C3.86213 29.1554 3.7624 29.3061 3.69472 29.4718C3.62704 29.6375 3.59274 29.8149 3.59377 29.9939C3.59274 30.1729 3.62704 30.3503 3.69472 30.516C3.7624 30.6817 3.86213 30.8324 3.98817 30.9595L12.1482 39.1195C12.2752 39.2455 12.426 39.3452 12.5917 39.4129C12.7573 39.4806 12.9348 39.5149 13.1138 39.5139C13.2922 39.5185 13.4692 39.4812 13.6306 39.4051C13.8789 39.303 14.0915 39.1298 14.2416 38.9071C14.3916 38.6845 14.4724 38.4224 14.4738 38.1539V34.0739H26.7137C27.0744 34.0739 27.4204 33.9306 27.6754 33.6755C27.9305 33.4205 28.0737 33.0746 28.0737 32.7139V27.2739C28.0737 26.9132 27.9305 26.5673 27.6754 26.3122C27.4204 26.0572 27.0744 25.9139 26.7137 25.9139Z" fill="#17B0FC" />
                                </svg>
                                <h2 className="md:text-2xl font-semibold mt-4">For any kind of transaction</h2>
                                <p className="md:text-md text-sm text-gray-500 mt-2">Protected by $42M insurance from OneDegree.</p>
                            </div>
                            <div className="mt-6 p-6 bg-gray-100 rounded-2xl">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.5898 26.4C37.5898 24.1502 39.42 22.32 41.6698 22.32H44.3898V16.88C44.3898 13.8745 41.9554 11.44 38.9498 11.44H14.4698C13.7221 11.44 13.1098 10.8277 13.1098 10.08C13.1098 9.33227 13.7221 8.72 14.4698 8.72H38.4193C37.5493 7.11563 35.672 6 33.5098 6H11.7498C7.24816 6 3.58984 9.65898 3.58984 14.16V35.92C3.58984 38.9255 6.0243 41.36 9.02984 41.36H38.9498C41.9554 41.36 44.3898 38.9255 44.3898 35.92V30.48H41.6698C39.42 30.48 37.5898 28.6498 37.5898 26.4ZM23.9898 33.2C23.2388 33.2 22.6298 32.5917 22.6298 31.84C22.6298 31.0883 23.2388 30.48 23.9898 30.48C24.7409 30.48 25.3498 31.0883 25.3498 31.84C25.3498 32.5917 24.7409 33.2 23.9898 33.2ZM27.8348 28.5582C27.5691 28.8238 27.2212 28.9566 26.8732 28.9566C26.5252 28.9566 26.1773 28.8238 25.9116 28.5582C24.8823 27.5276 23.0973 27.5276 22.068 28.5582C21.5368 29.0895 20.6762 29.0895 20.1449 28.5582C19.6137 28.027 19.6137 27.1663 20.1449 26.6351C22.2022 24.5765 25.7775 24.5765 27.8348 26.6351C28.366 27.1663 28.366 28.027 27.8348 28.5582ZM31.6837 24.7093C31.418 24.9749 31.0701 25.1077 30.7221 25.1077C30.3741 25.1077 30.0262 24.9749 29.7605 24.7093C28.2199 23.1687 26.17 22.32 23.9898 22.32C21.8091 22.32 19.7598 23.1687 18.2191 24.7093C17.6892 25.2405 16.8273 25.2405 16.296 24.7093C15.7648 24.178 15.7648 23.3174 16.296 22.7862C18.3493 20.7316 21.0819 19.6 23.9898 19.6C26.8971 19.6 29.6291 20.7316 31.6837 22.7862C32.2149 23.3174 32.2149 24.178 31.6837 24.7093Z" fill="#4EE262" />
                                    <path d="M40.3203 26.4C40.3203 27.1504 40.9306 27.76 41.6803 27.76H44.4003V25.04H41.6803C40.9306 25.04 40.3203 25.6496 40.3203 26.4Z" fill="#4EE262" />
                                </svg>

                                <h2 className="md:text-2xl font-semibold mt-4">Compatible with mobile wallets</h2>
                                <p className="md:text-md text-sm text-gray-500 mt-2">Insured up to $42M, even on Apple Pay & Google Pay.</p>
                            </div>
                            <button className="rounded-full mt-6 md:py-3 md:px-4 md:text-sm p-4 text-xs text-white cursor-pointer bg-orange-500 hover:bg-orange-600">Get your card now</button>
                        </div>
                        <div className="md:w-[45%] mt-10 md:mt-0">
                            <Image src={img_content1} alt="Spend Crypto" width={500} height={300} />
                        </div>
                    </div>

                    {/* Content Section 2*/}
                    <div className="mt-30">
                        <h1 className="md:text-6xl text-2xl font-semibold text-center pt-10">Spend Crypto Everywhere</h1>
                        <p className="md:text-md text-sm text-center text-gray-500 mt-4 mx-auto">Transfer fiat with your crypto to anyone anywhere in the world</p>
                        {/* image world */}
                        <Image src={world} alt="world" width={1000} height={500} className="mx-auto mt-10" />
                        <Image src={social} alt="social" width={1000} height={500} className="mx-auto mt-10" />
                    </div>

                    {/* content background */}
                    <div className="relative w-full h-[370px] mt-10">
                        {/* Background Image */}
                        <Image src={bg_content3} alt="social" fill className="object-cover w-full h-full" quality={100} />

                        {/* Centered Content */}
                        <div className="absolute inset-0 flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mx-auto sm:px-6 lg:px-8 gap-8">
                            {/* Left Content: Heading and Description */}
                            <div className="flex flex-col md:mt-0 mt-5 items-center lg:items-start text-center lg:text-left max-w-2xl">
                                <h2 className="md:text-4xl text-2xl font-semibold text-white mb-2">
                                    Your assets are safe with us
                                </h2>
                                <p className="text-gray-300 text-sm md:text-md">
                                    Client asset segregation with Licensed Trust Company
                                </p>
                            </div>

                            {/* Right Content: Biometric and Access Code */}
                            <div className="flex gap-4 sm:gap-5">
                                <div className="flex flex-col justify-center items-center sm:p-6 bg-gray-600/20 rounded-2xl max-w-md">
                                    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
                                    >
                                        <path d="M5.33203 24.0002V17.3335C5.33203 10.6935 10.692 5.3335 17.332 5.3335H23.9987" stroke="#AEAEAE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M40 5.3335H46.6667C53.3067 5.3335 58.6667 10.6935 58.6667 17.3335V24.0002" stroke="#AEAEAE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M58.668 42.6665V46.6665C58.668 53.3065 53.308 58.6665 46.668 58.6665H42.668" stroke="#AEAEAE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M23.9987 58.6667H17.332C10.692 58.6667 5.33203 53.3067 5.33203 46.6667V40" stroke="#AEAEAE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M45.3346 25.3335V38.6668C45.3346 44.0002 42.668 46.6668 37.3346 46.6668H26.668C21.3346 46.6668 18.668 44.0002 18.668 38.6668V25.3335C18.668 20.0002 21.3346 17.3335 26.668 17.3335H37.3346C42.668 17.3335 45.3346 20.0002 45.3346 25.3335Z" stroke="#AEAEAE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M50.6654 32H13.332" stroke="#AEAEAE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-xl sm:text-2xl text-white mt-2 md:px-4 px-6">Biometric</p>
                                    <p className="text-sm text-gray-300">security</p>
                                </div>
                                <div className="flex flex-col justify-center items-center p-4 sm:p-6 bg-gray-600/20 rounded-2xl ">
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.388 52H20.0013C18.348 52 16.8813 51.9467 15.5746 51.76C8.5613 50.9867 6.66797 47.68 6.66797 38.6667V25.3333C6.66797 16.32 8.5613 13.0133 15.5746 12.24C16.8813 12.0533 18.348 12 20.0013 12H29.228" stroke="#AEAEAE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M40.0508 12H43.9974C45.6508 12 47.1174 12.0533 48.4241 12.24C55.4374 13.0133 57.3308 16.32 57.3308 25.3333V38.6667C57.3308 47.68 55.4374 50.9867 48.4241 51.76C47.1174 51.9467 45.6508 52 43.9974 52H40.0508" stroke="#AEAEAE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M40 5.3335V58.6668" stroke="#AEAEAE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M29.5882 31.9998H29.6122" stroke="#AEAEAE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.9242 31.9998H18.9481" stroke="#AEAEAE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className="text-xl sm:text-2xl text-white mt-2">Access code</p>
                                    <p className="text-sm text-gray-300">protection</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section: Card */}
                    <div className="mt-8 sm:mt-12 lg:mt-16">
                        <Image src={card_payment} alt="card payment" width={0} height={0} sizes="100vw" className="mx-auto w-full max-w-md sm:max-w-lg my-4 sm:my-6" />
                        <Image src={wallet} alt="Wallet" width={0} height={0} sizes="100vw" className="mx-auto w-full max-w-md sm:max-w-lg" />

                        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
                            <h1 className="md:text-6xl text-3xl font-semibold pt-4 sm:pt-6 lg:pt-10">
                                Pay on-the-go
                            </h1>
                            <p className="text-gray-500 mt-2 sm:mt-4 mx-auto w-full sm:w-[50%] lg:w-[20%] text-sm sm:text-base">
                                Simply add NewPay Card to Apple or Google Wallet for quick and convenient access whenever you need it.
                            </p>
                        </div>
                    </div>

                    {/* Content: Share Happy Moment */}
                    <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col md:flex-row mx-auto max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col w-full md:w-[35%]">
                            <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12.8066C0 6.17922 5.37258 0.806641 12 0.806641H52C58.6274 0.806641 64 6.17922 64 12.8066V52.8066C64 59.4341 58.6274 64.8066 52 64.8066H12C5.37258 64.8066 0 59.4341 0 52.8066V12.8066Z" fill="#F8F8F8" />
                                <path d="M0 12.8066C0 6.17922 5.37258 0.806641 12 0.806641H52C58.6274 0.806641 64 6.17922 64 12.8066V52.8066C64 59.4341 58.6274 64.8066 52 64.8066H12C5.37258 64.8066 0 59.4341 0 52.8066V12.8066Z" fill="url(#paint0_linear_390_3879)" fill-opacity="0.2" />
                                <path d="M45.2799 29.4736H18.6133V42.807C18.6133 47.807 20.2799 49.4736 25.2799 49.4736H38.6133C43.6133 49.4736 45.2799 47.807 45.2799 42.807V29.4736Z" stroke="#FF6910" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M47.8346 24.473V26.1396C47.8346 27.973 46.9513 29.473 44.5013 29.473H19.5013C16.9513 29.473 16.168 27.973 16.168 26.1396V24.473C16.168 22.6396 16.9513 21.1396 19.5013 21.1396H44.5013C46.9513 21.1396 47.8346 22.6396 47.8346 24.473Z" stroke="#FF6910" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M31.398 21.1404H22.198C21.6313 20.5237 21.648 19.5737 22.248 18.9737L24.6147 16.607C25.2313 15.9904 26.248 15.9904 26.8647 16.607L31.398 21.1404Z" stroke="#FF6910" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M41.7859 21.1404H32.5859L37.1193 16.607C37.7359 15.9904 38.7526 15.9904 39.3693 16.607L41.7359 18.9737C42.3359 19.5737 42.3526 20.5237 41.7859 21.1404Z" stroke="#FF6910" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M26.9023 29.4736V38.0403C26.9023 39.3736 28.369 40.157 29.4857 39.4403L31.0523 38.407C31.619 38.0403 32.3357 38.0403 32.8857 38.407L34.369 39.407C35.469 40.1403 36.9523 39.357 36.9523 38.0236V29.4736H26.9023Z" stroke="#FF6910" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_390_3879" x1="32" y1="0.806641" x2="32" y2="64.8066" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6910" stop-opacity="0" />
                                        <stop offset="1" stop-color="#FF6910" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <h1 className="text-5xl font-semibold pt-4 sm:pt-6 lg:pt-10 text-left">
                                Share Happy Moments
                            </h1>
                            <p className="text-left text-gray-500 mt-2 sm:mt-4 w-full sm:w-[70%] text-sm sm:text-base">
                                Split the bill with friends or send gifts in crypto with 0 transfer fees
                            </p>

                            {/* Card Gift */}
                            <div className="flex items-center justify-between bg-orange-500 text-white rounded-2xl p-2 sm:p-3 md:p-4 shadow-md w-full max-w-xs mt-8 sm:mt-12 lg:mt-16">
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="flex-shrink-0">
                                        <Image src={icon_gift} alt="Gift Icon" width={24} height={24} className="w-8 h-8 md:w-12 md:h-12" />
                                    </div>
                                    <div>
                                        <p className="text-base sm:text-lg font-semibold">Reward</p>
                                        <p className="text-xs sm:text-sm">Free Gift</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-base sm:text-lg font-semibold">+20.68 USDT</p>
                                </div>
                            </div>

                            {/* Card Receive */}
                            <div className="flex items-center justify-between bg-green-400 text-white rounded-2xl p-2 sm:p-3 md:p-4 shadow-md w-full max-w-xs mt-4 sm:mt-6 ml-0 sm:ml-6 lg:ml-20">
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="flex-shrink-0">
                                        <Image src={icon_arrow} alt="Receive Icon" width={24} height={24} className="w-8 md:w-12 h-8 md:h-12" />
                                    </div>
                                    <div>
                                        <p className="text-base sm:text-lg font-semibold">Receive</p>
                                        <p className="text-xs sm:text-sm">Dinner</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-base sm:text-lg font-semibold">+250.00 USDT</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[50%] mt-8 md:mt-0">
                            <Image src={img_share} alt="Share Happy Moment" width={0} height={0} sizes="100vw" className="mx-auto w-full max-w-md sm:max-w-lg" />
                        </div>
                    </div>
                </div>
                {/* content FAQ */}
                <div className="mt-16 pb-6">
                    <div className="flex mx-auto max-w-7xl justify-between">
                        <div className="text-white">
                            <h1 className="text-6xl font-semibold">
                                FAQ
                            </h1>
                            <p className="text-md mt-3">
                                Frequently Asked Questions
                            </p>
                            <Image src={message} alt="Message Icon" width={205} height={180} />
                        </div>
                        <div className="text-white">
                            {faqItems.map((item, index) => {
                                return (
                                    <details className="border-b border-gray-800 py-6 group">
                                        <summary className="flex justify-between items-center text-left focus:outline-none cursor-pointer w-[640px]">
                                            <h3 className="text-xl font-medium">{item.question}</h3>
                                            <span className="text-3xl transition-transform duration-300 group-open:rotate-45">
                                                +
                                            </span>
                                        </summary>
                                        <p className="mt-4 text-gray-400 leading-6 w-[640px] text-md font-medium">
                                            {item.answer}
                                        </p>
                                    </details>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* content end */}
                <div className="bg-gray-600/10 rounded-4xl py-16">
                    <div className="flex container mx-auto gap-20 justify-center items-center">
                        <Image src={product_content_end} alt="Gift Icon" width={540} height={540} />
                        <div>
                            <Image src={logo_payment} alt="Gift Icon" width={100} height={100} className="w-16 h-16 md:w-20 md:h-20" />
                            <h1 className="text-5xl font-semibold leading-14 pt-4 sm:pt-6 lg:pt-10 text-left text-white">
                                Join NewPay. <br/> Spend Safe & Smart
                            </h1>
                            <button className="rounded-xl mt-6 md:py-3 md:px-4 md:text-sm p-4 text-md text-black cursor-pointer bg-white hover:bg-gray-100 font-semibold">Download App</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Payment

