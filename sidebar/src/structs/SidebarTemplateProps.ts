import { ReactNode } from "react";
import { SidebarPosition } from "../enums/SidebarPosition";
import { SidebarItemProps } from "./SidebarItemProps";
import { SidebarMenuProps } from "./SidebarMenuProps";

/** Props every template receives from Sidebar (layout only, no state). */
export interface SidebarTemplateProps {
  items: SidebarItemProps[];
  menus: SidebarMenuProps[];
  position: SidebarPosition;
  collapsed: boolean;
  onToggle: () => void;
  className?: string;
  /** Optional header area (slot). */
  header?: ReactNode;
  /** Optional footer area (slot). */
  footer?: ReactNode;
  /** Custom item renderer. Must return an <li> (rendered inside a <ul>). */
  itemRenderer?: (item: SidebarItemProps, index: number) => ReactNode;
  /** Custom menu renderer (replaces the whole menu group). */
  menuRenderer?: (menu: SidebarMenuProps, index: number) => ReactNode;
  /** Optional CSS class to apply to all items. */
  itemClassName?: string;
  /** Optional CSS class to apply to all menus. */
  menuClassName?: string;
}
