module.exports = {
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  //定义文件继承的子规范
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint'],//定义了该eslint文件所依赖的插件
  //指定代码的运行环境
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
  }
};