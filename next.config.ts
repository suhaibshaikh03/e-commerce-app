import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    unoptimized: true, // Since all images are local, we can disable optimization
  },
};

export default nextConfig;
