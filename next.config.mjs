/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.betterhelp.com',
        port: '',
        pathname: '/bhorg/**',
      },
    ],
  },
};

export default nextConfig;
