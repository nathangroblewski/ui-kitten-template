module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./'],
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@hooks': './src/hooks',
            types: './types',
            assets: './src/assets'
          }
        }
      ]
    ]
  };
};
