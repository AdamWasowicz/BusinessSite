const path = require('path');

const environment = process.env.NODE_ENV;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    // GitHub pages
    basePath: "/business-site",

    reactStrictMode: true,

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },

    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
    
          {
            protocol: "http",
            hostname: "**",
          },
        ],

        unoptimized: true,
    },
}

module.exports = nextConfig
