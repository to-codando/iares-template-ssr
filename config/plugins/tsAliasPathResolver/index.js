// ./config/plugins/tsAliasPathResolver/index.js

import * as esbuild from "esbuild";
import path from "node:path";
import fs from "node:fs";
import { parse } from "jsonc-parser"; // Para ler o tsconfig.json com comentários

// Função auxiliar para localizar o diretório do projeto
function findProjectRoot() {
  let currentDir = path.resolve(".");
  while (true) {
    if (fs.existsSync(path.join(currentDir, "package.json"))) {
      return currentDir;
    }
    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) {
      throw new Error("package.json not found");
    }
    currentDir = parentDir;
  }
}

// Função auxiliar para carregar aliases do tsconfig.json
function loadTsconfigAliases(tsconfigPath) {
  const tsconfig = fs.readFileSync(tsconfigPath, "utf8");
  const parsedConfig = parse(tsconfig);
  const paths = parsedConfig.compilerOptions?.paths || {};

  // Mapeia os aliases para a estrutura esperada pelo esbuild
  const aliases = Object.keys(paths).reduce((acc, alias) => {
    const targetPath = paths[alias][0].replace("/*", "");
    const aliasKey = alias.replace("/*", "");
    acc[aliasKey] = path.resolve(
      parsedConfig.compilerOptions.baseUrl,
      targetPath,
    );
    return acc;
  }, {});

  return aliases;
}

// Função para verificar se um caminho aponta para um arquivo ou diretório
async function isDirectory(p) {
  try {
    const stats = await fs.promises.stat(p);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

// Função para resolver arquivos dentro de diretórios, buscando .ts
async function resolveFileInDirectory(dir) {
  const extensions = [".ts", ".tsx", ".js", ".jsx"];
  const files = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.isFile() && extensions.some((ext) => file.name.endsWith(ext))) {
      return path.join(dir, file.name);
    }
    if (file.isDirectory()) {
      const nestedFile = await resolveFileInDirectory(
        path.join(dir, file.name),
      );
      if (nestedFile) return nestedFile;
    }
  }
  return null;
}

// Plugin customizado para processar aliases, gerar declarações e source maps
export const tsAliasPathResolver = {
  name: "ts-alias-path-resolver",
  setup(build) {
    // Encontra o diretório raiz do projeto
    const projectRoot = findProjectRoot();
    // Caminho absoluto para o tsconfig.json
    const tsconfigPath = path.join(projectRoot, "tsconfig.json");
    const aliases = loadTsconfigAliases(tsconfigPath);

    // Intercepta caminhos de importação que correspondem aos aliases
    build.onResolve(
      { filter: new RegExp(`^(${Object.keys(aliases).join("|")})(/.*)?$`) },
      async (args) => {
        const aliasKey = Object.keys(aliases).find((key) =>
          args.path.startsWith(key),
        );
        if (aliasKey) {
          const relativePath = args.path.slice(aliasKey.length);
          let resolvedPath = path.join(aliases[aliasKey], relativePath);

          // Se o caminho resolvido for um diretório, tenta encontrar o primeiro arquivo com as extensões permitidas
          if (await isDirectory(resolvedPath)) {
            const filePath = await resolveFileInDirectory(resolvedPath);
            if (filePath) {
              resolvedPath = filePath;
            }
          }

          return { path: resolvedPath };
        }
      },
    );

    // Carrega e compila arquivos TypeScript e JavaScript para gerar declarações .d.ts e source maps
    build.onLoad({ filter: /\.(ts|tsx|js|jsx)$/ }, async (args) => {
      const sourceCode = await fs.promises.readFile(args.path, "utf8");

      // Compila o código, incluindo os source maps e declarações .d.ts
      const tsOutput = await esbuild.transform(sourceCode, {
        loader: "tsx", // Suporte para tsx
        tsconfigRaw: {
          compilerOptions: {
            declaration: true, // Gera os arquivos .d.ts
            emitDeclarationOnly: false, // Compila o código além das declarações
            sourceMap: true, // Gera os mapas de origem
          },
        },
      });

      // Ajusta o loader dependendo da extensão do arquivo
      const loader =
        args.path.endsWith(".tsx") || args.path.endsWith(".jsx") ? "tsx" : "ts";

      // Salva a declaração gerada e o mapa de origem
      const distPath = path.join("dist", args.path);
      const dtsPath = distPath.replace(/(\.tsx|\.ts|\.jsx|\.js)$/, ".d.ts");
      const mapPath = distPath.replace(/(\.tsx|\.ts|\.jsx|\.js)$/, ".map");

      await fs.promises.mkdir(path.dirname(dtsPath), { recursive: true });
      await fs.promises.writeFile(dtsPath, tsOutput.code); // Gera .d.ts
      await fs.promises.writeFile(mapPath, tsOutput.map); // Gera .map

      return {
        contents: tsOutput.code,
        loader,
      };
    });
  },
};
