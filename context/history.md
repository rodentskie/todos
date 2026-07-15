
## History

<!-- Keep this updated. Earliest to latest -->

### Dashboard (view-only)

- Added the todos dashboard view: fetches todos from `GET https://htc.klaro.rodentskie.com/api/todos`, filters out soft-deleted items, and renders them in a responsive card grid (`TodoCard`, `TodoGrid`) matching the reference screenshot.
- Scoped to view-only — Create/Update/Delete (side drawer form, delete confirmation modal) deferred to a follow-up feature pending the API contract for those operations.

### Todos CRUD

- Added create, update, and delete to the dashboard: a side drawer (`TodoFormSheet`) for add/edit, and a modal (`DeleteTodoDialog`) requiring the user to type "delete" before the confirm button enables.
- Wired `POST`/`PATCH`/`DELETE` calls into `lib/todos.ts`; `TodoDashboard` (new client component) owns todo state and drives `TodoGrid`/`TodoCard`, replacing the previous server-only `page.tsx`.
- `TodoCard` now shows pencil/bin icons on hover and a clickable circle to toggle completion via `PATCH`.
- Installed shadcn `sheet`, `dialog`, `input`, `textarea`, `label` components.
- Verified end-to-end against the live API with Playwright (create, edit, toggle, delete).
