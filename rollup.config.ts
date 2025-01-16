/* eslint-disable max-len */
import type { RollupOptions } from "rollup";

import typescript from "@rollup/plugin-typescript";
// The @rollup/plugin-node-resolve plugin teaches Rollup how to find external modules.
// import resolve from "@rollup/plugin-node-resolve";
// To generate a minified bundle with terser
// import terser from "@rollup/plugin-terser";

const config: RollupOptions[] = [
  {
    input: "./src/fizzbuzz.ts",
    output: [
      {
        dir: "dist",
        format: "es",
        // Make sure to remove the sourceMap option from your tsconfig.json:
        // https://github.com/rollup/plugins/issues/216#issuecomment-1776899097
        sourcemap: true,
      },
    ],
    plugins: [typescript({ rootDir: "src" })],
  },
];

export default config;
