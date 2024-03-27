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
    uniqueName: "hostApp",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "hostApp",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/host-app/src/app/app.component.ts',
        // },
        // name: 'shared_lib',
        // library: { type: 'var', name: 'shared_lib' },
        // filename: 'remoteEntry.js',
        // exposes: {
        //   './SharedModule': './path/to/shared-lib/public-api.ts', // adjust the path
        // },

        // For hosts (please adjust)
        remotes: {
            // "projectsMicrofrontend": "http://localhost:4200/remoteEntry.js",
            "authMicrofrontend": "authMicrofrontend@http://localhost:4201/remoteEntry.js",
            // "adminMicrofrontend": "http://localhost:4200/remoteEntry.js",

        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
