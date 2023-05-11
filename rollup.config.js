import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from 'rollup-plugin-terser';
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import copy from 'rollup-plugin-copy'
import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "lib-tw"
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      copy({
        targets: [
          { src: 'README.md', dest: 'dist/' },
        ]
      }),
      terser()
    ],
  },
  {
    input: 'src/bundle.css',
    output: [
      { file: "dist/main.css" }
    ],
    plugins: [
        postcss({
          minimize: true,
          inject: false,
          extract: true
        }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [
      { file: "dist/index.d.ts", format: "esm" }
    ],
    plugins: [dts.default()],
  },
];