/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  sassOptions: {
    additionalData: `@use "styles" as *;`,
  },
};

module.exports = nextConfig;
