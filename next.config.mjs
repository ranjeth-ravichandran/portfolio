/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    // Use conditional basePath for local development and production
    basePath: isProd ? '/final-portfolio' : '',

    // Remove assetPrefix or set to empty string for local development
    assetPrefix: isProd ? '/final-portfolio/' : '',

    // Update publicRuntimeConfig
    publicRuntimeConfig: {
        basePath: isProd ? '/final-portfolio' : '',
    },

    images: {
        unoptimized: true,
    },
};

export default nextConfig;