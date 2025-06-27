'use client'
import { useEffect, useRef } from 'react';
import 'swiper/css';
import { Controller, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';


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
    const swiperRef = useRef<SwiperCore | null>(null);
    const pinContainerRef = useRef<HTMLDivElement>(null);
    const swiperContainerRef = useRef<HTMLDivElement>(null);
    const slideCount = 4;

    const lastSlideIndexRef = useRef<number>(-1);

    useEffect(() => {
        const swiper = swiperRef.current;
        const pinContainer = pinContainerRef.current;
        if (!swiper || !pinContainer) return;

        const handleScroll = () => {
            const pinContainerTop = pinContainer.offsetTop;
            const scrollY = window.scrollY;
            const scrollProgress = scrollY - pinContainerTop;

            if (scrollProgress < 0 || scrollProgress > pinContainer.offsetHeight - window.innerHeight) {
                if (scrollProgress < 0 && !swiper.isBeginning) {
                    swiper.slideTo(0, 500);
                    lastSlideIndexRef.current = 0;
                }
                if (scrollProgress > pinContainer.offsetHeight - window.innerHeight && !swiper.isEnd) {
                    swiper.slideTo(slideCount - 1, 500);
                    lastSlideIndexRef.current = slideCount - 1;
                }
                return;
            }

            const singleSlideScrollHeight = (pinContainer.offsetHeight - window.innerHeight) / (slideCount - 1);
            const currentSlideIndex = Math.round(scrollProgress / singleSlideScrollHeight);


            if (swiper.activeIndex !== currentSlideIndex && lastSlideIndexRef.current !== currentSlideIndex) {
                swiper.slideTo(currentSlideIndex, 500);
                lastSlideIndexRef.current = currentSlideIndex;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <HeroJoint />
            <div ref={pinContainerRef} style={{ height: `${slideCount}00vh` }} className="relative md:block hidden">
                <div ref={swiperContainerRef} className="sticky top-0 h-screen w-full">
                    <Swiper
                        direction="vertical"
                        slidesPerView={1}
                        spaceBetween={0}
                        mousewheel={{
                            forceToAxis: true,
                            releaseOnEdges: false,
                            sensitivity: 1,
                        }}
                        touchRatio={1}
                        threshold={10}
                        modules={[Controller, Mousewheel]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="h-full w-full"
                        speed={600}
                    >
                        <SwiperSlide><CardContent /></SwiperSlide>
                        <SwiperSlide><Card2 /></SwiperSlide>
                        <SwiperSlide><Card3 /></SwiperSlide>
                        <SwiperSlide><Card4 /></SwiperSlide>
                    </Swiper>
                </div>
            </div >
            <div className="h-screen w-full md:hidden">
                <Swiper
                    direction="vertical"
                    slidesPerView={1}
                    spaceBetween={0}
                    mousewheel={{
                        forceToAxis: true,
                        releaseOnEdges: false,
                        sensitivity: 1,
                    }}
                    modules={[Controller, Mousewheel]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="h-full w-full"
                    speed={600}
                >
                    <SwiperSlide>
                        <CardContent />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card2 />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card3 />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card4 />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div>
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
