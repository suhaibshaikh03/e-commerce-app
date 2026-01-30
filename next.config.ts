import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["sharp", "onnxruntime-node"], // Common packages for image processing
  },
  images: {
    unoptimized: true, // Since all images are local, we can disable optimization
  },
  // Enable static exports for simpler deployment
  output: undefined, // Let Amplify determine the output type
};

export default nextConfig;
