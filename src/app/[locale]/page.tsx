
import HomeScreen from "@/components/home";
import FAQ from "@/components/home/faq";
import GlobeListCard from "@/components/home/gift-card/globe-listcard";
import HelpCenter from "@/components/home/gift-card/help-center";
import VideoBackground from "@/components/home/gift-card/video-background";
import DownloadSection from "@/components/payment/download-section";

export default function HomePage() {

    return (
        <main>
            <HomeScreen />
            {/* <DownloadSection />
            <VideoBackground />
            <GlobeListCard />
            <FAQ />
            <HelpCenter /> */}
        </main>
    );
}
