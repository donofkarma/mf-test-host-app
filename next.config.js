const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const deps = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
          remote1: `remote1@${process.env.MODULE_PATH_REMOTE1}/${
            options.isServer ? 'server' : 'client'
          }/remoteEntry.js`,
        },
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
