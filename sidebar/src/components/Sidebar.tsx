import { useState } from "react";
import { SidebarProps } from "../structs/SidebarProps";
import { DefaultSidebar } from "../templates/DefaultSidebar";
import { CompactSidebar } from "../templates/CompactSidebar";
import { FloatingSidebar } from "../templates/FloatingSidebar";

/**
 * Sidebar root. Owns the collapsed state (controlled or uncontrolled).
 * Delegates layout/styling to template components.
 */
export function Sidebar({
  items = [],
  menus = [],
  template = "default",
  position = "left",
  className,
  collapsed,
  onCollapsedChange,
  defaultCollapsed = false,
  header,
  footer,
  headerSlot,
  footerSlot,
  itemRenderer,
  menuRenderer,
}: SidebarProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  const isCollapsed = collapsed ?? internalCollapsed;

  const toggle = () => {
    const next = !isCollapsed;
    if (collapsed === undefined) setInternalCollapsed(next);
    onCollapsedChange?.(next);
  };

  const templates = {
    default: DefaultSidebar,
    compact: CompactSidebar,
    floating: FloatingSidebar,
  };

  const Template = templates[template as keyof typeof templates] || DefaultSidebar;

  const slotProps = { collapsed: isCollapsed, position, onToggle: toggle };
  const resolve = <P,>(slot: React.ReactNode | ((p: P) => React.ReactNode), p: P) =>
    typeof slot === "function" ? slot(p) : slot;
  const headerContent = headerSlot !== undefined ? resolve(headerSlot, slotProps) : header;
  const footerContent = footerSlot !== undefined ? resolve(footerSlot, slotProps) : footer;

  return (
    <Template
      items={items}
      menus={menus}
      position={position}
      collapsed={isCollapsed}
      onToggle={toggle}
      className={className}
      header={headerContent}
      footer={footerContent}
      itemRenderer={itemRenderer}
      menuRenderer={menuRenderer}
    />
  );
}
