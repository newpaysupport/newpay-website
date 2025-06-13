
import BlogDetail from '@/components/blogs/blog-detail';
import { use } from 'react';

interface BlogDetailPageProps {
    params: Promise<{ id: string }>;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { id } = use(params);
    return <BlogDetail id={id} />;
}
