/** @format */

module.exports = function(api) {
  api.cache(true);

  const presets = [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: '> 0.25%, not dead',
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
  ];

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
  ];

  return {
    presets,
    plugins,
    exclude: ['src/**/*.spec.(js|ts)', 'src/**/*.test.(js|ts)'],
    comments: false,
  };
};
