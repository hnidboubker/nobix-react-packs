import { Fragment } from "react";
import { SidebarItem } from "./SidebarItem.js";
import { SidebarMenu } from "./SidebarMenu.js";
import { SidebarNavItemsProps } from "../structs/SidebarNavItemsProps";

/** Shared by all templates: renders top-level items and menus, honoring renderer overrides. */
export function SidebarNavItems({
  items,
  menus,
  itemRenderer,
  menuRenderer,
  itemClassName,
  menuClassName,
}: SidebarNavItemsProps) {
  return (
    <>
      {items.length > 0 && (
        <ul>
          {items.map((item, i) => (
            <Fragment key={item.id}>
              {itemRenderer ? itemRenderer(item, i) : <SidebarItem {...item} className={itemClassName} />}
            </Fragment>
          ))}
        </ul>
      )}
      {menus.map((menu, i) => (
        <Fragment key={menu.id}>
          {menuRenderer ? menuRenderer(menu, i) : <SidebarMenu {...menu} className={menuClassName} />}
        </Fragment>
      ))}
    </>
  );
}
