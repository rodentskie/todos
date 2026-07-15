# todos

A Next.js app for displaying and managing todos.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- UI components: shadcn/ui (not yet installed — add via `npx shadcn@latest init` before first use)

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint with ESLint

## Data model

A todo item:

```json
{
  "id": 1,
  "title": "Wash dishes and fork",
  "description": "just wash",
  "completed": false,
  "createdAt": "2026-07-15T04:31:24.437Z",
  "updatedAt": "2026-07-15T04:31:24.437Z",
  "deletedAt": null
}
```

- `deletedAt` indicates soft-delete support — deleted todos are expected to be filtered from views rather than removed from storage.

## Structure

- `src/app/` — App Router pages and layout (`@/*` resolves to `src/*`)
- Currently a fresh scaffold: no components, data layer, or API routes exist yet.
