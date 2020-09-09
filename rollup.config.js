import cleanup  from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
    input: 'src/paysafe-paylater/index.js',
    output: {
        file: 'dist/paysafe-paylater-sdk.js',
        format: 'iife',
        name: 'SDK',
        sourcemap: true,
	exports: 'named'
    },
    plugins: [
        cleanup(),
        nodeResolve({
            browser: true,
            preferBuiltins: true
        }),
        json(),
        commonjs(),
        terser(),
    ]
};
