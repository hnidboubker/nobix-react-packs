import type { ReactNode } from 'react'
import { SidebarIcon, type SidebarIconType } from './SidebarIcon'

export interface SidebarItemProps {
  id: string
  label: string
  href: string
  icon?: SidebarIconType
  disabled?: boolean
  /** Optional badge content (count, "new", ...). */
  badge?: ReactNode
}

/** A single navigation entry. Disabled items render without an href. */
export function SidebarItem({
  id,
  label,
  href,
  icon,
  disabled = false,
  badge,
}: SidebarItemProps) {
  return (
    <li data-item-id={id}>
      <a
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
      >
        {icon && <SidebarIcon icon={icon} />}
        <span>{label}</span>
        {badge !== undefined && badge !== null && <span>{badge}</span>}
      </a>
    </li>
  )
}
