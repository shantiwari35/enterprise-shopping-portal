const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "../../tsconfig.json"), [
  "shared-ui",
  "shared-data",
]);

module.exports = {
  output: {
    uniqueName: "productsMfe",
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
      name: "productsMfe",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsModule":
          "./projects/products-mfe/src/app/features/products/products.module.ts",
      },

      // For hosts (please adjust)
      // remotes: {
      //     "hostShell": "http://localhost:4200/remoteEntry.js",

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
        "shared-data": {
          singleton: true,
        },
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
