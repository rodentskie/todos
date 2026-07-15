## Project Overview

**Todos** is a simple web app for creating, tracking, and managing a personal todo list — built with Next.js and shadcn/ui.

---

## Problem

Most todo apps are either too bare (a text list with no structure) or too heavy (accounts, workspaces, sync across devices). This app aims for the middle: a clean, fast, single-user todo list with just enough structure — title, description, completion state, and timestamps — without the overhead of a full task-management platform.

---

## Scope

This is a **frontend-only web app**. There is no backend/API in this repo:

- No API routes (`src/app/api/**`)
- No database or ORM in this project
- All todo data comes from an **external API** (owned/hosted elsewhere) — this app only calls it
- Server Actions that talk to a local database are **not applicable** here

---

## Users

| Persona | Needs |
|---------|-------|
| Single user | Add, view, complete, edit, and delete todos through a simple UI |

---

## Core Features

### A) Todo list

- Display all active (non-deleted) todos
- Show title, description, and completion state
- Toggle a todo between complete / incomplete

### B) Todo management

- Create a new todo (title + optional description)
- Edit an existing todo's title/description
- Delete a todo (soft delete via `deletedAt`, not a hard row removal)

### C) UI

- Built with [shadcn/ui](https://ui.shadcn.com) components on top of Tailwind CSS v4
- Responsive, accessible-by-default components (dialogs, checkboxes, forms, etc.)

---

## Tech Stack

| Category | Choice |
|----------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI | React 19 + shadcn/ui |
| Styling | Tailwind CSS v4 (CSS-based `@theme` config, no `tailwind.config.*`) |
| Linting | ESLint |

---

## Data Model

### Todo

| Field | Type | Notes |
|-------|------|-------|
| `id` | number | Unique identifier |
| `title` | string | Required |
| `description` | string | Optional |
| `completed` | boolean | Completion state |
| `createdAt` | ISO datetime string | Set on creation |
| `updatedAt` | ISO datetime string | Set on every update |
| `deletedAt` | ISO datetime string \| `null` | Soft-delete marker; `null` when active |

Example:

```json
[
  {
    "id": 1,
    "title": "Wash dishes and fork",
    "description": "just wash",
    "completed": false,
    "createdAt": "2026-07-15T04:31:24.437Z",
    "updatedAt": "2026-07-15T04:31:24.437Z",
    "deletedAt": null
  }
]
```

Deleted todos (`deletedAt` set) are filtered out of normal list views rather than removed from storage.

---

## MVP

### Completed

- Next.js project scaffolded (App Router, TypeScript, Tailwind v4)

### In progress / Not started

- shadcn/ui setup
- Client for the external todos API (base URL/auth TBD)
- Todo list UI (view, create, complete, edit, delete)
- Soft-delete handling (as reflected by the external API's `deletedAt`)

---

## Status

- 🚧 Early scaffold — no todo functionality implemented yet
