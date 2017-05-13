const replace = require("rollup-plugin-replace");

export default {
  entry: "via/main.js",
  dest: "www/app.js",
  format: "cjs",
  external: ["inferno"],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ]
}
