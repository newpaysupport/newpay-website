
import Consume from "@/components/home/consume";
import GiftCard from "@/components/home/gift-card";
import Hero from "@/components/home/hero";
import OpenAccount from "@/components/home/open-account";

export default function HomePage() {

    return (
        <main>
            <Hero />
            <Consume />
            <OpenAccount />
            <GiftCard/>
        </main>
    );
}
