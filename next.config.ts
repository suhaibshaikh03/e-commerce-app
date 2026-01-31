import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: false, // Disable for static export
  },
  images: {
    unoptimized: true, // Since all images are local, we can disable optimization
  },
  // Use static export for simpler deployment
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
