/* eslint-disable max-len */
import type { RollupOptions } from "rollup";

// A Rollup plugin to convert CommonJS modules to ES6
import commonjs from '@rollup/plugin-commonjs';
import typescript from "@rollup/plugin-typescript";
// The @rollup/plugin-node-resolve plugin teaches Rollup how to find external modules.
import resolve from "@rollup/plugin-node-resolve";
// To generate a minified bundle with terser
// import terser from "@rollup/plugin-terser";
import copy from 'rollup-plugin-copy'

const config: RollupOptions[] = [
  {
    input: 'src/content.ts',
    output: [
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        // Make sure to remove the sourceMap option from your tsconfig.json:
        // https://github.com/rollup/plugins/issues/216#issuecomment-1776899097
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ rootDir: 'src' }),
      copy({
        targets: [
          { src: 'src/hello.html', dest: 'dist' },
          { src: 'src/manifest.json', dest: 'dist' },
        ],
      })
    ],
  },
];

export default config;
