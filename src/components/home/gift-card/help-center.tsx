'use client';
import arrowright from '@/images/home/giftcard/arrowright.svg';
import ava1 from '@/images/home/giftcard/ava1.png';
import ava2 from '@/images/home/giftcard/ava2.png';
import ava3 from '@/images/home/giftcard/ava3.png';
import letter from '@/images/home/giftcard/letter.svg';
import Toast from '@/toast';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';


const HelpCenter = () => {
    const [email, setEmail] = useState('');
    const [toast, setToast] = useState({
        isVisible: false,
        message: '',
        type: 'success' 
    });

    const t = useTranslations('home');

    const avatars = [
        { id: 1, name: 'User 1', image: ava1 },
        { id: 2, name: 'User 2', image: ava2 },
        { id: 3, name: 'User 3', image: ava3 }
    ];

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const showToast = (message: string, type: 'success' | 'error') => {
        setToast({
            isVisible: true,
            message,
            type
        });
    };

    const hideToast = () => {
        setToast(prev => ({
            ...prev,
            isVisible: false
        }));
    };
   
    const handleSubmit = () => {
        if (!email.trim()) {
            showToast("Email is required", 'error');
            return;
        }
    
        if (!validateEmail(email)) {
            showToast( 'Invalid email format', 'error');
            return;
        }

        showToast('Email sent successfully!', 'success');
        setEmail('');
    };

    return (
        <>
            {/* Toast Notification */}
            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={hideToast}
            />

            <section className='py-[160px] bg-[#060606]'>
                <div
                    className="mx-auto md:w-[1200px] relative overflow-hidden transition-transform duration-300 hover:scale-102 bg-[#060606]"
                    style={{
                        padding: '64px',
                        borderRadius: '40px',
                        border: '2px solid rgba(255, 183, 0, 0.2)',
                        background: "linear-gradient(292deg, rgba(255, 143, 77, 0.20) 2.5%, rgba(255, 143, 77, 0.00) 37.03%), linear-gradient(109deg, rgba(255, 143, 77, 0.20) -3.64%, rgba(255, 143, 77, 0.00) 36.61%), rgba(255, 255, 255, 0.04)",
                        backdropFilter: 'blur(100px)',
                    }}
                >
                    {/* Background gradient overlay */}
                    <div style={{
                        background: "linear-gradient(292deg, rgba(255, 143, 77, 0.20) 2.5%, rgba(255, 143, 77, 0.00) 37.03%), linear-gradient(109deg, rgba(255, 143, 77, 0.20) -3.64%, rgba(255, 143, 77, 0.00) 36.61%), bg-[#FFFFFF]/4, rgba(255, 255, 255, 0.04);",
                        border: "2px solid rgba(255, 183, 0, 0.00);"
                    }}
                        className="absolute inset-0 rounded-24" />

                    {/* Content */}
                    <div className="relative flex items-end justify-between gap-8">
                        <div className="flex-1 space-y-6">
                            <Image src={letter} alt="Mail Icon" />

                            <h2 className="text-white font-semibold text-3xl leading-tight w-[80%]">
                                {t('helpCenter.title')}
                            </h2>

                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {avatars.map((avatar, index) => (
                                        <div
                                            key={avatar.id}
                                            className="w-12 h-12 rounded-full overflow-hidden relative"
                                            style={{ zIndex: 10 - index }}
                                        >
                                            <Image
                                                src={avatar.image}
                                                alt={avatar.name}
                                                width={48}
                                                height={48}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-white/80 text-xl font-medium ml-2">
                                    {t('helpCenter.amountUsers')}
                                </span>
                            </div>
                        </div>

                        {/* Right side - Form */}
                        <div className="space-y-4">
                            <div className="space-y-6">

                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={t('helpCenter.enterEmail')}
                                        className="md:w-[410px] md:h-[70px] px-4 py-3 bg-[#FFFFFF]/8 rounded-xl placeholder-gray-400 text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600/50 focus:border-gray-600/50 transition-all duration-200"
                                    />
                                </div>

                                <button
                                    style={{
                                        background: "linear-gradient(90deg, rgba(235, 169, 0, 0.00) 0%, rgba(235, 169, 0, 0.20) 100%), #FFF;"
                                    }}
                                    onClick={handleSubmit}
                                    className="md:w-[410px] md:h-[55px] cursor-pointer text-lg font-bold bg-white hover:from-orange-600 hover:to-orange-500 text-black py-3 px-6 rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/25 group"
                                >
                                    {t('helpCenter.sendNow')}
                                    <Image src={arrowright} alt='arrow right' className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-orange-400/5 to-transparent rounded-full blur-lg" />
                </div>
            </section>
        </>
    );
};

export default HelpCenter;