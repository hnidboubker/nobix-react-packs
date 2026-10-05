# AGENTS.md

Project information and workflow for Claude Code agents and subagents.

---

## Project Overview

- **Name:** nobix-react-packs
- **Owner:** Houssine (nidboubkerhoussine93@gmail.com)
- **Repository:** https://github.com/hnidboubker/nobix-react-packs
- **Project Type:** React component packages (ESM + TypeScript)
- **Current Focus:** `@projet-example/sidebar` package
- **License:** Apache 2.0

---

## Package Architecture

### Sidebar Component Package

The first package is `@projet-example/sidebar`:
- 3 ready-to-use templates (Default, Compact, Floating)
- Compatible with React 18 & 19
- Icon-library agnostic design
- Multi-level customization support

### File Structure

```
src/
├── components/   → React components (Sidebar, SidebarMenu, SidebarItem, SidebarIcon)
├── templates/    → Layout templates (Default, Compact, Floating)
├── types/        → TypeScript interfaces
├── enums/        → SidebarTemplate, SidebarPosition
├── structs/      → Default configs & constants
├── utils/        → Utility functions
└── index.ts      → Public API
```

### Design Principles

1. **Component = Behavior + State**
   - Sidebar manages collapsed state, props, template selection
   - No UI rendering logic in components

2. **Template = Layout + Styling**
   - Templates receive data via props
   - Templates only handle visual presentation
   - No business logic in templates

3. **Icon Library Agnostic**
   - Use `React.ComponentType<{ className?: string }>`
   - Works with Lucide, React Icons, Heroicons, Phosphor, or custom icons

4. **Multi-Level Customization**
   - Level 1: Template selection (Default/Compact/Floating)
   - Level 2: CSS classes (className prop)
   - Level 3: Slots (header, footer, item, menu rendering)
   - Level 4: Full renderer override

---

## Development Phases

All work is organized into **10 Phases** tracked as GitHub issues:

| Phase | Issue | Focus |
|-------|-------|-------|
| 1 | [#2](https://github.com/hnidboubker/nobix-react-packs/issues/2) | Setup & configuration |
| 2 | [#3](https://github.com/hnidboubker/nobix-react-packs/issues/3) | Core components |
| 3 | [#4](https://github.com/hnidboubker/nobix-react-packs/issues/4) | Templates |
| 4 | [#5](https://github.com/hnidboubker/nobix-react-packs/issues/5) | Types & interfaces |
| 5 | [#6](https://github.com/hnidboubker/nobix-react-packs/issues/6) | Utilities |
| 6 | [#7](https://github.com/hnidboubker/nobix-react-packs/issues/7) | Customization & slots |
| 7 | [#8](https://github.com/hnidboubker/nobix-react-packs/issues/8) | Public API & exports |
| 8 | [#9](https://github.com/hnidboubker/nobix-react-packs/issues/9) | Testing & QA |
| 9 | [#10](https://github.com/hnidboubker/nobix-react-packs/issues/10) | Documentation |
| 10 | [#11](https://github.com/hnidboubker/nobix-react-packs/issues/11) | Publishing & release |

**Master Epic:** [#1 - @projet-example/sidebar Package Development](https://github.com/hnidboubker/nobix-react-packs/issues/1)

---

## Development Commands

### Setup
```bash
npm install
```

### Development
```bash
npm run dev        # Watch TypeScript
npm run dev:ui     # Start UI server
```

### Testing
```bash
npm test           # Run all tests
npm test -- --watch
npm test -- --coverage
```

### Quality
```bash
npm run build      # TypeScript compile
npm run lint       # ESLint check
npm run lint -- --fix
npm run format     # Prettier
```

### Build & Publish
```bash
npm run build
npm publish --dry-run
npm publish --access public
```

---

## Code Quality Standards

### TypeScript
- Strict mode enabled
- ESM modules only
- No `any` types
- All types documented

### Components
- Functional components with hooks
- <250 lines per component
- Props destructured
- JSDoc on public APIs

### Testing
- >80% coverage minimum
- React 18 & 19 compatible
- No skipped tests
- User-focused test names

### Public API
- Only export from `src/index.ts`
- No internal exports
- Clean component interface
- Well-documented types

---

## .agents/ Files (Complete Governance)

Navigate all workflow and skill files:

- **[`.agents/INDEX.md`](.agents/INDEX.md)** — Complete index and navigation
- **[`.agents/SKILLS.md`](.agents/SKILLS.md)** — React agents and skills available
- **[`.agents/workflows.md`](.agents/workflows.md)** — 10-phase workflow + processes
- **[`.agents/rules.md`](.agents/rules.md)** — Quality standards and guidelines

**Start with:** INDEX.md → choose your task → SKILLS.md → workflows.md

---

## Session Continuity

- **[`HANDOFF.md`](./HANDOFF.md)** — Automatic session handoff document
- Updated at end of each session with status and next steps

---

## References

- **Detailed Architecture:** `.nobix-packs/epic-nobix.md`
- **Full Guide:** `CLAUDE.md`
- **GitHub:** https://github.com/hnidboubker/nobix-react-packs
