import { describe, it, expect } from "vitest";
import {
  DEFAULT_SIDEBAR_TEMPLATE,
  DEFAULT_SIDEBAR_POSITION,
  DEFAULT_SIDEBAR_COLLAPSED,
  DEFAULT_SIDEBAR_PROPS,
} from "../src/structs/defaults";

describe("sidebar defaults", () => {
  describe("DEFAULT_SIDEBAR_TEMPLATE", () => {
    it("is set to 'default'", () => {
      expect(DEFAULT_SIDEBAR_TEMPLATE).toBe("default");
    });
  });

  describe("DEFAULT_SIDEBAR_POSITION", () => {
    it("is set to 'left'", () => {
      expect(DEFAULT_SIDEBAR_POSITION).toBe("left");
    });
  });

  describe("DEFAULT_SIDEBAR_COLLAPSED", () => {
    it("is set to false", () => {
      expect(DEFAULT_SIDEBAR_COLLAPSED).toBe(false);
    });
  });

  describe("DEFAULT_SIDEBAR_PROPS", () => {
    it("includes template from DEFAULT_SIDEBAR_TEMPLATE", () => {
      expect(DEFAULT_SIDEBAR_PROPS.template).toBe(DEFAULT_SIDEBAR_TEMPLATE);
    });

    it("includes position from DEFAULT_SIDEBAR_POSITION", () => {
      expect(DEFAULT_SIDEBAR_PROPS.position).toBe(DEFAULT_SIDEBAR_POSITION);
    });

    it("does not include collapsed property", () => {
      expect(DEFAULT_SIDEBAR_PROPS).not.toHaveProperty("collapsed");
    });

    it("includes empty items array", () => {
      expect(DEFAULT_SIDEBAR_PROPS.items).toEqual([]);
    });

    it("includes empty menus array", () => {
      expect(DEFAULT_SIDEBAR_PROPS.menus).toEqual([]);
    });

    it("is a partial object with at least template and position", () => {
      expect(Object.keys(DEFAULT_SIDEBAR_PROPS).length).toBeGreaterThanOrEqual(4);
      expect(DEFAULT_SIDEBAR_PROPS).toHaveProperty("template");
      expect(DEFAULT_SIDEBAR_PROPS).toHaveProperty("position");
      expect(DEFAULT_SIDEBAR_PROPS).toHaveProperty("items");
      expect(DEFAULT_SIDEBAR_PROPS).toHaveProperty("menus");
    });
  });
});
