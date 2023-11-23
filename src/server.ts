import { AppHome } from '@/components/AppHome';
import globalJsdom from 'global-jsdom';
import { Elysia } from "elysia";
import { staticPlugin } from '@elysiajs/static'
import { html as HTMLElysia } from '@elysiajs/html'
import PageLayout from './Layouts/Page';

let cleanDom = null;
const app = new Elysia()

app.use(staticPlugin({ assets: 'dist/assets', prefix: '/assets' }))
app.use(HTMLElysia())

app.get('/', () => {
  cleanDom = globalJsdom();
  const HomePage = PageLayout(AppHome, { title: 'Outro' })
  cleanDom()
  return HomePage;
});

app.get('/main.js', () => {
  return Bun.file('dist/main.js');
});

app.get('/main.css', () => {
  return Bun.file('dist/assets/styles/main.css');
});

app.listen(4000);