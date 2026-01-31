/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    // Disable optimizeCss to avoid critters dependency issue
    optimizeCss: false,
  },
  // Fix multiple lockfiles warning
  turbopack: {
    root: process.cwd(),
  },
  // Suppress non-critical warnings in development
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Fix React DevTools semver warnings
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Resolve React version conflicts for DevTools
      config.resolve.alias = {
        ...config.resolve.alias,
        'react': require.resolve('react'),
        'react-dom': require.resolve('react-dom'),
      };
    }
    return config;
  },
};

export default nextConfig;
