# Rikku Muralidharan: Portfolio

A responsive portfolio for a front-end focused senior software engineer, with automatic dark mode.
Suggested repository name: `rikku-portfolio`.

## Tech stack
Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS 3. No API keys or environment variables.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. Use `npm run build` to check a production build.

## Customize
All text lives in `data/content.ts`: profile, highlights, projects, experience, skills, education.
Colors and fonts are in `tailwind.config.js`. Section components are in `components/`;
the section order is set in `app/page.tsx`.

## Deploy
Push to GitHub, import the repository in Vercel, and deploy with the default Next.js settings.
