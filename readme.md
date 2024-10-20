# Landing Page

O projeto consiste em uma landing page responsiva, com o que há de mais moderno em termos de tecnologia.

Esse projeto é um template para construção de aplicações rederizadas usando (SSR) que executam componentes construídos em tempo de execução no navegador.

Essa estrutura pode ser utilizada para criar aplicações web usando SSR/SPA.


![projeto2](https://github.com/marcytech/page-expense-manage/assets/86862861/3d5a3823-ed9c-4920-a18b-36584faf903f)

## Tecnologias utilizadas

- Linguagens:
Typescript
HTML
CSS

- Bibliotecas:
IARES
Fam-code-ui
Chai
Mocha
Biome

- Padrões e práticas:
KISS
YAGNI
Components

- Run time, compiladores e servidores:
Esbuild
Bun
Elysia


## Aspecto geral do projeto


As imagens abaixo demonstra alguns aspectos sobre como o projeto está organizado, como são seus componentes e que tecnologias e métodos de desenvolvimentos de software foram utilizados para garantir o funcionamento correto dos recursos da aplicação.


![codigos](https://github.com/marcytech/page-expense-manage/assets/86862861/2575c942-9375-4f37-87e9-7401626fc310)

## Clonando o projeto

```
npx degit to-codando/iares-template-ssr new-app
```

## Executando projeto

Instale o bun para executar o projeto posteriormente.

```
curl -fsSL https://bun.sh/install | bash
```

Instale as dependencias do projeto com comando abaixo:

```
bun -i
```

Execução em modo de desenvolvimento:
```
 bun dev
```

Execução em modo de produção:
```
 bun start
```


## Acessando a aplicação no browser
Antes de acessar a aplicação através do browser, você precisa definir as variáveis de ambiente que definem através de qual protocolo, IP e porta a aplicação será servida no navegador.

As variáveis de ambiente padrão, estão definidas no arquivo .env na raíz do projeto e você deve ajustar seus valores conforme suas necessidades.

```
PROTOCOL=http
HOST=127.0.0.1
PORT=3000
ENVIRONMENT=development
```
## Certificado SSL/TLS

Você pode utilizar o certificado padrão presente no diretório SSH do projeto para servir a aplicação usando HTTPS em modo de desenvolvimento. No entanto, não se esqueça dos cuidados necessários com a segurança quando versionando a aplicação com git e ao fazer deploy.

Recomendo fortemente que para fins de segurança remova o diretório SSH e o arquivo .ENV do histórico de versionamento do git.



