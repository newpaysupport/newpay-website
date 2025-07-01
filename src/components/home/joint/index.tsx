'use client'
import { useEffect, useRef } from 'react';
import 'swiper/css';
import { Controller } from 'swiper/modules';
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

    const lastSlideIndexRef = useRef<number>(0);
    const isScrollingRef = useRef<boolean>(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastScrollTimeRef = useRef<number>(0);
    const wheelDeltaAccumulator = useRef<number>(0);

    useEffect(() => {
        const swiper = swiperRef.current;
        const pinContainer = pinContainerRef.current;
        if (!swiper || !pinContainer) return;

        const handleWheelScroll = (e: WheelEvent) => {
            const pinContainerRect = pinContainer.getBoundingClientRect();
            const isInViewport = pinContainerRect.top <= 0 && pinContainerRect.bottom >= window.innerHeight;
            if (!isInViewport) return;

            const now = Date.now();
            if (now - lastScrollTimeRef.current < 150) return;

            e.preventDefault();

            if (isScrollingRef.current) return;
            wheelDeltaAccumulator.current += e.deltaY;
            const threshold = 20;
            const currentIndex = swiper.activeIndex;

            if (Math.abs(wheelDeltaAccumulator.current) >= threshold) {
                if (wheelDeltaAccumulator.current > 0 && currentIndex < slideCount - 1) {
                    // Scroll down - next slide
                    isScrollingRef.current = true;
                    swiper.slideTo(currentIndex + 1, 800);
                    lastSlideIndexRef.current = currentIndex + 1;
                    lastScrollTimeRef.current = now;
                    wheelDeltaAccumulator.current = 0;

                    // Reset scrolling flag after animation finish
                    setTimeout(() => {
                        isScrollingRef.current = false;
                    }, 850);

                } else if (wheelDeltaAccumulator.current < 0 && currentIndex > 0) {
                    // Scroll up - previous slide
                    isScrollingRef.current = true;
                    swiper.slideTo(currentIndex - 1, 800);
                    lastSlideIndexRef.current = currentIndex - 1;
                    lastScrollTimeRef.current = now;
                    wheelDeltaAccumulator.current = 0;

                    setTimeout(() => {
                        isScrollingRef.current = false;
                    }, 850);
                }
            }

            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
            scrollTimeoutRef.current = setTimeout(() => {
                wheelDeltaAccumulator.current = 0;
            }, 200);
        };

        const handleScroll = () => {
            if (isScrollingRef.current) return;
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

            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            scrollTimeoutRef.current = setTimeout(() => {
                const singleSlideScrollHeight = (pinContainer.offsetHeight - window.innerHeight) / (slideCount - 1);
                const currentSlideIndex = Math.round(scrollProgress / singleSlideScrollHeight);

                if (swiper.activeIndex !== currentSlideIndex && lastSlideIndexRef.current !== currentSlideIndex) {
                    swiper.slideTo(currentSlideIndex, 500);
                    lastSlideIndexRef.current = currentSlideIndex;
                }
            }, 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('wheel', handleWheelScroll, { passive: false });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheelScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return (
        <>
            <HeroJoint />
            {/* Desktop */}
            <div ref={pinContainerRef} style={{ height: `${slideCount}00vh` }} className="relative lg:block hidden">
                <div ref={swiperContainerRef} className="sticky top-0 h-screen w-full">
                    <Swiper
                        direction="vertical"
                        slidesPerView={1}
                        spaceBetween={0}
                        mousewheel={false}
                        touchRatio={0.8}
                        threshold={20}
                        modules={[Controller]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="h-full w-full"
                        speed={800}
                        allowTouchMove={true}
                        resistanceRatio={0.85}
                    >
                        <SwiperSlide><CardContent /></SwiperSlide>
                        <SwiperSlide><Card2 /></SwiperSlide>
                        <SwiperSlide><Card3 /></SwiperSlide>
                        <SwiperSlide><Card4 /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* Mobile */}
            <div className="lg:hidden">
                <CardContent />
                <Card2 />
                <Card3 />
                <Card4 />
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
