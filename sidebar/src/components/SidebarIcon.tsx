import { SidebarIconProps } from "../structs/SidebarIconProps.js";

/** Renders any icon component, hidden from assistive tech (decorative). */
export function SidebarIcon({ icon: Icon, className }: SidebarIconProps) {
  return (
    <span aria-hidden="true">
      <Icon className={className} />
    </span>
  );
}
