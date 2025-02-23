const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const nextTranslate = require('next-translate-plugin');
const withNextIntl = require('next-intl/plugin')();

// next.config.js
const nextConfig = {
  images: {
    domains: ['www.natasaticalawoffice.com'], // Add your image domains here
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable production optimizations
  swcMinify: true,
  productionBrowserSourceMaps: false,
  
  // Customize webpack configuration
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Enable optimization for client-side bundles
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };
    }
    return config;
  },
}


module.exports = withNextIntl({ ... nextConfig});