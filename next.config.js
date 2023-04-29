/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    transpilePackages: ["react-beautiful-carousel"],
  },
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@use "styles" as *;`,
  },
  i18n: {
    locales: ["he"],
    defaultLocale: "he",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
