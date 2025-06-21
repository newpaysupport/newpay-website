import BlogDetailSlug from '@/components/blogs/slug';
import ReactLenis from 'lenis/react';
import React, { use } from 'react'

const BlogDetailBySlug = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = use(params);

    return (
        <ReactLenis root>
            <BlogDetailSlug slug={slug} />
        </ReactLenis>
    )
}

export default BlogDetailBySlug


