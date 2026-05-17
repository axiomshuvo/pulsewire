@AGENTS.md

# Claude Repo Notes

Treat `AGENTS.md` as the source of truth for this repository.

## Highest Priority Rules

- This repo uses Next.js `16.2.6` App Router. Check `node_modules/next/dist/docs/` before changing framework behavior.
- This repo uses HeroUI `3`. Import `CardContent` and `Separator` from `@heroui/react`; do not use legacy `CardBody` or `Divider` names.
- Keep the UI on the current warm editorial palette. Avoid reintroducing default blue/sky accents or isolated gray/zinc sections that clash with the refreshed shell.
- Prefer static `metadata` exports for static pages and `generateMetadata` only for dynamic routes.
- Use route-level loading files for dynamic data-heavy pages and keep them visually consistent with the main UI.
- Validate touched files with `npx eslint`, and run `env -u NODE_OPTIONS npm run build` for shared or route-level changes.
