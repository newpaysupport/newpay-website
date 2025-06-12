'use client';
import arrowright from '@/images/home/giftcard/arrowright.svg'; // Uncomment if you want to use the ArrowRight icon
import letter from '@/images/home/giftcard/letter.svg';
import Image from 'next/image';
import { useState } from 'react';

const HelpCenter = () => {
    const [email, setEmail] = useState('');

    // Sample avatar data
    const avatars = [
        { id: 1, name: 'User 1', color: 'bg-blue-500' },
        { id: 2, name: 'User 2', color: 'bg-green-500' },
        { id: 3, name: 'User 3', color: 'bg-purple-500' },
        { id: 4, name: 'User 4', color: 'bg-pink-500' },
    ];

    const handleSubmit = () => {
        console.log('Email submitted:', email);
    };

    return (
        <div
            className="mt-40 mx-auto max-w-5xl relative overflow-hidden transition-transform duration-300 hover:scale-102"
            style={{
                padding: '32px',
                borderRadius: '40px',
                border: '2px solid rgba(255, 183, 0, 0.2)',
                background: "linear-gradient(292deg, rgba(255, 143, 77, 0.20) 2.5%, rgba(255, 143, 77, 0.00) 37.03%), linear-gradient(109deg, rgba(255, 143, 77, 0.20) -3.64%, rgba(255, 143, 77, 0.00) 36.61%), rgba(255, 255, 255, 0.04)",
                backdropFilter: 'blur(20px)',
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

                    {/* Heading */}
                    <h2 className="text-white font-semibold text-3xl leading-tight">
                        Follow us to get early discounts and updates regarding new product, feature and more
                    </h2>

                    {/* Member avatars */}
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {avatars.map((avatar, index) => (
                                <div
                                    key={avatar.id}
                                    className={`w-10 h-10 rounded-full border-2 border-gray-800 ${avatar.color} flex items-center justify-center text-white text-sm font-semibold relative z-${10 - index}`}
                                    style={{ zIndex: 10 - index }}
                                >
                                    {avatar.name.charAt(0)}
                                </div>
                            ))}
                        </div>
                        <span className="text-white/80 text-sm font-medium ml-2">
                            120,438+ members
                        </span>
                    </div>
                </div>

                {/* Right side - Form */}
                <div className="space-y-4 w-80">
                    <div className="space-y-4">
                        {/* Email input */}
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-[#FFFFFF]/8 border border-gray-600/50 rounded-xl placeholder-gray-400 text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-200"
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            style={{
                                background: "linear - gradient(90deg, rgba(235, 169, 0, 0.00) 0 %, rgba(235, 169, 0, 0.20) 100 %), #FFF;"
                            }}
                            onClick={handleSubmit}
                            className="w-full cursor-pointer bg-white hover:from-orange-600 hover:to-orange-500 text-black font-semibold py-3 px-6 rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/25 group"
                        >
                            SEND NOW
                            <Image src={arrowright} alt='arrow right' className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-orange-400/5 to-transparent rounded-full blur-lg" />
        </div>
    );
};

export default HelpCenter;