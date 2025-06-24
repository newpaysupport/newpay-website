import BlogScreen from '@/components/blogs'
import ReactLenis from 'lenis/react'

const Blog = () => {
    return (
        <ReactLenis root>
            <main>
                <BlogScreen />
            </main>
        </ReactLenis>

    )
}

export default Blog
