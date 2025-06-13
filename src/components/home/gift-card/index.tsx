import DownloadSection from '@/components/payment/download-section';
import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';
import { useLocale } from "next-intl";

import Faq from '@/components/payment/faq';
import GlobeListCard from './globe-listcard';
import HelpCenter from './help-center';
import VideoBackground from './video-background';
const GiftCard = () => {

    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;
    {/* Content Section: Download */ }
    const downloadSection = payment.downloadSection;
    {/* Content Section: FAQ */ }
    const faqSection = payment.faqSection;
    const faqItems = faqSection.faqItems;

    return (
        <div className='py-16 bg-black'>
            <DownloadSection downloadSection={downloadSection} />
            <div className='mt-16'>
                {/* video background */}
                <VideoBackground />
                {/* Content Globe */}
                <GlobeListCard />
                {/* content FAQ */}
                <Faq faqSection={faqSection} faqItems={faqItems} />
                {/* help center */}
                <HelpCenter />
            </div>
        </div >
    )
}

export default GiftCard