import Compliance from '@/components/about-us/compliance'
import Hero from '@/components/about-us/hero'
import Insight from '@/components/about-us/insight'
import Partner from '@/components/about-us/partner'
import HelpCenter from '@/components/home/gift-card/help-center'
import DownloadSection from '@/components/payment/download-section'
import ReactLenis from 'lenis/react'
import React from 'react'

const AboutUs = () => {
    return (
        <ReactLenis root>
            <main>
                <Hero />
                <Insight />
                <Compliance />
                <Partner />
                {/* <HelpCenter /> */}
                {/* <DownloadSection /> */}
            </main>
        </ReactLenis>
    )
}

export default AboutUs
