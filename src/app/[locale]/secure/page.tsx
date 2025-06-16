import DownloadSection from '@/components/payment/download-section'
import Assets from '@/components/secure-custodian/assets'
import Deposit from '@/components/secure-custodian/deposit'
import Hero from '@/components/secure-custodian/hero'
import ReactLenis from 'lenis/react'
import React from 'react'

const SecureCustodian = () => {
    return (
        <ReactLenis root>
            <main>
                <Hero />
                <Assets />
                <Deposit />
                <DownloadSection />
            </main>
        </ReactLenis>
    )
}

export default SecureCustodian
