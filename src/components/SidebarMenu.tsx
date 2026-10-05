import { SidebarItem, type SidebarItemProps } from './SidebarItem'

export interface SidebarMenuProps {
  id: string
  /** Optional group heading. */
  label?: string
  items: SidebarItemProps[]
}

/** A group of navigation items with an optional heading. */
export function SidebarMenu({ id, label, items }: SidebarMenuProps) {
  const headingId = label ? `${id}-label` : undefined

  return (
    <section data-menu-id={id} aria-labelledby={headingId}>
      {label && <h2 id={headingId}>{label}</h2>}
      <ul>
        {items.map((item) => (
          <SidebarItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  )
}
