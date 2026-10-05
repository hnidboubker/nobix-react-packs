import { describe, it, expect } from "vitest";
import * as PublicAPI from "./index";

describe("Public API exports", () => {
  it("exports only public components at runtime", () => {
    const exportedNames = Object.keys(PublicAPI).sort();
    const expectedNames = ["Sidebar", "SidebarIcon", "SidebarItem", "SidebarMenu"].sort();
    expect(exportedNames).toEqual(expectedNames);
  });
});
