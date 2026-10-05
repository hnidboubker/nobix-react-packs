# @nobix-react/sidebar

A customizable, reusable React sidebar component library. Features swappable templates, multi-level customization, and RTL support. Fully compatible with React 18 and React 19.

**Key Features:**
- 📦 Single-responsibility component (one package = one component)
- 🎨 3 ready-to-use templates (Default, Compact, Floating)
- 🎯 Multi-level customization (templates, slots, renderers, CSS classes)
- 🌍 Full RTL support (logical Tailwind classes)
- 🎭 Icon library agnostic
- 📱 Responsive & accessible
- ✅ 107 tests, 97.85% coverage

## Installation

```bash
npm install @nobix-react/sidebar
```

**Peer Dependencies:**
- React 18.x or React 19.x
- TypeScript 5.x (recommended)

## Quick Start

```tsx
import { Sidebar, SidebarMenu, SidebarItem, SidebarIcon } from "@nobix-react/sidebar";
import { Home, Settings } from "lucide-react"; // or any icon library

export function App() {
  return (
    <Sidebar items={[]} menus={[]}>
      <SidebarMenu label="Main">
        <SidebarItem
          id="home"
          label="Home"
          icon={<Home className="w-4 h-4" />}
          href="/"
        />
        <SidebarItem
          id="settings"
          label="Settings"
          icon={<Settings className="w-4 h-4" />}
          href="/settings"
        />
      </SidebarMenu>
    </Sidebar>
  );
}
```

## Templates

Choose a template to control the sidebar layout:

| Template   | Description                                   | Use Case |
| ---------- | --------------------------------------------- | -------- |
| `default`  | Classic sidebar attached to screen edge | Standard dashboards |
| `compact`  | Narrower, dense sidebar | Mobile-first or space-constrained UIs |
| `floating` | Detached, modern floating sidebar | Modern, spacious interfaces |

### Default Template

```tsx
<Sidebar template="default" items={[]} menus={[]}>
  {/* content */}
</Sidebar>
```

### Compact Template

```tsx
<Sidebar template="compact" items={[]} menus={[]}>
  {/* content */}
</Sidebar>
```

### Floating Template

```tsx
<Sidebar template="floating" items={[]} menus={[]}>
  {/* content */}
</Sidebar>
```

## Customization

### Level 1: Template Selection

```tsx
<Sidebar template="default" | "compact" | "floating">
```

### Level 2: CSS Classes

```tsx
<Sidebar
  className="bg-slate-900 text-white"
  itemClassName="hover:bg-slate-800"
  menuClassName="border-t border-slate-700"
>
```

### Level 3: Slots (Header & Footer)

```tsx
<Sidebar
  headerSlot={
    <div className="p-4 font-bold">My App</div>
  }
  footerSlot={({ collapsed }) => (
    <div className="p-2 text-xs">{collapsed ? "▶" : "Sidebar"}</div>
  )}
>
```

### Level 4: Custom Renderers

```tsx
<Sidebar
  itemRenderer={(item, idx) => (
    <a key={idx} href={item.href} className="custom-item">
      {item.label}
    </a>
  )}
  menuRenderer={(menu, idx) => (
    <details key={idx} className="custom-menu">
      <summary>{menu.label}</summary>
      {/* render menu items */}
    </details>
  )}
>
```

## TypeScript Guide

All props are fully typed:

```tsx
import type {
  SidebarProps,
  SidebarItemProps,
  SidebarMenuProps,
  SidebarIconProps,
  HeaderSlotProps,
  FooterSlotProps,
} from "@nobix-react/sidebar";

const sidebar: SidebarProps = {
  template: "default",
  items: [],
  menus: [],
};
```

**Available Types:**
- `SidebarProps` — Main sidebar component props
- `SidebarItemProps` — Individual navigation item
- `SidebarMenuProps` — Menu/group of items
- `SidebarIconProps` — Icon component wrapper
- `HeaderSlotProps` — Header slot function props
- `FooterSlotProps` — Footer slot function props

**Available Enums:**
- `SidebarTemplate` — `"default" | "compact" | "floating"`
- `SidebarPosition` — `"left" | "right"`
- `SidebarIconType` — Icon component type alias

## React 18 & 19 Compatibility

This package is fully compatible with both React 18 and React 19:

```json
{
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  }
}
```

All examples work identically in both versions.

## RTL Support

The sidebar automatically respects the `dir="rtl"` attribute on the parent element:

```tsx
<div dir="rtl">
  <Sidebar position="right" items={[]} menus={[]}>
    {/* Sidebar is right-aligned in RTL mode */}
  </Sidebar>
</div>
```

Uses Tailwind logical CSS classes (`start`, `end`, `border-s`, `border-e`) for automatic direction switching.

## API Reference

### Sidebar Component

```tsx
<Sidebar
  // Layout
  template?: "default" | "compact" | "floating"
  position?: "left" | "right"
  
  // Content
  items?: SidebarItemProps[]
  menus?: SidebarMenuProps[]
  
  // Customization - Level 2: CSS Classes
  className?: string
  itemClassName?: string
  menuClassName?: string
  
  // Customization - Level 3: Slots
  headerSlot?: ReactNode | ((props: HeaderSlotProps) => ReactNode)
  footerSlot?: ReactNode | ((props: FooterSlotProps) => ReactNode)
  
  // Customization - Level 4: Renderers
  itemRenderer?: (item: SidebarItemProps, index: number) => ReactNode
  menuRenderer?: (menu: SidebarMenuProps, index: number) => ReactNode
  
  // State
  defaultCollapsed?: boolean
  onToggle?: (collapsed: boolean) => void
>
```

### SidebarMenu

```tsx
<SidebarMenu
  id: string
  label: string
  items: SidebarItemProps[]
  className?: string
/>
```

### SidebarItem

```tsx
<SidebarItem
  id: string
  label: string
  icon?: ReactNode
  href?: string
  badge?: string | number
  className?: string
  onClick?: () => void
/>
```

### SidebarIcon

```tsx
<SidebarIcon
  icon: ComponentType<{ className?: string }>
  className?: string
/>
```

## Icon Library Integration

The sidebar is icon-library agnostic. Use any icon library that exports React components:

```tsx
// Lucide React
import { Home } from "lucide-react";

// React Icons
import { AiOutlineHome } from "react-icons/ai";

// Heroicons
import { HomeIcon } from "@heroicons/react/24/outline";

// All work the same way:
<SidebarItem
  icon={<Home className="w-4 h-4" />}
  label="Home"
/>
```

## FAQ

**Q: Can I use this with Next.js?**  
A: Yes! Works with both App Router and Pages Router. Use as a client component if needed.

**Q: Can I customize colors?**  
A: Yes, pass `className` and `itemClassName` with Tailwind classes. Or use CSS variables for theming.

**Q: Does it support dark mode?**  
A: Yes, use Tailwind's `dark:` prefix in your class names.

**Q: Is it accessible?**  
A: Yes, includes ARIA attributes and semantic HTML. Icon items are marked decorative when appropriate.

**Q: Can I collapse the sidebar?**  
A: Yes, use the `onToggle` callback to manage state. Slots receive `collapsed` in their props.

**Q: What about mobile?**  
A: Responsive with media queries. Customize breakpoints via CSS classes.

## License

MIT

---

**Package:** @nobix-react/sidebar  
**Version:** 0.1.0  
**Repository:** https://github.com/hnidboubker/nobix-react-packs  
**Issues:** https://github.com/hnidboubker/nobix-react-packs/issues
