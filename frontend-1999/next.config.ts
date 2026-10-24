import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  output: "export", // To build a out dir
  images: {
    unoptimized: true,
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
