import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace";

export default {
    input: "src/checkout-widget.tsx",

    output: {
        file: "public/checkout-widget.bundle.js",
        format: "iife",
        name: "CryptoCheckout",
    },

    plugins: [
        // 🔴 MUST COME FIRST
        replace({
            preventAssignment: true,
            values: {
                "process.env.NODE_ENV": JSON.stringify("production"),
            },
        }),

        // 🔴 Browser-first resolution
        resolve({
            browser: true,
            extensions: [".js", ".ts", ".tsx"],
        }),

        // 🔴 Convert CJS deps (React, AntD)
        commonjs(),

        // 🔴 Transpile TSX / JSX
        babel({
            babelHelpers: "bundled",
            presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
            ],
            extensions: [".js", ".ts", ".tsx"],
        }),

        // 🔴 Minify last
        terser(),
    ],
};