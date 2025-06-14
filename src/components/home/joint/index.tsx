import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from "next-intl";

import About from './about';
import CardContent from './card-content';
import HeroJoint from './hero-joint';
import DownloadSection from '@/components/payment/download-section';
import HelpCenter from '../gift-card/help-center';
import FeaturesGrid from './features-grid';
import AutoSlideshow from './card-slide';


const JointScreen = () => {
    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;
    {/* Content Section: Download */ }
    const downloadSection = payment.downloadSection;
    return (
        <>
            <HeroJoint />
            <div className="bg-black">
                <CardContent />
                <FeaturesGrid />
                <AutoSlideshow />
                <About />
                <HelpCenter />
                <div className='mt-30'>
                    <DownloadSection downloadSection={downloadSection} />
                </div>
            </div>
        </>
    );
};

export default JointScreen;