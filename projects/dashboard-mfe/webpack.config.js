const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "dashboardMfe",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      // For remotes (please adjust)
      name: "dashboardMfe",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardModule":
          "./projects/dashboard-mfe/src/app/features/dashboard.module.ts",
      },

      // For hosts (please adjust)
      // remotes: {
      //     "hostShell": "http://localhost:4200/remoteEntry.js",
      //     "productsMfe": "http://localhost:4201/remoteEntry.js",
      //     "usersMfe": "http://localhost:4202/remoteEntry.js",

      // },

      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/material": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/cdk": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/animations": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
