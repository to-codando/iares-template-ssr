import { AppHome } from "./src/components/pages";
import { html as HTMLElysia } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Elysia } from "elysia";
import globalJsdom from "global-jsdom";
import { MainPageLayout } from "./src/layouts";

let cleanDom: ReturnType<typeof globalJsdom> = () => {};
const app = new Elysia();

// Serve arquivos estáticos do diretório dist/assets
app.use(staticPlugin({ assets: "dist/assets", prefix: "/assets" }));
app.use(HTMLElysia());

// Rota para a página inicial
app.get("/", () => {
  cleanDom = globalJsdom();
  const HomePage = MainPageLayout(AppHome, { title: "Outro" });
  cleanDom();
  return HomePage;
});

// Rota para o arquivo main.js
app.get("/main.js", () => {
  const file = Bun.file("dist/src/main.js");
  return new Response(file, {
    headers: {
      "Content-Type": "application/javascript", // Define o tipo MIME correto
    },
  });
});

// Rota para o arquivo main.css
app.get("/main.css", () => {
  return Bun.file("dist/assets/styles/main.css");
});

// Inicia o servidor na porta 3000
app.listen({
  port: process.env.PORT,
  hostname: process.env.HOST,
});
