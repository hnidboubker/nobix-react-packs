// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import { SidebarMenu } from "../src/components/SidebarMenu";

afterEach(cleanup);

const items = [
  { id: "u", label: "Users", href: "/users" },
  { id: "r", label: "Roles", href: "/roles" },
];

describe("SidebarMenu", () => {
  it("renders its heading and items as a list, in order", () => {
    render(<SidebarMenu id="admin" label="Admin" items={items} />);
    expect(screen.getByRole("heading", { name: "Admin" })).toBeTruthy();
    const list = screen.getByRole("list");
    const links = within(list).getAllByRole("link");
    expect(links.map((l) => l.textContent)).toEqual(["Users", "Roles"]);
    expect(within(list).getAllByRole("listitem")).toHaveLength(2);
  });

  it("labels its region with the heading", () => {
    render(<SidebarMenu id="admin" label="Admin" items={items} />);
    expect(screen.getByRole("region", { name: "Admin" })).toBeTruthy();
  });

  it("renders without a heading or region name when no label is given", () => {
    render(<SidebarMenu id="x" items={items} />);
    expect(screen.queryByRole("heading")).toBeNull();
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });

  it("renders an empty list when there are no items", () => {
    render(<SidebarMenu id="x" label="Empty" items={[]} />);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
