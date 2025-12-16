import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/checkout-widget.tsx",
    output: {
        file: "public/checkout-widget.bundle.js",
        format: "iife",
        name: "CryptoCheckout",
    },
    plugins: [
        resolve({ browser: true, extensions: [".js", ".ts", ".tsx"] }),
        commonjs(),
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
            extensions: [".js", ".ts", ".tsx"], // <- make sure this includes .tsx
        }),
        terser(),
    ],
};