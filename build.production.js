import path, { dirname } from "path";
import { fileURLToPath } from "url";

import * as esbuild from "esbuild";

import copy from "esbuild-copy-files-plugin";
import aliasPlugin from "esbuild-plugin-path-alias";
import { buildEnvironment } from "./build.environment.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isDevMode = process.env.NODE_ENV === "development";

const runBuild = async () => {
  const plugins = [
    buildEnvironment({ environment: "production" }),
    aliasPlugin({
      "@/store": path.resolve(__dirname, "./src/store/index"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/services": path.resolve(__dirname, "./src/services"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
    }),
    copy({
      source: ["./src/index.html"],
      target: "./dist",
      copyWithFolder: false,
    }),
    copy({
      source: ["./src/assets"],
      target: "./dist",
      copyWithFolder: true,
    }),
  ];

  esbuild.build({
    plugins,
    supported: {
      "dynamic-import": true,
    },
    platform: "browser",
    format: "esm",
    bundle: true,
    write: true,
    entryPoints: ["src/main.ts", "src/assets/styles/main.css"],
    tsconfig: "./tsconfig.json",
    outdir: "./dist",
    keepNames: true,
    treeShaking: !isDevMode,
    sourcemap: isDevMode,
    minify: !isDevMode,
    target: isDevMode ? ["esnext"] : ["es2018"],
    loader: {
      ".png": "dataurl",
      ".jpg": "file",
      ".jpeg": "file",
      ".svg": "text",
    },
  });
};

runBuild();
