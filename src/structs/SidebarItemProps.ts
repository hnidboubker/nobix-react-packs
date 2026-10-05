import { ReactNode } from "react";
import { SidebarIconType } from "../enums/SidebarIconType";

export interface SidebarItemProps {
  id: string;
  label: string;
  href: string;
  icon?: SidebarIconType;
  disabled?: boolean;
  /** Optional badge content (count, "new", ...). */
  badge?: ReactNode;
}
