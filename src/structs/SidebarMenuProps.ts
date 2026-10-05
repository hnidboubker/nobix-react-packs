import { SidebarItemProps } from "./SidebarItemProps";

export interface SidebarMenuProps {
  id: string;
  /** Optional group heading. */
  label?: string;
  items: SidebarItemProps[];
}
