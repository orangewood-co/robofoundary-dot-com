# Vega — Website

Vega is a small Next.js site that showcases the Vega Education brand, community, and offerings. It uses the App Router, Tailwind for styling, Framer Motion for micro-interactions, and a small client-side contact modal powered by Formspree.

This repository contains the production website and a set of reusable UI components: hero, navbar, community section, offerings, footer and a contact modal.

## Quick start

Install dependencies and run the dev server:

```powershell
pnpm install
pnpm dev
```

Open http://localhost:3000 in your browser.

Note: the project uses pnpm in the lockfile, but npm or yarn will also work if you prefer.

## What you'll find here

- `src/app` — top-level routes and layout
- `src/app/components` — UI components (Hero, Community, ContactModal, Footer, etc.)
- `src/app/hooks` — small client hooks (contact modal state)
- `public/` — images and static assets

Key libraries:

- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- lucide-react (icons)

## Development notes

- The contact UI is implemented as a client component (`ContactModal`) and is opened with a hook from `src/app/hooks/use-contact-modal.tsx`.
- Navigation links in the header mix internal anchors (smooth scroll) and external links (open in new tab).
- If you add a new page that should be scrolled to, give it an element id (for example `id="contact"`) or open the modal via the hook.

## Building and deployment

Build for production:

```powershell
pnpm build
pnpm start
```

Deploy the site to Vercel (recommended) or any Node-friendly host. The app is standard Next.js and requires Node 18+.

## Contributing

Small, focused PRs are welcome. Follow these rules:

1. Keep changes scoped to one feature or fix.
2. Add or update tests if you change critical logic.
3. Run the dev server locally and verify UI interactions (contact modal, smooth scroll) before opening a PR.

## Troubleshooting

- If a header link doesn't scroll, check whether the target element exists and has the correct id.
- If the contact modal doesn't open, confirm the `use-contact-modal` hook is used and the modal component is rendered in the page tree.

## License

This project does not include a license file. Add one (for example an MIT license) if you plan to make the code public.

---

If you'd like, I can add a short developer checklist or a small troubleshooting script to automate common checks (lint, build). Tell me which you'd prefer.
