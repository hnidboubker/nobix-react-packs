Voici un résumé structuré, prêt à être copié dans un `README.md` ou un fichier `PROJECT.md`.

Architecture du package Sidebar

# Package `@projet-example/sidebar`

## 1\. Objectif du projet

Créer un **package npm indépendant dédié à une Sidebar React**, réutilisable dans plusieurs applications.

Le package doit :

- être indépendant des applications qui l'utilisent ;
- être compatible avec React 18 et React 19 ;
- permettre l'utilisation de Lucide ou d'autres librairies d'icônes ;
- proposer **3 templates de Sidebar prêts à l'emploi** ;
- permettre de personnaliser les templates ;
- avoir une architecture interne claire et modulaire ;
- exposer une API publique propre ;
- permettre à chaque composant interne d'être réutilisé indépendamment lorsque c'est pertinent.

Le package est identifié par :

```
@projet-example/sidebar
```

---

# 2\. Philosophie d'architecture

Le projet n'est **pas une grosse librairie contenant plusieurs composants indépendants**.

Chaque composant/package doit être indépendant.

Exemple :

```
@projet-example/sidebar
@projet-example/modal
@projet-example/dropdown
@projet-example/table
```

Dans notre cas, nous nous concentrons uniquement sur :

```
@projet-example/sidebar
```

La Sidebar est donc un package autonome.

---

# 3\. `package.json`

Le package utilise les ES Modules :

```
{
  "name": "@projet-example/sidebar",
  "version": "0.1.0",
  "type": "module"
}
```

Le champ :

```
"type": "module"
```

indique que le package utilise le système de modules ESM.

---

# 4\. Compatibilité React

Le package doit être compatible avec React 18 et React 19.

Pour cela, React et React DOM sont déclarés comme `peerDependencies` :

```
{
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  }
}
```

## Pourquoi `peerDependencies` ?

Le package ne doit pas embarquer sa propre copie de React.

L'application qui utilise :

```
@projet-example/sidebar
```

possède déjà React.

On veut donc éviter :

```
Application
├── react@19
└── @projet-example/sidebar
    └── react@18
```

Le package indique simplement :

> "J'ai besoin que l'application fournisse React 18 ou React 19."

---

# 5\. `peerDependencies` vs `devDependencies`

Pour le développement du package :

```
{
  "devDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.0.0"
  }
}
```

Les rôles sont différents :

### `peerDependencies`

Versions de React que le package supporte :

```
React 18
React 19
```

### `devDependencies`

Version utilisée pour développer et tester le package :

```
React 19
```

### `dependencies`

Dépendances réellement nécessaires au fonctionnement du package et qui doivent être installées avec celui-ci.

---

# 6\. Lucide

La Sidebar doit pouvoir utiliser Lucide, mais le package ne doit pas nécessairement être dépendant de Lucide.

On évite donc de faire :

```
import type { LucideIcon } from "lucide-react";
```

dans le cœur de l'API publique.

À la place, on utilise un type React générique :

```
import type { ComponentType } from "react";

export type SidebarIcon = ComponentType<{
  className?: string;
}>;
```

Cela permet d'utiliser :

- Lucide
- React Icons
- Heroicons
- Phosphor
- des icônes personnalisées
- n'importe quel composant React compatible

Exemple avec Lucide :

```
import {
  Home,
  Settings,
  Users,
} from "lucide-react";

const items = [
  {
    id: "home",
    label: "Home",
    icon: Home,
  },
  {
    id: "users",
    label: "Users",
    icon: Users,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
];
```

Le package Sidebar reste donc indépendant de Lucide.

---

# 7\. Architecture des dossiers

La structure proposée est :

```
@projet-example/sidebar/
├── package.json
├── tsconfig.json
├── README.md
│
└── src/
    ├── components/
    │   ├── Sidebar.tsx
    │   ├── SidebarMenu.tsx
    │   ├── SidebarItem.tsx
    │   └── SidebarIcon.tsx
    │
    ├── templates/
    │   ├── DefaultSidebar.tsx
    │   ├── CompactSidebar.tsx
    │   └── FloatingSidebar.tsx
    │
    ├── types/
    │   ├── sidebar.types.ts
    │   ├── sidebar-menu.types.ts
    │   ├── sidebar-item.types.ts
    │   └── sidebar-template.types.ts
    │
    ├── enums/
    │   ├── sidebar-template.enum.ts
    │   └── sidebar-position.enum.ts
    │
    ├── structs/
    │   └── sidebar.struct.ts
    │
    ├── utils/
    │   └── sidebar.utils.ts
    │
    └── index.ts
```

---

# 8\. Organisation par responsabilité

## `components/`

Contient les composants React réutilisables de la Sidebar.

```
components/
├── Sidebar.tsx
├── SidebarMenu.tsx
├── SidebarItem.tsx
└── SidebarIcon.tsx
```

### `Sidebar`

Composant principal.

Il gère notamment :

- la configuration ;
- le template ;
- les menus ;
- les items ;
- l'état collapsed ;
- les slots ;
- les classes personnalisées.

### `SidebarMenu`

Représente un groupe de menu.

### `SidebarItem`

Représente une entrée individuelle.

### `SidebarIcon`

Responsable du rendu d'une icône.

---

# 9\. `types/`

Les types et interfaces du domaine Sidebar.

## `sidebar.types.ts`

```
import type { ComponentType } from "react";

export type SidebarIcon = ComponentType<{
  className?: string;
}>;

export interface SidebarProps {
  items?: SidebarItem[];
  menus?: SidebarMenu[];

  template?: SidebarTemplate;
  position?: SidebarPosition;

  className?: string;

  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}
```

Les imports réels devront être adaptés selon l'organisation finale des fichiers.

---

# 10\. `SidebarItem`

Un item représente une entrée de navigation :

```
export interface SidebarItem {
  id: string;
  label: string;
  href?: string;
  icon?: SidebarIcon;

  disabled?: boolean;

  badge?: string | number;
}
```

Exemple :

```
{
  id: "users",
  label: "Users",
  href: "/users",
  icon: Users,
  badge: 12
}
```

---

# 11\. `SidebarMenu`

Un menu représente un groupe d'items :

```
export interface SidebarMenu {
  id: string;
  label?: string;
  items: SidebarItem[];
}
```

Exemple :

```
{
  id: "main",
  label: "Main",
  items: [
    {
      id: "dashboard",
      label: "Dashboard",
      href: "/",
      icon: Home
    },
    {
      id: "users",
      label: "Users",
      href: "/users",
      icon: Users
    }
  ]
}
```

---

# 12\. Hiérarchie des données

Le modèle général est :

```
Sidebar
│
├── SidebarMenu
│   ├── SidebarItem
│   ├── SidebarItem
│   └── SidebarItem
│
├── SidebarMenu
│   ├── SidebarItem
│   └── SidebarItem
│
└── SidebarMenu
    └── SidebarItem
```

Cela permet d'obtenir :

```
Dashboard

Main
├── Home
├── Users
└── Projects

Settings
├── Profile
└── Preferences
```

---

# 13\. `enums/`

Les enums représentent des valeurs limitées et prédéfinies.

## Template

```
export enum SidebarTemplate {
  Default = "default",
  Compact = "compact",
  Floating = "floating",
}
```

## Position

```
export enum SidebarPosition {
  Left = "left",
  Right = "right",
}
```

---

# 14\. Les trois templates

Le package doit fournir trois templates par défaut.

```
templates/
├── DefaultSidebar.tsx
├── CompactSidebar.tsx
└── FloatingSidebar.tsx
```

## Default

Sidebar classique :

```
<Sidebar template="default" />
```

## Compact

Sidebar plus étroite, adaptée à une interface dense :

```
<Sidebar template="compact" />
```

## Floating

Sidebar détachée du bord de l'écran :

```
<Sidebar template="floating" />
```

---

# 15\. Architecture des templates

Il est important de ne pas créer trois Sidebars complètement différentes.

Le composant principal doit gérer les données et les comportements.

Le template doit principalement gérer le layout et le rendu visuel.

Conceptuellement :

```
Sidebar
│
├── Data
│
├── Behavior
│
├── State
│
└── Template
    ├── Default
    ├── Compact
    └── Floating
```

Exemple :

```
<Sidebar
  template="default"
  items={items}
/>
```

ou :

```
<Sidebar
  template="compact"
  items={items}
/>
```

ou :

```
<Sidebar
  template="floating"
  items={items}
/>
```

Les données restent les mêmes.

Seul le rendu/layout change.

---

# 16\. Personnalisation

L'objectif n'est pas seulement de fournir trois designs figés.

L'utilisateur doit pouvoir personnaliser la Sidebar.

La première couche de personnalisation peut être :

```
export interface SidebarProps {
  items: SidebarItem[];

  template?: SidebarTemplate;
  position?: SidebarPosition;

  className?: string;

  collapsed?: boolean;

  onCollapsedChange?: (collapsed: boolean) => void;
}
```

Cela permet :

```
<Sidebar
  template="floating"
  position="left"
  items={items}
  className="my-sidebar"
/>
```

---

# 17\. Slots

Pour permettre une personnalisation plus importante, la Sidebar peut proposer des slots.

Exemple :

```
export interface SidebarSlots {
  header?: React.ReactNode;
  footer?: React.ReactNode;

  item?: (
    item: SidebarItem
  ) => React.ReactNode;

  menu?: (
    menu: SidebarMenu
  ) => React.ReactNode;
}
```

Utilisation :

```
<Sidebar
  template="default"
  items={items}
  header={<MyLogo />}
  footer={<MyProfile />}
/>
```

Cela permet à l'utilisateur de remplacer certaines parties sans modifier le package.

---

# 18\. Niveau de personnalisation

Le système doit idéalement permettre plusieurs niveaux :

```
                    Sidebar
                       │
        ┌──────────────┼──────────────┐
        │              │              │
     Template       Styling         Slots
        │              │              │
   Default         className       header
   Compact         CSS             footer
   Floating                        item
                                   menu
```

Ainsi :

### Niveau 1

Choisir un template :

```
<Sidebar template="default" />
```

### Niveau 2

Modifier le style :

```
<Sidebar
  template="default"
  className="..."
/>
```

### Niveau 3

Modifier certaines parties :

```
<Sidebar
  header={<CustomHeader />}
  footer={<CustomFooter />}
/>
```

### Niveau 4

Personnaliser complètement le rendu d'un item :

```
<Sidebar
  item={(item) => <CustomItem item={item} />}
/>
```

---

# 19\. `structs/`

Le dossier `structs` doit être réservé aux structures concrètes ou valeurs par défaut.

Exemple :

```
export const DEFAULT_SIDEBAR_CONFIG = {
  template: "default",
  position: "left",
  collapsed: false,
};
```

L'objectif est d'éviter de mélanger :

```
types
```

qui décrivent les formes de données,

et :

```
structs
```

qui contiennent des configurations ou structures concrètes.

---

# 20\. `utils/`

Les fonctions utilitaires spécifiques à la Sidebar vont dans :

```
utils/
└── sidebar.utils.ts
```

Par exemple :

```
export function getSidebarTemplate(
  template: SidebarTemplate
) {
  // ...
}
```

ou des fonctions concernant :

- la navigation ;
- l'état actif ;
- les items ;
- les templates ;
- les classes CSS ;
- le comportement responsive.

---

# 21\. Icônes

Le package ne doit pas dépendre directement de Lucide.

On utilise une abstraction :

```
export type SidebarIcon = React.ComponentType<{
  className?: string;
}>;
```

Le consommateur peut utiliser Lucide :

```
import {
  Home,
  Users,
  Settings
} from "lucide-react";

const items = [
  {
    id: "home",
    label: "Home",
    icon: Home
  },
  {
    id: "users",
    label: "Users",
    icon: Users
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings
  }
];
```

Mais il peut également utiliser une autre librairie :

```
const items = [
  {
    id: "home",
    label: "Home",
    icon: MyCustomIcon
  }
];
```

---

# 22\. API publique

Le fichier :

```
src/index.ts
```

sert de point d'entrée public.

Exemple :

```
export { Sidebar } from "./components/Sidebar";
export { SidebarMenu } from "./components/SidebarMenu";
export { SidebarItem } from "./components/SidebarItem";

export type {
  SidebarProps,
  SidebarItem,
  SidebarMenu,
  SidebarIcon,
} from "./types";

export {
  SidebarTemplate,
  SidebarPosition,
} from "./enums";
```

L'utilisateur final peut alors simplement faire :

```
import {
  Sidebar,
  SidebarTemplate,
  type SidebarItem
} from "@projet-example/sidebar";
```

---

# 23\. Exemple d'utilisation final

```
import {
  Home,
  Users,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  type SidebarItem,
} from "@projet-example/sidebar";

const items: SidebarItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    id: "users",
    label: "Users",
    href: "/users",
    icon: Users,
  },
  {
    id: "settings",
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar
      template="default"
      items={items}
    />
  );
}
```

---

# 24\. Objectif final du package

L'utilisateur doit pouvoir faire quelque chose d'aussi simple que :

```
<Sidebar
  template="default"
  items={items}
/>
```

ou :

```
<Sidebar
  template="compact"
  items={items}
/>
```

ou :

```
<Sidebar
  template="floating"
  items={items}
/>
```

tout en ayant la possibilité de personnaliser :

```
- le template
- les couleurs
- les classes CSS
- les icônes
- les items
- les menus
- le header
- le footer
- le rendu des items
- la position
- l'état collapsed
- le comportement
```

---

# 25\. Principe architectural final

Le package doit respecter cette séparation :

```
@projet-example/sidebar
│
├── Components
│   └── comportement + rendu
│
├── Templates
│   └── layouts visuels
│
├── Types
│   └── contrats TypeScript
│
├── Enums
│   └── valeurs prédéfinies
│
├── Structs
│   └── configurations/structures concrètes
│
├── Utils
│   └── logique utilitaire
│
└── index.ts
    └── API publique
```

Le principe central est :

> **Le composant Sidebar contrôle le comportement, les templates contrôlent le layout, et les slots permettent au consommateur de personnaliser le rendu.**

Cela permet d'avoir une Sidebar immédiatement utilisable avec trois templates, tout en conservant suffisamment de flexibilité pour des applications ayant des besoins graphiques différents.
