import { SidebarItemProps } from "./SidebarItemProps";

export interface SidebarMenuProps {
  id: string;
  /** Optional group heading. */
  label?: string;
  items: SidebarItemProps[];
  /** Optional CSS class to apply to the menu element. */
  className?: string;
}
