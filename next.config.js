/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@use "styles" as *;`,
  },
  i18n: {
    locales: ["he"],
    defaultLocale: "he",
  },
};

module.exports = nextConfig;
