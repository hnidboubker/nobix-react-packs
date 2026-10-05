import { useEffect } from "react";
import { SidebarTemplateProps } from "../structs/SidebarTemplateProps.js";
import { SidebarNavItems } from "../components/SidebarNav.js";

const nav =
  "flex-1 space-y-4 overflow-y-auto p-2 " +
  "[&_ul]:space-y-1 [&_h2]:px-3 [&_h2]:text-xs [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-slate-600 " +
  "[&_a]:flex [&_a]:items-center [&_a]:gap-3 [&_a]:rounded-xl [&_a]:px-3 [&_a]:py-2 [&_a]:text-sm [&_a]:text-slate-800 " +
  "[&_a]:transition-colors [&_a:hover]:bg-white/60 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-blue-600 " +
  "[&_a[aria-disabled=true]]:pointer-events-none [&_a[aria-disabled=true]]:opacity-50 " +
  "[&_a>span:last-child:not(:first-child)]:ms-auto [&_svg]:size-5";

/**
 * Detached glass panel. On mobile it is a fixed overlay (with a backdrop that
 * closes it); from md up it floats inline with margin.
 */
export function FloatingSidebar({
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
  const right = position === "right";

  useEffect(() => {
    if (collapsed) return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onToggle();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [collapsed, onToggle]);

  // Mobile: off-canvas when collapsed. md+: collapsed = narrow panel.
  const mobile = `max-md:fixed max-md:inset-y-2 z-40 ${right ? "max-md:end-2" : "max-md:start-2"}`;
  const hidden = collapsed
    ? `max-md:invisible max-md:pointer-events-none max-md:opacity-0 max-md:transition-[opacity,transform,visibility] ${right ? "max-md:translate-x-4" : "max-md:-translate-x-4"}`
    : "";

  return (
    <>
      {!collapsed && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onToggle}
          className="fixed inset-0 z-30 bg-slate-900/30 backdrop-blur-[2px] md:hidden"
        />
      )}
      {collapsed && (
        <button
          type="button"
          aria-label="Open sidebar"
          onClick={onToggle}
          className={`fixed z-40 md:hidden bottom-4 ${right ? "end-4" : "start-4"} rounded-xl bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-lg hover:bg-white focus-visible:outline-2 focus-visible:outline-blue-600`}
        >
          ☰
        </button>
      )}
      <aside
        data-template="floating"
        data-position={position}
        data-collapsed={collapsed}
        role={!collapsed && window.matchMedia("(max-width: 767px)").matches ? "dialog" : undefined}
        aria-modal={!collapsed && window.matchMedia("(max-width: 767px)").matches ? "true" : undefined}
        className={`flex shrink-0 flex-col overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-xl shadow-slate-900/10 ring-1 ring-black/5 backdrop-blur-lg transition-all duration-300 md:m-3 ${right ? "md:order-last" : ""} ${collapsed ? "w-64 md:w-20" : "w-64 md:w-72"} ${mobile} ${hidden} ${className}`}
      >
        <div className="flex items-center justify-between gap-2 p-3">
          {!collapsed && <div className="min-w-0 flex-1 truncate">{header}</div>}
          <button
            type="button"
            aria-expanded={!collapsed}
            onClick={onToggle}
            className="rounded-xl px-2 py-1 text-sm text-slate-700 hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            {collapsed ? "Expand" : "Collapse"}
          </button>
        </div>
        <nav
          aria-label="Sidebar"
          className={`${nav} ${collapsed ? "md:[&_a>span:not([aria-hidden])]:sr-only md:[&_a]:justify-center md:[&_h2]:sr-only" : ""}`}
        >
          <SidebarNavItems items={items} menus={menus} itemRenderer={itemRenderer} menuRenderer={menuRenderer} itemClassName={itemClassName} menuClassName={menuClassName} />
        </nav>
        {!collapsed && footer && <div className="border-t border-white/40 p-3">{footer}</div>}
      </aside>
    </>
  );
}
