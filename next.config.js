const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const nextTranslate = require('next-translate-plugin');
const withNextIntl = require('next-intl/plugin')();

// next.config.js
const nextConfig = {
  // Enable production mode
  productionBrowserSourceMaps: false,
  
  // Enable built-in SWC minification
  swcMinify: true,
  
  // Basic webpack configuration
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimize = true;
    }
    return config;
  },
}


module.exports = withNextIntl({ ... nextConfig});