
import FaqHelpSlugDetail from '@/components/faq-help/slug';
import ReactLenis from 'lenis/react';
import React, { use } from 'react'

const FaqBySlug = ({ params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = use(params);

    return (
        <ReactLenis root>
            <FaqHelpSlugDetail slug={slug} />
        </ReactLenis>
    )
}

export default FaqBySlug
