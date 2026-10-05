# Phase 1: Cadrage et Définition du Périmètre

**Epic**: Application de Démonstration des Composants  
**Issue**: #16  
**Objectif**: Recenser et documenter les composants du projet pour la demo

---

## 📋 Checklist Phase 1

- [x] Recenser les composants existants
- [x] Identifier les composants prioritaires
- [x] Classer les composants par catégorie
- [x] Identifier les variantes disponibles
- [x] Identifier les différents états de chaque composant
- [x] Identifier les propriétés configurables
- [x] Identifier les principaux cas d'usage
- [x] Définir les objectifs de la demo
- [x] Définir les utilisateurs cibles
- [x] Définir les critères de réussite de l'application
- [x] Définir le périmètre MVP
- [x] Identifier les fonctionnalités hors périmètre

---

## 🎯 Objectifs de la Démo

1. **Showcaser les composants** - Afficher tous les composants dans une app centralisée
2. **Tester les composants** - Interactive playground pour tester props et variantes
3. **Documenter les composants** - Expliciter usage, props, states
4. **Démontrer l'intégration** - Montrer comment les composants fonctionnent ensemble
5. **Faciliter le réutilisation** - Copier/coller le code des exemples

---

## 👥 Utilisateurs Cibles

1. **Developers** - Trouver le bon composant, comprendre son API
2. **Designers** - Voir toutes les variantes et états
3. **Product Managers** - Overview des composants disponibles
4. **Stakeholders** - Aperçu du progress et des capabilities

---

## ✨ Critères de Réussite

- ✅ Tous les composants affichés avec toutes les variantes
- ✅ Playground interactif pour modifier les props
- ✅ Code snippets copiables pour chaque exemple
- ✅ Documentation claire et accessible
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Dark mode support
- ✅ Performance acceptable (<2s load time)
- ✅ Navigation fluide entre composants

---

## 📦 Périmètre MVP

### ✅ Inclus

- Sidebar (du package @nobix-react/sidebar)
- Header component
- Footer component
- Button component
- Layout components (MainLayout)
- Hooks (useLocalStorage)
- Utilities (cn, formatDate)
- Global styles & theme

### ❌ Hors Périmètre (Phase suivante)

- Advanced components (Tabs, Modals, Tables)
- Form components (Input, Select, Checkbox)
- Animation showcase
- Performance metrics
- Analytics
- User feedback system

---

## 📦 Composants Existants

### Layout Components

| Composant | Fichier | Purpose | Status |
|-----------|---------|---------|--------|
| `Header` | `src/components/layout/Header.tsx` | Top navigation bar | ✅ Ready |
| `Footer` | `src/components/layout/Footer.tsx` | Footer section | ✅ Ready |
| `MainLayout` | `src/components/layout/MainLayout.tsx` | Layout wrapper + Sidebar | ✅ Ready |

**Variantes**:
- Header: Sticky position, responsive
- Footer: Full-width, darker background
- MainLayout: Sidebar toggle, responsive

**États**:
- MainLayout: Sidebar open/closed, loading, error

**Props Configurables**:
- MainLayout: children, isOpen (sidebar)

---

### Common Components

| Composant | Fichier | Purpose | Status |
|-----------|---------|---------|--------|
| `Button` | `src/components/common/Button.tsx` | Action button | ✅ Ready |

**Variantes**:
- `primary` - Blue button (default action)
- `secondary` - Gray button (alternative)
- `danger` - Red button (destructive)

**Sizes**:
- `sm` - Small (12px text)
- `md` - Medium (16px text, default)
- `lg` - Large (18px text)

**États**:
- Default
- Hover
- Focus (ring)
- Disabled
- Loading

**Props Configurables**:
- `variant` - 'primary' | 'secondary' | 'danger'
- `size` - 'sm' | 'md' | 'lg'
- `children` - Button text/content
- `disabled` - Disable button
- Standard HTML attributes (onClick, etc.)

---

### External Components

| Composant | Package | Version |
|-----------|---------|---------|
| `Sidebar` | `@nobix-react/sidebar` | 1.0.0 |

**Variantes**:
- `default` - Standard sidebar with items
- `compact` - Collapsed sidebar (icons only)
- `floating` - Floating sidebar overlay

**États**:
- Open/closed
- Item hover
- Item active
- Loading

**Props Configurables**:
- `items` - Array of menu items
- `template` - Sidebar template variant
- `className` - Custom styling

---

### Custom Hooks

| Hook | Fichier | Purpose |
|------|---------|---------|
| `useLocalStorage` | `src/hooks/useLocalStorage.ts` | Persist data to localStorage |

**Usage**:
```typescript
const [value, setValue] = useLocalStorage<T>(key: string, initialValue: T)
```

---

### Utilities

| Utility | Fichier | Purpose |
|---------|---------|---------|
| `cn` | `src/utils/index.ts` | Merge className strings |
| `formatDate` | `src/utils/index.ts` | Format date with locale |

---

## 🎨 Variantes par Composant

### Button Variantes

```
┌─────────────────────────────────────────┐
│ Variant: primary | secondary | danger   │
├─────────────────────────────────────────┤
│ Size: sm | md | lg                      │
├─────────────────────────────────────────┤
│ State: default | hover | focus | disabled│
└─────────────────────────────────────────┘
Total Combinations: 3 × 3 × 4 = 36
```

### Sidebar Variantes

```
┌─────────────────────────────────────────┐
│ Template: default | compact | floating  │
├─────────────────────────────────────────┤
│ State: open | closed | loading          │
├─────────────────────────────────────────┤
│ Items: 3+ items with icons              │
└─────────────────────────────────────────┘
Total Combinations: 3 × 3 + variations = 9+
```

---

## 🔄 User Flows

### Flow 1: Discover Component

```
User lands on demo app
  ↓
Browse component list/catalog
  ↓
Click on component (e.g., "Button")
  ↓
See description, all variants, all states
  ↓
View code snippet
  ↓
Copy code to clipboard
```

### Flow 2: Test Component Props

```
User views Button component
  ↓
See interactive playground
  ↓
Change variant (primary → secondary)
  ↓
See preview update in real-time
  ↓
Change size, add text, toggle disabled
  ↓
Copy generated code
```

### Flow 3: View Integration

```
User views component integration section
  ↓
See example: Header + Sidebar + MainLayout
  ↓
Understand how components work together
  ↓
See the full page layout
```

---

## 📊 Component Inventory

### Summary

| Category | Count | Status |
|----------|-------|--------|
| Layout | 3 | Ready |
| Common UI | 1 | Ready |
| External | 1 | Ready |
| Hooks | 1 | Ready |
| Utils | 2 | Ready |
| **Total** | **8** | **Ready for Phase 2** |

### By Status

- ✅ **Ready to Demo**: Header, Footer, Button, Sidebar
- 📋 **Ready with Props**: MainLayout, useLocalStorage
- 🔧 **Configurable**: All components support className

---

## 🏗️ Demo App Structure

```
Demo App
├── Home/Landing
│   └── Component overview list
│
├── Component Pages (1 per component)
│   ├── Header
│   │   ├── Description
│   │   ├── Live preview
│   │   ├── Props table
│   │   └── Code snippet
│   │
│   ├── Button
│   │   ├── Description
│   │   ├── Playground (interactive)
│   │   ├── Variants showcase (36 versions)
│   │   └── Code snippet
│   │
│   ├── Sidebar
│   │   ├── Description
│   │   ├── Live preview
│   │   ├── Variants (default, compact, floating)
│   │   └── Code snippet
│   │
│   └── ... (other components)
│
└── Integration Example
    └── Full page layout (Header + Sidebar + MainLayout)
```

---

## 🎯 Priorité des Composants pour Phase 2

### Tier 1 (High Priority)
1. **Button** - Most versatile, many variants
2. **Sidebar** - Complex component, good showcase
3. **Header** - Visible navigation

### Tier 2 (Medium Priority)
4. **Footer** - Simple, quick to add
5. **MainLayout** - Shows integration

### Tier 3 (Low Priority)
6. **Hooks** - Document with examples
7. **Utils** - Small utility functions

---

## 📝 Components Breakdown

### Button (36 variants)

```
Variants:
  - Primary (Blue)
    - sm + Default, Hover, Focus, Disabled
    - md + Default, Hover, Focus, Disabled
    - lg + Default, Hover, Focus, Disabled
  - Secondary (Gray)
    - ... (same 12 combinations)
  - Danger (Red)
    - ... (same 12 combinations)
```

### Sidebar (9+ combinations)

```
Templates:
  - Default (full width)
  - Compact (icons only)
  - Floating (overlay)

States per template:
  - Closed/Open
  - With hover
  - Active item highlighted
  - Loading state
```

---

## ✅ Validation Checklist

- [x] All components identified
- [x] All props documented
- [x] All variants catalogued
- [x] All states identified
- [x] Priority levels assigned
- [x] Demo structure planned
- [x] Success criteria defined
- [x] MVP scope locked
- [x] Exclusions listed
- [x] Ready for Phase 2 implementation

---

## 🚀 Next Phase (Phase 2)

**Conception de l'expérience de démonstration**

Will define:
- Page layouts for each component
- Navigation structure
- Playground UI design
- Code snippet display
- Responsive behavior on mobile

---

**Status**: ✅ Phase 1 COMPLETE  
**Ready for**: Phase 2 (UX Design)  
**Date**: 2026-10-05
