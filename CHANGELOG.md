# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-10-05

### Added

- **Core Components** (Phase 2)
  - `Sidebar` — Main sidebar component with state management
  - `SidebarMenu` — Menu/group component for organizing items
  - `SidebarItem` — Individual navigation item
  - `SidebarIcon` — Icon wrapper (library-agnostic)

- **3 Ready-to-Use Templates** (Phase 3)
  - `DefaultSidebar` — Classic sidebar attached to screen edge
  - `CompactSidebar` — Narrow, dense sidebar layout
  - `FloatingSidebar` — Modern floating sidebar

- **Type System** (Phase 4)
  - Full TypeScript support with strict mode
  - `SidebarProps`, `SidebarItemProps`, `SidebarMenuProps`, `SidebarIconProps`
  - `HeaderSlotProps`, `FooterSlotProps` for slot customization
  - `SidebarTemplate`, `SidebarPosition` enums
  - `SidebarIconType` for icon prop typing

- **Utilities & Helpers** (Phase 5)
  - 25+ utility functions for sidebar logic
  - Default configurations
  - Template selection helpers

- **Customization & Slots** (Phase 6)
  - Multi-level customization (4 levels)
  - Header slot with function support
  - Footer slot with collapse state
  - Custom item renderer
  - Custom menu renderer
  - CSS class customization (itemClassName, menuClassName)
  - Full RTL support with logical Tailwind classes

- **Public API** (Phase 7)
  - Clean `src/index.ts` entry point
  - Export verification tests
  - Tree-shaking support (sideEffects: false)

- **Testing** (Phase 8)
  - 107 comprehensive tests
  - 97.85% code coverage
  - Unit tests for all components
  - Integration tests for templates
  - Export verification tests

- **Documentation** (Phase 9)
  - Complete README with features, installation, quick start
  - 3 template usage examples
  - 4-level customization guide
  - TypeScript guide
  - React 18 & 19 compatibility notes
  - RTL support documentation
  - API reference
  - FAQ

### Features

- ✅ Single-responsibility component (one package = one component)
- ✅ 3 swappable templates for different layouts
- ✅ 4-level customization (template selection → CSS classes → slots → renderers)
- ✅ Icon library agnostic (works with Lucide, React Icons, Heroicons, etc.)
- ✅ Full RTL support (Arabic, Hebrew, Persian, etc.)
- ✅ React 18 & 19 compatible
- ✅ Responsive & mobile-friendly
- ✅ Accessible (ARIA attributes, semantic HTML)
- ✅ TypeScript strict mode
- ✅ Zero runtime dependencies (except React peer dependency)

### Test Coverage

- **107 tests** across 9 test files
- **97.85% code coverage** (statements)
- **93.04% branch coverage**
- **91.3% function coverage**

### Documentation

- Complete README with examples
- TypeScript guide
- Customization guide
- RTL support guide
- API reference
- FAQ

---

## Release Notes

**Initial Release v0.1.0**

First stable release of @nobix-react/sidebar.

### What's Included

- Sidebar component with full feature set
- 3 production-ready templates
- Comprehensive TypeScript support
- 100+ test cases with 97.85% coverage
- Complete documentation and examples
- React 18 & 19 support
- RTL support for international apps

### Installation

```bash
npm install @nobix-react/sidebar
```

### Quick Start

```tsx
import { Sidebar, SidebarMenu, SidebarItem } from "@nobix-react/sidebar";

export function App() {
  return (
    <Sidebar items={[]} menus={[]}>
      <SidebarMenu label="Main">
        <SidebarItem id="home" label="Home" href="/" />
      </SidebarMenu>
    </Sidebar>
  );
}
```

### Next Steps

- File issues at https://github.com/hnidboubker/nobix-react-packs/issues
- Read the full README for customization examples
- Check out the TypeScript guide for type safety

---

[0.1.0]: https://github.com/hnidboubker/nobix-react-packs/releases/tag/v0.1.0
