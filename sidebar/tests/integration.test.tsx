// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "../src/components/Sidebar";
import { FloatingSidebar } from "../src/templates/FloatingSidebar";
import { CompactSidebar } from "../src/templates/CompactSidebar";
import { DefaultSidebar } from "../src/templates/DefaultSidebar";
import { templateProps } from "./fixtures";

afterEach(cleanup);

const items = [{ id: "home", label: "Home", href: "/home" }];
const menus = [{ id: "admin", label: "Admin", items: [{ id: "users", label: "Users", href: "/users" }] }];

describe("Sidebar integration", () => {
  it.each(["default", "compact", "floating"] as const)(
    "%s: renders items and menus with the sidebar expanded",
    (template) => {
      render(<Sidebar template={template} items={items} menus={menus} collapsed={false} />);
      expect(screen.getByRole("link", { name: "Home" })).toBeTruthy();
      expect(screen.getByRole("heading", { name: "Admin" })).toBeTruthy();
      expect(screen.getByRole("link", { name: "Users" })).toBeTruthy();
    },
  );

  it("switches template on rerender while keeping content", () => {
    const { container, rerender } = render(<Sidebar template="default" items={items} collapsed={false} />);
    expect(container.querySelector("aside")?.getAttribute("data-template")).toBe("default");
    rerender(<Sidebar template="compact" items={items} collapsed={false} />);
    expect(container.querySelector("aside")?.getAttribute("data-template")).toBe("compact");
    expect(screen.getByRole("link", { name: "Home" })).toBeTruthy();
  });
});

describe("collapsed rendering keeps labels for screen readers", () => {
  it.each([
    ["default", DefaultSidebar],
    ["compact", CompactSidebar],
    ["floating", FloatingSidebar],
  ] as const)("%s: item and menu labels stay in the accessibility tree", (_name, Template) => {
    render(<Template {...templateProps({ collapsed: true })} />);
    expect(screen.getByRole("link", { name: /Home/ })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Admin" })).toBeTruthy();
  });

  it("default: collapsed nav hides label text visually via sr-only", () => {
    render(<DefaultSidebar {...templateProps({ collapsed: true })} />);
    // Styling is the requirement here: labels must be visually hidden, not removed.
    expect(screen.getByRole("navigation").className).toContain("sr-only");
  });

  it("compact: collapsed toggle keeps an accessible Expand name", () => {
    render(<CompactSidebar {...templateProps({ collapsed: true })} />);
    expect(screen.getByRole("button", { name: /Expand/ })).toBeTruthy();
  });
});

describe("FloatingSidebar mobile behavior", () => {
  it("collapsed: panel is hidden on mobile and an Open button is offered", () => {
    const onToggle = vi.fn();
    const { container } = render(<FloatingSidebar {...templateProps({ collapsed: true, onToggle })} />);
    // jsdom has no media queries, so the responsive utility classes are the contract.
    expect(container.querySelector("aside")?.className).toContain("max-md:invisible");
    fireEvent.click(screen.getByRole("button", { name: "Open sidebar" }));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("expanded: panel is not hidden on mobile", () => {
    const { container } = render(<FloatingSidebar {...templateProps({ collapsed: false })} />);
    expect(container.querySelector("aside")?.className).not.toContain("max-md:invisible");
    expect(screen.queryByRole("button", { name: "Open sidebar" })).toBeNull();
  });

  it("anchors to the right on mobile when position is right", () => {
    const { container } = render(<FloatingSidebar {...templateProps({ position: "right" })} />);
    expect(container.querySelector("aside")?.className).toContain("max-md:end-2");
  });

  it("anchors to the left on mobile when position is left", () => {
    const { container } = render(<FloatingSidebar {...templateProps({ position: "left" })} />);
    expect(container.querySelector("aside")?.className).toContain("max-md:start-2");
  });
});

describe("Accessibility", () => {
  it("tab order follows document order: toggle, then enabled links (disabled skipped)", () => {
    render(<DefaultSidebar {...templateProps()} />);
    // Native tab order = focusable elements in DOM order; disabled item has no href so is not a tab stop.
    const stops = screen
      .getAllByRole("button")
      .concat(screen.getAllByRole("link"))
      .filter((el) => el.tabIndex >= 0);
    const names = stops.map((el) => el.textContent);
    expect(names).toEqual(["Collapse", "Home3", "Users"]);
  });

  it("toggle button is a real button that is keyboard focusable", () => {
    render(<DefaultSidebar {...templateProps()} />);
    const toggle = screen.getByRole("button", { name: "Collapse" });
    toggle.focus();
    expect(document.activeElement).toBe(toggle);
    expect(toggle.getAttribute("type")).toBe("button");
  });

  it("exposes toggle state through aria-expanded as the sidebar is toggled", () => {
    render(<Sidebar items={items} collapsed={false} />);
    expect(screen.getByRole("button", { name: "Collapse" }).getAttribute("aria-expanded")).toBe("true");
    cleanup();
    render(<Sidebar items={items} collapsed />);
    expect(screen.getByRole("button", { name: "Expand" }).getAttribute("aria-expanded")).toBe("false");
  });

  it("every template exposes a single labelled navigation landmark", () => {
    for (const Template of [DefaultSidebar, CompactSidebar, FloatingSidebar]) {
      render(<Template {...templateProps()} />);
      expect(screen.getAllByRole("navigation", { name: "Sidebar" })).toHaveLength(1);
      cleanup();
    }
  });
});

describe("Edge cases", () => {
  it("renders with empty items and menus", () => {
    render(<Sidebar items={[]} menus={[]} collapsed={false} />);
    expect(screen.queryAllByRole("link")).toHaveLength(0);
    expect(screen.getByRole("navigation", { name: "Sidebar" })).toBeTruthy();
  });

  it("renders very long labels without dropping them", () => {
    const label = "Very long label ".repeat(30).trim();
    render(<Sidebar items={[{ id: "l", label, href: "/l" }]} collapsed={false} />);
    expect(screen.getByRole("link", { name: label })).toBeTruthy();
  });
});
