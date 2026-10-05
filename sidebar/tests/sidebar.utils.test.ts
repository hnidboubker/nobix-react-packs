import { describe, it, expect } from "vitest";
import {
  getSidebarTemplate,
  createSidebarClasses,
  isItemDisabled,
  getItemClasses,
  getNavigationClasses,
} from "../src/utils/sidebar.utils";

describe("sidebar.utils", () => {
  describe("getSidebarTemplate", () => {
    it("returns default when template is undefined", () => {
      expect(getSidebarTemplate(undefined)).toBe("default");
    });

    it("returns default when template is unrecognized", () => {
      expect(getSidebarTemplate("unknown")).toBe("default");
    });

    it("returns compact when template is 'compact'", () => {
      expect(getSidebarTemplate("compact")).toBe("compact");
    });

    it("returns floating when template is 'floating'", () => {
      expect(getSidebarTemplate("floating")).toBe("floating");
    });

    it("returns default when template is 'default'", () => {
      expect(getSidebarTemplate("default")).toBe("default");
    });
  });

  describe("createSidebarClasses", () => {
    it("returns wide width when not collapsed", () => {
      const classes = createSidebarClasses("default", false, "left");
      expect(classes).toContain("w-64");
      expect(classes).not.toContain("w-20");
    });

    it("returns narrow width when collapsed", () => {
      const classes = createSidebarClasses("default", true, "left");
      expect(classes).toContain("w-20");
      expect(classes).not.toContain("w-64");
    });

    it("includes order-last when position is right", () => {
      const classes = createSidebarClasses("default", false, "right");
      expect(classes).toContain("order-last");
    });

    it("excludes order-last when position is left", () => {
      const classes = createSidebarClasses("default", false, "left");
      expect(classes).not.toContain("order-last");
    });

    it("includes custom class when provided", () => {
      const custom = "custom-class";
      const classes = createSidebarClasses("default", false, "left", custom);
      expect(classes).toContain(custom);
    });

    it("excludes custom class when not provided", () => {
      const classes = createSidebarClasses("default", false, "left");
      expect(classes).not.toContain("custom-class");
    });
  });

  describe("isItemDisabled", () => {
    it("returns false when disabled is undefined", () => {
      expect(isItemDisabled(undefined)).toBe(false);
    });

    it("returns false when disabled is false", () => {
      expect(isItemDisabled(false)).toBe(false);
    });

    it("returns true when disabled is true", () => {
      expect(isItemDisabled(true)).toBe(true);
    });
  });

  describe("getItemClasses", () => {
    it("includes pointer-events-none when disabled", () => {
      const classes = getItemClasses(true);
      expect(classes).toContain("pointer-events-none");
    });

    it("excludes pointer-events-none when enabled", () => {
      const classes = getItemClasses(false);
      expect(classes).not.toContain("pointer-events-none");
    });

    it("includes opacity-50 when disabled", () => {
      const classes = getItemClasses(true);
      expect(classes).toContain("opacity-50");
    });

    it("excludes opacity-50 when enabled", () => {
      const classes = getItemClasses(false);
      expect(classes).not.toContain("opacity-50");
    });

    it("includes custom class when provided", () => {
      const custom = "custom-item";
      const classes = getItemClasses(false, custom);
      expect(classes).toContain(custom);
    });

    it("excludes custom class when not provided", () => {
      const classes = getItemClasses(false);
      expect(classes).not.toContain("custom-item");
    });
  });

  describe("getNavigationClasses", () => {
    it("returns standard classes when not collapsed", () => {
      const classes = getNavigationClasses(false);
      expect(classes).toContain("space-y-4");
      expect(classes).toContain("overflow-y-auto");
      expect(classes).toContain("p-2");
    });

    it("includes sr-only when collapsed", () => {
      const classes = getNavigationClasses(true);
      expect(classes).toContain("sr-only");
    });

    it("does not include sr-only when not collapsed", () => {
      const classes = getNavigationClasses(false);
      expect(classes).not.toContain("sr-only");
    });

    it("includes justify-center when collapsed", () => {
      const classes = getNavigationClasses(true);
      expect(classes).toContain("justify-center");
    });

    it("does not include justify-center when not collapsed", () => {
      const classes = getNavigationClasses(false);
      expect(classes).not.toContain("justify-center");
    });
  });
});
