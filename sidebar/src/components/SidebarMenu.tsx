import { useId } from "react";
import { SidebarMenuProps } from "../structs/SidebarMenuProps";
import { SidebarItem } from "./SidebarItem";

/** A group of navigation items with an optional heading. */
export function SidebarMenu({ id, label, items, className }: SidebarMenuProps) {
  const uniqueId = useId();
  const headingId = label ? `${uniqueId}-label` : undefined;

  return (
    <section data-menu-id={id} className={className} aria-labelledby={headingId}>
      {label && <h2 id={headingId}>{label}</h2>}
      <ul>
        {items.map((item) => (
          <SidebarItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}
