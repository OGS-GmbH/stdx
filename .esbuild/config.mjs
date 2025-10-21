import fastGlob from "fast-glob";
import { esbuildPluginFilePathExtensions } from "esbuild-plugin-file-path-extensions";
import { packageJsonPlugin } from "esbuild-plugin-package-json";
import { fileCopyPlugin } from "esbuild-plugin-file-copy";
import dts from "esbuild-plugin-d.ts";

const getConfig = (pathToDist) => ({
  bundle: true,
  platform: "node",
  target: "node23",
  format: "esm",
  packages: "external",
  logLevel: "debug",
  outExtension: {
    ".js": ".mjs"
  },
  entryPoints: fastGlob.sync("./src/**/*.ts"),
  outdir: pathToDist,
  plugins: [
    esbuildPluginFilePathExtensions({ esm: true }),
    packageJsonPlugin(),
    fileCopyPlugin({
      inputs: [
        {
          from: "README.md",
          to: `${ pathToDist }/README.md`
        },
        {
          from: "CHANGELOG.md",
          to: `${ pathToDist }/CHANGELOG.md`
        }
      ],
      globs: [
        {
          from: "public/**",
          to: pathToDist
        }
      ]
    }),
    dts({
      tsconfig: "tsconfig.build.json"

    })
  ]
});

export { getConfig };
