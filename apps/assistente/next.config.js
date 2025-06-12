const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'assistente',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './': './src/pages/index.tsx',
          './assistente': './src/components/assistente.tsx',
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: false },
          'react-dom': { singleton: true, eager: true, requiredVersion: false },
        },
      })
    );

    return config;
  },
  env: {
    NEXT_PRIVATE_LOCAL_WEBPACK: 'true',
  },
};

module.exports = nextConfig;
