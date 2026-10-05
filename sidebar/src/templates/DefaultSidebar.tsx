import { SidebarTemplateProps } from "../structs/SidebarTemplateProps.js";
import { SidebarNavItems } from "../components/SidebarNav.js";

// Items/menus are styled through descendant selectors so the Phase 2
// components stay untouched. Labels become sr-only (not hidden) when collapsed.
const nav =
  "flex-1 space-y-4 overflow-y-auto p-2 " +
  "[&_ul]:space-y-1 [&_h2]:px-3 [&_h2]:text-xs [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-slate-500 " +
  "[&_a]:flex [&_a]:items-center [&_a]:gap-3 [&_a]:rounded-md [&_a]:px-3 [&_a]:py-2 [&_a]:text-sm [&_a]:text-slate-700 " +
  "[&_a:hover]:bg-slate-100 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-blue-600 " +
  "[&_a[aria-disabled=true]]:pointer-events-none [&_a[aria-disabled=true]]:opacity-50 " +
  "[&_a>span:last-child:not(:first-child)]:ms-auto [&_svg]:size-5";

const label = "[&_a>span:not([aria-hidden])]:sr-only md:[&_a]:justify-center md:[&_h2]:sr-only";

/** Standard sidebar: header, scrollable navigation, footer. */
export function DefaultSidebar({
  items,
  menus,
  position,
  collapsed,
  onToggle,
  className = "",
  header,
  footer,
  itemRenderer,
  menuRenderer,
  itemClassName,
  menuClassName,
}: SidebarTemplateProps) {
  const side = position === "right" ? "border-s order-last" : "border-e";
  const width = collapsed ? "w-16" : "w-64 max-md:w-56";

  return (
    <aside
      data-template="default"
      data-position={position}
      data-collapsed={collapsed}
      className={`flex h-full shrink-0 flex-col border-slate-200 bg-white transition-[width] duration-200 ${side} ${width} ${className}`}
    >
      <div className="flex items-center justify-between gap-2 border-b border-slate-200 p-3">
        {!collapsed && <div className="min-w-0 flex-1 truncate">{header}</div>}
        <button
          type="button"
          aria-expanded={!collapsed}
          onClick={onToggle}
          className="rounded-md px-2 py-1 text-sm text-slate-600 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          {collapsed ? "Expand" : "Collapse"}
        </button>
      </div>
      <nav aria-label="Sidebar" className={`${nav} ${collapsed ? label : ""}`}>
        <SidebarNavItems items={items} menus={menus} itemRenderer={itemRenderer} menuRenderer={menuRenderer} itemClassName={itemClassName} menuClassName={menuClassName} />
      </nav>
      {!collapsed && footer && <div className="border-t border-slate-200 p-3">{footer}</div>}
    </aside>
  );
}
