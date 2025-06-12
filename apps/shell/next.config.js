// apps/shell/next.config.js

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shell',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          simulador: 'simulador@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          assistente: 'assistente@http://localhost:3002/_next/static/chunks/remoteEntry.js',
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
}



module.exports = nextConfig;
