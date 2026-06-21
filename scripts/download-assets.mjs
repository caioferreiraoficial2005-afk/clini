import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const assets = [
  // Hero section images
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69bd5fcf0e3a4e703af6db35_home_header-agents-img-phone.webp', dest: 'images/home_header-agents-img-phone.webp' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69bd6453f6d50bee9457ec16_home_header-agents-img-pic-01.webp', dest: 'images/home_header-agents-img-pic-01.webp' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69bd6453e2119c7f6592a2f9_home_header-agents-img-pic-03.webp', dest: 'images/home_header-agents-img-pic-03.webp' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69bd6453f4366b16e9c9a3e7_home_header-agents-img-pic-02.webp', dest: 'images/home_header-agents-img-pic-02.webp' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69bd700eb2290722ba5b3fb7_home_header-transactions-logo-01.webp', dest: 'images/home_header-transactions-logo-01.webp' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69bd700ef1624918620688b2_home_header-transactions-logo-02.webp', dest: 'images/home_header-transactions-logo-02.webp' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69bd92065d00f564a87bb355_home_header-graphic-img.webp', dest: 'images/home_header-graphic-img.webp' },
  // Feature images
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/6984b666098cfd0b02cc1f7d_afc0f10017795f6b880a7425b91e5bf5_img-01.webp', dest: 'images/feature-img-01.webp' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/6984a5175e77b11aca174023_3cf7b94432d696b7426e40626b375103_img-02.webp', dest: 'images/feature-img-02.webp' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/6984a59078c36eec8607e501_f515376af0e2fb52315c55b0d90ca2c9_img-03.webp', dest: 'images/feature-img-03.webp' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/6984a51749b36895f25b1c3a_244978c88917c8bab36645588ef85158_img-05.webp', dest: 'images/feature-img-05.webp' },
  // Feature icons (SVGs)
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69f8b0d5f364d33a0d5f44e4_337ca829047abff2220d1178cc5eba42_Chat%2C%20Messages%2C%20Bubble.svg', dest: 'images/icon-chat.svg' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69f8b0fa5f9ff9213e6dbb0e_d731fc8734b005802935584b7cac0d44_bank-certificate-checkmark.svg', dest: 'images/icon-bank-certificate.svg' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69f8b107e9b5dc183916eca2_1204828042c310ae9c2a96e55297706c_eye-lock.svg', dest: 'images/icon-eye-lock.svg' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69f8b0f1fb1f28a5a958d85d_327737a99e9d4307ef1fd93a560e31d3_Money.svg', dest: 'images/icon-money.svg' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69f8b383e553a6c4b8109408_cash-banknote-shield-protection.svg', dest: 'images/icon-shield.svg' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69f8b316ce9ca10f35e95663_8317fb98394e623458212cac28fff43b_Key%2C%20Password.svg', dest: 'images/icon-key.svg' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69f8b3835b6b7d2ebf393096_check-protection.svg', dest: 'images/icon-check-protection.svg' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69f8b3832e503d13fcca5588_bank-shield-protection-checkmark.svg', dest: 'images/icon-bank-shield.svg' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/697931da48a84e499cb97949_icon-check.svg', dest: 'images/icon-check.svg' },
  // Press logos
  { url: 'https://cdn.prod.website-files.com/69cc1f64be17e98fff21c567/69cc205b49c7b1ea0f746170_news_logo-01.webp', dest: 'images/news-logo-01.webp' },
  { url: 'https://cdn.prod.website-files.com/69cc1f64be17e98fff21c567/69cc20c5ed0c7a0aedcee3c0_news_logo-02.webp', dest: 'images/news-logo-02.webp' },
  { url: 'https://cdn.prod.website-files.com/69cc1f64be17e98fff21c567/69cc211f529173d04819e8bd_news_logo-03.webp', dest: 'images/news-logo-03.webp' },
  { url: 'https://cdn.prod.website-files.com/69cc1f64be17e98fff21c567/69cc215d3e1e010a5d16e229_news_logo-04.webp', dest: 'images/news-logo-04.webp' },
  { url: 'https://cdn.prod.website-files.com/69cc1f64be17e98fff21c567/69cc219fedffed8c172a61e7_news_logo-05.webp', dest: 'images/news-logo-05.webp' },
  { url: 'https://cdn.prod.website-files.com/69cc1f64be17e98fff21c567/69cc21dc2c2159d1f639c41e_news_logo-06.webp', dest: 'images/news-logo-06.webp' },
  { url: 'https://cdn.prod.website-files.com/69cc1f64be17e98fff21c567/69cc220031ace255a586ec63_news_logo-07.webp', dest: 'images/news-logo-07.webp' },
  // App store buttons
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/697d0f75912a2b289eeff991_download-button_apple.webp', dest: 'images/download-button-apple.webp' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/697d0f75a2e0b7679a054636_download-button_android.webp', dest: 'images/download-button-android.webp' },
  // SEO assets
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/6980bc9b4a3eb99dbb38dade_Favicon.png', dest: 'seo/favicon.png' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/6980bcec2a9437173724de91_Webclip.png', dest: 'seo/apple-touch-icon.png' },
  { url: 'https://cdn.prod.website-files.com/6973858a7fb6aea790f3acbb/69d81b190f14c05ff1338c46_f5d5c91913aeed8a50f5dcac04e9d812_OpenGraph_Pierre.jpg', dest: 'seo/og-image.jpg' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const destPath = path.join(publicDir, dest);
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    if (fs.existsSync(destPath)) { resolve(`SKIP ${dest}`); return; }
    const file = fs.createWriteStream(destPath);
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(destPath);
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(`OK  ${dest}`); });
    });
    req.on('error', (e) => { file.close(); try { fs.unlinkSync(destPath); } catch {} reject(e); });
    req.setTimeout(15000, () => { req.destroy(); reject(new Error(`Timeout: ${url}`)); });
  });
}

async function main() {
  const BATCH = 4;
  for (let i = 0; i < assets.length; i += BATCH) {
    const batch = assets.slice(i, i + BATCH);
    const results = await Promise.allSettled(batch.map(a => download(a.url, a.dest)));
    results.forEach(r => console.log(r.status === 'fulfilled' ? r.value : `ERR ${r.reason.message}`));
  }
  console.log('Done.');
}

main().catch(console.error);
