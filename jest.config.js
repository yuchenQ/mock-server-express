/** @format */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-var-requires */

const { pathsToModuleNameMapper } = require('ts-jest/utils');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const {
  compilerOptions: { baseUrl, paths },
} = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper([baseUrl, paths] /*, { prefix: '<rootDir>/' } */),
};
