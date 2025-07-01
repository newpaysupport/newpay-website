'use client';
import { useEffect, useRef, useState } from 'react';
import DownloadSection from '@/components/payment/download-section';
import HelpCenter from '../gift-card/help-center';
import About from './about';
import CardContent from './card-scroll/card-content';
import Card2 from './card-scroll/card2';
import Card3 from './card-scroll/card3';
import Card4 from './card-scroll/card4';
import AutoSlideshow from './card-slide';
import FeaturesGrid from './features-grid';
import HeroJoint from './hero-joint';

const JointScreen = () => {
    const [activeCard, setActiveCard] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const step = 500;
    const maxCardIndex = 3;
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const scrollPosition = window.scrollY;
            const basePosition = sectionRef.current.offsetTop;
            const scrolledSteps = Math.floor((scrollPosition - basePosition) / step);
            const newActiveCard = Math.min(maxCardIndex, Math.max(0, scrolledSteps));

            setActiveCard(newActiveCard);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <HeroJoint />
            <div className="relative lg:block hidden" style={{ height: `${(maxCardIndex + 1) * step + 500}px` }} ref={sectionRef}>
                <div className="sticky top-0 h-screen">
                    <div
                        className={`absolute top-0 left-0 w-full h-screen z-[10] flex items-center justify-center bg-white transition-all duration-500 ease-in-out ${activeCard === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <CardContent />
                    </div>
                    <div
                        className={`absolute top-0 left-0 w-full h-screen z-[20] flex items-center justify-center bg-white transition-all duration-500 ease-in-out ${activeCard === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <Card2 />
                    </div>
                    <div
                        className={`absolute top-0 left-0 w-full h-screen z-[30] flex items-center justify-center bg-white transition-all duration-500 ease-in-out ${activeCard === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <Card3 />
                    </div>
                    <div
                        className={`absolute top-0 left-0 w-full h-screen z-[40] flex items-center justify-center bg-white transition-all duration-500 ease-in-out ${activeCard === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <Card4 />
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className="lg:hidden">
                <CardContent />
                <Card2 />
                <Card3 />
                <Card4 />
            </div>
            <FeaturesGrid />
            <AutoSlideshow />
            <About />
            <HelpCenter />
            <DownloadSection />
        </>
    );
};

export default JointScreen;


