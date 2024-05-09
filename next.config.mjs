/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.extensions.push('.mjs');
        return config;
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};
export default nextConfig;
