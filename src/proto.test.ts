import { describe, expect, it } from "vitest";
import { parse } from "./index";

describe("object key parsing", () => {
    it("preserves __proto__ as an own enumerable key", () => {
        const value = parse('{"__proto__":0}');

        expect(value).toEqual({ __proto__: 0 });
        expect(Object.prototype.hasOwnProperty.call(value, "__proto__")).toBe(true);
    });
});
