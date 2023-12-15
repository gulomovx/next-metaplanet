/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    // Other webpack configuration options...
  
    module: {
      rules: [
        // Other rules...
        {
          test: /\.node$/,
          use: 'node-loader',
        },
      ],
    },
  };
  