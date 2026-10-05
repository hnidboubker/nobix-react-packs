// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "../src/components/Sidebar";

afterEach(cleanup);

const items = [{ id: "home", label: "Home", href: "/home" }];
const template = (c: HTMLElement) => c.querySelector("aside")?.getAttribute("data-template");

describe("Sidebar template selection", () => {
  it("uses the default template when none is given", () => {
    const { container } = render(<Sidebar items={items} />);
    expect(template(container)).toBe("default");
  });

  it.each(["default", "compact", "floating"] as const)("renders the %s template", (t) => {
    const { container } = render(<Sidebar items={items} template={t} />);
    expect(template(container)).toBe(t);
  });

  it("falls back to default for an unknown template value", () => {
    const { container } = render(<Sidebar items={items} template={"bogus" as never} />);
    expect(template(container)).toBe("default");
  });

  it("passes position through, defaulting to left", () => {
    const left = render(<Sidebar items={items} />);
    expect(left.container.querySelector("aside")?.getAttribute("data-position")).toBe("left");
    cleanup();
    const right = render(<Sidebar items={items} position="right" />);
    expect(right.container.querySelector("aside")?.getAttribute("data-position")).toBe("right");
  });

  it("renders without items or menus", () => {
    render(<Sidebar />);
    expect(screen.getByRole("navigation", { name: "Sidebar" })).toBeTruthy();
  });
});

describe("Sidebar collapsed state", () => {
  it("toggles itself when uncontrolled", () => {
    const { container } = render(<Sidebar items={items} />);
    const aside = container.querySelector("aside");
    expect(aside?.getAttribute("data-collapsed")).toBe("false");
    fireEvent.click(screen.getByRole("button", { name: "Collapse" }));
    expect(aside?.getAttribute("data-collapsed")).toBe("true");
    fireEvent.click(screen.getByRole("button", { name: "Expand" }));
    expect(aside?.getAttribute("data-collapsed")).toBe("false");
  });

  it("notifies onCollapsedChange with the next value", () => {
    const onChange = vi.fn();
    render(<Sidebar items={items} onCollapsedChange={onChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Collapse" }));
    expect(onChange).toHaveBeenLastCalledWith(true);
  });

  it("does not change its own state when controlled, only notifies", () => {
    const onChange = vi.fn();
    const { container } = render(<Sidebar items={items} collapsed={false} onCollapsedChange={onChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Collapse" }));
    expect(onChange).toHaveBeenCalledWith(true);
    expect(container.querySelector("aside")?.getAttribute("data-collapsed")).toBe("false");
  });

  it("follows the collapsed prop when it changes", () => {
    const { container, rerender } = render(<Sidebar items={items} collapsed={false} />);
    rerender(<Sidebar items={items} collapsed />);
    expect(container.querySelector("aside")?.getAttribute("data-collapsed")).toBe("true");
  });

  it("shows header and footer slots only while expanded", () => {
    render(<Sidebar items={items} header="Brand" footer="Foot" />);
    expect(screen.getByText("Brand")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Collapse" }));
    expect(screen.queryByText("Brand")).toBeNull();
    expect(screen.queryByText("Foot")).toBeNull();
  });
});
