
import DownloadSection from '@/components/payment/download-section';
import HelpCenter from '../gift-card/help-center';
import About from './about';
import CardContent from './card-content';
import AutoSlideshow from './card-slide';
import FeaturesGrid from './features-grid';
import HeroJoint from './hero-joint';


const JointScreen = () => {
    return (
        <>
            <HeroJoint />
            <div className="bg-black">
                <CardContent />
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
