# Your Design Portfolio

A fast, minimal portfolio built with Next.js, TypeScript, and Tailwind CSS. Free to run and deploy.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add or edit artwork (the part you'll do most)

1. Put your images in a new folder: `public/work/your-project-slug/`
2. Open `content/site.ts`
3. Copy one of the objects in the `projects` array, paste it, edit the values
4. Save — that's it. No other file needs to change.

Everything else on the site (your name, bio, socials, skills, services) also lives in `content/site.ts`.

## Set up the contact form (optional but recommended)

1. Create a free account at https://resend.com
2. Get an API key
3. Copy `.env.example` to `.env.local` and fill in:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (your inbox)
4. The form works without this too — submissions just get logged to the server console instead of emailed, so you can launch first and wire this up later.

## Deploy to Vercel (free)

1. Push this project to a new GitHub repository
2. Go to https://vercel.com → **Add New Project** → import the repo
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. If using the contact form, add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` under Project Settings → Environment Variables, then redeploy
5. You'll get a live URL like `your-project.vercel.app` immediately
6. Every `git push` after this auto-redeploys

## Replace before launch

- [ ] `content/site.ts` — your name, bio, socials, email, skills, services
- [ ] Real project images in `public/work/...` (replace the placeholder ones)
- [ ] `public/resume.pdf` — your actual CV (referenced by the "Download CV" button)
- [ ] `app/favicon.ico` — your own favicon
- [ ] `NEXT_PUBLIC_SITE_URL` in your Vercel environment variables, once you know your final URL (used for the sitemap)

## Project structure

```
app/                 pages (App Router)
  page.tsx           home
  about/page.tsx     about
  work/page.tsx      work grid
  work/[slug]/       project detail (dynamic)
  api/contact/       contact form backend
components/          reusable UI pieces
content/site.ts      <- all editable content lives here
public/work/         your artwork images
```
