import "dotenv/config";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { context, build } from "esbuild";

import copy from "esbuild-copy-static-files";
import { tsAliasPathResolver } from "./config/plugins/tsAliasPathResolver/index.js";

import resolveEnvironment from "./config/plugins/env.js";
import { onRebuild } from "./config/plugins/onRebuild/index.js";
import { getFiles } from "./config/utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProductionMode = process.env.NODE_ENV === "production";
const PROTOCOL = process.env.PROTOCOL;
const PORT = (process?.env?.PORT && +process.env.PORT) || 3000;
const HOST = isProductionMode ? process.env.PROD_HOST : process.env.DEV_HOST;
const SOURCES = await getFiles(["./src/**/*.{js,jsx,ts,tsx,mdx}"]);

const TLS_KEY = process.env.TLS_KEY;
const TLS_CERT = process.env.TLS_CERT;
const SSHPATH = join(__dirname, "./ssh");
const KEYPEM = join(`${SSHPATH}/${TLS_KEY}`);
const CERTPEM = join(`${SSHPATH}/${TLS_CERT}`);

const config = {
  bundle: true,
  write: true,
  keepNames: true,
  define: {
    "process.env.ENVIRONMENT": JSON.stringify(process.env.NODE_ENV),
    "process.env.PORT": JSON.stringify(PORT),
    "process.env.HOST": JSON.stringify(HOST),
    "process.env.PROTOCOL": JSON.stringify(PROTOCOL),
  },
  entryPoints: [...SOURCES],
  outdir: "./dist/src",
  tsconfig: "./tsconfig.json",
  supported: { "dynamic-import": true },
  platform: "browser",
  format: "esm",
  external: ["http", "canvas", "global-jsdom", "global-jsdom/register"],
  treeShaking: isProductionMode,
  sourcemap: isProductionMode ? true : "both",
  minify: isProductionMode,
  target: isProductionMode ? ["ES2022"] : ["ESNEXT"],
  plugins: [
    resolveEnvironment({
      environment: process.env.NODE_ENV,
    }),
    copy({
      src: resolve(__dirname, "./public"),
      dest: resolve(__dirname, "./dist"),
      recursive: true,
    }),
    copy({
      src: resolve(__dirname, "./node_modules/fam-code-ui/dist/static/assets"),
      dest: resolve(__dirname, "./dist/assets/libs/fam-code-ui"),
      recursive: true,
    }),
    tsAliasPathResolver,
    onRebuild(),
  ],
  loader: {
    ".js": "js",
    ".jsx": "jsx",
    ".ts": "ts",
    ".tsx": "tsx",
    ".png": "dataurl",
    ".jpg": "file",
    ".jpeg": "file",
    ".svg": "text",
  },
};

try {
  if (isProductionMode) {
    await build(config);
    process.exit(0);
  }

  const ctx = await context(config);
  const { host, port } = await ctx.serve({
    port: PORT,
    host: HOST,
    servedir: "./dist",
    keyfile: KEYPEM,
    certfile: CERTPEM,
  });

  await ctx.watch();
} catch (error) {
  console.log(error);
  process.exit(1);
}
