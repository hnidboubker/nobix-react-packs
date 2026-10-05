import { ReactNode } from "react";
import { SidebarPosition } from "../enums/SidebarPosition";
import { SidebarTemplate } from "../enums/SidebarTemplate";
import { SidebarItemProps } from "./SidebarItemProps";
import { SidebarMenuProps } from "./SidebarMenuProps";
import { FooterSlotProps, HeaderSlotProps } from "./SidebarSlotProps";

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
  /** Default collapsed state for uncontrolled mode. */
  defaultCollapsed?: boolean;
  /** Optional header slot content (alias of headerSlot; headerSlot wins). */
  header?: ReactNode;
  /** Optional footer slot content (alias of footerSlot; footerSlot wins). */
  footer?: ReactNode;
  /** Header slot: node or render function. */
  headerSlot?: ReactNode | ((props: HeaderSlotProps) => ReactNode);
  /** Footer slot: node or render function. Hidden when collapsed. */
  footerSlot?: ReactNode | ((props: FooterSlotProps) => ReactNode);
  /** Custom item renderer. Must return an <li> (rendered inside a <ul>). */
  itemRenderer?: (item: SidebarItemProps, index: number) => ReactNode;
  /** Custom menu renderer (replaces the whole menu group). */
  menuRenderer?: (menu: SidebarMenuProps, index: number) => ReactNode;
}
