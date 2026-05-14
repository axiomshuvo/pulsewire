# PulseWire

PulseWire is a responsive frontend prototype built with Next.js 16, React 19, and HeroUI. The current implementation focuses on a polished, card-driven landing experience with promotional blocks, community cards, event previews, and product-style callouts. ✨

This repository is in an early UI stage, so the README now reflects the code that actually exists today instead of an older news portal brief.

## Tech Stack

- Next.js 16
- React 19
- HeroUI
- Tailwind CSS 4
- ESLint 9

## Current Features

- Responsive card-based homepage layout
- HeroUI components for buttons, cards, avatars, links, and close actions
- Clean App Router setup under `src/app`
- Reusable homepage entry through `src/app/home/page.jsx`

## Project Structure

```text
src/
	app/
		globals.css
		layout.js
		page.js
		home/
			page.jsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

Lint the project:

```bash
npm run lint
```

## Notes

- The root route renders the homepage from `src/app/home/page.jsx`.
- Metadata in `src/app/layout.js` still uses the default starter copy and can be customized next.
- Several images currently come from external demo assets used by HeroUI examples.

## Credit

Created by [Pradipta Sarker](https://github.com/axiomshuvo).
