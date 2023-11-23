import { render, html } from 'iares';

export type Options = {
  title: string;
  stylePath?: string;
  lang?: string;
}

const renderStyle = (filePath: string) => {
  if(!filePath) return ''
  return /*html*/`<link rel="stylesheet" href="${filePath}">`
}

export default  (componentFactory: Function, options: Options) => {
  return /*html*/`
    <!DOCTYPE html>
    <html lang="${options?.lang||'pt-BR'}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${options.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,300,0,0" />
      <link rel="stylesheet" href="/assets/styles/main.css" />

      ${renderStyle(options?.stylePath || '')}
      <style>
        .z {
          opacity:0;
        }
      </style>
    </head>
    <body class="z">
      ${render(html`<${componentFactory} title="${options.title}"/>`)}

      <script type="module">
        import { appHost } from './main.js'
        const appElement = document.querySelector('body')
        
        appElement.innerHTML = ""
        appHost.mount()
        
        appElement.classList.remove('z')
      </script>
    </body>
    </html>
  `
}