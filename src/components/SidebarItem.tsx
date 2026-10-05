import { SidebarItemProps } from "../structs/SidebarItemProps";
import { SidebarIcon } from "./SidebarIcon";

/** A single navigation entry. Disabled items render without an href. */
export function SidebarItem({ id, label, href, icon, disabled = false, badge }: SidebarItemProps) {
  return (
    <li data-item-id={id}>
      <a href={disabled ? undefined : href} aria-disabled={disabled || undefined}>
        {icon && <SidebarIcon icon={icon} />}
        <span>{label}</span>
        {badge !== undefined && badge !== null && <span>{badge}</span>}
      </a>
    </li>
  );
}
