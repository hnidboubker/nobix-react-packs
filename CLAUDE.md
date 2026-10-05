# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**nobix-react-packs** is a monorepo for creating independent, reusable React component packages. The first package is `@projet-example/sidebar` — a modular, customizable Sidebar component library compatible with React 18 & 19.

### Current Focus: Sidebar Package

- **Location:** `packages/@projet-example/sidebar` (to be created)
- **Scope:** Single-responsibility component package (one component = one package)
- **Architecture:** See `.nobix-packs/epic-nobix.md` for detailed architecture

---

## Architecture Overview

### Sidebar Package Structure

```
src/
├── components/       # React components (Sidebar, SidebarMenu, SidebarItem, SidebarIcon)
├── templates/        # 3 layout templates (Default, Compact, Floating)
├── types/            # TypeScript interfaces and types
├── enums/            # SidebarTemplate, SidebarPosition enums
├── structs/          # Default configurations and constants
├── utils/            # Utility functions (helpers, formatters, state logic)
└── index.ts          # Public API entry point
```

### Key Architectural Principles

1. **Template Separation:** Components handle behavior + state; templates handle layout + styling.
2. **Icon Library Agnostic:** Uses generic `ComponentType<{ className?: string }>` instead of hard-coding Lucide.
3. **Multi-Level Customization:**
   - Level 1: Template selection (Default/Compact/Floating)
   - Level 2: CSS classes (className prop)
   - Level 3: Slots (header, footer, item, menu rendering)
   - Level 4: Full item renderer override
4. **Peer Dependencies:** React 18 & 19 as peerDependencies, not bundled.

---

## Development Commands

### Setup & Installation

```bash
npm install
```

### Development

```bash
# Watch mode TypeScript compilation
npm run dev

# Start storybook or dev server
npm run dev:ui
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run a single test file
npm test -- src/components/Sidebar.test.tsx

# Coverage report
npm test -- --coverage
```

### Linting & Formatting

```bash
# Lint code (ESLint)
npm run lint

# Fix linting errors
npm run lint -- --fix

# Format code (Prettier)
npm run format
```

### Build

```bash
# Build for production (compile TypeScript to dist/)
npm run build

# Check build output
npm run build && ls dist/
```

### Publishing

```bash
# Prepare for npm publish
npm run build

# Dry run publish
npm publish --dry-run

# Publish to npm registry
npm publish --access public
```

---

## Development Phases

Development is organized into **10 Phases**, each tracked as a GitHub issue:

| Phase | Issue | Focus |
|-------|-------|-------|
| 1 | [#2](https://github.com/hnidboubker/nobix-react-packs/issues/2) | Package setup, tsconfig, folder structure |
| 2 | [#3](https://github.com/hnidboubker/nobix-react-packs/issues/3) | Core components (Sidebar, Menu, Item, Icon) |
| 3 | [#4](https://github.com/hnidboubker/nobix-react-packs/issues/4) | 3 template implementations |
| 4 | [#5](https://github.com/hnidboubker/nobix-react-packs/issues/5) | Types, interfaces, enums |
| 5 | [#6](https://github.com/hnidboubker/nobix-react-packs/issues/6) | Utilities & helpers |
| 6 | [#7](https://github.com/hnidboubker/nobix-react-packs/issues/7) | Slots & customization |
| 7 | [#8](https://github.com/hnidboubker/nobix-react-packs/issues/8) | Public API & exports |
| 8 | [#9](https://github.com/hnidboubker/nobix-react-packs/issues/9) | Testing & quality assurance |
| 9 | [#10](https://github.com/hnidboubker/nobix-react-packs/issues/10) | Documentation & examples |
| 10 | [#11](https://github.com/hnidboubker/nobix-react-packs/issues/11) | npm publishing & release |

**Master Epic:** [#1 - @projet-example/sidebar Package Development](https://github.com/hnidboubker/nobix-react-packs/issues/1)

---

## Code Style & Conventions

### TypeScript

- Strict mode enabled
- ESM modules (`"type": "module"` in package.json)
- No `any` types allowed
- Props interfaces prefixed with component name (e.g., `SidebarProps`)

### Components

- Functional components with React hooks
- File naming: PascalCase for components (e.g., `Sidebar.tsx`)
- Props destructuring in function signature
- JSDoc comments for public APIs only

### Templates

Templates are separate from components — they receive props and render layout:

```tsx
// components/Sidebar.tsx (behavior + state)
export function Sidebar({ template, items, ...props }: SidebarProps) {
  // state logic here
  return <SelectedTemplate {...} />
}

// templates/DefaultSidebar.tsx (layout only)
export function DefaultSidebar({ items, className }: TemplateProps) {
  return <div className={className}>{/* layout */}</div>
}
```

### Testing

- Framework: Vitest (or Jest)
- Library: React Testing Library
- Target: >80% coverage
- Test files: `__tests__/` folder or `.test.tsx` suffix
- Test naming: Describe user-visible behavior, not implementation

### Public API

Only export from `src/index.ts`:
- Components (Sidebar, not internal templates)
- Types (SidebarProps, SidebarItem, etc.)
- Enums (SidebarTemplate, SidebarPosition)
- **Do NOT export:** internal components, utilities, structs

---

## Icon Libraries

The package is **icon-library agnostic**. Users can provide icons from:

- Lucide React
- React Icons
- Heroicons
- Phosphor
- Custom components

Use the abstract type: `React.ComponentType<{ className?: string }>`

---

## Dependency Philosophy

**Keep it minimal:**
- React 18/19 (peer dependency)
- TypeScript (dev dependency)
- Testing framework (dev dependency)
- No utility libraries (lodash, moment, etc.) unless essential

---

## Multi-Version Support

- React 18: Fully compatible
- React 19: Fully compatible
- Test both via `devDependencies` and peer dependency matrix

---

## Common Tasks

### Adding a New Prop to Sidebar

1. Update `SidebarProps` in `src/types/sidebar.types.ts`
2. Update `Sidebar` component to handle the prop
3. Pass prop to template component
4. Update template signatures if needed
5. Add test case in `Sidebar.test.tsx`
6. Update README examples

### Creating a New Template

1. Create `src/templates/NewTemplateSidebar.tsx`
2. Add enum value to `SidebarTemplate` enum
3. Update template selector logic in `Sidebar`
4. Add tests for new template
5. Document in README

### Customizing Styling

- Prefer TailwindCSS classes if available
- Support `className` prop for all customizable elements
- Avoid inline styles
- Use CSS-in-JS sparingly (prefer CSS modules or Tailwind)

---

## Version Management

- Current version: 0.1.0 (initial release)
- All versions published to npm with git tags (v0.1.0, v0.2.0, etc.)
- CHANGELOG.md tracks changes per release

---

## References

- **Detailed Architecture:** `.nobix-packs/epic-nobix.md` (sections 1-25)
- **GitHub Issues:** [nobix-react-packs/issues](https://github.com/hnidboubker/nobix-react-packs/issues)
- **npm Package:** https://www.npmjs.com/package/@projet-example/sidebar (after Phase 10)
