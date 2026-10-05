import { SidebarItemProps } from "../structs/SidebarItemProps.js";
import { SidebarIcon } from "./SidebarIcon.js";

/** A single navigation entry. Disabled items render without an href. */
export function SidebarItem({ id, label, href, icon, disabled = false, badge, className, onClick }: SidebarItemProps) {
  return (
    <li data-item-id={id} className={className}>
      <a
        href={disabled ? undefined : href}
        role={disabled ? "link" : undefined}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={onClick}
      >
        {icon && <SidebarIcon icon={icon} />}
        <span>{label}</span>
        {badge !== undefined && badge !== null && <span>{badge}</span>}
      </a>
    </li>
  );
}
