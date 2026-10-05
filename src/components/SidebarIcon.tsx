import type { ComponentType } from 'react'

/** Any React component that accepts an optional className (library-agnostic). */
export type SidebarIconType = ComponentType<{ className?: string }>

export interface SidebarIconProps {
  /** Icon component to render (lucide, heroicons, custom SVG, ...). */
  icon: SidebarIconType
  className?: string
}

/** Renders any icon component, hidden from assistive tech (decorative). */
export function SidebarIcon({ icon: Icon, className }: SidebarIconProps) {
  return (
    <span aria-hidden="true">
      <Icon className={className} />
    </span>
  )
}
