import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
