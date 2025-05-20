import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TODO: We can remove this once we have a way to grab proper company images for each project - this is just being used for sample data
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
    ],
  },
};

export default nextConfig;
