/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    // Use conditional basePath for local development and production
    basePath: isProd ? '/portfolio' : '',

    // Remove assetPrefix or set to empty string for local development
    assetPrefix: isProd ? '/portfolio/' : '',

    // Update publicRuntimeConfig
    publicRuntimeConfig: {
        basePath: isProd ? '/portfolio' : '',
    },

    images: {
        unoptimized: true,
    },
};

export default nextConfig;