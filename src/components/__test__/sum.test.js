import { sum } from "../sum";

test("Sum function should return sum of two mnumbers", () => {
    const result = sum(3,4);
    
    // Assertion function
    expect(result).toBe(7);
})
