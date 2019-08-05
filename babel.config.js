/** @format */

module.exports = function(api) {
  api.cache(true);

  const presets = [
    '@babel/preset-typescript',
    ['@babel/preset-env', { targets: '> 0.25%, not dead' }],
  ];

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
  ];

  return {
    presets,
    plugins,
  };
};
