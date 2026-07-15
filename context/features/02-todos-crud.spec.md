# Dashboard

## Overview

SPA page for todos app

## Requirements

- Use `shadcn` components
- Currently just card and buttons are added, install more if needed
- Look into the images provided for UI reference

## Context
This will be an SPA. Can view all todos in a card like UI. Layout is 4 columns and rows depending on the number of data. Must be responsive to screen size. Add, Update and Delete as well. When doing CRUD (add and update) use a side drawer for the form, should not cover the whole page. Then on delete, a modal pop-up for confirmation then write "delete" to enable the button.

Pencil and Bin icon will show on card hover.

## Data fetching

Endpoints

```
GET https://htc.klaro.rodentskie.com/api/todos
POST https://htc.klaro.rodentskie.com/api/todos
PATCH https://htc.klaro.rodentskie.com/api/todos/:id
DELETE https://htc.klaro.rodentskie.com/api/todos/:id
```

## References

- @context/screenshots/todos.png
- @context/screenshots/todos-add.png