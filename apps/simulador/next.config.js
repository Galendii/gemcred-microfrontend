const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'simulador',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './': './src/pages/index.tsx',
          './simulador': './src/components/simulador.tsx',
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
