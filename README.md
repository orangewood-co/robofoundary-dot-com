# RoboFoundary — Website

Marketing site for [RoboFoundary](https://robofoundary.in) — robotics, AI, and autonomous systems training with real hardware and industry mentors. Powered by Orangewood Labs (YC W18).

Built with Next.js (App Router), Tailwind CSS, Framer Motion, and a Formspree-powered contact modal.

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
- `src/app/components` — UI components (Hero, Community, Offerings, Footer, etc.)
- `src/app/hooks` — client hooks (contact modal state)
- `public/` — images and static assets

### Routes

- `/` — home page
- `/our-educators` — educator profiles
- `/kits` — robotics kits
- `/blog` — blog listing and posts
- `/privacy-policy` — privacy policy
- `/terms` — terms of use

### Key libraries

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
