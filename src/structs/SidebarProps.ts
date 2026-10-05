import { SidebarPosition } from "../enums/SidebarPosition";
import { SidebarTemplate } from "../enums/SidebarTemplate";
import { SidebarItemProps } from "./SidebarItemProps";
import { SidebarMenuProps } from "./SidebarMenuProps";

export interface SidebarProps {
  /** Top-level items rendered before the menus. */
  items?: SidebarItemProps[];
  /** Grouped items. */
  menus?: SidebarMenuProps[];
  template?: SidebarTemplate;
  position?: SidebarPosition;
  className?: string;
  /** Controlled collapsed state. Omit for uncontrolled. */
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}
