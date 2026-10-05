// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { SidebarItem } from "../src/components/SidebarItem";

afterEach(cleanup);

function Icon() {
  return <svg data-testid="icon" />;
}

describe("SidebarItem", () => {
  it("renders a link with its icon, label and badge", () => {
    render(<SidebarItem id="home" label="Home" href="/home" icon={Icon} badge={3} />);
    const link = screen.getByRole("link", { name: "Home 3" });
    expect(link.getAttribute("href")).toBe("/home");
    expect(screen.getByTestId("icon")).toBeTruthy();
  });

  it("renders a badge of 0 but omits null and undefined badges", () => {
    const { rerender } = render(<SidebarItem id="a" label="Inbox" href="/a" badge={0} />);
    expect(screen.getByText("0")).toBeTruthy();
    rerender(<SidebarItem id="a" label="Inbox" href="/a" badge={null} />);
    expect(screen.queryByText("0")).toBeNull();
    expect(screen.getByRole("link").textContent).toBe("Inbox");
  });

  it("renders no icon wrapper when no icon is given", () => {
    const { container } = render(<SidebarItem id="a" label="Plain" href="/a" />);
    expect(container.querySelector("[aria-hidden]")).toBeNull();
  });

  it("disabled item has no href and is flagged aria-disabled", () => {
    render(<SidebarItem id="b" label="Billing" href="/billing" disabled />);
    const link = screen.getByText("Billing").closest("a");
    expect(link?.hasAttribute("href")).toBe(false);
    expect(link?.getAttribute("aria-disabled")).toBe("true");
  });

  it("enabled item does not set aria-disabled", () => {
    render(<SidebarItem id="c" label="Docs" href="/docs" />);
    expect(screen.getByRole("link", { name: "Docs" }).hasAttribute("aria-disabled")).toBe(false);
  });

  it("keeps a very long label in the accessible name", () => {
    const label = "L".repeat(300);
    render(<SidebarItem id="d" label={label} href="/d" />);
    expect(screen.getByRole("link", { name: label })).toBeTruthy();
  });
});
