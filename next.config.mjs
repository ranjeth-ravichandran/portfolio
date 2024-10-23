/** @type {import('next').NextConfig} */

/* Conditional statement so build can work in production and locally. */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/final-portfolio' : '',
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
