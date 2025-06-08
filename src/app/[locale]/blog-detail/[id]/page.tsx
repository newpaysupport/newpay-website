'use client';
import BlogDetail from '@/components/blogs/blog-detail';

export default function BlogDetailPage({ params }: { params: { id: number | string } }) {
    return <BlogDetail id = {params.id}/>;
} 