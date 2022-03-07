const { build } = require("esbuild");
const { Generator } = require('npm-dts')

const sharedConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true
};

build({
  ...sharedConfig,
  outfile: "dist/index.js",
});

build({
  ...sharedConfig,
  outfile: "dist/index.esm.js",
  format: "esm",
});

new Generator({
  entry: 'src/index.ts',
  output: 'dist/index.d.ts',
}).generate()