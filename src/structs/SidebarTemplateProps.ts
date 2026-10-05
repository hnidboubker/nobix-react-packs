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
}
