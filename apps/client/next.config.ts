import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return {
      fallback: [
        {
          source: "/api/:path*",
          destination: "http://localhost:3010/:path*", // proxy to the backend
        },
      ],
    };
  },
};

export default nextConfig;
