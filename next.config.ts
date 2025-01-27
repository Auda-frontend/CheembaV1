import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cheemba',
        port: '',
        pathname: '/public/assets/images/**',
      },
    ],
  },

  
};

export default nextConfig;

