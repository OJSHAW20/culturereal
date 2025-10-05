import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
      { protocol: "https", hostname: "images.pexels.com", pathname: "/**" },
      // add any other image hosts you used in your seed data:
      // { protocol: "https", hostname: "example-cdn.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
