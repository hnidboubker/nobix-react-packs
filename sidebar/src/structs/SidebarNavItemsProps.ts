import { SidebarItemProps } from "./SidebarItemProps";
import { SidebarMenuProps } from "./SidebarMenuProps";

export interface SidebarNavItemsProps {
  items: SidebarItemProps[];
  menus: SidebarMenuProps[];
  itemRenderer?: (item: SidebarItemProps, index: number) => React.ReactNode;
  menuRenderer?: (menu: SidebarMenuProps, index: number) => React.ReactNode;
  itemClassName?: string;
  menuClassName?: string;
}
