/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: '/final-portfolio',
    assetPrefix: '/final-portfolio',
    publicRuntimeConfig: {
        basePath: '/final-portfolio',
    },
    output: 'export',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
