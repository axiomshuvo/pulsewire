# PulseWire

PulseWire is a polished editorial-style news website built with Next.js 16, React 19, HeroUI 3, and Tailwind CSS 4. It combines dynamic category pages, article detail pages, authentication screens, metadata-aware routing, and themed loading states inside a cleaner newsroom-inspired UI. 📰

## Live Demo

- Live site: [https://pulsewire-sooty.vercel.app/](https://pulsewire-sooty.vercel.app/)

## What’s Inside

- Dynamic category browsing with the root route redirecting to `/category/01`
- News detail pages with route-level metadata generation
- Custom loading states for category and article routes
- Dedicated About and Career pages
- Login and Register pages with HeroUI-based auth layouts
- Shared editorial shell with polished header, navbar, breaking news strip, and footer
- Custom 404 page styled to match the main site theme

## Tech Stack

- Next.js 16.2.6
- React 19.2.4
- HeroUI 3
- Tailwind CSS 4
- React Icons
- date-fns

## Routes

- `/` → redirects to `/category/01`
- `/category/[id]` → category-specific news feed
- `/news/[slug]` → full news detail page
- `/about` → editorial story and team page
- `/career` → careers and hiring page
- `/login` → login screen
- `/register` → registration screen

## Project Structure

```text
src/
	app/
		globals.css
		layout.js
		not-found.js
		(auth)/
			layout.jsx
			login/
				page.jsx
			register/
				page.jsx
		(main)/
			layout.jsx
			page.js
			about/
				page.jsx
			career/
				page.jsx
			category/
				[id]/
					loading.jsx
					page.jsx
			news/
				[slug]/
					loading.jsx
					page.jsx
	components/
		homepage/news/
		shared/
	lib/
		dataFetch.js
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

- The app uses the Next.js App Router.
- Static pages use page-level metadata, while dynamic routes use `generateMetadata` where needed.
- HeroUI v3 is used throughout the project, so components should follow the current v3 API.
- The current visual direction uses a warmer editorial palette rather than generic blue dashboard styling. ✨

## Credit

Created by [Pradipta Sarker](https://github.com/axiomshuvo) !!!
