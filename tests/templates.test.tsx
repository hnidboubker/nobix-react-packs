// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { DefaultSidebar } from "../src/templates/DefaultSidebar";
import { CompactSidebar } from "../src/templates/CompactSidebar";
import { FloatingSidebar } from "../src/templates/FloatingSidebar";
import { templateProps } from "./fixtures";

afterEach(cleanup);

describe.each([
  ["default", DefaultSidebar],
  ["compact", CompactSidebar],
  ["floating", FloatingSidebar],
] as const)("%s template", (name, Template) => {
  it("renders items, menu heading and menu items in a labelled nav", () => {
    render(<Template {...templateProps()} />);
    expect(screen.getByRole("navigation", { name: "Sidebar" })).toBeTruthy();
    expect(screen.getByRole("link", { name: /Home/ }).getAttribute("href")).toBe("/home");
    expect(screen.getByRole("heading", { name: "Admin" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Users" })).toBeTruthy();
  });

  it("exposes template, position and collapsed state as data attributes", () => {
    const { container } = render(
      <Template {...templateProps({ position: "right", collapsed: true })} />
    );
    const aside = container.querySelector("aside");
    expect(aside?.getAttribute("data-template")).toBe(name);
    expect(aside?.getAttribute("data-position")).toBe("right");
    expect(aside?.getAttribute("data-collapsed")).toBe("true");
  });

  it("renders disabled items without href and flagged aria-disabled", () => {
    render(<Template {...templateProps()} />);
    const link = screen.getByText("Billing").closest("a");
    expect(link?.hasAttribute("href")).toBe(false);
    expect(link?.getAttribute("aria-disabled")).toBe("true");
  });

  it("shows header and footer when expanded", () => {
    render(<Template {...templateProps({ header: <b>Brand</b>, footer: <i>v1</i> })} />);
    expect(screen.getByText("Brand")).toBeTruthy();
    expect(screen.getByText("v1")).toBeTruthy();
  });

  it("hides header and footer when collapsed", () => {
    render(
      <Template {...templateProps({ collapsed: true, header: <b>Brand</b>, footer: <i>v1</i> })} />
    );
    expect(screen.queryByText("Brand")).toBeNull();
    expect(screen.queryByText("v1")).toBeNull();
  });

  it("calls onToggle when the toggle button is clicked and reports aria-expanded", () => {
    const onToggle = vi.fn();
    render(<Template {...templateProps({ onToggle })} />);
    const toggle = screen.getByRole("button", { name: /Collapse|«/ });
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(toggle);
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("reports aria-expanded=false and an Expand label when collapsed", () => {
    render(<Template {...templateProps({ collapsed: true })} />);
    const toggle = screen.getByRole("button", { name: /Expand|»/ });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
  });

  it("renders no list when there are no top-level items", () => {
    const { container } = render(<Template {...templateProps({ items: [], menus: [] })} />);
    expect(container.querySelector("nav ul")).toBeNull();
  });

  it("forwards className to the aside", () => {
    const { container } = render(<Template {...templateProps({ className: "my-custom" })} />);
    expect(container.querySelector("aside")?.classList.contains("my-custom")).toBe(true);
  });
});

describe("floating template backdrop", () => {
  it("shows a close backdrop when expanded that triggers onToggle", () => {
    const onToggle = vi.fn();
    render(<FloatingSidebar {...templateProps({ onToggle })} />);
    fireEvent.click(screen.getByRole("button", { name: "Close sidebar" }));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("has no backdrop when collapsed", () => {
    render(<FloatingSidebar {...templateProps({ collapsed: true })} />);
    expect(screen.queryByRole("button", { name: "Close sidebar" })).toBeNull();
  });
});
