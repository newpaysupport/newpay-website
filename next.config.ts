import type { NextConfig } from 'next';
import initializeBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';
// // https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = initializeBundleAnalyzer({
    enabled: process.env.NEXT_PUBLIC_BUNDLE_ANALYZER_ENABLED === 'true'
});

// https://nextjs.org/docs/pages/api-reference/next-config-js
const nextConfig: NextConfig = {
    output: 'standalone'
};
const withNextIntl = createNextIntlPlugin();

const combinedConfig = withBundleAnalyzer(withNextIntl(nextConfig));
export default combinedConfig;
