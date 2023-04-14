const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const deps = require("./package.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "next1",
        filename: "remoteEntry.js",
        remotes: {
          remote1: `remote1@http://localhost:3001/${
            options.isServer ? "server" : "client"
          }/remoteEntry.js`,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
