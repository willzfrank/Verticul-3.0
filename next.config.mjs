/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alphacoders.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
