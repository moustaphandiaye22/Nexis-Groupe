import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    qualities: [75, 80, 85, 88, 90, 95, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
