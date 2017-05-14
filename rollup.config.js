import replace from "rollup-plugin-replace";
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
    moduleName: "Chalk Words",
    entry: "via/main.js",
    dest: "www/app.js",
    format: "iife",
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        nodeResolve({
            jsnext: true,
            browser: true
        }),
        commonjs(),
        buble({
            // uncomment this to use `import createElement from 'inferno-create-element';` with jsx
            // jsx: 'createElement',
            objectAssign: 'Object.assign'
        })
        // uncomment to uglify
        // uglify()
    ]
}
