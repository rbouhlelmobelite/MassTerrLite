const { shareAll, withModuleFederatingPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederatingPlugin({
  name: 'shared-library',
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
