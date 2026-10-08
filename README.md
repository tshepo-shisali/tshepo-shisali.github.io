# Tshepo Shisali – portfolio

Live at **https://tshepo-shisali.github.io/**

Plain HTML, CSS and a little JavaScript. No build step: GitHub Pages serves the files as they are.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page, plus the SEO tags and the structured data that tells Google who I am |
| `styles.css` | All the styling and animation |
| `main.js` | Fills the timeline line as you scroll, and sets the footer year |
| `img/` | Photo, app icons, Being You screenshot, the share card used on LinkedIn and WhatsApp |
| `favicon.svg` | Browser tab icon |
| `robots.txt`, `sitemap.xml` | Help Google find and index the site |
| `google39cb1c720b1f38cb.html` | Google Search Console verification file. Don't delete it. |

## Publishing (first time)

1. On GitHub, create a **public** repo named exactly `tshepo-shisali.github.io`.
2. Upload everything in this folder to the root of the repo (not inside a subfolder).
3. Go to the repo's **Settings → Pages**, set Source to *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. Wait a minute or two, then open https://tshepo-shisali.github.io/

## Things to update later

- **Whisperwave link**: in `index.html`, find `id="whisperwave-link"` and replace the Google Play search URL with the app's real Play Store link.
- **SafeMate store links**: once it's approved, add Play Store and App Store links next to "Visit safemate.co.za".
- **Custom domain**: when you get `tsheposhisali.co.za`, add it under Settings → Pages → Custom domain, then search and replace `https://tshepo-shisali.github.io/` with the new address in `index.html`, `robots.txt` and `sitemap.xml`.
