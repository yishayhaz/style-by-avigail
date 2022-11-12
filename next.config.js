/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@use "styles" as *;`,
  },
};

module.exports = nextConfig;
