import { SidebarPosition } from "../enums/SidebarPosition";

/** State handed to a function-style header slot. */
export interface HeaderSlotProps {
  collapsed: boolean;
  position: SidebarPosition;
  onToggle: () => void;
}

/** State handed to a function-style footer slot. */
export interface FooterSlotProps {
  collapsed: boolean;
  position: SidebarPosition;
  onToggle: () => void;
}
