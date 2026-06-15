import { describe, expect, it } from "vitest";
import { MalformedJSON, parse } from "./index";

describe("malformed JSON handling", () => {
    it("throws for malformed numbers inside arrays", () => {
        expect(() => parse("[1, .05, 2]")).toThrow(MalformedJSON);
    });

    it("keeps parsing after an empty array with spaces", () => {
        expect(parse('[{"id":1,"arr":["hello"]},{"id":2,"arr":[        ],"more":"yaya"},{"id":3,"arr":["!"]}]')).toEqual([
            { id: 1, arr: ["hello"] },
            { id: 2, arr: [], more: "yaya" },
            { id: 3, arr: ["!"] },
        ]);
    });
});
