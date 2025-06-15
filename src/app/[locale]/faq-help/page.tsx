import FaqInfo from '@/components/faq-help/faq-info'
import NeedAHand from '@/components/faq-help/need-a-hand'
import ReactLenis from 'lenis/react'
import React from 'react'

const FAQHelpCenter = () => {
    return (
        <ReactLenis root>
            <main>
                <NeedAHand />
                <FaqInfo />
            </main>
        </ReactLenis>
    )
}

export default FAQHelpCenter
