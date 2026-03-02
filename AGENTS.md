# Agent Guidelines

## Commands
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Dev:** `npm run dev`
- **Tests:** No test runner configured. Add `vitest` if testing is needed.

## Code Style
- **Format:** 2-space indentation, semicolons required. Single quotes for JS strings, double quotes for JSX attributes.
- **Components:** Functional components with hooks. PascalCase naming (e.g., `Navbar.jsx`).
- **Imports:** ES6 modules. `import React` is used.
- **Structure:** `App.jsx` manages navigation state (`activeTab`). Components in `src/components/`.
- **CSS:** Imported directly (e.g., `import './App.css'`).
- **Naming:** camelCase for functions/variables, PascalCase for components.

## Workflow
- **Linting:** Ensure `npm run lint` passes before committing.
- **Images:** Run `npm run generate-images` when adding assets to `public/references`.
