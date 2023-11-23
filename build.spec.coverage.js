import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";

import * as esbuild from "esbuild";
import copy from "esbuild-copy-files-plugin";
import aliasPlugin from "esbuild-plugin-path-alias";
import { buildEnvironment } from "./build.environment.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;
const isDevMode = process.env.NODE_ENV === "development";

const getGlobFiles = async (directory, ignore = null) => {
  const files = await glob(directory, { ignore: ignore });
  return files;
};

const runBuild = async () => {
  const testFiles = await getGlobFiles("./src/tests/**/*.spec.ts", "*/**/*.spec.md");
  const components = await getGlobFiles("./src/components/**/*.ts");
  const mock = await getGlobFiles("./src/mock/**/*.ts");

  const configBuild = {
    plugins: [
      buildEnvironment({ environment: "development" }),
      aliasPlugin({
        "@/store": resolve(__dirname, "./src/store/index"),
        "@/components": resolve(__dirname, "./src/components/"),
        "@/services": resolve(__dirname, "./src/services"),
        "@/utils": resolve(__dirname, "./src/utils"),
        "@/assets": resolve(__dirname, "./src/assets"),
        "@/mock": resolve(__dirname, "./src/mock/"),
      }),
      copy({
        source: ["./src/index.html"],
        target: "./dist",
        copyWithFolder: false, // will copy "images" folder with all files inside
      }),
      copy({
        source: ["./src/assets"],
        target: "./dist",
        copyWithFolder: true, // will copy "images" folder with all files inside
      }),
    ],

    platform: "browser",
    format: "esm",
    bundle: true,
    write: true,
    entryPoints: ["src/main.ts", "src/assets/styles/main.css", ...testFiles, ...components, ...mock],
    tsconfig: "./tsconfig.spec.json",
    outdir: "./dist",
    external: ["http", "canvas", "global-jsdom", "global-jsdom/register"],
    treeShaking: false,
    sourcemap: true,
    minify: false,
    target: isDevMode ? ["esnext"] : ["es2018"],
    loader: {
      ".js": "ts",
      ".png": "dataurl",
      ".jpg": "file",
      ".jpeg": "file",
      ".svg": "text",
    },
  };

  try {
    await esbuild.build(configBuild);
    console.log("Finished build update.");
    process.exit(0);
  } catch (errors) {
    console.log(errors);
  }

  // let watcher = new Watcher(["./src/**/*.ts", "./tests"]);

  // watcher.on("change", async (data) => {
  // 	ctx.rebuild();
  // 	onSigintStop(ctx, watcher);
  // });

  // const onSigintStop = (ctx, watcher) => {
  // 	process.on("SIGINT", () => {
  // 		console.log("SIGINT received, shutting down...");
  // 		ctx.dispose();
  // 		watcher.close();
  // 		process.exit(0);
  // 	});
  // };
  // console.log("ok");
};

runBuild();
