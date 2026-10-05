import type { SidebarTemplateProps } from "../src/structs/SidebarTemplateProps";

export function templateProps(overrides: Partial<SidebarTemplateProps> = {}): SidebarTemplateProps {
  return {
    items: [
      { id: "home", label: "Home", href: "/home", badge: 3 },
      { id: "off", label: "Billing", href: "/billing", disabled: true },
    ],
    menus: [{ id: "admin", label: "Admin", items: [{ id: "users", label: "Users", href: "/users" }] }],
    position: "left",
    collapsed: false,
    onToggle: () => {},
    ...overrides,
  };
}
