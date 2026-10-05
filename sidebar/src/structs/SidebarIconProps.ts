import { SidebarIconType } from "../enums/SidebarIconType";

export interface SidebarIconProps {
  /** Icon component to render (lucide, heroicons, custom SVG, ...). */
  icon: SidebarIconType;
  className?: string;
}
