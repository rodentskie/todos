
## History

<!-- Keep this updated. Earliest to latest -->

### Dashboard (view-only)

- Added the todos dashboard view: fetches todos from `GET https://htc.klaro.rodentskie.com/api/todos`, filters out soft-deleted items, and renders them in a responsive card grid (`TodoCard`, `TodoGrid`) matching the reference screenshot.
- Scoped to view-only — Create/Update/Delete (side drawer form, delete confirmation modal) deferred to a follow-up feature pending the API contract for those operations.
