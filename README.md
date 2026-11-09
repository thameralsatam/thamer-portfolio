# thamer-portfolio

My personal portfolio website, trilingual (Arabic, English, German — German is the default). Built with React 18 + TypeScript + Vite + Tailwind CSS v4, deployed on Cloudflare Pages.

## Structure

- `src/data/projects.ts` — single source of truth for project data (Arabic)
- `src/data/projectTexts.ts` — English/German translations of the project details
- `src/data/gallery.ts` — screenshot captions
- `src/i18n/translations.ts` — all UI strings
- `src/router/Router.tsx` — small custom hash/history router (no react-router)
- `public/projects/<id>/` — project screenshots

Any language missing a translation falls back to Arabic instead of breaking the page.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
