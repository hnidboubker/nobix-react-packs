import { SidebarTemplateProps } from "../structs/SidebarTemplateProps";
import { SidebarNavItems } from "../components/SidebarNav";

const nav =
  "flex-1 space-y-2 overflow-y-auto p-1 " +
  "[&_ul]:space-y-0.5 [&_h2]:px-2 [&_h2]:text-[10px] [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:text-slate-500 " +
  "[&_a]:flex [&_a]:items-center [&_a]:gap-2 [&_a]:rounded [&_a]:px-2 [&_a]:py-1.5 [&_a]:text-xs [&_a]:text-slate-700 " +
  "[&_a:hover]:bg-slate-100 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-blue-600 " +
  "[&_a[aria-disabled=true]]:pointer-events-none [&_a[aria-disabled=true]]:opacity-50 " +
  "[&_a>span:last-child:not(:first-child)]:ms-auto [&_svg]:size-4";

// Icon-only: labels/badges stay available to screen readers.
const iconOnly = "[&_a]:justify-center [&_a>span:not([aria-hidden])]:sr-only [&_h2]:sr-only";

/** Dense layout with reduced spacing. Collapsed = icon-only rail. */
export function CompactSidebar({
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
  const width = collapsed ? "w-10" : "w-40 sm:w-44";

  return (
    <aside
      data-template="compact"
      data-position={position}
      data-collapsed={collapsed}
      className={`flex h-full shrink-0 flex-col border-slate-200 bg-white transition-[width] duration-150 ${side} ${width} ${className}`}
    >
      <div className="flex items-center justify-between gap-1 border-b border-slate-200 p-1">
        {!collapsed && <div className="min-w-0 flex-1 truncate text-xs">{header}</div>}
        <button
          type="button"
          aria-expanded={!collapsed}
          onClick={onToggle}
          className="mx-auto rounded px-1.5 py-0.5 text-xs text-slate-600 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          {collapsed ? "»" : "«"}
          <span className="sr-only">{collapsed ? "Expand" : "Collapse"}</span>
        </button>
      </div>
      <nav aria-label="Sidebar" className={`${nav} ${collapsed ? iconOnly : ""}`}>
        <SidebarNavItems items={items} menus={menus} itemRenderer={itemRenderer} menuRenderer={menuRenderer} itemClassName={itemClassName} menuClassName={menuClassName} />
      </nav>
      {!collapsed && footer && <div className="border-t border-slate-200 p-1 text-xs">{footer}</div>}
    </aside>
  );
}
