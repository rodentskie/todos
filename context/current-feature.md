# Current Feature: Dashboard

## Status

In Progress

## Goals

- Build the view-only part of the todos dashboard using shadcn components (card and buttons already installed; install more as needed)
- Display all active (non-deleted) todos in a card-based grid layout: 4 columns, rows depending on data count, responsive to screen size
- Fetch todo data from `GET https://htc.klaro.rodentskie.com/api/todos`
- Filter out todos with `deletedAt` set

## Notes

- Scoped down to view-only for this pass — Create/Update/Delete (side drawer form, delete confirmation modal) are deferred to a follow-up feature once the API contract for those operations is confirmed
- Reference UI screenshot: @context/screenshots/todos.png (list view)
- This is a frontend-only app — no local API routes/DB; all data comes from the external API above
