'use client';
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
    return (
        <>
            {/* Desktop */}
            <HeroJoint />
            <div className="relative lg:block hidden">
                <div className="snap-y snap-mandatory scroll-smooth">
                    <div className="h-screen sticky top-0 snap-start flex items-center justify-center bg-white">
                        <CardContent />
                    </div>
                    <div className="h-screen sticky top-0 snap-start flex items-center justify-center bg-white">
                        <Card2 />
                    </div>
                    <div className="h-screen sticky top-0 snap-start flex items-center justify-center bg-white">
                        <Card3 />
                    </div>
                    <div className="h-screen sticky top-0 snap-start flex items-center justify-center bg-white">
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


