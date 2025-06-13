import Compliance from '@/components/about-us/compliance'
import Hero from '@/components/about-us/hero'
import Insight from '@/components/about-us/insight'
import ReactLenis from 'lenis/react'
import React from 'react'

const AboutUs = () => {
    return (
        <ReactLenis root>
            <main>
                <Hero />
                <Insight />
                <Compliance />
            </main>
        </ReactLenis>
    )
}

export default AboutUs
