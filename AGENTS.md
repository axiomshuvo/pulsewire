<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# PulseWire Repo Notes

## Stack

- Next.js `16.2.6` App Router
- React `19`
- Tailwind CSS `4`
- HeroUI `3`
- `react-icons` for iconography

## Core Conventions

- Prefer page-level `metadata` exports for static routes.
- Use `generateMetadata` only for dynamic routes where the title or description depends on params or fetched data.
- Keep metadata in `page.js` or `layout.js` server files. Do not manually add `<head>` tags.
- Use route-level `loading.js` or `loading.jsx` files for dynamic segments that fetch data.
- Root route `/` currently redirects to `/category/01`, so avoid spending time styling or adding metadata to that redirect page unless the routing behavior changes.

## HeroUI Rules

- Use HeroUI v3 root exports from `@heroui/react`.
- Use `CardContent`, not `CardBody`.
- Use `Separator`, not `Divider`.
- When updating cards, forms, loading states, or utility screens, keep HeroUI primitives and Tailwind utility classes aligned with the current design language.

## UI And Theme

- The site now uses a warm editorial palette instead of the earlier blue/sky-heavy palette.
- Prefer these tones when extending the UI:
  - background: `#f6f0e9`, `#fbf7f3`, `#fffdfb`
  - foreground: `#241d1a`
  - muted text: `#6c5f58`, `#8b7a72`
  - accent: `#ff6b57`
  - borders: `#eadfd4`, `#efe4da`
- Avoid reintroducing unrelated `bg-sky-*`, `text-blue-*`, or generic dark slabs unless they are part of the same warm theme treatment.
- Shared shell components should stay visually consistent with each other:
  - `src/components/shared/Header.jsx`
  - `src/components/shared/Navbar.jsx`
  - `src/components/shared/BreakingNews.jsx`
  - `src/components/shared/Footer.jsx`
- Utility routes and loading states should match the same visual system as the main pages. Do not leave them on an older gray/zinc placeholder style if the surrounding pages have been refreshed.

## Tailwind Guidance

- Prefer standard Tailwind utilities over arbitrary values when an equivalent exists.
- If Tailwind or the editor suggests a standard utility replacement, use it.
- Keep the rounded, soft-card layout style already established across shared shell, category, news, auth, and utility pages.

## Validation

- For focused edits, run `npx eslint` on the touched files.
- For shared-shell, route, metadata, or loading-state changes, also run `env -u NODE_OPTIONS npm run build`.
- Treat stale editor diagnostics carefully and confirm with the actual file contents or a build before making follow-up fixes.
