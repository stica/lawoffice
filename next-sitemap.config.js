// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://www.natasaticalawoffice.com', // Your site’s base URL
    generateRobotsTxt: true, // (Optional) Generates a robots.txt file
    changefreq: 'weekly', // How often content is likely to change
    priority: 0.7, // Default priority for pages
    exclude: ['/admin/*'], // Pages to exclude from sitemap
    // You can define custom routes if needed
    transform: async (config, path) => {
      return {
        loc: path, // The URL of the page
        changefreq: 'weekly',
        priority: path === '/' ? 1.0 : 0.7, // Set homepage priority to 1.0
      };
    },
  };
  