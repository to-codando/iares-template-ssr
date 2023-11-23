import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";

import { context } from "esbuild";
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
        "@/store": path.resolve(__dirname, "./src/store/index"),
        "@/components": path.resolve(__dirname, "./src/components/"),
        "@/services": path.resolve(__dirname, "./src/services"),
        "@/utils": path.resolve(__dirname, "./src/utils"),
        "@/assets": path.resolve(__dirname, "./src/assets"),
        "@/mock": path.resolve(__dirname, "./src/mock/"),
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
    supported: {
      "dynamic-import": true,
    },
    platform: "browser",
    format: "esm",
    bundle: true,
    write: true,
    entryPoints: ["src/main.ts", "src/assets/styles/main.css", ...testFiles, ...components, ...mock],
    tsconfig: "./tsconfig.spec.json",
    outdir: "./dist",
    external: ["http", "canvas", "global-jsdom", "global-jsdom/register"],
    treeShaking: true,
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
    const ctx = await context(configBuild);

    const { port } = await ctx.serve({
      port: 8080,
      servedir: "./dist",
    });

    ctx.watch();
    console.log(`server running in localhost:${port}`);
  } catch (errors) {
    console.log(errors);
    process.exit(0);
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
