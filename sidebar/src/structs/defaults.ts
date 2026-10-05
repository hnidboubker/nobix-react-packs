import type { SidebarProps } from "./SidebarProps";
import type { SidebarTemplate } from "../enums/SidebarTemplate";
import type { SidebarPosition } from "../enums/SidebarPosition";

export const DEFAULT_SIDEBAR_TEMPLATE: SidebarTemplate = "default";
export const DEFAULT_SIDEBAR_POSITION: SidebarPosition = "left";
export const DEFAULT_SIDEBAR_COLLAPSED = false;

export const DEFAULT_SIDEBAR_PROPS: Partial<SidebarProps> = {
  template: DEFAULT_SIDEBAR_TEMPLATE,
  position: DEFAULT_SIDEBAR_POSITION,
  items: [],
  menus: [],
};
