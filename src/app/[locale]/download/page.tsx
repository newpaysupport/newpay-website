import Banner from '@/components/download/banner'
import GetTheApp from '@/components/download/get-the-app'
import ReactLenis from 'lenis/react'
import React from 'react'

const Download = () => {
    return (
        <ReactLenis root>
            <main>
                <Banner />
                <GetTheApp />
            </main>
        </ReactLenis>
    )
}

export default Download
