// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { SidebarIcon } from "../src/components/SidebarIcon";

afterEach(cleanup);

function CustomIcon({ className }: { className?: string }) {
  return <svg data-testid="icon" className={className} />;
}

describe("SidebarIcon", () => {
  it("renders any component as the icon and forwards className", () => {
    render(<SidebarIcon icon={CustomIcon} className="size-4" />);
    expect(screen.getByTestId("icon").getAttribute("class")).toBe("size-4");
  });

  it("is hidden from assistive technology (decorative)", () => {
    render(<SidebarIcon icon={CustomIcon} />);
    expect(screen.getByTestId("icon").parentElement?.getAttribute("aria-hidden")).toBe("true");
  });
});
