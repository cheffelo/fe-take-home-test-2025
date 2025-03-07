/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "dummyimage.com",
      },
    ],
  },
};

module.exports = nextConfig;
