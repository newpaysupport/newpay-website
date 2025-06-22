import FaqInfo from '@/components/faq-help/faq-info'
import NeedAHand from '@/components/faq-help/need-a-hand'
import TopViewedArticles from '@/components/faq-help/slug/top-viewed-articles'
import ReactLenis from 'lenis/react'
import React from 'react'

const FAQHelpCenter = () => {
    return (
        <ReactLenis root>
            <main>
                <NeedAHand />
                <div className='py-10 bg-[#060606] lg:px-[120px]'>
                    <TopViewedArticles />
                    <FaqInfo />
                </div>
            </main>
        </ReactLenis>
    )
}

export default FAQHelpCenter
