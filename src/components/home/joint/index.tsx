'use client';

import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    const swiperRef = useRef<any>(null);
    const [canScrollOutside, setCanScrollOutside] = useState(false);

    useEffect(() => {
        document.body.style.overflow = canScrollOutside ? 'auto' : 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [canScrollOutside]);

    return (
        <>
            <HeroJoint />
            <Swiper
                direction="vertical"
                slidesPerView={1}
                spaceBetween={0}
                speed={500}
                pagination={{ clickable: false }}
                mousewheel={{
                    forceToAxis: true,
                    sensitivity: 1.2,
                    releaseOnEdges: false,
                }}
                modules={[Mousewheel, Pagination]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                    const isLast = swiper.activeIndex === swiper.slides.length - 1;
                    const isFirst = swiper.activeIndex === 0;
                    setCanScrollOutside(isLast && !isFirst);
                }}
                style={{ height: '100vh' }}
            >
                <SwiperSlide><CardContent /></SwiperSlide>
                <SwiperSlide><Card2 /></SwiperSlide>
                <SwiperSlide><Card3 /></SwiperSlide>
                <SwiperSlide><Card4 /></SwiperSlide>
            </Swiper>
            <div
                className={`transition-all duration-500 ease-in-out ${canScrollOutside ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
            >
                <FeaturesGrid />
                <AutoSlideshow />
                <About />
                <HelpCenter />
                <DownloadSection />
            </div>
        </>
    );
};

export default JointScreen;
