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

  return (
    <Template
      items={items}
      menus={menus}
      position={position}
      collapsed={isCollapsed}
      onToggle={toggle}
      className={className}
      header={header}
      footer={footer}
    />
  );
}
