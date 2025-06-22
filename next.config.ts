import type { NextConfig } from 'next';
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import initializeBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';
// // https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = initializeBundleAnalyzer({
    enabled: process.env.NEXT_PUBLIC_BUNDLE_ANALYZER_ENABLED === 'true'
});

// https://nextjs.org/docs/pages/api-reference/next-config-js
const nextConfig: NextConfig = {
    output: 'standalone',
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    experimental: {
        mdxRs: true
    }
};
const withNextIntl = createNextIntlPlugin();
const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
    },
});
const combinedConfig = withBundleAnalyzer(withNextIntl(withMDX(nextConfig)));
export default combinedConfig;
