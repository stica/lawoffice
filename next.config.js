const nextTranslate = require('next-translate-plugin');
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  swcMinify: true,
}

module.exports = withNextIntl({ ... nextConfig});