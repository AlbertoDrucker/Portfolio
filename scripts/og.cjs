// Renders the share images. Run: OG=1 npx astro build --outDir .og-build && node scripts/og.cjs
// Writes public/og/<lang>/<slug>.jpg, then a normal build ships them as static files.
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

(async () => {

const root = path.resolve('.og-build');
const srcDir = path.join(root, 'og-src');
const outDir = path.resolve('public/og');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.woff': 'font/woff' };
const server = http.createServer((req, res) => {
  let p = path.join(root, decodeURIComponent(req.url.split('?')[0]));
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
  if (!fs.existsSync(p)) { res.statusCode = 404; return res.end(); }
  res.setHeader('content-type', types[path.extname(p)] || 'application/octet-stream');
  fs.createReadStream(p).pipe(res);
}).listen(4399);

const pages = [];
for (const lang of fs.readdirSync(srcDir)) for (const slug of fs.readdirSync(path.join(srcDir, lang))) pages.push([lang, slug]);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const [lang, slug] of pages) {
  await page.goto(`http://localhost:4399/og-src/${lang}/${slug}/`);
  await page.evaluate(() => document.fonts.ready);
  fs.mkdirSync(path.join(outDir, lang), { recursive: true });
  await page.screenshot({ path: path.join(outDir, lang, `${slug}.jpg`), type: 'jpeg', quality: 88 });
}
await browser.close();
server.close();
console.log(`${pages.length} share images written to public/og`);
})();
