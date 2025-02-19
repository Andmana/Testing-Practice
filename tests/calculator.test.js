const calculator = require("../src/calculator");

test("adds 1 + 2 to equal 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("adds 1 + 2 to equal 3", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
});

test("adds 1 + 2 to equal 3", () => {
    expect(calculator.divide(2, 2)).toBe(1);
});

test("adds 1 + 2 to equal 3", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});
