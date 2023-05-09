import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from 'rollup-plugin-terser';
import dts from "rollup-plugin-dts";
import tailwind from "rollup-plugin-tailwindcss";
import postcss from "rollup-plugin-postcss";
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
      postcss({ extract: true, process: processScss}),
      tailwind({
        input: './styles/output.css', // required
        // Tailor the emitted stylesheet to the bundle by removing any unused CSS
        // (highly recommended when packaging for distribution).
        purge: false,
      }),
      terser()
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