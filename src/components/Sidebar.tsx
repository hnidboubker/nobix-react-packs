import { useState } from "react";
import { SidebarProps } from "../structs/SidebarProps";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarItem } from "./SidebarItem";

/**
 * Sidebar root. Owns the collapsed state (controlled or uncontrolled).
 * Template layout/styling is wired in Phase 3; for now the selection is
 * exposed as `data-template`.
 */
export function Sidebar({
  items = [],
  menus = [],
  template = "default",
  position = "left",
  className,
  collapsed,
  onCollapsedChange,
}: SidebarProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const isCollapsed = collapsed ?? internalCollapsed;

  const toggle = () => {
    const next = !isCollapsed;
    if (collapsed === undefined) setInternalCollapsed(next);
    onCollapsedChange?.(next);
  };

  return (
    <nav
      className={className}
      aria-label="Sidebar"
      data-template={template}
      data-position={position}
      data-collapsed={isCollapsed}
    >
      <button type="button" aria-expanded={!isCollapsed} onClick={toggle}>
        {isCollapsed ? "Expand" : "Collapse"}
      </button>
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <SidebarItem key={item.id} {...item} />
          ))}
        </ul>
      )}
      {menus.map((menu) => (
        <SidebarMenu key={menu.id} {...menu} />
      ))}
    </nav>
  );
}
