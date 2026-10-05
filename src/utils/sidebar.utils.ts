import type { SidebarTemplate } from "../enums/SidebarTemplate";
import type { SidebarPosition } from "../enums/SidebarPosition";

export function getSidebarTemplate(template?: string): SidebarTemplate {
  if (template === "compact") return "compact";
  if (template === "floating") return "floating";
  return "default";
}

export function createSidebarClasses(
  template: SidebarTemplate,
  collapsed: boolean,
  position: SidebarPosition,
  customClass?: string
): string {
  const base = "flex shrink-0 flex-col overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-xl shadow-slate-900/10 ring-1 ring-black/5 backdrop-blur-lg transition-all duration-300";

  const width = collapsed ? "w-20" : "w-64";
  const posClass = position === "right" ? "order-last" : "";
  const custom = customClass || "";

  return [base, width, posClass, custom].filter(Boolean).join(" ");
}

export function isItemDisabled(disabled?: boolean): boolean {
  return disabled ?? false;
}

export function getItemClasses(
  disabled: boolean,
  customClass?: string
): string {
  const base =
    "flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-800 transition-colors hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-blue-600";

  const disabledClass = disabled ? "pointer-events-none opacity-50" : "";
  const custom = customClass || "";

  return [base, disabledClass, custom].filter(Boolean).join(" ");
}

export function getNavigationClasses(collapsed: boolean): string {
  if (!collapsed) return "space-y-4 overflow-y-auto p-2";
  return "space-y-4 overflow-y-auto p-2 md:[&_a>span:not([aria-hidden])]:sr-only md:[&_a]:justify-center md:[&_h2]:sr-only";
}
