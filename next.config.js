/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      esmExternals: true, // Ensures proper handling of ESM dependencies
    },
  };
  
  module.exports = nextConfig;
  