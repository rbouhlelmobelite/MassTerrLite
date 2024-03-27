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
    uniqueName: "authMicrofrontend",
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
        remotes: {
          // 'shared-library': 'http://localhost:4200/remoteEntry.js',
        },
        // For remotes (please adjust)
        // name: "authMicrofrontend",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/auth-microfrontend/src/app/app.component.ts',
        // },

        // For hosts (please adjust)
        // remotes: {
        //     "hostApp": "http://localhost:9000/remoteEntry.js",
        //     "projectsMicrofrontend": "http://localhost:4200/remoteEntry.js",
        //     "adminMicrofrontend": "http://localhost:4200/remoteEntry.js",

        // },

        shared: share({
          ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
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
